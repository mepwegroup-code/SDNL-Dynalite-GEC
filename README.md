# SDNL Dynalite GEC

Ứng dụng web GEC vẽ sơ đồ nguyên lý, sơ đồ tổng thể, tủ nguồn và bố trí tủ điều khiển Signify Dynalite. Chuyển đổi từ file HTML V17 do người dùng cung cấp; xuất AutoLISP, Excel và PDF.

## Deploy Vercel

1. Mã nguồn ở ngay gốc repository `SDNL-Dynalite-GEC` (tên hiển thị ứng dụng: **SDNL Dynalite GEC**). Không bọc thêm thư mục chứa mã nguồn.
2. Vercel → Add New Project → Import repository.
3. Root Directory: thư mục gốc repository. Framework: **Other**. Build: `npm run build`. Output: `public`. Không cần biến môi trường.
4. Deploy. Các lần push tiếp theo lên nhánh production sẽ tự deploy khi repo đã kết nối Vercel.

Bản sửa 404 ngày 10/11/2026: đưa ứng dụng từ thư mục `SDNL_Dynalite_GEC_Vercel_v1.0/` ra gốc repository để Vercel đọc được `index.html`, `package.json` và `vercel.json`. Nếu Vercel đang đặt Root Directory là thư mục cũ, đổi về gốc repository (`./`) trước khi redeploy.

`vercel.json` đã cấu hình build và output. Chỉ cần Node.js 20 trở lên; build không tải dependency. Các thư viện Excel/PDF/kéo thả được đóng gói trong `vendor/`. Google Fonts là tùy chọn, có font hệ thống dự phòng.

Chạy thử local: `npm run build` rồi `python3 -m http.server 3000 --directory public`. Mở http://localhost:3000. Không mở `index.html` trực tiếp bằng file:// vì tài nguyên dùng đường dẫn gốc web.

## Module đã chuyển đổi

| Nhóm chức năng cũ | Module Dynalite trong catalog | Cách xử lý |
|---|---|---|
| Controller phòng | DDRC-GRMS-E | 18 DI; 13 switched outputs phân loại nguồn/chiếu sáng/rèm; DMX 64 kênh |
| Relay mở rộng | DDRC420FR, DDRC810DT-GL, DDRC1220FR-GL | 4/8/12 relay; cập nhật kích thước và DyNet |
| Input tiếp điểm | DDMIDC8 | 8 DI; 4 analog **input**, không coi là AO |
| Analog 0–10 V | DDBC1200 | 12 AO; DALI broadcast là chế độ phần cứng thay thế, không phải 12 universe địa chỉ |
| DALI địa chỉ | DDBC120-DALI, DDBC320-DALI | 1/3 line; kiểm tra 64 địa chỉ driver/line; standby relay không tính là relay tải độc lập |
| Phase dimmer | DDMC802 + 4x DGLM202 | Cấu hình 8 kênh leading-edge 2 A/kênh, cần đặt mua 4 module cắm |
| DMX gateway | DDNG485 | 512 kênh tín hiệu; cần decoder/driver tải riêng |
| Nguồn bus | DDNP1501 R8 | 15 VDC/1.5 A; kích thước 108×95×64 mm |
| SPI / Samsung P1/P2 | Chưa có tương đương trong catalog | Không tự thay nhãn; bộ chọn cấu hình báo không có phương án khi yêu cầu các chức năng này |

Đã xóa thư viện hình học GNT khỏi palette. Block chức năng Dynalite mới có kích thước theo các datasheet được liệt kê dưới đây; khi xuất LISP bố trí tủ, module được tạo thành block AutoCAD `GEC_DYN_*` và chèn bằng INSERT. Đây là block chức năng do GEC tạo, **không phải block CAD do Signify phát hành**, và vị trí terminal minh họa không phải bản đấu dây lắp đặt.

DyNet dùng RS-485 D+/D−, GND và SHLD. Controller dùng AC L/N/PE được thể hiện nguồn riêng. V+ của các nguồn controller không được nối song song; cần chia vùng nguồn và kiểm tra tải bus khi triển khai. Sơ đồ phải được kỹ sư kiểm tra theo installation instructions của đúng model/revision trước khi thi công.

## Sử dụng

- Chọn controller và module; nhập chức năng từng cổng hoặc tải template Excel Mapping.
- Mapping: `Model #n | Cổng | Tên tải/chức năng | Fuse (A)`. Cổng hỗ trợ DI1, DO1/Y1, AO1, DM1, DMX1, DA1. Số lượng DALI driver nhập ở giao diện từng line.
- Các controller cùng model được phân biệt bằng `#1`, `#2`.
- Model không thuộc catalog bị từ chối; file GNT cũ cần thiết kế lại theo khả năng thật của Dynalite.
- Tab Bố trí tủ: lấy thiết bị từ sơ đồ, điều chỉnh tủ/máng cáp; xuất AutoLISP.
- AutoCAD: APPLOAD file `.lsp`, gõ `GECDRAW`. Chưa chạy xác minh trực tiếp trong AutoCAD.
- Bộ chọn cấu hình tối thiểu hóa số module theo từng nhóm I/O, ưu tiên ít dư. Không đánh giá giá mua, tải điện, giới hạn dòng bus, liên động rèm hoặc toàn bộ ràng buộc thi công. DDRC-GRMS-E chỉ tính 7 kênh chiếu sáng trong bộ chọn tự động.

## Mã nguồn

- `index.html`, `styles.css`: giao diện tiếng Việt.
- `app.js`: catalog runtime, sơ đồ, Excel, PDF, AutoLISP và bộ chọn cấu hình.
- `panel.js`: block chức năng, bố trí tủ, mặt cắt và dự toán.
- `catalog.json`: dữ liệu model để tham khảo/tích hợp.
- `build.mjs`, `vercel.json`: đóng gói và cấu hình triển khai.

## Nguồn đối chiếu kỹ thuật

- [DDRC-GRMS-E datasheet](https://support.dynalite.com/public-download/8196/bac99210d92dc63836554e18a687ac2a)
- [DDRC420FR R12](https://dynalite.com/wp-content/uploads/2024/07/DYN_DDRC420FR_SPEC_R12.pdf)
- [DDRC810DT-GL datasheet](https://support.dynalite.com/public-download/8194/d26129f59a6807da28fb1d9d386eeb99)
- [DDRC1220FR-GL R13](https://dynalite.com/wp-content/uploads/2024/07/DYN_DDRC1220FR-GL_SPEC_R13.pdf)
- [DDBC120-DALI R19](https://dynalite.com/wp-content/uploads/2024/09/DYN_DDBC120-DALI_SPEC_R19.pdf)
- [DDBC320-DALI datasheet](https://support.dynalite.com/public-download/8929/ed95dbfa9203f0f8a0d97ee76cdf02a4)
- [DDBC1200 R14](https://dynalite.com/wp-content/uploads/2024/09/DYN_DDBC1200_SPEC_R14.pdf)
- [DDMIDC8 datasheet](https://support.dynalite.com/public-download/8935/7654b5f68e0fa7e6c16aa8fac8f384cb)
- [DDNG485 datasheet](https://support.dynalite.com/public-download/8938/d32f5a0c8c22bdd0dac7083f7aee1627)
- [DDMC802 datasheet](https://support.dynalite.com/public-download/8934/d17abb554ea356cd99256604bdef227e)
- [DGLM202 — Signify](https://www.signify.com/global/prof/lighting-controls/dynalite/philips-dynalite-dynalite-multipurpose-controllers/913703260909_EU/product)
- [DDNP1501 R8](https://dynalite.com/wp-content/uploads/2024/09/DYN_DDNP1501_SPEC_R8.pdf)

Các revision có thể khác nhau về kích thước/định mức. Cần đối chiếu mã đặt hàng và datasheet được duyệt của dự án.
