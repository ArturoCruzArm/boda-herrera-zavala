// selector-sb.js — Supabase sync para Foro 7
// Slug: boda-herrera-zavala
(function () {
    const SUPABASE_URL  = 'https://nzpujmlienzfetqcgsxz.supabase.co';
    const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56cHVqbWxpZW56ZmV0cWNnc3h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2ODYzMzYsImV4cCI6MjA5MDI2MjMzNn0.xl3lsb-KYj5tVLKTnzpbsdEGoV9ySnswH4eyRuyEH1s';
    const EVENTO_SLUG   = 'boda-herrera-zavala';
    const SB_KEY        = 'boda_herrera_zavala_photo_selections';
    const SB_H = { 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + SUPABASE_ANON, 'Content-Type': 'application/json' };

    const SESSION_KEY = 'foro7_sid';
    let sid = localStorage.getItem(SESSION_KEY);
    if (!sid) { sid = crypto.randomUUID(); localStorage.setItem(SESSION_KEY, sid); }

    let eventoId   = null;
    let _syncing   = false;
    let _syncTimer = null;
    let _failCount = 0;
    let _sbLoaded  = false;   // true solo despues de que sbLoad termina
    const MAX_FAILS = 5;

    async function getEventoId() {
        if (eventoId) return eventoId;
        const r = await fetch(SUPABASE_URL + '/rest/v1/eventos?slug=eq.' + EVENTO_SLUG + '&select=id&limit=1', { headers: SB_H });
        const rows = await r.json();
        eventoId = rows[0] ? rows[0].id : null;
        return eventoId;
    }

    function showSyncStatus(ok) {
        var el = document.getElementById('sb-sync-status');
        if (!el) {
            el = document.createElement('div');
            el.id = 'sb-sync-status';
            el.style.cssText = 'position:fixed;bottom:10px;right:10px;padding:6px 14px;border-radius:20px;font-size:.8rem;z-index:9999;transition:opacity .5s;pointer-events:none;';
            document.body.appendChild(el);
        }
        if (ok) {
            el.style.background = '#059669'; el.style.color = '#fff';
            el.textContent = '\u2601 Sincronizado';
        } else {
            el.style.background = '#dc2626'; el.style.color = '#fff';
            el.textContent = '\u26a0 Error al sincronizar (reintentando...)';
        }
        el.style.opacity = '1';
        if (ok) setTimeout(function(){ el.style.opacity = '0'; }, 3000);
    }

    async function sbSync(sels) {
        if (_failCount >= MAX_FAILS) return;
        if (!_sbLoaded) return;  // NUNCA sincronizar antes de haber cargado de Supabase
        try {
            var eid = await getEventoId();
            if (!eid) return;
            var entries = Object.entries(sels);

            var activeIndices = [];
            var rows = [];
            var _clockKey = SB_KEY + '_clock';
            var _clock = 0;
            try { _clock = Number(localStorage.getItem(_clockKey) || '0'); } catch(e) {}
            _clock++;
            try { localStorage.setItem(_clockKey, String(_clock)); } catch(e) {}
            entries.forEach(function(e) {
                var idx = parseInt(e[0]), sel = e[1];
                var hasAny = sel.impresion || sel.invitacion || sel.descartada || sel.ampliacion;
                if (hasAny) {
                    activeIndices.push(idx);
                    rows.push({
                        evento_id: eid, session_id: sid,
                        foto_index: idx,
                        impresion:  sel.impresion  || false,
                        invitacion: sel.invitacion || false,
                        descartada: sel.descartada || false,
                        ampliacion: sel.ampliacion || false,
                        datos: Object.assign({}, sel, {_sync: {clock: _clock, sid: sid}}),
                        code_version: 5
                    });
                }
            });

            // Solo hacer upsert si hay filas
            if (rows.length) {
                var r = await fetch(SUPABASE_URL + '/rest/v1/selecciones?on_conflict=evento_id,foto_index', {
                    method: 'POST',
                    headers: Object.assign({}, SB_H, { 'Prefer': 'resolution=merge-duplicates,return=minimal' }),
                    body: JSON.stringify(rows)
                });
                if (!r.ok) throw new Error('UPSERT failed: ' + r.status);
            }

            // Solo borrar de Supabase si el usuario tiene selecciones activas
            // (si activeIndices está vacío, NO borrar nada — protege contra wipe accidental)
            if (activeIndices.length > 0) {
                var dbResp = await fetch(
                    SUPABASE_URL + '/rest/v1/selecciones?evento_id=eq.' + eid + '&select=foto_index',
                    { headers: SB_H }
                );
                if (dbResp.ok) {
                    var dbRows = await dbResp.json();
                    var dbIndices = dbRows.map(function(r){ return r.foto_index; });
                    var toDelete = dbIndices.filter(function(i){ return activeIndices.indexOf(i) === -1; });
                    if (toDelete.length) {
                        await fetch(
                            SUPABASE_URL + '/rest/v1/selecciones?evento_id=eq.' + eid + '&foto_index=in.(' + toDelete.join(',') + ')',
                            { method: 'DELETE', headers: SB_H }
                        );
                    }
                }
            }

            _failCount = 0;
            showSyncStatus(true);
        } catch(e) {
            _failCount++;
            console.error('sbSync error (' + _failCount + '/' + MAX_FAILS + '):', e);
            showSyncStatus(false);
            if (_failCount < MAX_FAILS) {
                setTimeout(function() {
                    try { sbSync(JSON.parse(localStorage.getItem(SB_KEY) || '{}')); } catch(e2) {}
                }, _failCount * 3000);
            }
        }
    }

    async function sbLoad(isPoll) {
        try {
            var eid = await getEventoId();
            if (!eid) return;
            var r = await fetch(
                SUPABASE_URL + '/rest/v1/selecciones?evento_id=eq.' + eid + '&select=foto_index,datos,impresion,invitacion,descartada,ampliacion',
                { headers: SB_H }
            );
            if (!r.ok) return;
            var rows = await r.json();
            var sb = {};
            rows.forEach(function(row) {
                var sel = (row.datos && Object.keys(row.datos).length)
                    ? row.datos
                    : { impresion: row.impresion, invitacion: row.invitacion, descartada: row.descartada, ampliacion: row.ampliacion };
                if (Object.values(sel).some(function(v){ return v; })) sb[row.foto_index] = sel;
            });

            var local = {};
            try { local = JSON.parse(localStorage.getItem(SB_KEY) || '{}'); } catch(e) {}
            var localCount = Object.keys(local).length;
            var sbCount = Object.keys(sb).length;

            var merged;
            if (isPoll) {
                // Supabase es la fuente de verdad; solo conservar local si Supabase esta vacio
                // y local tiene datos (significa que aun no se ha sincronizado)
                if (sbCount === 0 && localCount > 0) {
                    merged = local;
                } else if (sbCount >= localCount) {
                    merged = sb;
                } else {
                    // Merge: Supabase como base, local encima
                    merged = Object.assign({}, sb, local);
                }
            } else {
                // Carga inicial: Supabase como base, local encima (no pierde datos locales)
                merged = Object.assign({}, sb);
                Object.entries(local).forEach(function(e) {
                    if (Object.values(e[1]).some(function(v){ return v; })) merged[e[0]] = e[1];
                });
            }

            _syncing = true;
            try {
                localStorage.setItem(SB_KEY, JSON.stringify(merged));
                if (typeof loadSelections === 'function') loadSelections();
                if (typeof renderGallery === 'function') renderGallery();
                if (typeof setupLazyLoad === 'function') setupLazyLoad();
                if (typeof updateStats === 'function') updateStats();
                if (typeof updateFilterButtons === 'function') updateFilterButtons();
                if (typeof restoreState === 'function') restoreState();
            } finally { _syncing = false; }

            if (!isPoll) {
                // Marcar como cargado ANTES de sincronizar
                _sbLoaded = true;
                if (Object.keys(merged).length) sbSync(merged).catch(function(){});
                sbRegistrarVisita();
                mostrarBanner(merged);
            } else {
                // En poll, sincronizar solo si hay diferencias y local tiene datos nuevos
                if (localCount > sbCount && localCount > 0) {
                    sbSync(merged).catch(function(){});
                }
            }
        } catch(e) { console.error('sbLoad error:', e); }
    }

    async function sbRegistrarVisita(pagina) {
        try {
            var eid = await getEventoId();
            if (!eid) return;
            await fetch(SUPABASE_URL + '/rest/v1/visitas', {
                method: 'POST',
                headers: Object.assign({}, SB_H, { 'Prefer': 'return=minimal' }),
                body: JSON.stringify({ evento_id: eid, pagina: pagina || 'selector', session_id: sid })
            });
        } catch(e) {}
    }
    window.sbRegistrarVisita = sbRegistrarVisita;

    function mostrarBanner(sels) {
        if (document.getElementById('banner-sin-sel')) return;
        if (Object.keys(sels).length > 0) return;
        var cfg = window.CONFIG || window.LIMITS || {};
        var fecha = cfg.fechaEvento || cfg.fecha;
        if (fecha && new Date(fecha) > new Date()) return;
        var banner = document.createElement('div');
        banner.id = 'banner-sin-sel';
        banner.style.cssText = 'background:#78350f;color:#fcd34d;text-align:center;padding:12px 20px;font-size:.88rem;position:sticky;top:0;z-index:200;line-height:1.5;';
        banner.innerHTML = '\uD83D\uDCF8 <strong>\u00a1Tus fotos est\u00e1n listas!</strong> A\u00fan no has seleccionado ninguna. \u00a1Empieza ahora! <button onclick="this.parentElement.remove()" style="margin-left:12px;background:transparent;border:1px solid #fcd34d;color:#fcd34d;padding:1px 8px;border-radius:4px;cursor:pointer;">\u00d7</button>';
        document.body.insertBefore(banner, document.body.firstChild);
    }

    // Interceptar localStorage.setItem para sincronizar cambios
    var _origSet = localStorage.setItem.bind(localStorage);
    localStorage.setItem = function(key, value) {
        _origSet(key, value);
        if (key === SB_KEY && !_syncing && _sbLoaded) {
            clearTimeout(_syncTimer);
            _syncTimer = setTimeout(function() {
                try { sbSync(JSON.parse(value)); } catch(e) {}
            }, 600);
        }
    };

    document.addEventListener('DOMContentLoaded', function() {
        sbLoad(false);
        setInterval(function() {
            var open = window.modalOpen ||
                document.querySelector('.modal[style*="block"],.modal.active,.modal.show,#photoModal[style*="flex"],#photoModal[style*="block"]');
            if (!open) sbLoad(true);
        }, 30000);
    });
})();
