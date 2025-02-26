# Headboard Custom PCB (Altium) - Open Source 🚀

![GitHub stars](https://img.shields.io/github/stars/your-repo.svg?style=flat&logo=github) ![GitHub forks](https://img.shields.io/github/forks/your-repo.svg?style=flat&logo=github) ![GitHub license](https://img.shields.io/github/license/your-repo.svg)

## Overview
This is an open-source headboard custom PCB designed in Altium for integration with the NXP MIMX8MN5DVPIZAA (I.MX 8M NANO). The board is designed to support essential peripherals such as eMMC storage, LPDDR4X RAM, WiFi/Bluetooth, camera module, and display. The design is optimized for performance and ease of assembly, with a compact form factor.

🎯 **The goal was to make it accessible to everyone—hobbyists, makers, robotics enthusiasts—without minimum order limitations.** This project follows the workflow of creating an SBC (Single Board Computer), robot board, and wearable device.

## 📏 Dimensions
- **Width:** 34mm  
- **Height:** 30.946mm  
- **Thickness:** 1mm  

## 🛠️ Technical Specifications
### **Back Side**
- **Processor:** NXP MIMX8MN5DVPIZAA (I.MX 8M NANO)
- **Memory:** eMMC 5.1 HS400 + LPDDR4X 144-FBGA (8x9.5) Kingston 32EP16-M4FTC32-GA68
- **Boot Mode:** Serial Download Mode (SDM) available via special "download" pads (F_USB set to high)
- **Power Management:** PMIC NXP PCA9450BHNY
- **Connectivity:** WiFi/Bluetooth combo chip Realtek RTL8723DS
- **Antenna:** Kyocera Avx M310220
- **Camera Support:** 1MP or 2MP with a custom FFC 16-pin connector
- **Main Connector:** JST B4B-ZR-SM4-TF (1.5mm, 1 row, 4 contacts)

### **Front Side**
- **IMU Sensor:** Bosch BMI160 (must be positioned as in the official board for compatibility)
- **Display:** ST0103A2W-WSNLW-F

## 📋 Component List & Costs (Prices may vary depending on the supplier, market trends or other reasons)
| Component | Part Number | Price (€) |
|-----------|------------|-----------|
| Processor | MIMX8MN5DVPIZAA | 24.29 |
| Memory | 32EP16-M4FTC32-GA68 | 25.35 |
| Connector | B4B-ZR-SM4-TF | 0.66 |
| PMIC | PCA9450BHNY | 4.11 |
| IMU | BMI160 | 1.46 |
| WiFi/Bluetooth | RTL8723DS | 1.95 |
| Antenna | M310220 | 0.91 |
| Display | ST0103A2W-WSNLW-F | 31.84 |
| PCB + Stencil | - | 120-150 |

## 🗺️ Mapping Preview
![Mapping Preview](https://github.com/ankivector_headboard/map_preview.png)

## 🚀 Getting Started
1. **Download the Design Files**  
   - [GitHub Repository](https://github.com/applabstudio/ankivector_headboard)
   - Altium design files (.SchDoc, .PcbDoc)
2. **Manufacturing**  
   - Use the provided Gerber files to order the PCB from your preferred manufacturer.
3. **Assembly**  
   - Follow the BOM to source the components and solder them accordingly.

## 🤝 Contributing
This project is open-source, and contributions are welcome! You can help by:
- Suggesting improvements or fixes.
- Testing and documenting.
- Creating alternative designs or add-ons.

## 📜 License
This project is released under the **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) License**. You are free to modify and share the design, but **commercial use is not permitted**.

---

For any questions or discussions, feel free to open an issue on GitHub or contact me directly.