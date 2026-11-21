/* VƯỜN ƯƠM ẢO – cấu hình bản web (tệp này đặt cạnh index.html).
   Dán địa chỉ "Ứng dụng web" của Apps Script (kết thúc bằng /exec) vào giữa hai dấu nháy ở dòng SHEET_ENDPOINT
   để bài làm của học sinh được ghi vào Google Sheet của thầy cô.
   Để trống: kết quả chỉ lưu trên thiết bị của học sinh. */
window.VU_CONFIG = {
  SHEET_ENDPOINT: 'https://script.google.com/macros/s/AKfycbyVZ6gFKpVTB-yQDZRcvD7jo49v_Gn2EKC4nhT0ukrjY71cg3nS9xqjRoqk7rcTwR_vzg/exec',
  TAC_GIA: 'Minh Chúc',   /* tên tác giả hiện ở trang chủ và phiếu kết quả */
  TRUONG: ''             /* tên trường (có thể để trống) */
};
