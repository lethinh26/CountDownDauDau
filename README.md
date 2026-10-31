# Ngày về · của dâu dâu

Một trang Ngày về, mobile-first, giữ cảnh 3D, một câu cổ vũ và đồng hồ ngày/giờ/phút/giây đến **00:00 ngày 20/11/2026, UTC+7**. Giờ về là mốc đầu ngày vì chưa có giờ cụ thể. Không có tiêu đề, bảng thời tiết hay hàng nút điều khiển hiển thị.

- React, TypeScript, Vite và Three.js tải riêng khi mở cảnh. Không thêm game, thư, nhạc, tài khoản hay lưu trữ trình duyệt.
- Khu vườn 3D dựng bằng hình khối theo ảnh tham chiếu: nhà bí ngô, ếch xanh, dâu vàng, cây tím và bạn ma. Chạm trực tiếp để tương tác; điều khiển hỗ trợ trình đọc màn hình/bàn phím chỉ hiện khi được focus.
- Ánh sáng theo giờ Việt Nam: sáng trong, trưa vàng, chiều ấm, đêm có trăng, sao và sao băng.
- Thời tiết từ [Open-Meteo](https://open-meteo.com/en/docs), điểm đại diện Biên Hòa, Đồng Nai (10.9574, 106.8426). Làm mới mỗi 15 phút khi trang hiện, không phải cảm biến trực tiếp. Mưa làm xuất hiện hạt mưa, gợn nước và mây tối.
- Thời tiết chạy ngầm, timeout 10 giây, tự làm mới định kỳ hoặc khi kết nối lại. Không dùng bản tin quá 1 giờ để tạo hiệu ứng; mất mạng thì vẫn chạy đồng hồ. Không cần khóa API hay quyền vị trí.
- Giới hạn 30 FPS, DPR 1.5, dừng render ngoài màn hình, hỗ trợ giảm chuyển động. Thiết bị không có WebGL dùng khu vườn SVG thay thế.

## Chạy và kiểm tra

Dưới đồng hồ có một câu cổ vũ; chạm trực tiếp để lần lượt đổi qua 8 câu rồi quay lại đầu. Nội dung nằm trong `encouragements` tại `src/App.tsx`.

Node.js 22.18+:

```sh
npm ci
npm run dev
npm test
npm run build
npm run preview -- --port 4173
```

Kiểm tra trình duyệt với dev server cổng 5173 đang chạy: `npm run test:browser`. Cần Chromium của Playwright (`npx playwright install chromium`). Có thể đặt `TEST_URL` để kiểm tra preview cổng 4173. Bài kiểm tra giả lập giờ/thời tiết, kiểm tra tương tác, responsive và fallback; ảnh chụp được ghi vào `tests/`.
Bản tĩnh ở `dist/`. Website: https://lethinh26.github.io/CountDownDauDau/

## GitHub Pages

Mã nguồn nằm ở nhánh `main`; bản build nằm ở nhánh `gh-pages`. GitHub Pages dùng **Deploy from a branch → gh-pages → / (root)**. Asset dùng đường dẫn tương đối để chạy đúng dưới `/CountDownDauDau/`.

Khi cập nhật: chạy `npm test` và `npm run build`, commit/push mã nguồn lên `main`, rồi cập nhật toàn bộ nội dung `dist/` (kể cả `.nojekyll`) vào `gh-pages` và commit/push nhánh đó. Chỉ push `main` chưa cập nhật website.

Sửa ngày trong `src/logic.ts` và ngày hiển thị trong `src/App.tsx`.
Font Be Vietnam Pro và Lora có giấy phép SIL OFL kèm trong `public/fonts/`.
