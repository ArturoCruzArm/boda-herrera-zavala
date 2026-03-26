// ========================================
// GLOBAL VARIABLES - Boda Herrera x Zavala
// ========================================
const photos = [
    "imagenes/C2_DSC_0105.webp","imagenes/C2_DSC_0106.webp","imagenes/C2_DSC_0108.webp","imagenes/C2_DSC_0109.webp","imagenes/C2_DSC_0111.webp",
    "imagenes/C2_DSC_0114.webp","imagenes/C2_DSC_0115.webp","imagenes/C2_DSC_0116.webp","imagenes/C2_DSC_0117.webp","imagenes/C2_DSC_0120.webp",
    "imagenes/C2_DSC_0122.webp","imagenes/C2_DSC_0123.webp","imagenes/C2_DSC_0127.webp","imagenes/C2_DSC_0128.webp","imagenes/C2_DSC_0132.webp",
    "imagenes/C2_DSC_0133.webp","imagenes/C2_DSC_0135.webp","imagenes/C2_DSC_0138.webp","imagenes/C2_DSC_0140.webp","imagenes/C2_DSC_0141.webp",
    "imagenes/C2_DSC_0142.webp","imagenes/C2_DSC_0143.webp","imagenes/C2_DSC_0144.webp","imagenes/C2_DSC_0145.webp","imagenes/C2_DSC_0146.webp",
    "imagenes/C2_DSC_0147.webp","imagenes/C2_DSC_0148.webp","imagenes/C2_DSC_0149.webp","imagenes/C2_DSC_0150.webp","imagenes/C2_DSC_0151.webp",
    "imagenes/C2_DSC_0152.webp","imagenes/C2_DSC_0153.webp","imagenes/C2_DSC_0154.webp","imagenes/C2_DSC_0155.webp","imagenes/C2_DSC_0156.webp",
    "imagenes/C2_DSC_0157.webp","imagenes/C2_DSC_0158.webp","imagenes/C2_DSC_0159.webp","imagenes/C2_DSC_0160.webp","imagenes/C2_DSC_0161.webp",
    "imagenes/C2_DSC_0162.webp","imagenes/C2_DSC_0163.webp","imagenes/C2_DSC_0164.webp","imagenes/C2_DSC_0165.webp","imagenes/C2_DSC_0166.webp",
    "imagenes/C2_DSC_0167.webp","imagenes/C2_DSC_0168.webp","imagenes/C2_DSC_0169.webp","imagenes/C2_DSC_0170.webp","imagenes/C2_DSC_0171.webp",
    "imagenes/C2_DSC_0172.webp","imagenes/C2_DSC_0173.webp","imagenes/C2_DSC_0174.webp","imagenes/C2_DSC_0175.webp","imagenes/C2_DSC_0176.webp",
    "imagenes/C2_DSC_0177.webp","imagenes/C2_DSC_0178.webp","imagenes/C2_DSC_0179.webp","imagenes/C2_DSC_0180.webp","imagenes/C2_DSC_0181.webp",
    "imagenes/C2_DSC_0182.webp","imagenes/C2_DSC_0183.webp","imagenes/C2_DSC_0184.webp","imagenes/C2_DSC_0185.webp","imagenes/C2_DSC_0186.webp",
    "imagenes/C2_DSC_0187.webp","imagenes/C2_DSC_0188.webp","imagenes/C2_DSC_0189.webp","imagenes/C2_DSC_0190.webp","imagenes/C2_DSC_0191.webp",
    "imagenes/C2_DSC_0192.webp","imagenes/C2_DSC_0193.webp","imagenes/C2_DSC_0194.webp","imagenes/C2_DSC_0195.webp","imagenes/C2_DSC_0196.webp",
    "imagenes/C2_DSC_0197.webp","imagenes/C2_DSC_0198.webp","imagenes/C2_DSC_0199.webp","imagenes/C2_DSC_0200.webp","imagenes/C2_DSC_0201.webp",
    "imagenes/C2_DSC_0202.webp","imagenes/C2_DSC_0203.webp","imagenes/C2_DSC_0204.webp","imagenes/C2_DSC_0205.webp","imagenes/C2_DSC_0206.webp",
    "imagenes/C2_DSC_0207.webp","imagenes/C2_DSC_0208.webp","imagenes/C2_DSC_0209.webp","imagenes/C2_DSC_0210.webp","imagenes/C2_DSC_0211.webp",
    "imagenes/C2_DSC_0212.webp","imagenes/C2_DSC_0213.webp","imagenes/C2_DSC_0214.webp","imagenes/C2_DSC_0215.webp","imagenes/C2_DSC_0216.webp",
    "imagenes/C2_DSC_0217.webp","imagenes/C2_DSC_0218.webp","imagenes/C2_DSC_0219.webp","imagenes/C2_DSC_0220.webp","imagenes/C2_DSC_0221.webp",
    "imagenes/C2_DSC_0222.webp","imagenes/C2_DSC_0223.webp","imagenes/C2_DSC_0224.webp","imagenes/C2_DSC_0225.webp","imagenes/C2_DSC_0226.webp",
    "imagenes/C2_DSC_0227.webp","imagenes/C2_DSC_0228.webp","imagenes/C2_DSC_0229.webp","imagenes/C2_DSC_0230.webp","imagenes/C2_DSC_0231.webp",
    "imagenes/C2_DSC_0232.webp","imagenes/C2_DSC_0233.webp","imagenes/C2_DSC_0234.webp","imagenes/C2_DSC_0235.webp","imagenes/C2_DSC_0236.webp",
    "imagenes/C2_DSC_0237.webp","imagenes/C2_DSC_0238.webp","imagenes/C2_DSC_0239.webp","imagenes/C2_DSC_0240.webp","imagenes/C2_DSC_0241.webp",
    "imagenes/C2_DSC_0242.webp","imagenes/C2_DSC_0243.webp","imagenes/C2_DSC_0244.webp","imagenes/C2_DSC_0245.webp","imagenes/C2_DSC_0246.webp",
    "imagenes/C2_DSC_0247.webp","imagenes/C2_DSC_0248.webp","imagenes/C2_DSC_0249.webp","imagenes/C2_DSC_0250.webp","imagenes/C2_DSC_0251.webp",
    "imagenes/C2_DSC_0252.webp","imagenes/C2_DSC_0253.webp","imagenes/C2_DSC_0254.webp","imagenes/C2_DSC_0255.webp","imagenes/C2_DSC_0256.webp",
    "imagenes/C2_DSC_0257.webp","imagenes/C2_DSC_0258.webp","imagenes/C2_DSC_0259.webp","imagenes/C2_DSC_0260.webp","imagenes/C2_DSC_0261.webp",
    "imagenes/C2_DSC_0262.webp","imagenes/C2_DSC_0263.webp","imagenes/C2_DSC_0264.webp","imagenes/C2_DSC_0265.webp","imagenes/C2_DSC_0266.webp",
    "imagenes/C2_DSC_0267.webp","imagenes/C2_DSC_0268.webp","imagenes/C2_DSC_0269.webp","imagenes/C2_DSC_0270.webp","imagenes/C2_DSC_0271.webp",
    "imagenes/C2_DSC_0272.webp","imagenes/C2_DSC_0273.webp","imagenes/C2_DSC_0274.webp","imagenes/C2_DSC_0275.webp","imagenes/C2_DSC_0276.webp",
    "imagenes/C2_DSC_0277.webp","imagenes/C2_DSC_0278.webp","imagenes/C2_DSC_0279.webp","imagenes/C2_DSC_0280.webp","imagenes/C2_DSC_0281.webp",
    "imagenes/C2_DSC_0282.webp","imagenes/C2_DSC_0283.webp","imagenes/C2_DSC_0284.webp","imagenes/C2_DSC_0285.webp","imagenes/C2_DSC_0286.webp",
    "imagenes/C2_DSC_0287.webp","imagenes/C2_DSC_0288.webp","imagenes/C2_DSC_0289.webp","imagenes/C2_DSC_0290.webp","imagenes/C2_DSC_0291.webp",
    "imagenes/C2_DSC_0292.webp","imagenes/C2_DSC_0293.webp","imagenes/C2_DSC_0294.webp","imagenes/C2_DSC_0295.webp","imagenes/C2_DSC_0296.webp",
    "imagenes/C2_DSC_0297.webp","imagenes/C2_DSC_0298.webp","imagenes/C2_DSC_0299.webp","imagenes/C2_DSC_0303.webp","imagenes/C2_DSC_0304.webp",
    "imagenes/C2_DSC_0305.webp","imagenes/C2_DSC_0307.webp","imagenes/C2_DSC_0309.webp","imagenes/C2_DSC_0310.webp","imagenes/C2_DSC_0311.webp",
    "imagenes/C2_DSC_0312.webp","imagenes/C2_DSC_0313.webp","imagenes/C2_DSC_0314.webp","imagenes/C2_DSC_0315.webp","imagenes/C2_DSC_0316.webp",
    "imagenes/C2_DSC_0317.webp","imagenes/C2_DSC_0318.webp","imagenes/C2_DSC_0319.webp","imagenes/C2_DSC_0320.webp","imagenes/C2_DSC_0321.webp",
    "imagenes/C2_DSC_0322.webp","imagenes/C2_DSC_0323.webp","imagenes/C2_DSC_0324.webp","imagenes/C2_DSC_0325.webp","imagenes/C2_DSC_0326.webp",
    "imagenes/C2_DSC_0327.webp","imagenes/C2_DSC_0328.webp","imagenes/C2_DSC_0329.webp","imagenes/C2_DSC_0330.webp","imagenes/C2_DSC_0331.webp",
    "imagenes/C2_DSC_0332.webp","imagenes/C2_DSC_0333.webp","imagenes/C2_DSC_0334.webp","imagenes/C2_DSC_0335.webp","imagenes/C2_DSC_0336.webp",
    "imagenes/C2_DSC_0337.webp","imagenes/C2_DSC_0338.webp","imagenes/C2_DSC_0339.webp","imagenes/C2_DSC_0340.webp","imagenes/C2_DSC_0341.webp",
    "imagenes/C2_DSC_0342.webp","imagenes/C2_DSC_0343.webp","imagenes/C2_DSC_0344.webp","imagenes/C2_DSC_0345.webp","imagenes/C2_DSC_0346.webp",
    "imagenes/C2_DSC_0347.webp","imagenes/C2_DSC_0348.webp","imagenes/C2_DSC_0349.webp","imagenes/C2_DSC_0350.webp","imagenes/C2_DSC_0351.webp",
    "imagenes/C2_DSC_0352.webp","imagenes/C2_DSC_0353.webp","imagenes/C2_DSC_0354.webp","imagenes/C2_DSC_0355.webp","imagenes/C2_DSC_0356.webp",
    "imagenes/C2_DSC_0357.webp","imagenes/C2_DSC_0358.webp","imagenes/C2_DSC_0359.webp","imagenes/C2_DSC_0360.webp","imagenes/C2_DSC_0361.webp",
    "imagenes/C2_DSC_0362.webp","imagenes/C2_DSC_0363.webp","imagenes/C2_DSC_0364.webp","imagenes/C2_DSC_0365.webp","imagenes/C2_DSC_0366.webp",
    "imagenes/C2_DSC_0367.webp","imagenes/C2_DSC_0368.webp","imagenes/C2_DSC_0369.webp","imagenes/C2_DSC_0370.webp","imagenes/C2_DSC_0371.webp",
    "imagenes/C2_DSC_0372.webp","imagenes/C2_DSC_0373.webp","imagenes/C2_DSC_0374.webp","imagenes/C2_DSC_0375.webp","imagenes/C2_DSC_0376.webp",
    "imagenes/C2_DSC_0377.webp","imagenes/C2_DSC_0378.webp","imagenes/C2_DSC_0379.webp","imagenes/C2_DSC_0380.webp","imagenes/C2_DSC_0381.webp",
    "imagenes/C2_DSC_0382.webp","imagenes/C2_DSC_0383.webp","imagenes/C2_DSC_0384.webp","imagenes/C2_DSC_0385.webp","imagenes/C2_DSC_0386.webp",
    "imagenes/C2_DSC_0387.webp","imagenes/C2_DSC_0388.webp","imagenes/C2_DSC_0389.webp","imagenes/C2_DSC_0390.webp","imagenes/C2_DSC_0391.webp",
    "imagenes/C2_DSC_0392.webp","imagenes/C2_DSC_0393.webp","imagenes/C2_DSC_0394.webp","imagenes/C2_DSC_0395.webp","imagenes/C2_DSC_0396.webp",
    "imagenes/C2_DSC_0397.webp","imagenes/C2_DSC_0398.webp","imagenes/C2_DSC_0399.webp","imagenes/C2_DSC_0400.webp","imagenes/C2_DSC_0401.webp",
    "imagenes/C2_DSC_0402.webp","imagenes/C2_DSC_0403.webp","imagenes/C2_DSC_0404.webp","imagenes/C2_DSC_0405.webp","imagenes/C2_DSC_0406.webp",
    "imagenes/C2_DSC_0407.webp","imagenes/C2_DSC_0408.webp","imagenes/C2_DSC_0409.webp","imagenes/C2_DSC_0410.webp","imagenes/C2_DSC_0411.webp",
    "imagenes/C2_DSC_0412.webp","imagenes/C2_DSC_0413.webp","imagenes/C2_DSC_0414.webp","imagenes/C2_DSC_0415.webp","imagenes/C2_DSC_0416.webp",
    "imagenes/C2_DSC_0417.webp","imagenes/C2_DSC_0418.webp","imagenes/C2_DSC_0419.webp","imagenes/C2_DSC_0420.webp","imagenes/C2_DSC_0421.webp",
    "imagenes/C2_DSC_0422.webp","imagenes/C2_DSC_0423.webp","imagenes/C2_DSC_0424.webp","imagenes/C2_DSC_0425.webp","imagenes/C2_DSC_0426.webp",
    "imagenes/C2_DSC_0427.webp","imagenes/C2_DSC_0428.webp","imagenes/C2_DSC_0429.webp","imagenes/C2_DSC_0430.webp","imagenes/C2_DSC_0431.webp",
    "imagenes/C2_DSC_0432.webp","imagenes/C2_DSC_0433.webp","imagenes/C2_DSC_0434.webp","imagenes/C2_DSC_0435.webp","imagenes/C2_DSC_0436.webp",
    "imagenes/C2_DSC_0437.webp","imagenes/C2_DSC_0438.webp","imagenes/C2_DSC_0439.webp","imagenes/C2_DSC_0440.webp","imagenes/C2_DSC_0441.webp",
    "imagenes/C2_DSC_0442.webp","imagenes/C2_DSC_0443.webp","imagenes/C2_DSC_0444.webp","imagenes/C2_DSC_0445.webp","imagenes/C2_DSC_0446.webp",
    "imagenes/C2_DSC_0447.webp","imagenes/C2_DSC_0448.webp","imagenes/C2_DSC_0449.webp","imagenes/C2_DSC_0450.webp","imagenes/C2_DSC_0451.webp",
    "imagenes/C2_DSC_0452.webp","imagenes/C2_DSC_0453.webp","imagenes/C2_DSC_0454.webp","imagenes/C2_DSC_0455.webp","imagenes/C2_DSC_0456.webp",
    "imagenes/C2_DSC_0457.webp","imagenes/C2_DSC_0458.webp","imagenes/C2_DSC_0459.webp","imagenes/C2_DSC_0460.webp","imagenes/C2_DSC_0461.webp",
    "imagenes/C2_DSC_0462.webp","imagenes/C2_DSC_0463.webp","imagenes/C2_DSC_0464.webp","imagenes/C2_DSC_0465.webp","imagenes/C2_DSC_0466.webp",
    "imagenes/C2_DSC_0467.webp","imagenes/C2_DSC_0468.webp","imagenes/C2_DSC_0469.webp","imagenes/C2_DSC_0470.webp","imagenes/C2_DSC_0471.webp",
    "imagenes/C2_DSC_0472.webp","imagenes/C2_DSC_0473.webp","imagenes/C2_DSC_0474.webp","imagenes/C2_DSC_0475.webp","imagenes/C2_DSC_0476.webp",
    "imagenes/C2_DSC_0477.webp","imagenes/C2_DSC_0478.webp","imagenes/C2_DSC_0479.webp","imagenes/C2_DSC_0480.webp","imagenes/C2_DSC_0481.webp",
    "imagenes/C2_DSC_0482.webp","imagenes/C2_DSC_0483.webp","imagenes/C2_DSC_0484.webp","imagenes/C2_DSC_0485.webp","imagenes/C2_DSC_0486.webp",
    "imagenes/C2_DSC_0487.webp","imagenes/C2_DSC_0488.webp","imagenes/C2_DSC_0489.webp","imagenes/C2_DSC_0490.webp","imagenes/C2_DSC_0491.webp",
    "imagenes/C2_DSC_0492.webp","imagenes/C2_DSC_0493.webp","imagenes/C2_DSC_0494.webp","imagenes/C2_DSC_0495.webp","imagenes/C2_DSC_0496.webp",
    "imagenes/C2_DSC_0497.webp","imagenes/C2_DSC_0498.webp","imagenes/C2_DSC_0499.webp","imagenes/C2_DSC_0500.webp","imagenes/C2_DSC_0501.webp",
    "imagenes/C2_DSC_0502.webp","imagenes/C2_DSC_0503.webp","imagenes/C2_DSC_0504.webp","imagenes/C2_DSC_0505.webp","imagenes/C2_DSC_0506.webp",
    "imagenes/C2_DSC_0507.webp","imagenes/C2_DSC_0508.webp","imagenes/C2_DSC_0509.webp","imagenes/DJI_20260314122306_0006_D.webp","imagenes/DJI_20260314122317_0007_D.webp",
    "imagenes/DJI_20260314122322_0008_D.webp","imagenes/DJI_20260314122332_0009_D.webp","imagenes/DJI_20260314122336_0010_D.webp","imagenes/DJI_20260314122339_0011_D.webp","imagenes/DJI_20260314122346_0012_D.webp",
    "imagenes/DJI_20260314122522_0017_D.webp","imagenes/DJI_20260314122527_0018_D.webp","imagenes/DJI_20260314122618_0020_D.webp","imagenes/DJI_20260314122654_0021_D.webp","imagenes/DSC_0001.webp",
    "imagenes/DSC_0002.webp","imagenes/DSC_0003.webp","imagenes/DSC_0004.webp","imagenes/DSC_0005.webp","imagenes/DSC_0006.webp",
    "imagenes/DSC_0007.webp","imagenes/DSC_0008.webp","imagenes/DSC_0009.webp","imagenes/DSC_0010.webp","imagenes/DSC_0011.webp",
    "imagenes/DSC_0012.webp","imagenes/DSC_0013.webp","imagenes/DSC_0014.webp","imagenes/DSC_0015.webp","imagenes/DSC_0016.webp",
    "imagenes/DSC_0017.webp","imagenes/DSC_0018.webp","imagenes/DSC_0019.webp","imagenes/DSC_0020.webp","imagenes/DSC_0021.webp",
    "imagenes/DSC_0022.webp","imagenes/DSC_0023.webp","imagenes/DSC_0024.webp","imagenes/DSC_0025.webp","imagenes/DSC_0026.webp",
    "imagenes/DSC_0027.webp","imagenes/DSC_0028.webp","imagenes/DSC_0029.webp","imagenes/DSC_0030.webp","imagenes/DSC_0031.webp",
    "imagenes/DSC_0032.webp","imagenes/DSC_0033.webp","imagenes/DSC_0034.webp","imagenes/DSC_0035.webp","imagenes/DSC_0036.webp",
    "imagenes/DSC_0037.webp","imagenes/DSC_0038.webp","imagenes/DSC_0039.webp","imagenes/DSC_0040.webp","imagenes/DSC_0041.webp",
    "imagenes/DSC_0042.webp","imagenes/DSC_0043.webp","imagenes/DSC_0044.webp","imagenes/DSC_0045.webp","imagenes/DSC_0046.webp",
    "imagenes/DSC_0047.webp","imagenes/DSC_0048.webp","imagenes/DSC_0049.webp","imagenes/DSC_0050.webp","imagenes/DSC_0051.webp",
    "imagenes/DSC_0052.webp","imagenes/DSC_0053.webp","imagenes/DSC_0054.webp","imagenes/DSC_0055.webp","imagenes/DSC_0056.webp",
    "imagenes/DSC_0057.webp","imagenes/DSC_0058.webp","imagenes/DSC_0059.webp","imagenes/DSC_0060.webp","imagenes/DSC_0061.webp",
    "imagenes/DSC_0062.webp","imagenes/DSC_0063.webp","imagenes/DSC_0064.webp","imagenes/DSC_0065.webp","imagenes/DSC_0066.webp",
    "imagenes/DSC_0067.webp","imagenes/DSC_0068.webp","imagenes/DSC_0069.webp","imagenes/DSC_0070.webp","imagenes/DSC_0071.webp",
    "imagenes/DSC_0072.webp","imagenes/DSC_0073.webp","imagenes/DSC_0074.webp","imagenes/DSC_0075.webp","imagenes/DSC_0076.webp",
    "imagenes/DSC_0077.webp","imagenes/DSC_0078.webp","imagenes/DSC_0079.webp","imagenes/DSC_0080.webp","imagenes/DSC_0081.webp",
    "imagenes/DSC_0082.webp","imagenes/DSC_0083.webp","imagenes/DSC_0084.webp","imagenes/DSC_0085.webp","imagenes/DSC_0086.webp",
    "imagenes/DSC_0087.webp","imagenes/DSC_0088.webp","imagenes/DSC_0089.webp","imagenes/DSC_0090.webp","imagenes/DSC_0091.webp",
    "imagenes/DSC_0092.webp","imagenes/DSC_0093.webp","imagenes/DSC_0094.webp","imagenes/DSC_0095.webp","imagenes/DSC_0096.webp",
    "imagenes/DSC_0097.webp","imagenes/DSC_0098.webp","imagenes/DSC_0099.webp","imagenes/DSC_0100.webp","imagenes/DSC_0101.webp",
    "imagenes/DSC_0102.webp","imagenes/DSC_0103.webp","imagenes/DSC_0104.webp","imagenes/DSC_0105.webp","imagenes/DSC_0106.webp",
    "imagenes/DSC_0107.webp","imagenes/DSC_0108.webp","imagenes/DSC_0109.webp","imagenes/DSC_0110.webp","imagenes/DSC_0111.webp",
    "imagenes/DSC_0112.webp","imagenes/DSC_0113.webp","imagenes/DSC_0114.webp","imagenes/DSC_0115.webp","imagenes/DSC_0116.webp",
    "imagenes/DSC_0117.webp","imagenes/DSC_0118.webp","imagenes/DSC_0119.webp","imagenes/DSC_0120.webp","imagenes/DSC_0121.webp",
    "imagenes/DSC_0122.webp","imagenes/DSC_0123.webp","imagenes/DSC_0124.webp","imagenes/DSC_0125.webp","imagenes/DSC_0126.webp",
    "imagenes/DSC_0127.webp","imagenes/DSC_0128.webp","imagenes/DSC_0129.webp","imagenes/DSC_0130.webp","imagenes/DSC_0131.webp",
    "imagenes/DSC_0132.webp","imagenes/DSC_0133.webp","imagenes/DSC_0134.webp","imagenes/DSC_0135.webp","imagenes/DSC_0136.webp",
    "imagenes/DSC_0137.webp","imagenes/DSC_0138.webp","imagenes/DSC_0139.webp","imagenes/DSC_0140.webp","imagenes/DSC_0141.webp",
    "imagenes/DSC_0142.webp","imagenes/DSC_0143.webp","imagenes/DSC_0144.webp","imagenes/DSC_0145.webp","imagenes/DSC_0146.webp",
    "imagenes/DSC_0147.webp","imagenes/DSC_0148.webp","imagenes/DSC_0149.webp","imagenes/DSC_0150.webp","imagenes/DSC_0151.webp",
    "imagenes/DSC_0152.webp","imagenes/DSC_0153.webp","imagenes/DSC_0154.webp","imagenes/DSC_0155.webp","imagenes/DSC_0156.webp",
    "imagenes/DSC_0157.webp","imagenes/DSC_0158.webp","imagenes/DSC_0159.webp","imagenes/DSC_0160.webp","imagenes/DSC_0161.webp",
    "imagenes/DSC_0162.webp","imagenes/DSC_0163.webp","imagenes/DSC_0164.webp","imagenes/DSC_0165.webp","imagenes/DSC_0166.webp",
    "imagenes/DSC_0167.webp","imagenes/DSC_0168.webp","imagenes/DSC_0169.webp","imagenes/DSC_0170.webp","imagenes/DSC_0171.webp",
    "imagenes/DSC_0172.webp","imagenes/DSC_0173.webp","imagenes/DSC_0174.webp","imagenes/DSC_0175.webp","imagenes/DSC_0176.webp",
    "imagenes/DSC_0177.webp","imagenes/DSC_0178.webp","imagenes/DSC_0179.webp","imagenes/DSC_0180.webp","imagenes/DSC_0181.webp",
    "imagenes/DSC_0182.webp","imagenes/DSC_0183.webp","imagenes/DSC_0184.webp","imagenes/DSC_0185.webp","imagenes/DSC_0186.webp",
    "imagenes/DSC_0187.webp","imagenes/DSC_0188.webp","imagenes/DSC_0189.webp","imagenes/DSC_0190.webp","imagenes/DSC_0191.webp",
    "imagenes/DSC_0192.webp","imagenes/DSC_0193.webp","imagenes/DSC_0194.webp","imagenes/DSC_0195.webp","imagenes/DSC_0196.webp",
    "imagenes/DSC_0197.webp","imagenes/DSC_0198.webp","imagenes/DSC_0199.webp","imagenes/DSC_0200.webp","imagenes/DSC_0201.webp",
    "imagenes/DSC_0202.webp","imagenes/DSC_0203.webp","imagenes/DSC_0204.webp","imagenes/DSC_0205.webp","imagenes/DSC_0206.webp",
    "imagenes/DSC_0207.webp","imagenes/DSC_0208.webp","imagenes/DSC_0209.webp","imagenes/DSC_0210.webp","imagenes/DSC_0211.webp",
    "imagenes/DSC_0212.webp","imagenes/DSC_0213.webp","imagenes/DSC_0214.webp","imagenes/DSC_0215.webp","imagenes/DSC_0216.webp",
    "imagenes/DSC_0217.webp","imagenes/DSC_0218.webp","imagenes/DSC_0219.webp","imagenes/DSC_0220.webp","imagenes/DSC_0221.webp",
    "imagenes/DSC_0222.webp","imagenes/DSC_0223.webp","imagenes/DSC_0224.webp","imagenes/DSC_0225.webp","imagenes/DSC_0226.webp",
    "imagenes/DSC_0227.webp","imagenes/DSC_0228.webp","imagenes/DSC_0229.webp","imagenes/DSC_0230.webp","imagenes/DSC_0231.webp",
    "imagenes/DSC_0232.webp","imagenes/DSC_0233.webp","imagenes/DSC_0234.webp","imagenes/DSC_0235.webp","imagenes/DSC_0236.webp",
    "imagenes/DSC_0237.webp","imagenes/DSC_0238.webp","imagenes/DSC_0239.webp","imagenes/DSC_0240.webp","imagenes/DSC_0241.webp",
    "imagenes/DSC_0242.webp","imagenes/DSC_0243.webp","imagenes/DSC_0244.webp","imagenes/DSC_0245.webp","imagenes/DSC_0246.webp",
    "imagenes/DSC_0247.webp","imagenes/DSC_0248.webp","imagenes/DSC_0249.webp","imagenes/DSC_0250.webp","imagenes/DSC_0251.webp",
    "imagenes/DSC_0252.webp","imagenes/DSC_0253.webp","imagenes/DSC_0254.webp","imagenes/DSC_0255.webp","imagenes/DSC_0256.webp",
    "imagenes/DSC_0257.webp","imagenes/DSC_0258.webp","imagenes/DSC_0259.webp","imagenes/DSC_0260.webp","imagenes/DSC_0261.webp",
    "imagenes/DSC_0262.webp","imagenes/DSC_0263.webp","imagenes/DSC_0264.webp","imagenes/DSC_0265.webp","imagenes/DSC_0266.webp",
    "imagenes/DSC_0267.webp","imagenes/DSC_0268.webp","imagenes/DSC_0269.webp","imagenes/DSC_0270.webp","imagenes/DSC_0271.webp",
    "imagenes/DSC_0272.webp","imagenes/DSC_0273.webp","imagenes/DSC_0274.webp","imagenes/DSC_0275.webp","imagenes/DSC_0276.webp",
    "imagenes/DSC_0277.webp","imagenes/DSC_0278.webp","imagenes/DSC_0279.webp","imagenes/DSC_0280.webp","imagenes/DSC_0281.webp",
    "imagenes/DSC_0282.webp","imagenes/DSC_0283.webp","imagenes/DSC_0284.webp","imagenes/DSC_0285.webp","imagenes/DSC_0286.webp",
    "imagenes/DSC_0287.webp","imagenes/DSC_0288.webp","imagenes/DSC_0289.webp","imagenes/DSC_0290.webp","imagenes/DSC_0291.webp",
    "imagenes/DSC_0292.webp","imagenes/DSC_0293.webp","imagenes/DSC_0294.webp","imagenes/DSC_0295.webp","imagenes/DSC_0296.webp",
    "imagenes/DSC_0297.webp","imagenes/DSC_0298.webp","imagenes/DSC_0299.webp","imagenes/DSC_0300.webp","imagenes/DSC_0301.webp",
    "imagenes/DSC_0302.webp","imagenes/DSC_0303.webp","imagenes/DSC_0304.webp","imagenes/DSC_0305.webp","imagenes/DSC_0306.webp",
    "imagenes/DSC_0307.webp","imagenes/DSC_0308.webp","imagenes/DSC_0309.webp","imagenes/DSC_0310.webp","imagenes/DSC_0311.webp",
    "imagenes/DSC_0312.webp","imagenes/DSC_0313.webp","imagenes/DSC_0314.webp","imagenes/DSC_0315.webp","imagenes/DSC_0316.webp",
    "imagenes/DSC_0317.webp","imagenes/DSC_0318.webp","imagenes/DSC_0319.webp","imagenes/DSC_0320.webp","imagenes/DSC_0321.webp",
    "imagenes/DSC_0322.webp","imagenes/DSC_0323.webp","imagenes/DSC_0324.webp","imagenes/DSC_0325.webp","imagenes/DSC_0326.webp",
    "imagenes/DSC_0327.webp","imagenes/DSC_0328.webp","imagenes/DSC_0329.webp","imagenes/DSC_0330.webp","imagenes/DSC_0331.webp",
    "imagenes/DSC_0332.webp","imagenes/DSC_0333.webp","imagenes/DSC_0334.webp","imagenes/DSC_0335.webp","imagenes/DSC_0336.webp",
    "imagenes/DSC_0337.webp","imagenes/DSC_0338.webp","imagenes/DSC_0339.webp","imagenes/DSC_0340.webp","imagenes/DSC_0341.webp",
    "imagenes/DSC_0342.webp","imagenes/DSC_0343.webp","imagenes/DSC_0344.webp","imagenes/DSC_0345.webp","imagenes/DSC_0346.webp",
    "imagenes/DSC_0347.webp","imagenes/DSC_0348.webp","imagenes/DSC_0349.webp","imagenes/DSC_0350.webp","imagenes/DSC_0351.webp",
    "imagenes/DSC_0352.webp","imagenes/DSC_0353.webp","imagenes/DSC_0354.webp","imagenes/DSC_0355.webp","imagenes/DSC_0356.webp",
    "imagenes/DSC_0357.webp","imagenes/DSC_0358.webp","imagenes/DSC_0359.webp","imagenes/DSC_0360.webp","imagenes/DSC_0361.webp",
    "imagenes/DSC_0362.webp","imagenes/DSC_0363.webp","imagenes/DSC_0364.webp","imagenes/DSC_0365.webp","imagenes/DSC_0366.webp",
    "imagenes/DSC_0367.webp","imagenes/DSC_0368.webp","imagenes/DSC_0369.webp","imagenes/DSC_0370.webp","imagenes/DSC_0371.webp",
    "imagenes/DSC_0372.webp","imagenes/DSC_0373.webp","imagenes/DSC_0374.webp","imagenes/DSC_0375.webp","imagenes/DSC_0376.webp",
    "imagenes/DSC_0377.webp","imagenes/DSC_0378.webp","imagenes/DSC_0379.webp","imagenes/DSC_0380.webp","imagenes/DSC_0381.webp",
    "imagenes/DSC_0382.webp","imagenes/DSC_0383.webp","imagenes/DSC_0384.webp","imagenes/DSC_0385.webp","imagenes/DSC_0386.webp",
    "imagenes/DSC_0387.webp","imagenes/DSC_0388.webp","imagenes/DSC_0389.webp","imagenes/DSC_0390.webp","imagenes/DSC_0391.webp",
    "imagenes/DSC_0392.webp","imagenes/DSC_0393.webp","imagenes/DSC_0394.webp","imagenes/DSC_0395.webp","imagenes/DSC_0396.webp",
    "imagenes/DSC_0397.webp","imagenes/DSC_0398.webp","imagenes/DSC_0399.webp","imagenes/DSC_0400.webp","imagenes/DSC_0401.webp",
    "imagenes/DSC_0402.webp","imagenes/DSC_0403.webp","imagenes/DSC_0404.webp","imagenes/DSC_0405.webp","imagenes/DSC_0406.webp",
    "imagenes/DSC_0407.webp","imagenes/DSC_0408.webp","imagenes/DSC_0409.webp","imagenes/DSC_0410.webp","imagenes/DSC_0411.webp",
    "imagenes/DSC_0412.webp","imagenes/DSC_0413.webp","imagenes/DSC_0414.webp","imagenes/DSC_0415.webp","imagenes/DSC_0416.webp",
    "imagenes/DSC_0417.webp","imagenes/DSC_0418.webp","imagenes/DSC_0419.webp","imagenes/DSC_0420.webp","imagenes/DSC_0421.webp",
    "imagenes/DSC_0422.webp","imagenes/DSC_0423.webp","imagenes/DSC_0424.webp","imagenes/DSC_0425.webp","imagenes/DSC_0426.webp",
    "imagenes/DSC_0427.webp","imagenes/DSC_0428.webp","imagenes/DSC_0429.webp","imagenes/DSC_0430.webp","imagenes/DSC_0431.webp",
    "imagenes/DSC_0432.webp","imagenes/DSC_0433.webp","imagenes/DSC_0434.webp","imagenes/DSC_0435.webp","imagenes/DSC_0436.webp",
    "imagenes/DSC_0437.webp","imagenes/DSC_0438.webp","imagenes/DSC_0439.webp","imagenes/DSC_0440.webp","imagenes/DSC_0441.webp",
    "imagenes/DSC_0442.webp","imagenes/DSC_0443.webp","imagenes/DSC_0444.webp","imagenes/DSC_0445.webp","imagenes/DSC_0446.webp",
    "imagenes/DSC_0447.webp","imagenes/DSC_0448.webp","imagenes/DSC_0449.webp","imagenes/DSC_0450.webp","imagenes/DSC_0451.webp",
    "imagenes/DSC_0452.webp","imagenes/DSC_0453.webp","imagenes/DSC_0454.webp","imagenes/DSC_0455.webp","imagenes/DSC_0456.webp",
    "imagenes/DSC_0457.webp","imagenes/DSC_0458.webp","imagenes/DSC_0459.webp","imagenes/DSC_0460.webp","imagenes/DSC_0461.webp",
    "imagenes/DSC_0462.webp","imagenes/DSC_0463.webp","imagenes/DSC_0464.webp","imagenes/DSC_0465.webp","imagenes/DSC_0466.webp",
    "imagenes/DSC_0467.webp","imagenes/DSC_0468.webp","imagenes/DSC_0469.webp","imagenes/DSC_0470.webp","imagenes/DSC_0471.webp",
    "imagenes/DSC_0472.webp","imagenes/DSC_0473.webp","imagenes/DSC_0474.webp","imagenes/DSC_0475.webp","imagenes/DSC_0476.webp",
    "imagenes/DSC_0477.webp","imagenes/DSC_0478.webp","imagenes/DSC_0479.webp","imagenes/DSC_0480.webp","imagenes/DSC_0481.webp",
    "imagenes/DSC_0482.webp","imagenes/DSC_0483.webp","imagenes/DSC_0484.webp","imagenes/DSC_0485.webp","imagenes/DSC_0486.webp",
    "imagenes/DSC_0487.webp","imagenes/DSC_0488.webp","imagenes/DSC_0489.webp","imagenes/DSC_0490.webp","imagenes/DSC_0491.webp",
    "imagenes/DSC_0492.webp","imagenes/DSC_0493.webp","imagenes/DSC_0494.webp","imagenes/DSC_0495.webp","imagenes/DSC_0496.webp",
    "imagenes/DSC_0497.webp","imagenes/DSC_0498.webp","imagenes/DSC_0499.webp","imagenes/DSC_0500.webp","imagenes/DSC_0501.webp",
    "imagenes/DSC_0502.webp","imagenes/DSC_0503.webp","imagenes/DSC_0504.webp","imagenes/DSC_0505.webp","imagenes/DSC_0506.webp",
    "imagenes/DSC_0507.webp","imagenes/DSC_0508.webp","imagenes/DSC_0509.webp","imagenes/DSC_0510.webp","imagenes/DSC_0511.webp",
    "imagenes/DSC_0512.webp","imagenes/DSC_0513.webp","imagenes/DSC_0514.webp","imagenes/DSC_0515.webp","imagenes/DSC_0516.webp",
    "imagenes/DSC_0517.webp","imagenes/DSC_0518.webp","imagenes/DSC_0519.webp","imagenes/DSC_0520.webp","imagenes/DSC_0521.webp",
    "imagenes/DSC_0522.webp","imagenes/DSC_0523.webp","imagenes/DSC_0524.webp","imagenes/DSC_0525.webp","imagenes/DSC_0526.webp",
    "imagenes/DSC_0527.webp","imagenes/DSC_0528.webp","imagenes/DSC_0529.webp","imagenes/DSC_0530.webp","imagenes/DSC_0531.webp",
    "imagenes/DSC_0532.webp","imagenes/DSC_0533.webp","imagenes/DSC_0534.webp","imagenes/DSC_0535.webp","imagenes/DSC_0536.webp",
    "imagenes/DSC_0537.webp","imagenes/DSC_0538.webp","imagenes/DSC_0539.webp","imagenes/DSC_0540.webp","imagenes/DSC_0541.webp",
    "imagenes/DSC_0542.webp","imagenes/DSC_0543.webp","imagenes/DSC_0544.webp","imagenes/DSC_0545.webp","imagenes/DSC_0546.webp",
    "imagenes/DSC_0547.webp","imagenes/DSC_0548.webp","imagenes/DSC_0549.webp","imagenes/DSC_0550.webp","imagenes/DSC_0551.webp",
    "imagenes/DSC_0552.webp","imagenes/DSC_0553.webp","imagenes/DSC_0554.webp","imagenes/DSC_0555.webp","imagenes/DSC_0556.webp",
    "imagenes/DSC_0557.webp","imagenes/DSC_0558.webp","imagenes/DSC_0559.webp","imagenes/DSC_0560.webp","imagenes/DSC_0561.webp",
    "imagenes/DSC_0585.webp","imagenes/DSC_0588.webp","imagenes/DSC_0590.webp","imagenes/DSC_0591.webp","imagenes/DSC_0592.webp",
    "imagenes/DSC_0593.webp","imagenes/DSC_0594.webp","imagenes/DSC_0595.webp","imagenes/DSC_0596.webp","imagenes/DSC_0597.webp",
    "imagenes/DSC_0598.webp","imagenes/DSC_0599.webp","imagenes/DSC_0600.webp","imagenes/DSC_0601.webp","imagenes/DSC_0602.webp",
    "imagenes/DSC_0603.webp","imagenes/DSC_0604.webp","imagenes/DSC_0605.webp","imagenes/DSC_0606.webp","imagenes/DSC_0607.webp",
    "imagenes/DSC_0608.webp","imagenes/DSC_0609.webp","imagenes/DSC_0610.webp","imagenes/DSC_0611.webp","imagenes/DSC_0612.webp",
    "imagenes/DSC_0613.webp","imagenes/DSC_0614.webp","imagenes/DSC_0617.webp","imagenes/DSC_0618.webp","imagenes/DSC_0621.webp",
    "imagenes/DSC_0628.webp","imagenes/DSC_0629.webp","imagenes/DSC_0630.webp","imagenes/DSC_0631.webp","imagenes/DSC_0632.webp",
    "imagenes/DSC_0633.webp","imagenes/DSC_0634.webp","imagenes/DSC_0635.webp","imagenes/DSC_0636.webp","imagenes/DSC_0637.webp",
    "imagenes/DSC_0638.webp","imagenes/DSC_0639.webp","imagenes/DSC_0640.webp","imagenes/DSC_0641.webp","imagenes/DSC_0642.webp",
    "imagenes/DSC_0643.webp"
];

const STORAGE_KEY = 'boda_herrera_zavala_photo_selections';
const KEY_FILTER   = 'boda_filter';
const KEY_SCROLL   = 'boda_scroll';
const KEY_LAST     = 'boda_last_photo';
const LIMITES = { impresion: 50 };
const COSTO_FOTO_ADICIONAL = 25;

let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';
let touchStartX = 0;
let touchStartY = 0;
let scrollPositionBeforeModal = 0;
let scrollSaveTimer = null;
let modalOpen = false;

// ========================================
// LOCAL STORAGE
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) photoSelections = JSON.parse(saved);
    } catch (e) { photoSelections = {}; }
}

function saveSelections() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
    } catch (e) {
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
}

function saveScroll() {
    try { localStorage.setItem(KEY_SCROLL, window.scrollY); } catch (e) {}
}

function restoreState() {
    // Restaurar filtro
    const savedFilter = localStorage.getItem(KEY_FILTER);
    if (savedFilter) setFilter(savedFilter);

    // Restaurar scroll (con pequeño delay para que el DOM esté listo)
    const savedScroll = parseInt(localStorage.getItem(KEY_SCROLL) || '0');
    if (savedScroll > 0) {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => window.scrollTo(0, savedScroll));
        });
    }
}

function clearAllSelections() {
    if (confirm('¿Estás seguro de que quieres borrar TODAS las selecciones?')) {
        photoSelections = {};
        saveSelections();
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// STATS
// ========================================
function getStats() {
    const stats = { impresion: 0, descartada: 0, sinClasificar: photos.length };
    Object.values(photoSelections).forEach(s => {
        if (s.impresion) stats.impresion++;
        if (s.descartada) stats.descartada++;
    });
    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;
    return stats;
}

function updateStats() {
    const stats = getStats();
    document.getElementById('countImpresion').textContent = `${stats.impresion}/${LIMITES.impresion}`;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;

    const card = document.querySelector('.stat-card.impresion');
    if (card) {
        if (stats.impresion > LIMITES.impresion) {
            card.style.borderColor = '#ff9800';
            card.style.backgroundColor = 'rgba(255,152,0,0.1)';
        } else if (stats.impresion === LIMITES.impresion) {
            card.style.borderColor = '#4caf50';
            card.style.backgroundColor = 'rgba(76,175,80,0.1)';
        } else {
            card.style.borderColor = '';
            card.style.backgroundColor = '';
        }
    }
}

// ========================================
// GALLERY
// ========================================
function renderGallery() {
    const grid = document.getElementById('photosGrid');
    if (!grid) return;
    grid.innerHTML = '';

    photos.forEach((photo, index) => {
        const selection = photoSelections[index] || {};
        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        if (selection.descartada) card.classList.add('has-descartada');
        else if (selection.impresion) card.classList.add('has-impresion');

        let badgesHTML = '';
        if (selection.impresion || selection.descartada) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        card.innerHTML = `
            <div class="photo-image-container">
                <img src="${photo}" alt="Foto ${index + 1}" loading="lazy">
            </div>
            <div class="photo-number">Foto ${index + 1}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });

    applyFilter();
}

// ========================================
// UPDATE SINGLE CARD (sin recargar imágenes)
// ========================================
function updateCard(index) {
    const card = document.querySelector(`.photo-card[data-index="${index}"]`);
    if (!card) return;

    const selection = photoSelections[index] || {};

    card.className = 'photo-card';
    if (selection.descartada) card.classList.add('has-descartada');
    else if (selection.impresion) card.classList.add('has-impresion');

    const existing = card.querySelector('.photo-badges');
    if (existing) existing.remove();

    if (selection.impresion || selection.descartada) {
        const badges = document.createElement('div');
        badges.className = 'photo-badges';
        if (selection.impresion) badges.innerHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
        if (selection.descartada) badges.innerHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
        card.appendChild(badges);
    }

    let show = false;
    switch (currentFilter) {
        case 'all': show = true; break;
        case 'impresion': show = selection.impresion === true; break;
        case 'descartada': show = selection.descartada === true; break;
        case 'sin-clasificar': show = !selection.impresion && !selection.descartada; break;
    }
    card.classList.toggle('hidden', !show);
}

// ========================================
// FILTER
// ========================================
function applyFilter() {
    document.querySelectorAll('.photo-card').forEach(card => {
        const index = parseInt(card.dataset.index);
        const s = photoSelections[index] || {};
        let show = false;
        switch (currentFilter) {
            case 'all': show = true; break;
            case 'impresion': show = s.impresion === true; break;
            case 'descartada': show = s.descartada === true; break;
            case 'sin-clasificar': show = !s.impresion && !s.descartada; break;
        }
        card.classList.toggle('hidden', !show);
    });
}

function setFilter(filter) {
    currentFilter = filter;
    applyFilter();
    document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
    const btn = document.querySelector(`[data-filter="${filter}"]`);
    if (btn) btn.classList.add('active');
    try { localStorage.setItem(KEY_FILTER, filter); } catch (e) {}
}

function updateFilterButtons() {
    const stats = getStats();
    document.getElementById('btnFilterAll').textContent = `Todas (${photos.length})`;
    document.getElementById('btnFilterImpresion').textContent = `Impresión (${stats.impresion})`;
    document.getElementById('btnFilterDescartada').textContent = `Descartadas (${stats.descartada})`;
    document.getElementById('btnFilterSinClasificar').textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

// ========================================
// MODAL
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    try { localStorage.setItem(KEY_LAST, index); } catch (e) {}
    const modal = document.getElementById('photoModal');
    const photo = photos[index];
    const num = `Foto ${index + 1}`;

    document.querySelector('.modal-image-container').innerHTML = `
        <img id="modalImage" src="${photo}" alt="${num}">
        <div class="modal-photo-number">${num}</div>
    `;

    const selection = photoSelections[index] || {};
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.toggle('selected', selection[btn.dataset.category] === true);
    });

    modal.classList.add('active');

    scrollPositionBeforeModal = window.scrollY;
    modalOpen = true;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPositionBeforeModal}px`;
    document.body.style.width = '100%';
}

function closeModal() {
    document.getElementById('photoModal').classList.remove('active');
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    modalOpen = false;
    // Restaurar scroll — usar forma de dos argumentos (compatible con todos los móviles)
    // behavior:'instant' no funciona en Safari/Android más viejos y el scrollTo falla
    document.documentElement.scrollTop = scrollPositionBeforeModal;
    document.body.scrollTop = scrollPositionBeforeModal;
    window.scrollTo(0, scrollPositionBeforeModal);
    try { localStorage.setItem(KEY_SCROLL, scrollPositionBeforeModal); } catch (e) {}
    currentPhotoIndex = null;
}

// ========================================
// NAVIGATION
// ========================================
function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;
    saveCurrentSelections();
    let newIndex = currentPhotoIndex + (direction === 'next' ? 1 : -1);
    if (newIndex >= photos.length) newIndex = 0;
    if (newIndex < 0) newIndex = photos.length - 1;
    openModal(newIndex);
}

function saveCurrentSelections() {
    if (currentPhotoIndex === null) return;
    const cats = {};
    let hasAny = false;
    document.querySelectorAll('.option-btn').forEach(btn => {
        cats[btn.dataset.category] = btn.classList.contains('selected');
        if (btn.classList.contains('selected')) hasAny = true;
    });
    if (hasAny) photoSelections[currentPhotoIndex] = cats;
    else delete photoSelections[currentPhotoIndex];
    saveSelections();
    updateStats();
    updateFilterButtons();
}

function saveModalSelection() {
    if (currentPhotoIndex === null) return;
    const cats = {};
    let hasAny = false;
    document.querySelectorAll('.option-btn').forEach(btn => {
        cats[btn.dataset.category] = btn.classList.contains('selected');
        if (btn.classList.contains('selected')) hasAny = true;
    });
    if (hasAny) photoSelections[currentPhotoIndex] = cats;
    else delete photoSelections[currentPhotoIndex];

    saveSelections();
    updateCard(currentPhotoIndex);   // solo actualiza esa tarjeta, sin recargar imágenes
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección guardada correctamente', 'success');
}

// ========================================
// EXPORT
// ========================================
function exportToJSON() {
    const stats = getStats();
    const extra = Math.max(0, stats.impresion - LIMITES.impresion);
    const exportData = {
        evento: 'Boda Rebeca Herrera x Alejandro Zavala',
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: stats,
        fotos_incluidas: LIMITES.impresion,
        fotos_adicionales: extra,
        costo_adicional: extra * COSTO_FOTO_ADICIONAL,
        selecciones: []
    };
    photos.forEach((photo, index) => {
        const s = photoSelections[index];
        if (s && (s.impresion || s.descartada)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: photo,
                impresion: s.impresion || false,
                descartada: s.descartada || false
            });
        }
    });
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seleccion-fotos-boda-herrera-zavala-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Reporte descargado correctamente', 'success');
}

function copyToClipboard() {
    const stats = getStats();
    const extra = Math.max(0, stats.impresion - LIMITES.impresion);
    let text = '💍 SELECCIÓN DE FOTOS - BODA REBECA HERRERA x ALEJANDRO ZAVALA\n';
    text += '══════════════════════════════════════════════════\n\n';
    text += `📋 PAQUETE: 50 fotos para impresión 5x7\n\n`;
    text += `📊 RESUMEN:\n`;
    text += `   Total fotos disponibles: ${photos.length}\n`;
    text += `   📸 Para impresión: ${stats.impresion}/${LIMITES.impresion}`;
    text += stats.impresion === LIMITES.impresion ? ' ✓\n' : stats.impresion > LIMITES.impresion ? ' ⚠️ ADICIONALES\n' : '\n';
    text += `   ❌ Descartadas: ${stats.descartada}\n`;
    text += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n`;
    if (extra > 0) {
        text += `\n💰 COSTO ADICIONAL:\n`;
        text += `   ${extra} foto(s) x $${COSTO_FOTO_ADICIONAL} = $${extra * COSTO_FOTO_ADICIONAL} MXN\n`;
    }
    text += `\n📅 ${new Date().toLocaleString('es-MX')}\n`;

    navigator.clipboard.writeText(text).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.cssText = 'position:fixed;opacity:0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        showToast('Resumen copiado al portapapeles', 'success');
    });
}

// ========================================
// TOAST
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.className = `toast ${type}`;
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// ========================================
// INIT
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    loadSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();
    restoreState();

    document.getElementById('btnFilterAll')?.addEventListener('click', () => setFilter('all'));
    document.getElementById('btnFilterImpresion')?.addEventListener('click', () => setFilter('impresion'));
    document.getElementById('btnFilterDescartada')?.addEventListener('click', () => setFilter('descartada'));
    document.getElementById('btnFilterSinClasificar')?.addEventListener('click', () => setFilter('sin-clasificar'));

    document.getElementById('btnExport')?.addEventListener('click', exportToJSON);
    document.getElementById('btnShare')?.addEventListener('click', copyToClipboard);
    document.getElementById('btnClear')?.addEventListener('click', clearAllSelections);

    document.querySelector('.modal-close')?.addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection')?.addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection')?.addEventListener('click', saveModalSelection);

    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => btn.classList.toggle('selected'));
    });

    const modal = document.getElementById('photoModal');
    if (modal) {
        modal.addEventListener('click', e => { if (e.target.id === 'photoModal') closeModal(); });
        modal.addEventListener('touchstart', e => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }, { passive: true });
        modal.addEventListener('touchend', e => {
            const dx = e.changedTouches[0].clientX - touchStartX;
            const dy = e.changedTouches[0].clientY - touchStartY;
            if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
                navigatePhoto(dx > 0 ? 'prev' : 'next');
            }
        }, { passive: true });
    }

    document.getElementById('btnPrevPhoto')?.addEventListener('click', () => navigatePhoto('prev'));
    document.getElementById('btnNextPhoto')?.addEventListener('click', () => navigatePhoto('next'));

    document.addEventListener('keydown', e => {
        const modal = document.getElementById('photoModal');
        if (modal?.classList.contains('active')) {
            if (e.key === 'Escape') closeModal();
            else if (e.key === 'Enter') saveModalSelection();
            else if (e.key === 'ArrowLeft') navigatePhoto('prev');
            else if (e.key === 'ArrowRight') navigatePhoto('next');
        }
    });
});

// Guardar scroll con debounce — pausar mientras modal está abierto
// (cuando body es position:fixed, scrollY=0 y guardaría posición incorrecta)
window.addEventListener('scroll', () => {
    if (modalOpen) return;
    clearTimeout(scrollSaveTimer);
    scrollSaveTimer = setTimeout(saveScroll, 300);
}, { passive: true });

document.addEventListener('visibilitychange', () => {
    if (document.hidden) { saveSelections(); saveScroll(); }
});
window.addEventListener('beforeunload', () => { saveSelections(); saveScroll(); });

// Registrar Service Worker (cachea imágenes localmente)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
}
