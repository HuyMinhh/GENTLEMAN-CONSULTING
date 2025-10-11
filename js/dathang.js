// document.addEventListener("DOMContentLoaded", () => {
//   const accountBtn = document.getElementById("account-btn");
//   const loginModal = document.getElementById("loginModal");
//   const modalContent = document.querySelector(".modal-content");
//   const cartItems = document.getElementById("cart-items");
//   const tempTotal = document.getElementById("temp-total");
//   const shippingFee = document.getElementById("shipping-fee");
//   const voucherDiscount = document.getElementById("voucher-discount");
//   const overlapDiscount = document.getElementById("overlap-discount");
//   const finalTotal = document.getElementById("final-total");
//   const provinceSelect = document.getElementById("province");
//   const districtSelect = document.getElementById("district");
//   const wardSelect = document.getElementById("ward");

//   // Dữ liệu địa chính Việt Nam (chỉ bao gồm Đồng Nai, TP. Hồ Chí Minh, Hà Nội)
//   const vietnamAdministrativeData = {
//     "Hà Nội": {
//       "Quận Ba Đình": [
//         "Phường Phúc Xá",
//         "Phường Trúc Bạch",
//         "Phường Quán Thánh",
//         "Phường Ngọc Hà",
//         "Phường Điện Biên",
//         "Phường Đội Cấn",
//         "Phường Kim Mã",
//         "Phường Giảng Võ",
//         "Phường Cống Vị",
//         "Phường Liễu Giai",
//         "Phường Ngõ Trạm",
//         "Phường Vĩnh Phúc",
//         "Phường Quốc Tử Giám",
//         "Phường Hàng Bông",
//       ],
//       "Quận Hoàn Kiếm": [
//         "Phường Hàng Bài",
//         "Phường Hàng Bồ",
//         "Phường Hàng Đào",
//         "Phường Hàng Trống",
//         "Phường Cửa Đông",
//         "Phường Lý Thái Tổ",
//         "Phường Hàng Bông",
//         "Phường Hàng Gai",
//         "Phường Đồng Xuân",
//         "Phường Hàng Mã",
//         "Phường Phúc Tân",
//         "Phường Hàng Bài",
//         "Phường Hàng Buồm",
//         "Phường Hàng Bạc",
//       ],
//       "Quận Hai Bà Trưng": [
//         "Phường Bạch Đằng",
//         "Phường Thanh Nhàn",
//         "Phường Trương Định",
//         "Phường Lê Đại Hành",
//         "Phường Quỳnh Lôi",
//         "Phường Bạch Mai",
//         "Phường Minh Khai",
//         "Phường Vĩnh Tuy",
//         "Phường Đống Mác",
//         "Phường Thanh Lương",
//         "Phường Nghĩa Tân",
//         "Phường Đồng Tâm",
//         "Phường Nguyễn Du",
//       ],
//       "Quận Đống Đa": [
//         "Phường Quốc Tử Giám",
//         "Phường Hàng Bột",
//         "Phường Láng Thượng",
//         "Phường Khương Thượng",
//         "Phường Nguyễn Trung Trực",
//         "Phường Văn Miếu",
//         "Phường Quốc Tử Giám",
//         "Phường Nam Đồng",
//         "Phường Trung Liệt",
//         "Phường Văn Chương",
//         "Phường Quang Trung",
//         "Phường Trung Phụng",
//         "Phường Kim Liên",
//         "Phường Phương Liên",
//         "Phường Thịnh Quang",
//         "Phường Trung Tự",
//         "Phường Khương Mai",
//       ],
//       "Quận Tây Hồ": [
//         "Phường Quảng An",
//         "Phường Nhật Chiêu",
//         "Phường Thuỵ Khuê",
//         "Phường Bưởi",
//         "Phường Tứ Liên",
//         "Phường Yên Phụ",
//         "Phường Xuân La",
//         "Phường Phú Thượng",
//       ],
//       "Quận Cầu Giấy": [
//         "Phường Quan Hoa",
//         "Phường Nghĩa Đô",
//         "Phường Dịch Vọng",
//         "Phường Dịch Vọng Hậu",
//         "Phường Mai Dịch",
//         "Phường Yên Hoà",
//         "Phường Trung Hoà",
//         "Phường Cầu Giấy",
//         "Phường Nghĩa Tân",
//       ],
//       "Quận Thanh Xuân": [
//         "Phường Hạ Đình",
//         "Phường Khương Trung",
//         "Phường Khương Mai",
//         "Phường Thanh Xuân Bắc",
//         "Phường Thanh Xuân Nam",
//         "Phường Kim Giang",
//         "Phường Nhân Chính",
//         "Phường Thượng Đình",
//         "Phường Khương Đình",
//         "Phường Phương Liệt",
//         "Phường Thạch Bàn",
//       ],
//       "Quận Hoàng Mai": [
//         "Phường Hoàng Văn Thụ",
//         "Phường Tân Mai",
//         "Phường Giáp Bát",
//         "Phường Lĩnh Nam",
//         "Phường Mai Động",
//         "Phường Tương Mai",
//         "Phường Vĩnh Hưng",
//         "Phường Định Công",
//         "Phường Trần Phú",
//         "Phường Hoàng Liệt",
//         "Phường Yên Sở",
//         "Phường Thịnh Liệt",
//         "Phường Đại Kim",
//       ],
//       "Quận Long Biên": [
//         "Phường Thạch Bàn",
//         "Phường Phúc Lợi",
//         "Phường Gia Thụy",
//         "Phường Việt Hưng",
//         "Phường Giang Biên",
//         "Phường Đức Giang",
//         "Phường Cự Khối",
//         "Phường Nghĩa Đô",
//         "Phường Bồ Đề",
//         "Phường Sài Đồng",
//         "Phường Long Biên",
//         "Phường Thượng Thanh",
//         "Phường Phúc Đồng",
//       ],
//       "Quận Nam Từ Liêm": [
//         "Phường Mỹ Đình 1",
//         "Phường Mỹ Đình 2",
//         "Phường Tây Mỗ",
//         "Phường Mễ Trì",
//         "Phường Phú Đô",
//         "Phường Xuân Phương",
//         "Phường Đại Mỗ",
//         "Phường Trung Văn",
//         "Phường Cầu Diễn",
//         "Phường Phương Canh",
//       ],
//       "Quận Bắc Từ Liêm": [
//         "Phường Đông Ngạc",
//         "Phường Thụy Phương",
//         "Phường Xuân Đỉnh",
//         "Phường Xuân Tảo",
//         "Phường Cổ Nhuế 1",
//         "Phường Cổ Nhuế 2",
//         "Phường Minh Khai",
//         "Phường Thượng Cát",
//         "Phường Liên Mạc",
//         "Phường Đức Thắng",
//       ],
//       "Huyện Đông Anh": [
//         "Thị trấn Đông Anh",
//         "Xã Xuân Canh",
//         "Xã Xuân Nộn",
//         "Xã Nam Hồng",
//         "Xã Vân Hà",
//         "Xã Uy Nỗ",
//         "Xã Kim Chung",
//         "Xã Dục Nội",
//         "Xã Liên Hà",
//         "Xã Việt Hùng",
//         "Xã Mai Lâm",
//         "Xã Đông Hội",
//         "Xã Vĩnh Ngọc",
//         "Xã Cổ Loa",
//         "Xã Hải Bối",
//         "Xã Xuân Đường",
//         "Xã Thụy Lâm",
//         "Xã Tầm Xá",
//         "Xã Nguyên Khê",
//         "Xã Bắc Hồng",
//         "Xã Tiên Dương",
//         "Xã Võng La",
//         "Xã Đại Mạch",
//         "Xã Thuỵ Nguyên",
//       ],
//       "Huyện Gia Lâm": [
//         "Thị trấn Trâu Quỳ",
//         "Thị trấn Đông Dư",
//         "Thị trấn Yên Viên",
//         "Xã Xuân Thu",
//         "Xã Đa Tốn",
//         "Xã Kiêu Kỵ",
//         "Xã Bát Tràng",
//         "Xã Kim Lan",
//         "Xã Văn Đức",
//         "Xã Phù Đổng",
//         "Xã Trung Mầu",
//         "Xã Lệ Chi",
//         "Xã Cổ Bi",
//         "Xã Dương Quang",
//         "Xã Dương Hà",
//         "Xã Đặng Xá",
//         "Xã Phú Thị",
//         "Xã Kim Sơn",
//       ],
//       "Huyện Thanh Trì": [
//         "Thị trấn Văn Điển",
//         "Xã Tân Triều",
//         "Xã Thanh Liệt",
//         "Xã Tả Thanh Oai",
//         "Xã Hữu Hoà",
//         "Xã Tam Hiệp",
//         "Xã Yên Mỹ",
//         "Xã Vĩnh Quỳnh",
//         "Xã Ngũ Hiệp",
//         "Xã Duyên Hà",
//         "Xã Ngọc Hồi",
//         "Xã Liên Ninh",
//         "Xã Đại áng",
//         "Xã Thượng Mỗ",
//         "Xã Tứ Hiệp",
//         "Xã Tam Hưng",
//         "Xã Đông Mỹ",
//       ],
//     },
//     "TP. Hồ Chí Minh": {
//       "Quận 1": [
//         "Phường Bến Nghé",
//         "Phường Bến Thành",
//         "Phường Cô Giang",
//         "Phường Cầu Kho",
//         "Phường Đa Kao",
//         "Phường Nguyễn Cư Trinh",
//         "Phường Nguyễn Thái Bình",
//         "Phường Phạm Ngũ Lão",
//         "Phường Tân Định",
//       ],
//       "Quận 2": [
//         "Phường An Khánh",
//         "Phường An Lợi Đông",
//         "Phường An Phú",
//         "Phường Bình An",
//         "Phường Bình Khánh",
//         "Phường Bình Trưng Đông",
//         "Phường Bình Trưng Tây",
//         "Phường Cát Lái",
//         "Phường Thạnh Mỹ Lợi",
//         "Phường Thảo Điền",
//       ],
//       "Quận 3": [
//         "Phường 1",
//         "Phường 2",
//         "Phường 3",
//         "Phường 4",
//         "Phường 5",
//         "Phường 6",
//         "Phường 7",
//         "Phường 8",
//         "Phường 9",
//         "Phường 10",
//         "Phường 11",
//         "Phường 12",
//         "Phường 13",
//         "Phường 14",
//       ],
//       "Quận 4": [
//         "Phường 1",
//         "Phường 2",
//         "Phường 3",
//         "Phường 4",
//         "Phường 5",
//         "Phường 6",
//         "Phường 7",
//         "Phường 8",
//         "Phường 9",
//         "Phường 10",
//         "Phường 11",
//         "Phường 12",
//         "Phường 13",
//         "Phường 14",
//         "Phường 15",
//       ],
//       "Quận 5": [
//         "Phường 1",
//         "Phường 2",
//         "Phường 3",
//         "Phường 4",
//         "Phường 5",
//         "Phường 6",
//         "Phường 7",
//         "Phường 8",
//         "Phường 9",
//         "Phường 10",
//         "Phường 11",
//         "Phường 12",
//         "Phường 13",
//         "Phường 14",
//       ],
//       "Quận 6": [
//         "Phường 1",
//         "Phường 2",
//         "Phường 3",
//         "Phường 4",
//         "Phường 5",
//         "Phường 6",
//         "Phường 7",
//         "Phường 8",
//         "Phường 9",
//         "Phường 10",
//         "Phường 11",
//         "Phường 12",
//         "Phường 13",
//         "Phường 14",
//       ],
//       "Quận 7": [
//         "Phường Tân Phú",
//         "Phường Tân Thuận Đông",
//         "Phường Tân Thuận Tây",
//         "Phường Tân Kiêng",
//         "Phường Bình Thuận",
//         "Phường Tân Quy",
//         "Phường Phú Mỹ",
//         "Phường Tân Hưng",
//         "Phường Tân Kiểng",
//         "Phường Tân Phong",
//       ],
//       "Quận 8": [
//         "Phường 1",
//         "Phường 2",
//         "Phường 3",
//         "Phường 4",
//         "Phường 5",
//         "Phường 6",
//         "Phường 7",
//         "Phường 8",
//         "Phường 9",
//         "Phường 10",
//         "Phường 11",
//         "Phường 12",
//         "Phường 13",
//         "Phường 14",
//         "Phường 15",
//         "Phường 16",
//       ],
//       "Quận 9": [
//         "Phường Long Bình",
//         "Phường Long Thạnh Mỹ",
//         "Phường Tân Phú",
//         "Phường Hiệp Phú",
//         "Phường Tăng Nhơn Phú A",
//         "Phường Tăng Nhơn Phú B",
//         "Phường Phước Long A",
//         "Phường Phước Long B",
//         "Phường Phước Bình",
//         "Phường Trường Thạnh",
//         "Phường Long Phước",
//         "Phường Long Trường",
//         "Phường Phú Hữu",
//         "Phường Thạnh Mỹ Lợi",
//       ],
//       "Quận 10": [
//         "Phường 1",
//         "Phường 2",
//         "Phường 3",
//         "Phường 4",
//         "Phường 5",
//         "Phường 6",
//         "Phường 7",
//         "Phường 8",
//         "Phường 9",
//         "Phường 10",
//         "Phường 11",
//         "Phường 12",
//         "Phường 13",
//         "Phường 14",
//         "Phường 15",
//       ],
//       "Quận 11": [
//         "Phường 1",
//         "Phường 2",
//         "Phường 3",
//         "Phường 4",
//         "Phường 5",
//         "Phường 6",
//         "Phường 7",
//         "Phường 8",
//         "Phường 9",
//         "Phường 10",
//         "Phường 11",
//         "Phường 12",
//         "Phường 13",
//         "Phường 14",
//         "Phường 15",
//       ],
//       "Quận 12": [
//         "Phường Tân Chánh Hiệp",
//         "Phường Tân Thới Hiệp",
//         "Phường Thới An",
//         "Phường Đông Hưng Thuận",
//         "Phường Tân Hưng Thuận",
//         "Phường Hiệp Thành",
//         "Phường An Phú Đông",
//         "Phường Tân Bình",
//         "Phường Thạnh Lộc",
//         "Phường Tân Thới Nhất",
//         "Phường Linh Xuân",
//         "Phường Linh Trung",
//         "Phường Linh Chiểu",
//         "Phường Linh Tây",
//       ],
//       "Quận Bình Thạnh": [
//         "Phường 1",
//         "Phường 2",
//         "Phường 3",
//         "Phường 5",
//         "Phường 6",
//         "Phường 7",
//         "Phường 9",
//         "Phường 10",
//         "Phường 11",
//         "Phường 12",
//         "Phường 13",
//         "Phường 14",
//         "Phường 15",
//         "Phường 17",
//         "Phường 19",
//         "Phường 21",
//         "Phường 22",
//         "Phường 24",
//         "Phường 25",
//         "Phường 26",
//         "Phường 27",
//         "Phường 28",
//       ],
//       "Quận Gò Vấp": [
//         "Phường 1",
//         "Phường 2",
//         "Phường 3",
//         "Phường 4",
//         "Phường 5",
//         "Phường 6",
//         "Phường 7",
//         "Phường 8",
//         "Phường 9",
//         "Phường 10",
//         "Phường 11",
//         "Phường 12",
//         "Phường 13",
//         "Phường 14",
//         "Phường 15",
//         "Phường 16",
//         "Phường 17",
//       ],
//       "Quận Phú Nhuận": [
//         "Phường 1",
//         "Phường 2",
//         "Phường 3",
//         "Phường 4",
//         "Phường 5",
//         "Phường 7",
//         "Phường 8",
//         "Phường 9",
//         "Phường 10",
//         "Phường 11",
//         "Phường 12",
//         "Phường 13",
//         "Phường 14",
//         "Phường 15",
//         "Phường 17",
//       ],
//       "Quận Tân Bình": [
//         "Phường 1",
//         "Phường 2",
//         "Phường 3",
//         "Phường 4",
//         "Phường 5",
//         "Phường 6",
//         "Phường 7",
//         "Phường 8",
//         "Phường 9",
//         "Phường 10",
//         "Phường 11",
//         "Phường 12",
//         "Phường 13",
//         "Phường 14",
//         "Phường 15",
//       ],
//       "Quận Tân Phú": [
//         "Phường Hòa Thạnh",
//         "Phường Phú Thạnh",
//         "Phường Phú Trung",
//         "Phường Phú Thượng",
//         "Phường Tân Quý",
//         "Phường Tân Thành",
//         "Phường Sơn Kỳ",
//         "Phường Tân Sơn Nhì",
//         "Phường Tây Thạnh",
//         "Phường Bình Hưng Hòa",
//         "Phường Bình Hưng Hoà A",
//         "Phường Bình Hưng Hoà B",
//         "Phường Hòa Thới",
//         "Phường Hiệp Tân",
//       ],
//       "Quận Bình Tân": [
//         "Phường An Lạc",
//         "Phường An Lạc A",
//         "Phường Bình Hưng",
//         "Phường Bình Hưng Hòa",
//         "Phường Bình Hưng Hòa A",
//         "Phường Bình Hưng Hòa B",
//         "Phường Tân Tạo",
//         "Phường Tân Tạo A",
//         "Phường Tân Thới Hiệp",
//         "Phường Tân Thới Nhất",
//         "Phường Bình Trị Đông",
//         "Phường Bình Trị Đông A",
//         "Phường Bình Trị Đông B",
//       ],
//       "Huyện Củ Chi": [
//         "Thị trấn Củ Chi",
//         "Xã Phú Hòa Đông",
//         "Xã Tân Thạnh Đông",
//         "Xã Tân Thạnh Tây",
//         "Xã Tân An Hội",
//         "Xã Phước Thạnh",
//         "Xã Phước Hiệp",
//         "Xã Trung Lập Thượng",
//         "Xã Trung Lập Hạ",
//         "Xã Thái Mỹ",
//         "Xã Tân Phú Trung",
//         "Xã Tân Thông Hội",
//         "Xã Nhuận Đức",
//         "Xã Hòa Phú",
//         "Xã Phạm Văn Cội",
//         "Xã Phú Mỹ Hưng",
//         "Xã Bình Mỹ",
//         "Xã An Phú",
//         "Xã An Nhơn Tây",
//         "Xã Bàu Đưng",
//       ],
//       "Huyện Hóc Môn": [
//         "Thị trấn Hóc Môn",
//         "Xã Tân Xuân",
//         "Xã Tân Thới Nhì",
//         "Xã Nhị Bình",
//         "Xã Xuân Thới Sơn",
//         "Xã Xuân Thới Thượng",
//         "Xã Xuân Thới Đông",
//         "Xã Đông Thạnh",
//         "Xã Tân Hiệp",
//         "Xã Thới Tam Thôn",
//         "Xã Bà Điểm",
//         "Xã Trung Chánh",
//         "Xã Xuân Thới Thượng 1",
//         "Xã Xuân Thới Thượng 2",
//       ],
//       "Huyện Bình Chánh": [
//         "Thị trấn Tân Túc",
//         "Xã Bình Chánh",
//         "Xã Điền Hòa",
//         "Xã Đức Hòa",
//         "Xã Đức Lập Hạ",
//         "Xã Đức Lập Thượng",
//         "Xã Tân Quý Tây",
//         "Xã Bình Lợi",
//         "Xã Lê Minh Xuân",
//         "Xã Tân Kiên",
//         "Xã An Phú Tây",
//         "Xã Hưng Long",
//         "Xã Tân Nhựt",
//         "Xã Phạm Văn Hai",
//         "Xã Bình Hưng",
//         "Xã Tân Quý Đông",
//         "Xã Vĩnh Lộc A",
//         "Xã Vĩnh Lộc B",
//       ],
//       "Huyện Nhà Bè": [
//         "Thị trấn Nhà Bè",
//         "Xã Phước Kiển",
//         "Xã Nhơn Đức",
//         "Xã Long Thới",
//         "Xã Hiệp Phước",
//         "Xã Phú Xuân",
//         "Xã Tân Nhựt",
//         "Xã Tân Hòa",
//         "Xã Hưng Long",
//         "Xã Lê Minh Xuân",
//       ],
//       "Huyện Cần Giờ": [
//         "Thị trấn Cần Thạnh",
//         "Xã An Thới Đông",
//         "Xã Thạnh An",
//         "Xã Long Hòa",
//         "Xã Lý Nhơn",
//         "Xã Tam Thôn Hiệp",
//       ],
//     },
//     "Đồng Nai": {
//       "Thành phố Biên Hòa": [
//         "Phường Tân Phong",
//         "Phường Tân Biên",
//         "Phường Hòa Bình",
//         "Phường Quyết Thắng",
//         "Phường Tân Tiến",
//         "Phường Thanh Bình",
//         "Phường Trung Dũng",
//         "Phường Thống Nhất",
//         "Phường Long Bình",
//         "Phường Long Bình Tân",
//         "Phường Tam Hiệp",
//         "Phường Bửu Hòa",
//         "Phường Long Hưng",
//         "Phường Tam Hòa",
//         "Phường Phước Tân",
//         "Phường Tân Vạn",
//         "Phường Hiệp Hòa",
//         "Phường Hố Nai",
//         "Phường Tân Hạnh",
//         "Phường Tân Hòa",
//         "Phường Tân Mai",
//         "Phường Quang Vinh",
//         "Phường An Bình",
//         "Phường Thống Nhất",
//         "Phường Long Bình",
//         "Phường Long Bình Tân",
//         "Phường Tam Hiệp",
//         "Phường Bửu Long",
//         "Phường Long Bình",
//         "Phường Long Bình Tân",
//         "Phường Tam Hiệp",
//         "Phường Bửu Long",
//       ],
//       "Thành phố Long Khánh": [
//         "Phường Xuân Trung",
//         "Phường Xuân Thanh",
//         "Phường Xuân Bình",
//         "Phường Xuân An",
//         "Phường Xuân Hoà",
//         "Phường Bàu Sen",
//         "Phường Suối Tre",
//         "Phường Bảo Vinh",
//         "Phường Xuân Lập",
//       ],
//       "Huyện Tân Phú": [
//         "Thị trấn Tân Phú",
//         "Xã Tân Hòa",
//         "Xã Tân Hưng",
//         "Xã Tân Phú",
//         "Xã Phú Trung",
//         "Xã Phú Điền",
//         "Xã Phú Lập",
//         "Xã Phú Lâm",
//         "Xã Phú Bình",
//         "Xã Phú Thanh",
//         "Xã Trưởng Thạnh",
//         "Xã Phú Xuân",
//       ],
//       "Huyện Vĩnh Cửu": [
//         "Thị trấn Vĩnh An",
//         "Xã Bình Lợi",
//         "Xã Thạnh Phú",
//         "Xã Thống Nhất",
//         "Xã Tân An",
//         "Xã Hiếu Liêm",
//         "Xã Vĩnh Tân",
//         "Xã Phú Lý",
//         "Xã Vĩnh Hưng",
//         "Xã Tân Bình",
//       ],
//       "Huyện Định Quán": [
//         "Thị trấn Định Quán",
//         "Xã Thanh Sơn",
//         "Xã Phú Tân",
//         "Xã Phú Vinh",
//         "Xã Phú Lộc",
//         "Xã Phú Cường",
//         "Xã Gia Canh",
//         "Xã Suối Nho",
//         "Xã La Ngà",
//         "Xã Quảng Lợi",
//         "Xã Phú Hòa",
//         "Xã Ngọc Định",
//         "Xã Phú Lệ",
//       ],
//       "Huyện Trảng Bom": [
//         "Thị trấn Trảng Bom",
//         "Xã Thanh Bình",
//         "Xã Hưng Thịnh",
//         "Xã Quảng Tiến",
//         "Xã Tây Hòa",
//         "Xã An Viễn",
//         "Xã Trung Hòa",
//         "Xã Cây Gáo",
//         "Xã Bàu Hàm 2",
//         "Xã Sông Thao",
//         "Xã Sông Trầu",
//         "Xã Đông Hoà",
//         "Xã Bắc Sơn",
//         "Xã Đồi 61",
//         "Xã Hợp Nhất",
//         "Xã Tân Hạnh",
//         "Xã Bình Minh",
//         "Xã Thạnh Phú",
//         "Xã Gia Tân 1",
//         "Xã Gia Tân 2",
//         "Xã Gia Tân 3",
//       ],
//       "Huyện Thống Nhất": [
//         "Thị trấn Dầu Giây",
//         "Xã Gia Kiệm",
//         "Xã Hưng Lộc",
//         "Xã Quang Trung",
//         "Xã Lộ 25",
//         "Xã Xuân Thiện",
//         "Xã Xuân Thạnh",
//         "Xã Sông Nhạn",
//         "Xã Xuân Hòa",
//         "Xã Bàu Hàm 2",
//         "Xã Bàu Đồn",
//       ],
//       "Huyện Cẩm Mỹ": [
//         "Thị trấn Cẩm Mỹ",
//         "Xã Thạnh Phú",
//         "Xã Suối Cát",
//         "Xã Nhân Nghĩa",
//         "Xã Sông Thơm",
//         "Xã Thừa Đức",
//         "Xã Lương Hòa",
//         "Xã Long Giao",
//         "Xã Xuân Đông",
//         "Xã Xuân Tây",
//         "Xã Thắng Lợi",
//         "Xã Hòa Thạnh",
//         "Xã Sông Ray",
//         "Xã Bàu Hàm 2",
//       ],
//       "Huyện Long Thành": [
//         "Thị trấn Long Thành",
//         "Xã An Phước",
//         "Xã Long An",
//         "Xã Long Phước",
//         "Xã Phước Bình",
//         "Xã Bình An",
//         "Xã Long Đức",
//         "Xã Đại Phước",
//         "Xã Phước Thái",
//         "Xã Tam An",
//         "Xã Lộc An",
//         "Xã Long Hưng",
//         "Xã Phước Long Thọ",
//       ],
//       "Huyện Nhơn Trạch": [
//         "Thị trấn Hiệp Phước",
//         "Xã Phước Thiền",
//         "Xã Nhơn Phú",
//         "Xã Long Thọ",
//         "Xã Long Tân",
//         "Xã Đại Phước",
//         "Xã Phú Hội",
//         "Xã Phú Thạnh",
//         "Xã Phú Đông",
//         "Xã Long Tân",
//         "Xã Vĩnh Thanh",
//         "Xã Phước An",
//       ],
//       "Huyện Xuân Lộc": [
//         "Thị trấn Gia Ray",
//         "Xã Lang Minh",
//         "Xã Suối Cao",
//         "Xã Xuân Định",
//         "Xã Xuân Hưng",
//         "Xã Xuân Hòa",
//         "Xã Xuân Trường",
//         "Xã Xuân Phú",
//         "Xã Xuân Tín",
//         "Xã Xuân Tân",
//         "Xã Xuân Lai",
//         "Xã Xuân Bắc",
//         "Xã Xuân Đông",
//         "Xã Xuân Tây",
//       ],
//       "Huyện Long Thành": [
//         "Thị trấn Long Thành",
//         "Xã An Phước",
//         "Xã Long An",
//         "Xã Long Phước",
//         "Xã Phước Bình",
//         "Xã Bình An",
//         "Xã Long Đức",
//         "Xã Đại Phước",
//         "Xã Phước Thái",
//         "Xã Tam An",
//         "Xã Lộc An",
//         "Xã Long Hưng",
//         "Xã Phước Long Thọ",
//       ],
//     },
//   };

//   // Khởi tạo combobox tỉnh/thành phố
//   function populateProvinces() {
//     provinceSelect.innerHTML = '<option value="">Chọn tỉnh/thành phố</option>';
//     for (let province in vietnamAdministrativeData) {
//       const option = document.createElement("option");
//       option.value = province;
//       option.textContent = province;
//       provinceSelect.appendChild(option);
//     }
//   }

//   // Khởi tạo combobox quận/huyện dựa trên tỉnh/thành phố
//   function populateDistricts(province) {
//     districtSelect.innerHTML = '<option value="">Chọn quận/huyện</option>';
//     wardSelect.innerHTML = '<option value="">Chọn phường/xã</option>';
//     if (province && vietnamAdministrativeData[province]) {
//       for (let district in vietnamAdministrativeData[province]) {
//         const option = document.createElement("option");
//         option.value = district;
//         option.textContent = district;
//         districtSelect.appendChild(option);
//       }
//     }
//   }

//   // Khởi tạo combobox phường/xã dựa trên quận/huyện
//   function populateWards(province, district) {
//     wardSelect.innerHTML = '<option value="">Chọn phường/xã</option>';
//     if (
//       province &&
//       district &&
//       vietnamAdministrativeData[province] &&
//       vietnamAdministrativeData[province][district]
//     ) {
//       vietnamAdministrativeData[province][district].forEach((ward) => {
//         const option = document.createElement("option");
//         option.value = ward;
//         option.textContent = ward;
//         wardSelect.appendChild(option);
//       });
//     }
//   }

//   // Sự kiện thay đổi tỉnh/thành phố
//   provinceSelect.addEventListener("change", () => {
//     const selectedProvince = provinceSelect.value;
//     populateDistricts(selectedProvince);
//     populateWards(selectedProvince, districtSelect.value);
//   });

//   // Sự kiện thay đổi quận/huyện
//   districtSelect.addEventListener("change", () => {
//     const selectedProvince = provinceSelect.value;
//     const selectedDistrict = districtSelect.value;
//     populateWards(selectedProvince, selectedDistrict);
//   });

//   // Khởi tạo dữ liệu ban đầu
//   populateProvinces();

//   if (accountBtn && loginModal && modalContent) {
//     const registeredAccounts =
//       JSON.parse(localStorage.getItem("registeredAccounts")) || [];
//     const currentUserEmail = localStorage.getItem("currentUser");

//     if (currentUserEmail) {
//       const account = registeredAccounts.find(
//         (acc) => acc.email === currentUserEmail
//       );
//       const displayName = account
//         ? `${account.firstname || ""} ${account.lastname || ""}`.trim()
//         : "Tài khoản";

//       accountBtn.innerHTML = `
//                 <i class="fa-regular fa-user"></i>
//                 <span class="action-title">${displayName}</span>
//             `;
//     } else {
//       accountBtn.innerHTML = `
//                 <i class="fa-regular fa-user"></i>
//                 <span class="action-title">Tài khoản</span>
//             `;
//     }

//     accountBtn.addEventListener("click", function (e) {
//       e.preventDefault();
//       if (currentUserEmail) {
//         if (confirm("Bạn có muốn đăng xuất không?")) {
//           localStorage.removeItem("currentUser");
//           accountBtn.innerHTML = `
//                         <i class="fa-regular fa-user"></i>
//                         <span class="action-title">Tài khoản</span>
//                     `;
//           loginModal.style.display = "block";
//           modalContent.style.position = "absolute";
//           modalContent.style.top =
//             accountBtn.getBoundingClientRect().height + 21 + "px";
//           modalContent.style.left = "22px";
//           modalContent.style.transform = "translateX(-50%)";
//           modalContent.style.width = "180px";
//           modalContent.style.minHeight = "40px";
//           accountBtn.appendChild(modalContent);
//         }
//       } else {
//         loginModal.style.display = "block";
//         modalContent.style.position = "absolute";
//         modalContent.style.top =
//           accountBtn.getBoundingClientRect().height + 21 + "px";
//         modalContent.style.left = "22px";
//         modalContent.style.transform = "translateX(-50%)";
//         modalContent.style.width = "180px";
//         modalContent.style.minHeight = "40px";
//         accountBtn.appendChild(modalContent);
//       }
//     });

//     window.addEventListener("click", function (e) {
//       if (!accountBtn.contains(e.target) && !loginModal.contains(e.target)) {
//         loginModal.style.display = "none";
//         if (modalContent.parentElement === accountBtn) {
//           loginModal.appendChild(modalContent);
//         }
//       }
//     });

//     window.addEventListener("resize", function () {
//       if (loginModal.style.display === "block") {
//         const rect = accountBtn.getBoundingClientRect();
//         modalContent.style.top = rect.height + 21 + "px";
//         modalContent.style.left = "22px";
//         modalContent.style.transform = "translateX(-50%)";
//         modalContent.style.width = "180px";
//         modalContent.style.minHeight = "40px";
//       }
//     });
//   } else {
//     console.error("Modal elements not fully found!", {
//       accountBtn,
//       loginModal,
//       modalContent,
//     });
//   }

//   // Quản lý giỏ hàng
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   function updateCartDisplay() {
//     if (!cartItems) return;

//     cartItems.innerHTML = "";
//     if (cart.length === 0) {
//       cartItems.innerHTML = `<p class="no-products">Không có sản phẩm</p>`;
//       tempTotal.textContent = "0đ";
//       shippingFee.textContent = "Miễn phí";
//       voucherDiscount.textContent = "0đ";
//       overlapDiscount.textContent = "0đ";
//       finalTotal.textContent = "0đ (Đã giảm 0đ từ giá gốc)";
//     } else {
//       cart.forEach((item, index) => {
//         const div = document.createElement("div");
//         div.classList.add("cart-item");
//         div.innerHTML = `
//           <img src="${item.images[0] || "/img/placeholder.jpg"}" alt="${
//           item.name
//         }" class="item-image">
//           <div class="item-details">
//             <p class="item-name">${item.name}</p>
//             <p class="item-attributes">Đổi ý 15 ngày</p>
//             <p class="item-attributes">${item.selectedColor || "N/A"} / ${
//           item.selectedSize || "N/A"
//         }</p>
//             <div class="quantity-control">
//               <button class="quantity-btn decrease" data-index="${index}">-</button>
//               <input type="number" class="quantity-input" value="${
//                 item.quantity || 1
//               }" min="1" data-index="${index}">
//               <button class="quantity-btn increase" data-index="${index}">+</button>
//             </div>
//             <p class="item-price">${(
//               (item.newPrice || item.price) * (item.quantity || 1)
//             ).toLocaleString()}đ</p>
//           </div>
//           <button class="remove-item" data-index="${index}">X</button>
//         `;
//         cartItems.appendChild(div);
//       });
//       updateTotal();
//       attachEventListeners();
//     }
//   }

//   function updateTotal() {
//     let total = cart.reduce(
//       (sum, item) => sum + (item.newPrice || item.price) * (item.quantity || 1),
//       0
//     );
//     let discount = parseInt(voucherDiscount.textContent.replace(/[^0-9]/g, "")) || 0;
//     console.log("Debug - Total:", total, "Discount:", discount); // Debug log
//     tempTotal.textContent = total.toLocaleString() + "đ";
//     shippingFee.textContent = "Miễn phí";
//     finalTotal.textContent =
//       (total - discount).toLocaleString() +
//       "đ (Đã giảm " +
//       discount.toLocaleString() +
//       "đ từ giá gốc)";
//   }

//   // Voucher handling
//   const voucherRadios = document.querySelectorAll('input[name="voucher"]');
//   const applyVoucherBtn = document.querySelector(".apply-voucher-btn");
//   const voucherInput = document.querySelector(".voucher-input");

//   function applyDiscount(voucherCode) {
//     let total = cart.reduce(
//       (sum, item) => sum + (item.newPrice || item.price) * (item.quantity || 1),
//       0
//     );
//     let discount = 0;

//     console.log("Debug - Applying voucher:", voucherCode, "Total:", total); // Debug log

//     if (voucherCode === "D10" && total >= 200000) {
//       discount = Math.min(total * 0.1, 20000);
//       document.getElementById("voucher-d10").checked = true;
//     } else if (voucherCode === "D200" && total >= 1499000) {
//       discount = 200000;
//       document.getElementById("voucher-d200").checked = true;
//     } else if (voucherCode === "D100" && total >= 999000) {
//       discount = 100000;
//       document.getElementById("voucher-d100").checked = true;
//     } else {
//       voucherRadios.forEach((radio) => (radio.checked = false));
//       discount = 0;
//       alert("Mã giảm giá không hợp lệ hoặc không đủ điều kiện áp dụng!");
//     }

//     console.log("Debug - Discount applied:", discount); // Debug log
//     voucherDiscount.textContent = discount.toLocaleString() + "đ";
//     updateTotal();
//   }

//   voucherRadios.forEach((radio) => {
//     radio.addEventListener("change", () => {
//       let total = cart.reduce(
//         (sum, item) =>
//           sum + (item.newPrice || item.price) * (item.quantity || 1),
//         0
//       );
//       let discount = 0;

//       console.log("Debug - Radio changed:", radio.value, "Total:", total); // Debug log

//       if (radio.value === "D10" && total >= 200000) {
//         discount = Math.min(total * 0.1, 20000);
//       } else if (radio.value === "D200" && total >= 1499000) {
//         discount = 200000;
//       } else if (radio.value === "D100" && total >= 999000) {
//         discount = 100000;
//       } else {
//         discount = 0;
//         alert(
//           `Đơn hàng không đủ điều kiện cho voucher ${radio.value}! Tổng tiền: ${total.toLocaleString()}đ`
//         );
//         radio.checked = false;
//       }

//       voucherDiscount.textContent = discount.toLocaleString() + "đ";
//       updateTotal();
//     });
//   });

//   applyVoucherBtn.addEventListener("click", () => {
//     const voucherCode = voucherInput.value.trim().toUpperCase();
//     if (voucherCode) {
//       applyDiscount(voucherCode);
//       voucherInput.value = "";
//     } else {
//       alert("Vui lòng nhập mã giảm giá!");
//     }
//   });

//   // Form submission
//   const orderForm = document.getElementById("orderForm");
//   orderForm?.addEventListener("submit", (e) => {
//     e.preventDefault();
//     if (cart.length > 0) {
//       alert("Đơn hàng đã được xác nhận!");
//       cart = [];
//       localStorage.setItem("cart", JSON.stringify(cart));
//       updateCartDisplay();
//       orderForm.reset();
//     } else {
//       alert("Vui lòng thêm sản phẩm vào giỏ hàng trước khi xác nhận!");
//     }
//   });

//   // Hàm gắn tất cả các sự kiện
//   function attachEventListeners() {
//     const decreaseBtns = document.querySelectorAll(".quantity-btn.decrease");
//     const increaseBtns = document.querySelectorAll(".quantity-btn.increase");
//     const quantityInputs = document.querySelectorAll(".quantity-input");
//     const removeBtns = document.querySelectorAll(".remove-item");

//     decreaseBtns.forEach((btn) => {
//       btn.removeEventListener("click", handleDecrease);
//       btn.addEventListener("click", handleDecrease);
//     });

//     increaseBtns.forEach((btn) => {
//       btn.removeEventListener("click", handleIncrease);
//       btn.addEventListener("click", handleIncrease);
//     });

//     quantityInputs.forEach((input) => {
//       input.removeEventListener("change", handleQuantityChange);
//       input.addEventListener("change", handleQuantityChange);
//     });

//     removeBtns.forEach((btn) => {
//       btn.removeEventListener("click", handleRemove);
//       btn.addEventListener("click", handleRemove);
//     });
//   }

//   function handleDecrease(e) {
//     const index = e.target.dataset.index;
//     if (cart[index].quantity > 1) {
//       cart[index].quantity--;
//       localStorage.setItem("cart", JSON.stringify(cart));
//       updateCartDisplay();
//     }
//   }

//   function handleIncrease(e) {
//     const index = e.target.dataset.index;
//     cart[index].quantity++;
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartDisplay();
//   }

//   function handleQuantityChange(e) {
//     const index = e.target.dataset.index;
//     let value = parseInt(e.target.value);
//     if (isNaN(value) || value < 1) value = 1;
//     cart[index].quantity = value;
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartDisplay();
//   }

//   function handleRemove(e) {
//     const index = e.target.dataset.index;
//     cart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartDisplay();
//   }

//   // Thêm sự kiện tìm kiếm
//   const searchForm = document.getElementById("searchForm");
//   const searchInput = document.getElementById("searchInput");
//   const searchResults = document.getElementById("searchResults");

//   if (searchForm && searchInput && searchResults) {
//     searchForm.addEventListener("submit", (e) => {
//       e.preventDefault();
//       const query = searchInput.value.trim();
//       searchProducts(query);
//     });

//     searchInput.addEventListener("input", (e) => {
//       const query = e.target.value.trim();
//       searchProducts(query);
//     });

//     document.addEventListener("click", (e) => {
//       if (!searchForm.contains(e.target)) {
//         searchResults.classList.remove("active");
//       }
//     });
//   }

//   // Hàm tìm kiếm sản phẩm
//   function searchProducts(query) {
//     const products = JSON.parse(localStorage.getItem("products")) || [];
//     const searchResults = document.getElementById("searchResults");
//     if (!searchResults) return;

//     searchResults.innerHTML = "";

//     if (query.trim() === "") {
//       searchResults.classList.remove("active");
//       return;
//     }

//     const filteredProducts = products.filter((product) =>
//       product.name.toLowerCase().includes(query.toLowerCase())
//     );

//     if (filteredProducts.length > 0) {
//       filteredProducts.forEach((product) => {
//         const div = document.createElement("div");
//         div.classList.add("search-result-item");
//         div.innerHTML = `
//           <img src="${
//             product.images && product.images.length > 0
//               ? product.images[0]
//               : "/img/placeholder.jpg"
//           }" alt="${product.name}">
//           <h4>${product.name}</h4>
//         `;
//         div.addEventListener("click", () => {
//           window.location.href = `chitiet.html?id=${encodeURIComponent(
//             product.name
//           )}`;
//           searchResults.classList.remove("active");
//         });
//         searchResults.appendChild(div);
//       });
//       searchResults.classList.add("active");
//     } else {
//       const div = document.createElement("div");
//       div.classList.add("search-result-item");
//       div.textContent = "Không thấy kết quả tìm kiếm";
//       div.style.textAlign = "center";
//       div.style.color = "#777";
//       searchResults.appendChild(div);
//       searchResults.classList.add("active");
//     }
//   }

//   // Khởi tạo giỏ hàng và sự kiện
//   updateCartDisplay();
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const accountBtn = document.getElementById("account-btn");
//   const loginModal = document.getElementById("loginModal");
//   const modalContent = document.querySelector(".modal-content");
//   const cartItems = document.getElementById("cart-items");
//   const tempTotal = document.getElementById("temp-total");
//   const shippingFee = document.getElementById("shipping-fee");
//   const voucherDiscount = document.getElementById("voucher-discount");
//   const overlapDiscount = document.getElementById("overlap-discount");
//   const finalTotal = document.getElementById("final-total");
//   const footerTotal = document.getElementById("footer-total");
//   const footerDiscount = document.getElementById("footer-discount");
//   const provinceSelect = document.getElementById("province");
//   const districtSelect = document.getElementById("district");
//   const wardSelect = document.getElementById("ward");

//   const vietnamAdministrativeData = {
//     "Hà Nội": {
//       "Quận Ba Đình": [
//         "Phường Phúc Xá",
//         "Phường Trúc Bạch",
//         "Phường Quán Thánh",
//         "Phường Ngọc Hà",
//         "Phường Điện Biên",
//         "Phường Đội Cấn",
//         "Phường Kim Mã",
//         "Phường Giảng Võ",
//         "Phường Cống Vị",
//         "Phường Liễu Giai",
//         "Phường Ngõ Trạm",
//         "Phường Vĩnh Phúc",
//         "Phường Quốc Tử Giám",
//         "Phường Hàng Bông",
//       ],
//       "Quận Hoàn Kiếm": [
//         "Phường Hàng Bài",
//         "Phường Hàng Bồ",
//         "Phường Hàng Đào",
//         "Phường Hàng Trống",
//         "Phường Cửa Đông",
//         "Phường Lý Thái Tổ",
//         "Phường Hàng Bông",
//         "Phường Hàng Gai",
//         "Phường Đồng Xuân",
//         "Phường Hàng Mã",
//         "Phường Phúc Tân",
//         "Phường Hàng Bài",
//         "Phường Hàng Buồm",
//         "Phường Hàng Bạc",
//       ],
//       "Quận Hai Bà Trưng": [
//         "Phường Bạch Đằng",
//         "Phường Thanh Nhàn",
//         "Phường Trương Định",
//         "Phường Lê Đại Hành",
//         "Phường Quỳnh Lôi",
//         "Phường Bạch Mai",
//         "Phường Minh Khai",
//         "Phường Vĩnh Tuy",
//         "Phường Đống Mác",
//         "Phường Thanh Lương",
//         "Phường Nghĩa Tân",
//         "Phường Đồng Tâm",
//         "Phường Nguyễn Du",
//       ],
//       "Quận Đống Đa": [
//         "Phường Quốc Tử Giám",
//         "Phường Hàng Bột",
//         "Phường Láng Thượng",
//         "Phường Khương Thượng",
//         "Phường Nguyễn Trung Trực",
//         "Phường Văn Miếu",
//         "Phường Quốc Tử Giám",
//         "Phường Nam Đồng",
//         "Phường Trung Liệt",
//         "Phường Văn Chương",
//         "Phường Quang Trung",
//         "Phường Trung Phụng",
//         "Phường Kim Liên",
//         "Phường Phương Liên",
//         "Phường Thịnh Quang",
//         "Phường Trung Tự",
//         "Phường Khương Mai",
//       ],
//       "Quận Tây Hồ": [
//         "Phường Quảng An",
//         "Phường Nhật Chiêu",
//         "Phường Thuỵ Khuê",
//         "Phường Bưởi",
//         "Phường Tứ Liên",
//         "Phường Yên Phụ",
//         "Phường Xuân La",
//         "Phường Phú Thượng",
//       ],
//       "Quận Cầu Giấy": [
//         "Phường Quan Hoa",
//         "Phường Nghĩa Đô",
//         "Phường Dịch Vọng",
//         "Phường Dịch Vọng Hậu",
//         "Phường Mai Dịch",
//         "Phường Yên Hoà",
//         "Phường Trung Hoà",
//         "Phường Cầu Giấy",
//         "Phường Nghĩa Tân",
//       ],
//       "Quận Thanh Xuân": [
//         "Phường Hạ Đình",
//         "Phường Khương Trung",
//         "Phường Khương Mai",
//         "Phường Thanh Xuân Bắc",
//         "Phường Thanh Xuân Nam",
//         "Phường Kim Giang",
//         "Phường Nhân Chính",
//         "Phường Thượng Đình",
//         "Phường Khương Đình",
//         "Phường Phương Liệt",
//         "Phường Thạch Bàn",
//       ],
//       "Quận Hoàng Mai": [
//         "Phường Hoàng Văn Thụ",
//         "Phường Tân Mai",
//         "Phường Giáp Bát",
//         "Phường Lĩnh Nam",
//         "Phường Mai Động",
//         "Phường Tương Mai",
//         "Phường Vĩnh Hưng",
//         "Phường Định Công",
//         "Phường Trần Phú",
//         "Phường Hoàng Liệt",
//         "Phường Yên Sở",
//         "Phường Thịnh Liệt",
//         "Phường Đại Kim",
//       ],
//       "Quận Long Biên": [
//         "Phường Thạch Bàn",
//         "Phường Phúc Lợi",
//         "Phường Gia Thụy",
//         "Phường Việt Hưng",
//         "Phường Giang Biên",
//         "Phường Đức Giang",
//         "Phường Cự Khối",
//         "Phường Nghĩa Đô",
//         "Phường Bồ Đề",
//         "Phường Sài Đồng",
//         "Phường Long Biên",
//         "Phường Thượng Thanh",
//         "Phường Phúc Đồng",
//       ],
//       "Quận Nam Từ Liêm": [
//         "Phường Mỹ Đình 1",
//         "Phường Mỹ Đình 2",
//         "Phường Tây Mỗ",
//         "Phường Mễ Trì",
//         "Phường Phú Đô",
//         "Phường Xuân Phương",
//         "Phường Đại Mỗ",
//         "Phường Trung Văn",
//         "Phường Cầu Diễn",
//         "Phường Phương Canh",
//       ],
//       "Quận Bắc Từ Liêm": [
//         "Phường Đông Ngạc",
//         "Phường Thụy Phương",
//         "Phường Xuân Đỉnh",
//         "Phường Xuân Tảo",
//         "Phường Cổ Nhuế 1",
//         "Phường Cổ Nhuế 2",
//         "Phường Minh Khai",
//         "Phường Thượng Cát",
//         "Phường Liên Mạc",
//         "Phường Đức Thắng",
//       ],
//       "Huyện Đông Anh": [
//         "Thị trấn Đông Anh",
//         "Xã Xuân Canh",
//         "Xã Xuân Nộn",
//         "Xã Nam Hồng",
//         "Xã Vân Hà",
//         "Xã Uy Nỗ",
//         "Xã Kim Chung",
//         "Xã Dục Nội",
//         "Xã Liên Hà",
//         "Xã Việt Hùng",
//         "Xã Mai Lâm",
//         "Xã Đông Hội",
//         "Xã Vĩnh Ngọc",
//         "Xã Cổ Loa",
//         "Xã Hải Bối",
//         "Xã Xuân Đường",
//         "Xã Thụy Lâm",
//         "Xã Tầm Xá",
//         "Xã Nguyên Khê",
//         "Xã Bắc Hồng",
//         "Xã Tiên Dương",
//         "Xã Võng La",
//         "Xã Đại Mạch",
//         "Xã Thuỵ Nguyên",
//       ],
//       "Huyện Gia Lâm": [
//         "Thị trấn Trâu Quỳ",
//         "Thị trấn Đông Dư",
//         "Thị trấn Yên Viên",
//         "Xã Xuân Thu",
//         "Xã Đa Tốn",
//         "Xã Kiêu Kỵ",
//         "Xã Bát Tràng",
//         "Xã Kim Lan",
//         "Xã Văn Đức",
//         "Xã Phù Đổng",
//         "Xã Trung Mầu",
//         "Xã Lệ Chi",
//         "Xã Cổ Bi",
//         "Xã Dương Quang",
//         "Xã Dương Hà",
//         "Xã Đặng Xá",
//         "Xã Phú Thị",
//         "Xã Kim Sơn",
//       ],
//       "Huyện Thanh Trì": [
//         "Thị trấn Văn Điển",
//         "Xã Tân Triều",
//         "Xã Thanh Liệt",
//         "Xã Tả Thanh Oai",
//         "Xã Hữu Hoà",
//         "Xã Tam Hiệp",
//         "Xã Yên Mỹ",
//         "Xã Vĩnh Quỳnh",
//         "Xã Ngũ Hiệp",
//         "Xã Duyên Hà",
//         "Xã Ngọc Hồi",
//         "Xã Liên Ninh",
//         "Xã Đại áng",
//         "Xã Thượng Mỗ",
//         "Xã Tứ Hiệp",
//         "Xã Tam Hưng",
//         "Xã Đông Mỹ",
//       ],
//     },
//     "TP. Hồ Chí Minh": {
//       "Quận 1": [
//         "Phường Bến Nghé",
//         "Phường Bến Thành",
//         "Phường Cô Giang",
//         "Phường Cầu Kho",
//         "Phường Đa Kao",
//         "Phường Nguyễn Cư Trinh",
//         "Phường Nguyễn Thái Bình",
//         "Phường Phạm Ngũ Lão",
//         "Phường Tân Định",
//       ],
//       "Quận 2": [
//         "Phường An Khánh",
//         "Phường An Lợi Đông",
//         "Phường An Phú",
//         "Phường Bình An",
//         "Phường Bình Khánh",
//         "Phường Bình Trưng Đông",
//         "Phường Bình Trưng Tây",
//         "Phường Cát Lái",
//         "Phường Thạnh Mỹ Lợi",
//         "Phường Thảo Điền",
//       ],
//       "Quận 3": [
//         "Phường 1",
//         "Phường 2",
//         "Phường 3",
//         "Phường 4",
//         "Phường 5",
//         "Phường 6",
//         "Phường 7",
//         "Phường 8",
//         "Phường 9",
//         "Phường 10",
//         "Phường 11",
//         "Phường 12",
//         "Phường 13",
//         "Phường 14",
//       ],
//       "Quận 4": [
//         "Phường 1",
//         "Phường 2",
//         "Phường 3",
//         "Phường 4",
//         "Phường 5",
//         "Phường 6",
//         "Phường 7",
//         "Phường 8",
//         "Phường 9",
//         "Phường 10",
//         "Phường 11",
//         "Phường 12",
//         "Phường 13",
//         "Phường 14",
//         "Phường 15",
//       ],
//       "Quận 5": [
//         "Phường 1",
//         "Phường 2",
//         "Phường 3",
//         "Phường 4",
//         "Phường 5",
//         "Phường 6",
//         "Phường 7",
//         "Phường 8",
//         "Phường 9",
//         "Phường 10",
//         "Phường 11",
//         "Phường 12",
//         "Phường 13",
//         "Phường 14",
//       ],
//       "Quận 6": [
//         "Phường 1",
//         "Phường 2",
//         "Phường 3",
//         "Phường 4",
//         "Phường 5",
//         "Phường 6",
//         "Phường 7",
//         "Phường 8",
//         "Phường 9",
//         "Phường 10",
//         "Phường 11",
//         "Phường 12",
//         "Phường 13",
//         "Phường 14",
//       ],
//       "Quận 7": [
//         "Phường Tân Phú",
//         "Phường Tân Thuận Đông",
//         "Phường Tân Thuận Tây",
//         "Phường Tân Kiêng",
//         "Phường Bình Thuận",
//         "Phường Tân Quy",
//         "Phường Phú Mỹ",
//         "Phường Tân Hưng",
//         "Phường Tân Kiểng",
//         "Phường Tân Phong",
//       ],
//       "Quận 8": [
//         "Phường 1",
//         "Phường 2",
//         "Phường 3",
//         "Phường 4",
//         "Phường 5",
//         "Phường 6",
//         "Phường 7",
//         "Phường 8",
//         "Phường 9",
//         "Phường 10",
//         "Phường 11",
//         "Phường 12",
//         "Phường 13",
//         "Phường 14",
//         "Phường 15",
//         "Phường 16",
//       ],
//       "Quận 9": [
//         "Phường Long Bình",
//         "Phường Long Thạnh Mỹ",
//         "Phường Tân Phú",
//         "Phường Hiệp Phú",
//         "Phường Tăng Nhơn Phú A",
//         "Phường Tăng Nhơn Phú B",
//         "Phường Phước Long A",
//         "Phường Phước Long B",
//         "Phường Phước Bình",
//         "Phường Trường Thạnh",
//         "Phường Long Phước",
//         "Phường Long Trường",
//         "Phường Phú Hữu",
//         "Phường Thạnh Mỹ Lợi",
//       ],
//       "Quận 10": [
//         "Phường 1",
//         "Phường 2",
//         "Phường 3",
//         "Phường 4",
//         "Phường 5",
//         "Phường 6",
//         "Phường 7",
//         "Phường 8",
//         "Phường 9",
//         "Phường 10",
//         "Phường 11",
//         "Phường 12",
//         "Phường 13",
//         "Phường 14",
//         "Phường 15",
//       ],
//       "Quận 11": [
//         "Phường 1",
//         "Phường 2",
//         "Phường 3",
//         "Phường 4",
//         "Phường 5",
//         "Phường 6",
//         "Phường 7",
//         "Phường 8",
//         "Phường 9",
//         "Phường 10",
//         "Phường 11",
//         "Phường 12",
//         "Phường 13",
//         "Phường 14",
//         "Phường 15",
//       ],
//       "Quận 12": [
//         "Phường Tân Chánh Hiệp",
//         "Phường Tân Thới Hiệp",
//         "Phường Thới An",
//         "Phường Đông Hưng Thuận",
//         "Phường Tân Hưng Thuận",
//         "Phường Hiệp Thành",
//         "Phường An Phú Đông",
//         "Phường Tân Bình",
//         "Phường Thạnh Lộc",
//         "Phường Tân Thới Nhất",
//         "Phường Linh Xuân",
//         "Phường Linh Trung",
//         "Phường Linh Chiểu",
//         "Phường Linh Tây",
//       ],
//       "Quận Bình Thạnh": [
//         "Phường 1",
//         "Phường 2",
//         "Phường 3",
//         "Phường 5",
//         "Phường 6",
//         "Phường 7",
//         "Phường 9",
//         "Phường 10",
//         "Phường 11",
//         "Phường 12",
//         "Phường 13",
//         "Phường 14",
//         "Phường 15",
//         "Phường 17",
//         "Phường 19",
//         "Phường 21",
//         "Phường 22",
//         "Phường 24",
//         "Phường 25",
//         "Phường 26",
//         "Phường 27",
//         "Phường 28",
//       ],
//       "Quận Gò Vấp": [
//         "Phường 1",
//         "Phường 2",
//         "Phường 3",
//         "Phường 4",
//         "Phường 5",
//         "Phường 6",
//         "Phường 7",
//         "Phường 8",
//         "Phường 9",
//         "Phường 10",
//         "Phường 11",
//         "Phường 12",
//         "Phường 13",
//         "Phường 14",
//         "Phường 15",
//         "Phường 16",
//         "Phường 17",
//       ],
//       "Quận Phú Nhuận": [
//         "Phường 1",
//         "Phường 2",
//         "Phường 3",
//         "Phường 4",
//         "Phường 5",
//         "Phường 7",
//         "Phường 8",
//         "Phường 9",
//         "Phường 10",
//         "Phường 11",
//         "Phường 12",
//         "Phường 13",
//         "Phường 14",
//         "Phường 15",
//         "Phường 17",
//       ],
//       "Quận Tân Bình": [
//         "Phường 1",
//         "Phường 2",
//         "Phường 3",
//         "Phường 4",
//         "Phường 5",
//         "Phường 6",
//         "Phường 7",
//         "Phường 8",
//         "Phường 9",
//         "Phường 10",
//         "Phường 11",
//         "Phường 12",
//         "Phường 13",
//         "Phường 14",
//         "Phường 15",
//       ],
//       "Quận Tân Phú": [
//         "Phường Hòa Thạnh",
//         "Phường Phú Thạnh",
//         "Phường Phú Trung",
//         "Phường Phú Thượng",
//         "Phường Tân Quý",
//         "Phường Tân Thành",
//         "Phường Sơn Kỳ",
//         "Phường Tân Sơn Nhì",
//         "Phường Tây Thạnh",
//         "Phường Bình Hưng Hòa",
//         "Phường Bình Hưng Hoà A",
//         "Phường Bình Hưng Hoà B",
//         "Phường Hòa Thới",
//         "Phường Hiệp Tân",
//       ],
//       "Quận Bình Tân": [
//         "Phường An Lạc",
//         "Phường An Lạc A",
//         "Phường Bình Hưng",
//         "Phường Bình Hưng Hòa",
//         "Phường Bình Hưng Hòa A",
//         "Phường Bình Hưng Hòa B",
//         "Phường Tân Tạo",
//         "Phường Tân Tạo A",
//         "Phường Tân Thới Hiệp",
//         "Phường Tân Thới Nhất",
//         "Phường Bình Trị Đông",
//         "Phường Bình Trị Đông A",
//         "Phường Bình Trị Đông B",
//       ],
//       "Huyện Củ Chi": [
//         "Thị trấn Củ Chi",
//         "Xã Phú Hòa Đông",
//         "Xã Tân Thạnh Đông",
//         "Xã Tân Thạnh Tây",
//         "Xã Tân An Hội",
//         "Xã Phước Thạnh",
//         "Xã Phước Hiệp",
//         "Xã Trung Lập Thượng",
//         "Xã Trung Lập Hạ",
//         "Xã Thái Mỹ",
//         "Xã Tân Phú Trung",
//         "Xã Tân Thông Hội",
//         "Xã Nhuận Đức",
//         "Xã Hòa Phú",
//         "Xã Phạm Văn Cội",
//         "Xã Phú Mỹ Hưng",
//         "Xã Bình Mỹ",
//         "Xã An Phú",
//         "Xã An Nhơn Tây",
//         "Xã Bàu Đưng",
//       ],
//       "Huyện Hóc Môn": [
//         "Thị trấn Hóc Môn",
//         "Xã Tân Xuân",
//         "Xã Tân Thới Nhì",
//         "Xã Nhị Bình",
//         "Xã Xuân Thới Sơn",
//         "Xã Xuân Thới Thượng",
//         "Xã Xuân Thới Đông",
//         "Xã Đông Thạnh",
//         "Xã Tân Hiệp",
//         "Xã Thới Tam Thôn",
//         "Xã Bà Điểm",
//         "Xã Trung Chánh",
//         "Xã Xuân Thới Thượng 1",
//         "Xã Xuân Thới Thượng 2",
//       ],
//       "Huyện Bình Chánh": [
//         "Thị trấn Tân Túc",
//         "Xã Bình Chánh",
//         "Xã Điền Hòa",
//         "Xã Đức Hòa",
//         "Xã Đức Lập Hạ",
//         "Xã Đức Lập Thượng",
//         "Xã Tân Quý Tây",
//         "Xã Bình Lợi",
//         "Xã Lê Minh Xuân",
//         "Xã Tân Kiên",
//         "Xã An Phú Tây",
//         "Xã Hưng Long",
//         "Xã Tân Nhựt",
//         "Xã Phạm Văn Hai",
//         "Xã Bình Hưng",
//         "Xã Tân Quý Đông",
//         "Xã Vĩnh Lộc A",
//         "Xã Vĩnh Lộc B",
//       ],
//       "Huyện Nhà Bè": [
//         "Thị trấn Nhà Bè",
//         "Xã Phước Kiển",
//         "Xã Nhơn Đức",
//         "Xã Long Thới",
//         "Xã Hiệp Phước",
//         "Xã Phú Xuân",
//         "Xã Tân Nhựt",
//         "Xã Tân Hòa",
//         "Xã Hưng Long",
//         "Xã Lê Minh Xuân",
//       ],
//       "Huyện Cần Giờ": [
//         "Thị trấn Cần Thạnh",
//         "Xã An Thới Đông",
//         "Xã Thạnh An",
//         "Xã Long Hòa",
//         "Xã Lý Nhơn",
//         "Xã Tam Thôn Hiệp",
//       ],
//     },
//     "Đồng Nai": {
//       "Thành phố Biên Hòa": [
//         "Phường Tân Phong",
//         "Phường Tân Biên",
//         "Phường Hòa Bình",
//         "Phường Quyết Thắng",
//         "Phường Tân Tiến",
//         "Phường Thanh Bình",
//         "Phường Trung Dũng",
//         "Phường Thống Nhất",
//         "Phường Long Bình",
//         "Phường Long Bình Tân",
//         "Phường Tam Hiệp",
//         "Phường Bửu Hòa",
//         "Phường Long Hưng",
//         "Phường Tam Hòa",
//         "Phường Phước Tân",
//         "Phường Tân Vạn",
//         "Phường Hiệp Hòa",
//         "Phường Hố Nai",
//         "Phường Tân Hạnh",
//         "Phường Tân Hòa",
//         "Phường Tân Mai",
//         "Phường Quang Vinh",
//         "Phường An Bình",
//         "Phường Thống Nhất",
//         "Phường Long Bình",
//         "Phường Long Bình Tân",
//         "Phường Tam Hiệp",
//         "Phường Bửu Long",
//         "Phường Long Bình",
//         "Phường Long Bình Tân",
//         "Phường Tam Hiệp",
//         "Phường Bửu Long",
//       ],
//       "Thành phố Long Khánh": [
//         "Phường Xuân Trung",
//         "Phường Xuân Thanh",
//         "Phường Xuân Bình",
//         "Phường Xuân An",
//         "Phường Xuân Hoà",
//         "Phường Bàu Sen",
//         "Phường Suối Tre",
//         "Phường Bảo Vinh",
//         "Phường Xuân Lập",
//       ],
//       "Huyện Tân Phú": [
//         "Thị trấn Tân Phú",
//         "Xã Tân Hòa",
//         "Xã Tân Hưng",
//         "Xã Tân Phú",
//         "Xã Phú Trung",
//         "Xã Phú Điền",
//         "Xã Phú Lập",
//         "Xã Phú Lâm",
//         "Xã Phú Bình",
//         "Xã Phú Thanh",
//         "Xã Trưởng Thạnh",
//         "Xã Phú Xuân",
//       ],
//       "Huyện Vĩnh Cửu": [
//         "Thị trấn Vĩnh An",
//         "Xã Bình Lợi",
//         "Xã Thạnh Phú",
//         "Xã Thống Nhất",
//         "Xã Tân An",
//         "Xã Hiếu Liêm",
//         "Xã Vĩnh Tân",
//         "Xã Phú Lý",
//         "Xã Vĩnh Hưng",
//         "Xã Tân Bình",
//       ],
//       "Huyện Định Quán": [
//         "Thị trấn Định Quán",
//         "Xã Thanh Sơn",
//         "Xã Phú Tân",
//         "Xã Phú Vinh",
//         "Xã Phú Lộc",
//         "Xã Phú Cường",
//         "Xã Gia Canh",
//         "Xã Suối Nho",
//         "Xã La Ngà",
//         "Xã Quảng Lợi",
//         "Xã Phú Hòa",
//         "Xã Ngọc Định",
//         "Xã Phú Lệ",
//       ],
//       "Huyện Trảng Bom": [
//         "Thị trấn Trảng Bom",
//         "Xã Thanh Bình",
//         "Xã Hưng Thịnh",
//         "Xã Quảng Tiến",
//         "Xã Tây Hòa",
//         "Xã An Viễn",
//         "Xã Trung Hòa",
//         "Xã Cây Gáo",
//         "Xã Bàu Hàm 2",
//         "Xã Sông Thao",
//         "Xã Sông Trầu",
//         "Xã Đông Hoà",
//         "Xã Bắc Sơn",
//         "Xã Đồi 61",
//         "Xã Hợp Nhất",
//         "Xã Tân Hạnh",
//         "Xã Bình Minh",
//         "Xã Thạnh Phú",
//         "Xã Gia Tân 1",
//         "Xã Gia Tân 2",
//         "Xã Gia Tân 3",
//       ],
//       "Huyện Thống Nhất": [
//         "Thị trấn Dầu Giây",
//         "Xã Gia Kiệm",
//         "Xã Hưng Lộc",
//         "Xã Quang Trung",
//         "Xã Lộ 25",
//         "Xã Xuân Thiện",
//         "Xã Xuân Thạnh",
//         "Xã Sông Nhạn",
//         "Xã Xuân Hòa",
//         "Xã Bàu Hàm 2",
//         "Xã Bàu Đồn",
//       ],
//       "Huyện Cẩm Mỹ": [
//         "Thị trấn Cẩm Mỹ",
//         "Xã Thạnh Phú",
//         "Xã Suối Cát",
//         "Xã Nhân Nghĩa",
//         "Xã Sông Thơm",
//         "Xã Thừa Đức",
//         "Xã Lương Hòa",
//         "Xã Long Giao",
//         "Xã Xuân Đông",
//         "Xã Xuân Tây",
//         "Xã Thắng Lợi",
//         "Xã Hòa Thạnh",
//         "Xã Sông Ray",
//         "Xã Bàu Hàm 2",
//       ],
//       "Huyện Long Thành": [
//         "Thị trấn Long Thành",
//         "Xã An Phước",
//         "Xã Long An",
//         "Xã Long Phước",
//         "Xã Phước Bình",
//         "Xã Bình An",
//         "Xã Long Đức",
//         "Xã Đại Phước",
//         "Xã Phước Thái",
//         "Xã Tam An",
//         "Xã Lộc An",
//         "Xã Long Hưng",
//         "Xã Phước Long Thọ",
//       ],
//       "Huyện Nhơn Trạch": [
//         "Thị trấn Hiệp Phước",
//         "Xã Phước Thiền",
//         "Xã Nhơn Phú",
//         "Xã Long Thọ",
//         "Xã Long Tân",
//         "Xã Đại Phước",
//         "Xã Phú Hội",
//         "Xã Phú Thạnh",
//         "Xã Phú Đông",
//         "Xã Long Tân",
//         "Xã Vĩnh Thanh",
//         "Xã Phước An",
//       ],
//       "Huyện Xuân Lộc": [
//         "Thị trấn Gia Ray",
//         "Xã Lang Minh",
//         "Xã Suối Cao",
//         "Xã Xuân Định",
//         "Xã Xuân Hưng",
//         "Xã Xuân Hòa",
//         "Xã Xuân Trường",
//         "Xã Xuân Phú",
//         "Xã Xuân Tín",
//         "Xã Xuân Tân",
//         "Xã Xuân Lai",
//         "Xã Xuân Bắc",
//         "Xã Xuân Đông",
//         "Xã Xuân Tây",
//       ],
//       "Huyện Long Thành": [
//         "Thị trấn Long Thành",
//         "Xã An Phước",
//         "Xã Long An",
//         "Xã Long Phước",
//         "Xã Phước Bình",
//         "Xã Bình An",
//         "Xã Long Đức",
//         "Xã Đại Phước",
//         "Xã Phước Thái",
//         "Xã Tam An",
//         "Xã Lộc An",
//         "Xã Long Hưng",
//         "Xã Phước Long Thọ",
//       ],
//     },
//   };

//   function populateProvinces() {
//     provinceSelect.innerHTML = '<option value="">Chọn tỉnh/thành phố</option>';
//     for (let province in vietnamAdministrativeData) {
//       const option = document.createElement("option");
//       option.value = province;
//       option.textContent = province;
//       provinceSelect.appendChild(option);
//     }
//   }

//   function populateDistricts(province) {
//     districtSelect.innerHTML = '<option value="">Chọn quận/huyện</option>';
//     wardSelect.innerHTML = '<option value="">Chọn phường/xã</option>';
//     if (province && vietnamAdministrativeData[province]) {
//       for (let district in vietnamAdministrativeData[province]) {
//         const option = document.createElement("option");
//         option.value = district;
//         option.textContent = district;
//         districtSelect.appendChild(option);
//       }
//     }
//   }

//   function populateWards(province, district) {
//     wardSelect.innerHTML = '<option value="">Chọn phường/xã</option>';
//     if (
//       province &&
//       district &&
//       vietnamAdministrativeData[province] &&
//       vietnamAdministrativeData[province][district]
//     ) {
//       vietnamAdministrativeData[province][district].forEach((ward) => {
//         const option = document.createElement("option");
//         option.value = ward;
//         option.textContent = ward;
//         wardSelect.appendChild(option);
//       });
//     }
//   }

//   provinceSelect.addEventListener("change", () => {
//     const selectedProvince = provinceSelect.value;
//     populateDistricts(selectedProvince);
//     populateWards(selectedProvince, districtSelect.value);
//   });

//   districtSelect.addEventListener("change", () => {
//     const selectedProvince = provinceSelect.value;
//     const selectedDistrict = districtSelect.value;
//     populateWards(selectedProvince, selectedDistrict);
//   });

//   populateProvinces();

//   if (accountBtn && loginModal && modalContent) {
//     const registeredAccounts =
//       JSON.parse(localStorage.getItem("registeredAccounts")) || [];
//     const currentUserEmail = localStorage.getItem("currentUser");

//     if (currentUserEmail) {
//       const account = registeredAccounts.find(
//         (acc) => acc.email === currentUserEmail
//       );
//       const displayName = account
//         ? `${account.firstname || ""} ${account.lastname || ""}`.trim()
//         : "Tài khoản";

//       accountBtn.innerHTML = `
//                 <i class="fa-regular fa-user"></i>
//                 <span class="action-title">${displayName}</span>
//             `;
//     } else {
//       accountBtn.innerHTML = `
//                 <i class="fa-regular fa-user"></i>
//                 <span class="action-title">Tài khoản</span>
//             `;
//     }

//     accountBtn.addEventListener("click", function (e) {
//       e.preventDefault();
//       if (currentUserEmail) {
//         if (confirm("Bạn có muốn đăng xuất không?")) {
//           localStorage.removeItem("currentUser");
//           accountBtn.innerHTML = `
//                         <i class="fa-regular fa-user"></i>
//                         <span class="action-title">Tài khoản</span>
//                     `;
//           loginModal.style.display = "block";
//           modalContent.style.position = "absolute";
//           modalContent.style.top =
//             accountBtn.getBoundingClientRect().height + 21 + "px";
//           modalContent.style.left = "22px";
//           modalContent.style.transform = "translateX(-50%)";
//           modalContent.style.width = "180px";
//           modalContent.style.minHeight = "40px";
//           accountBtn.appendChild(modalContent);
//         }
//       } else {
//         loginModal.style.display = "block";
//         modalContent.style.position = "absolute";
//         modalContent.style.top =
//           accountBtn.getBoundingClientRect().height + 21 + "px";
//         modalContent.style.left = "22px";
//         modalContent.style.transform = "translateX(-50%)";
//         modalContent.style.width = "180px";
//         modalContent.style.minHeight = "40px";
//         accountBtn.appendChild(modalContent);
//       }
//     });

//     window.addEventListener("click", function (e) {
//       if (!accountBtn.contains(e.target) && !loginModal.contains(e.target)) {
//         loginModal.style.display = "none";
//         if (modalContent.parentElement === accountBtn) {
//           loginModal.appendChild(modalContent);
//         }
//       }
//     });

//     window.addEventListener("resize", function () {
//       if (loginModal.style.display === "block") {
//         const rect = accountBtn.getBoundingClientRect();
//         modalContent.style.top = rect.height + 21 + "px";
//         modalContent.style.left = "22px";
//         modalContent.style.transform = "translateX(-50%)";
//         modalContent.style.width = "180px";
//         modalContent.style.minHeight = "40px";
//       }
//     });
//   } else {
//     console.error("Modal elements not fully found!", {
//       accountBtn,
//       loginModal,
//       modalContent,
//     });
//   }

//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   function updateCartDisplay() {
//     const cartCountElement = document.querySelector(".count-cart");
//     let count = 0;

//     if (cartItems) {
//       cartItems.innerHTML = "";
//       if (cart.length === 0) {
//         cartItems.innerHTML = `<p class="no-products">Không có sản phẩm</p>`;
//         tempTotal.textContent = "0đ";
//         shippingFee.textContent = "Miễn phí";
//         voucherDiscount.textContent = "0đ";
//         overlapDiscount.textContent = "0đ";
//         finalTotal.textContent = "0đ (Đã giảm 0đ từ giá gốc)";
//         footerTotal.textContent = "0đ";
//         footerDiscount.textContent = "Đã giảm: 0đ";
//       } else {
//         cart.forEach((item, index) => {
//           const div = document.createElement("div");
//           div.classList.add("cart-item");
//           div.innerHTML = `
//             <img src="${item.images[0] || "/img/placeholder.jpg"}" alt="${
//             item.name
//           }" class="item-image">
//             <div class="item-details">
//               <p class="item-name">${item.name}</p>
//               <p class="item-attributes">Đổi ý 15 ngày</p>
//               <p class="item-attributes">${item.selectedColor || "N/A"} / ${
//             item.selectedSize || "N/A"
//           }</p>
//               <div class="quantity-control">
//                 <button class="quantity-btn decrease" data-index="${index}">-</button>
//                 <input type="number" class="quantity-input" value="${
//                   item.quantity || 1
//                 }" min="1" data-index="${index}">
//                 <button class="quantity-btn increase" data-index="${index}">+</button>
//               </div>
//               <p class="item-price">${(
//                 (item.newPrice || item.price) * (item.quantity || 1)
//               ).toLocaleString()}đ</p>
//             </div>
//             <button class="remove-item" data-index="${index}">X</button>
//           `;
//           cartItems.appendChild(div);
//           count += item.quantity || 1; // Cộng dồn số lượng sản phẩm
//         });
//         updateTotal();
//         attachEventListeners();
//       }
//     }

//     // Cập nhật số lượng sản phẩm trên biểu tượng giỏ hàng
//     if (cartCountElement) {
//       cartCountElement.textContent = count;
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));
//   }

//   function updateTotal() {
//     let total = cart.reduce(
//       (sum, item) => sum + (item.newPrice || item.price) * (item.quantity || 1),
//       0
//     );
//     let discount =
//       parseInt(voucherDiscount.textContent.replace(/[^0-9]/g, "")) || 0;
//     tempTotal.textContent = total.toLocaleString() + "đ";
//     shippingFee.textContent = "Miễn phí";
//     finalTotal.textContent =
//       (total - discount).toLocaleString() +
//       "đ (Đã giảm " +
//       discount.toLocaleString() +
//       "đ từ giá gốc)";
//     footerTotal.textContent = (total - discount).toLocaleString() + "đ";
//     footerDiscount.textContent =
//       discount > 0 ? `Đã giảm: ${discount.toLocaleString()}đ` : "Đã giảm: 0đ";
//   }

//   const voucherRadios = document.querySelectorAll('input[name="voucher"]');
//   const applyVoucherBtn = document.querySelector(".apply-voucher-btn");
//   const voucherInput = document.querySelector(".voucher-input");

//   function applyDiscount(voucherCode) {
//     let total = cart.reduce(
//       (sum, item) => sum + (item.newPrice || item.price) * (item.quantity || 1),
//       0
//     );
//     let discount = 0;

//     if (voucherCode === "D10" && total >= 200000) {
//       discount = Math.min(total * 0.1, 20000);
//       document.getElementById("voucher-d10").checked = true;
//     } else if (voucherCode === "D200" && total >= 1499000) {
//       discount = 200000;
//       document.getElementById("voucher-d200").checked = true;
//     } else if (voucherCode === "D100" && total >= 999000) {
//       discount = 100000;
//       document.getElementById("voucher-d100").checked = true;
//     } else {
//       voucherRadios.forEach((radio) => (radio.checked = false));
//       discount = 0;
//       alert("Mã giảm giá không hợp lệ hoặc không đủ điều kiện áp dụng!");
//     }

//     voucherDiscount.textContent = discount.toLocaleString() + "đ";
//     updateTotal();
//   }

//   voucherRadios.forEach((radio) => {
//     radio.addEventListener("change", () => {
//       let total = cart.reduce(
//         (sum, item) =>
//           sum + (item.newPrice || item.price) * (item.quantity || 1),
//         0
//       );
//       let discount = 0;

//       if (radio.value === "D10" && total >= 200000) {
//         discount = Math.min(total * 0.1, 20000);
//       } else if (radio.value === "D200" && total >= 1499000) {
//         discount = 200000;
//       } else if (radio.value === "D100" && total >= 999000) {
//         discount = 100000;
//       } else {
//         discount = 0;
//         alert(
//           `Đơn hàng không đủ điều kiện cho voucher ${
//             radio.value
//           }! Tổng tiền: ${total.toLocaleString()}đ`
//         );
//         radio.checked = false;
//       }

//       voucherDiscount.textContent = discount.toLocaleString() + "đ";
//       updateTotal();
//     });
//   });

//   applyVoucherBtn.addEventListener("click", () => {
//     const voucherCode = voucherInput.value.trim().toUpperCase();
//     if (voucherCode) {
//       applyDiscount(voucherCode);
//       voucherInput.value = "";
//     } else {
//       alert("Vui lòng nhập mã giảm giá!");
//     }
//   });

//   const orderForm = document.getElementById("orderForm");
//   const checkoutBtn = document.querySelector(".checkout-btn");

//   function validateForm() {
//     const fullName = document.getElementById("fullName").value.trim();
//     const phone = document.getElementById("phone").value.trim();
//     const address = document.getElementById("address").value.trim();
//     const province = provinceSelect.value;
//     const district = districtSelect.value;
//     const ward = wardSelect.value;

//     if (!fullName || !phone || !address || !province || !district || !ward) {
//       alert("Vui lòng điền đầy đủ thông tin bắt buộc!");
//       return false;
//     }
//     if (!/^\d{10}$/.test(phone)) {
//       alert("Số điện thoại phải là 10 chữ số!");
//       return false;
//     }
//     return true;
//   }

//   function showNotification(message) {
//     const notification = document.createElement("div");
//     notification.className = "notification";
//     notification.textContent = message;
//     document.body.appendChild(notification);

//     setTimeout(() => {
//       notification.classList.add("show");
//     }, 10);

//     setTimeout(() => {
//       notification.classList.remove("show");
//       setTimeout(() => {
//         document.body.removeChild(notification);
//       }, 500);
//     }, 3000);
//   }

//   orderForm?.addEventListener("submit", (e) => {
//     e.preventDefault();
//     if (cart.length > 0) {
//       if (validateForm()) {
//         showNotification("Đơn hàng đã được xác nhận!");
//         cart = [];
//         localStorage.setItem("cart", JSON.stringify(cart));
//         updateCartDisplay();
//         orderForm.reset();
//       }
//     } else {
//       alert("Vui lòng thêm sản phẩm vào giỏ hàng trước khi xác nhận!");
//     }
//   });

//   checkoutBtn?.addEventListener("click", (e) => {
//     if (!validateForm()) {
//       e.preventDefault();
//     }
//   });

//   function attachEventListeners() {
//     const decreaseBtns = document.querySelectorAll(".quantity-btn.decrease");
//     const increaseBtns = document.querySelectorAll(".quantity-btn.increase");
//     const quantityInputs = document.querySelectorAll(".quantity-input");
//     const removeBtns = document.querySelectorAll(".remove-item");

//     decreaseBtns.forEach((btn) => {
//       btn.removeEventListener("click", handleDecrease);
//       btn.addEventListener("click", handleDecrease);
//     });

//     increaseBtns.forEach((btn) => {
//       btn.removeEventListener("click", handleIncrease);
//       btn.addEventListener("click", handleIncrease);
//     });

//     quantityInputs.forEach((input) => {
//       input.removeEventListener("change", handleQuantityChange);
//       input.addEventListener("change", handleQuantityChange);
//     });

//     removeBtns.forEach((btn) => {
//       btn.removeEventListener("click", handleRemove);
//       btn.addEventListener("click", handleRemove);
//     });
//   }

//   function handleDecrease(e) {
//     const index = e.target.dataset.index;
//     if (cart[index].quantity > 1) {
//       cart[index].quantity--;
//       localStorage.setItem("cart", JSON.stringify(cart));
//       updateCartDisplay();
//     }
//   }

//   function handleIncrease(e) {
//     const index = e.target.dataset.index;
//     cart[index].quantity++;
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartDisplay();
//   }

//   function handleQuantityChange(e) {
//     const index = e.target.dataset.index;
//     let value = parseInt(e.target.value);
//     if (isNaN(value) || value < 1) value = 1;
//     cart[index].quantity = value;
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartDisplay();
//   }

//   function handleRemove(e) {
//     const index = e.target.dataset.index;
//     cart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartDisplay();
//   }

//   const searchForm = document.getElementById("searchForm");
//   const searchInput = document.getElementById("searchInput");
//   const searchResults = document.getElementById("searchResults");

//   if (searchForm && searchInput && searchResults) {
//     searchForm.addEventListener("submit", (e) => {
//       e.preventDefault();
//       const query = searchInput.value.trim();
//       searchProducts(query);
//     });

//     searchInput.addEventListener("input", (e) => {
//       const query = e.target.value.trim();
//       searchProducts(query);
//     });

//     document.addEventListener("click", (e) => {
//       if (!searchForm.contains(e.target)) {
//         searchResults.classList.remove("active");
//       }
//     });
//   }

//   function searchProducts(query) {
//     const products = JSON.parse(localStorage.getItem("products")) || [];
//     const searchResults = document.getElementById("searchResults");
//     if (!searchResults) return;

//     searchResults.innerHTML = "";

//     if (query.trim() === "") {
//       searchResults.classList.remove("active");
//       return;
//     }

//     const filteredProducts = products.filter((product) =>
//       product.name.toLowerCase().includes(query.toLowerCase())
//     );

//     if (filteredProducts.length > 0) {
//       filteredProducts.forEach((product) => {
//         const div = document.createElement("div");
//         div.classList.add("search-result-item");
//         div.innerHTML = `
//           <img src="${
//             product.images && product.images.length > 0
//               ? product.images[0]
//               : "/img/placeholder.jpg"
//           }" alt="${product.name}">
//           <h4>${product.name}</h4>
//         `;
//         div.addEventListener("click", () => {
//           window.location.href = `chitiet.html?id=${encodeURIComponent(
//             product.name
//           )}`;
//           searchResults.classList.remove("active");
//         });
//         searchResults.appendChild(div);
//       });
//       searchResults.classList.add("active");
//     } else {
//       const div = document.createElement("div");
//       div.classList.add("search-result-item");
//       div.textContent = "Không thấy kết quả tìm kiếm";
//       div.style.textAlign = "center";
//       div.style.color = "#777";
//       searchResults.appendChild(div);
//       searchResults.classList.add("active");
//     }
//   }

//   updateCartDisplay();
// });

document.addEventListener("DOMContentLoaded", () => {
  const accountBtn = document.getElementById("account-btn");
  const loginModal = document.getElementById("loginModal");
  const modalContent = document.querySelector(".modal-content");
  const cartItems = document.getElementById("cart-items");
  const tempTotal = document.getElementById("temp-total");
  const shippingFee = document.getElementById("shipping-fee");
  const voucherDiscount = document.getElementById("voucher-discount");
  const overlapDiscount = document.getElementById("overlap-discount");
  const finalTotal = document.getElementById("final-total");
  const footerTotal = document.getElementById("footer-total");
  const footerDiscount = document.getElementById("footer-discount");
  const provinceSelect = document.getElementById("province");
  const districtSelect = document.getElementById("district");
  const wardSelect = document.getElementById("ward");
  const voucherInput = document.querySelector(".voucher-input");
  const applyVoucherBtn = document.querySelector(".apply-voucher-btn");

  const vietnamAdministrativeData = {
    "Hà Nội": {
      "Quận Ba Đình": [
        "Phường Phúc Xá",
        "Phường Trúc Bạch",
        "Phường Quán Thánh",
        "Phường Ngọc Hà",
        "Phường Điện Biên",
        "Phường Đội Cấn",
        "Phường Kim Mã",
        "Phường Giảng Võ",
        "Phường Cống Vị",
        "Phường Liễu Giai",
        "Phường Ngõ Trạm",
        "Phường Vĩnh Phúc",
        "Phường Quốc Tử Giám",
        "Phường Hàng Bông",
      ],
      "Quận Hoàn Kiếm": [
        "Phường Hàng Bài",
        "Phường Hàng Bồ",
        "Phường Hàng Đào",
        "Phường Hàng Trống",
        "Phường Cửa Đông",
        "Phường Lý Thái Tổ",
        "Phường Hàng Bông",
        "Phường Hàng Gai",
        "Phường Đồng Xuân",
        "Phường Hàng Mã",
        "Phường Phúc Tân",
        "Phường Hàng Bài",
        "Phường Hàng Buồm",
        "Phường Hàng Bạc",
      ],
      "Quận Hai Bà Trưng": [
        "Phường Bạch Đằng",
        "Phường Thanh Nhàn",
        "Phường Trương Định",
        "Phường Lê Đại Hành",
        "Phường Quỳnh Lôi",
        "Phường Bạch Mai",
        "Phường Minh Khai",
        "Phường Vĩnh Tuy",
        "Phường Đống Mác",
        "Phường Thanh Lương",
        "Phường Nghĩa Tân",
        "Phường Đồng Tâm",
        "Phường Nguyễn Du",
      ],
      "Quận Đống Đa": [
        "Phường Quốc Tử Giám",
        "Phường Hàng Bột",
        "Phường Láng Thượng",
        "Phường Khương Thượng",
        "Phường Nguyễn Trung Trực",
        "Phường Văn Miếu",
        "Phường Quốc Tử Giám",
        "Phường Nam Đồng",
        "Phường Trung Liệt",
        "Phường Văn Chương",
        "Phường Quang Trung",
        "Phường Trung Phụng",
        "Phường Kim Liên",
        "Phường Phương Liên",
        "Phường Thịnh Quang",
        "Phường Trung Tự",
        "Phường Khương Mai",
      ],
      "Quận Tây Hồ": [
        "Phường Quảng An",
        "Phường Nhật Chiêu",
        "Phường Thuỵ Khuê",
        "Phường Bưởi",
        "Phường Tứ Liên",
        "Phường Yên Phụ",
        "Phường Xuân La",
        "Phường Phú Thượng",
      ],
      "Quận Cầu Giấy": [
        "Phường Quan Hoa",
        "Phường Nghĩa Đô",
        "Phường Dịch Vọng",
        "Phường Dịch Vọng Hậu",
        "Phường Mai Dịch",
        "Phường Yên Hoà",
        "Phường Trung Hoà",
        "Phường Cầu Giấy",
        "Phường Nghĩa Tân",
      ],
      "Quận Thanh Xuân": [
        "Phường Hạ Đình",
        "Phường Khương Trung",
        "Phường Khương Mai",
        "Phường Thanh Xuân Bắc",
        "Phường Thanh Xuân Nam",
        "Phường Kim Giang",
        "Phường Nhân Chính",
        "Phường Thượng Đình",
        "Phường Khương Đình",
        "Phường Phương Liệt",
        "Phường Thạch Bàn",
      ],
      "Quận Hoàng Mai": [
        "Phường Hoàng Văn Thụ",
        "Phường Tân Mai",
        "Phường Giáp Bát",
        "Phường Lĩnh Nam",
        "Phường Mai Động",
        "Phường Tương Mai",
        "Phường Vĩnh Hưng",
        "Phường Định Công",
        "Phường Trần Phú",
        "Phường Hoàng Liệt",
        "Phường Yên Sở",
        "Phường Thịnh Liệt",
        "Phường Đại Kim",
      ],
      "Quận Long Biên": [
        "Phường Thạch Bàn",
        "Phường Phúc Lợi",
        "Phường Gia Thụy",
        "Phường Việt Hưng",
        "Phường Giang Biên",
        "Phường Đức Giang",
        "Phường Cự Khối",
        "Phường Nghĩa Đô",
        "Phường Bồ Đề",
        "Phường Sài Đồng",
        "Phường Long Biên",
        "Phường Thượng Thanh",
        "Phường Phúc Đồng",
      ],
      "Quận Nam Từ Liêm": [
        "Phường Mỹ Đình 1",
        "Phường Mỹ Đình 2",
        "Phường Tây Mỗ",
        "Phường Mễ Trì",
        "Phường Phú Đô",
        "Phường Xuân Phương",
        "Phường Đại Mỗ",
        "Phường Trung Văn",
        "Phường Cầu Diễn",
        "Phường Phương Canh",
      ],
      "Quận Bắc Từ Liêm": [
        "Phường Đông Ngạc",
        "Phường Thụy Phương",
        "Phường Xuân Đỉnh",
        "Phường Xuân Tảo",
        "Phường Cổ Nhuế 1",
        "Phường Cổ Nhuế 2",
        "Phường Minh Khai",
        "Phường Thượng Cát",
        "Phường Liên Mạc",
        "Phường Đức Thắng",
      ],
      "Huyện Đông Anh": [
        "Thị trấn Đông Anh",
        "Xã Xuân Canh",
        "Xã Xuân Nộn",
        "Xã Nam Hồng",
        "Xã Vân Hà",
        "Xã Uy Nỗ",
        "Xã Kim Chung",
        "Xã Dục Nội",
        "Xã Liên Hà",
        "Xã Việt Hùng",
        "Xã Mai Lâm",
        "Xã Đông Hội",
        "Xã Vĩnh Ngọc",
        "Xã Cổ Loa",
        "Xã Hải Bối",
        "Xã Xuân Đường",
        "Xã Thụy Lâm",
        "Xã Tầm Xá",
        "Xã Nguyên Khê",
        "Xã Bắc Hồng",
        "Xã Tiên Dương",
        "Xã Võng La",
        "Xã Đại Mạch",
        "Xã Thuỵ Nguyên",
      ],
      "Huyện Gia Lâm": [
        "Thị trấn Trâu Quỳ",
        "Thị trấn Đông Dư",
        "Thị trấn Yên Viên",
        "Xã Xuân Thu",
        "Xã Đa Tốn",
        "Xã Kiêu Kỵ",
        "Xã Bát Tràng",
        "Xã Kim Lan",
        "Xã Văn Đức",
        "Xã Phù Đổng",
        "Xã Trung Mầu",
        "Xã Lệ Chi",
        "Xã Cổ Bi",
        "Xã Dương Quang",
        "Xã Dương Hà",
        "Xã Đặng Xá",
        "Xã Phú Thị",
        "Xã Kim Sơn",
      ],
      "Huyện Thanh Trì": [
        "Thị trấn Văn Điển",
        "Xã Tân Triều",
        "Xã Thanh Liệt",
        "Xã Tả Thanh Oai",
        "Xã Hữu Hoà",
        "Xã Tam Hiệp",
        "Xã Yên Mỹ",
        "Xã Vĩnh Quỳnh",
        "Xã Ngũ Hiệp",
        "Xã Duyên Hà",
        "Xã Ngọc Hồi",
        "Xã Liên Ninh",
        "Xã Đại áng",
        "Xã Thượng Mỗ",
        "Xã Tứ Hiệp",
        "Xã Tam Hưng",
        "Xã Đông Mỹ",
      ],
    },
    "TP. Hồ Chí Minh": {
      "Quận 1": [
        "Phường Bến Nghé",
        "Phường Bến Thành",
        "Phường Cô Giang",
        "Phường Cầu Kho",
        "Phường Đa Kao",
        "Phường Nguyễn Cư Trinh",
        "Phường Nguyễn Thái Bình",
        "Phường Phạm Ngũ Lão",
        "Phường Tân Định",
      ],
      "Quận 2": [
        "Phường An Khánh",
        "Phường An Lợi Đông",
        "Phường An Phú",
        "Phường Bình An",
        "Phường Bình Khánh",
        "Phường Bình Trưng Đông",
        "Phường Bình Trưng Tây",
        "Phường Cát Lái",
        "Phường Thạnh Mỹ Lợi",
        "Phường Thảo Điền",
      ],
      "Quận 3": [
        "Phường 1",
        "Phường 2",
        "Phường 3",
        "Phường 4",
        "Phường 5",
        "Phường 6",
        "Phường 7",
        "Phường 8",
        "Phường 9",
        "Phường 10",
        "Phường 11",
        "Phường 12",
        "Phường 13",
        "Phường 14",
      ],
      "Quận 4": [
        "Phường 1",
        "Phường 2",
        "Phường 3",
        "Phường 4",
        "Phường 5",
        "Phường 6",
        "Phường 7",
        "Phường 8",
        "Phường 9",
        "Phường 10",
        "Phường 11",
        "Phường 12",
        "Phường 13",
        "Phường 14",
        "Phường 15",
      ],
      "Quận 5": [
        "Phường 1",
        "Phường 2",
        "Phường 3",
        "Phường 4",
        "Phường 5",
        "Phường 6",
        "Phường 7",
        "Phường 8",
        "Phường 9",
        "Phường 10",
        "Phường 11",
        "Phường 12",
        "Phường 13",
        "Phường 14",
      ],
      "Quận 6": [
        "Phường 1",
        "Phường 2",
        "Phường 3",
        "Phường 4",
        "Phường 5",
        "Phường 6",
        "Phường 7",
        "Phường 8",
        "Phường 9",
        "Phường 10",
        "Phường 11",
        "Phường 12",
        "Phường 13",
        "Phường 14",
      ],
      "Quận 7": [
        "Phường Tân Phú",
        "Phường Tân Thuận Đông",
        "Phường Tân Thuận Tây",
        "Phường Tân Kiêng",
        "Phường Bình Thuận",
        "Phường Tân Quy",
        "Phường Phú Mỹ",
        "Phường Tân Hưng",
        "Phường Tân Kiểng",
        "Phường Tân Phong",
      ],
      "Quận 8": [
        "Phường 1",
        "Phường 2",
        "Phường 3",
        "Phường 4",
        "Phường 5",
        "Phường 6",
        "Phường 7",
        "Phường 8",
        "Phường 9",
        "Phường 10",
        "Phường 11",
        "Phường 12",
        "Phường 13",
        "Phường 14",
        "Phường 15",
        "Phường 16",
      ],
      "Quận 9": [
        "Phường Long Bình",
        "Phường Long Thạnh Mỹ",
        "Phường Tân Phú",
        "Phường Hiệp Phú",
        "Phường Tăng Nhơn Phú A",
        "Phường Tăng Nhơn Phú B",
        "Phường Phước Long A",
        "Phường Phước Long B",
        "Phường Phước Bình",
        "Phường Trường Thạnh",
        "Phường Long Phước",
        "Phường Long Trường",
        "Phường Phú Hữu",
        "Phường Thạnh Mỹ Lợi",
      ],
      "Quận 10": [
        "Phường 1",
        "Phường 2",
        "Phường 3",
        "Phường 4",
        "Phường 5",
        "Phường 6",
        "Phường 7",
        "Phường 8",
        "Phường 9",
        "Phường 10",
        "Phường 11",
        "Phường 12",
        "Phường 13",
        "Phường 14",
        "Phường 15",
      ],
      "Quận 11": [
        "Phường 1",
        "Phường 2",
        "Phường 3",
        "Phường 4",
        "Phường 5",
        "Phường 6",
        "Phường 7",
        "Phường 8",
        "Phường 9",
        "Phường 10",
        "Phường 11",
        "Phường 12",
        "Phường 13",
        "Phường 14",
        "Phường 15",
      ],
      "Quận 12": [
        "Phường Tân Chánh Hiệp",
        "Phường Tân Thới Hiệp",
        "Phường Thới An",
        "Phường Đông Hưng Thuận",
        "Phường Tân Hưng Thuận",
        "Phường Hiệp Thành",
        "Phường An Phú Đông",
        "Phường Tân Bình",
        "Phường Thạnh Lộc",
        "Phường Tân Thới Nhất",
        "Phường Linh Xuân",
        "Phường Linh Trung",
        "Phường Linh Chiểu",
        "Phường Linh Tây",
      ],
      "Quận Bình Thạnh": [
        "Phường 1",
        "Phường 2",
        "Phường 3",
        "Phường 5",
        "Phường 6",
        "Phường 7",
        "Phường 9",
        "Phường 10",
        "Phường 11",
        "Phường 12",
        "Phường 13",
        "Phường 14",
        "Phường 15",
        "Phường 17",
        "Phường 19",
        "Phường 21",
        "Phường 22",
        "Phường 24",
        "Phường 25",
        "Phường 26",
        "Phường 27",
        "Phường 28",
      ],
      "Quận Gò Vấp": [
        "Phường 1",
        "Phường 2",
        "Phường 3",
        "Phường 4",
        "Phường 5",
        "Phường 6",
        "Phường 7",
        "Phường 8",
        "Phường 9",
        "Phường 10",
        "Phường 11",
        "Phường 12",
        "Phường 13",
        "Phường 14",
        "Phường 15",
        "Phường 16",
        "Phường 17",
      ],
      "Quận Phú Nhuận": [
        "Phường 1",
        "Phường 2",
        "Phường 3",
        "Phường 4",
        "Phường 5",
        "Phường 7",
        "Phường 8",
        "Phường 9",
        "Phường 10",
        "Phường 11",
        "Phường 12",
        "Phường 13",
        "Phường 14",
        "Phường 15",
        "Phường 17",
      ],
      "Quận Tân Bình": [
        "Phường 1",
        "Phường 2",
        "Phường 3",
        "Phường 4",
        "Phường 5",
        "Phường 6",
        "Phường 7",
        "Phường 8",
        "Phường 9",
        "Phường 10",
        "Phường 11",
        "Phường 12",
        "Phường 13",
        "Phường 14",
        "Phường 15",
      ],
      "Quận Tân Phú": [
        "Phường Hòa Thạnh",
        "Phường Phú Thạnh",
        "Phường Phú Trung",
        "Phường Phú Thượng",
        "Phường Tân Quý",
        "Phường Tân Thành",
        "Phường Sơn Kỳ",
        "Phường Tân Sơn Nhì",
        "Phường Tây Thạnh",
        "Phường Bình Hưng Hòa",
        "Phường Bình Hưng Hoà A",
        "Phường Bình Hưng Hoà B",
        "Phường Hòa Thới",
        "Phường Hiệp Tân",
      ],
      "Quận Bình Tân": [
        "Phường An Lạc",
        "Phường An Lạc A",
        "Phường Bình Hưng",
        "Phường Bình Hưng Hòa",
        "Phường Bình Hưng Hòa A",
        "Phường Bình Hưng Hòa B",
        "Phường Tân Tạo",
        "Phường Tân Tạo A",
        "Phường Tân Thới Hiệp",
        "Phường Tân Thới Nhất",
        "Phường Bình Trị Đông",
        "Phường Bình Trị Đông A",
        "Phường Bình Trị Đông B",
      ],
      "Huyện Củ Chi": [
        "Thị trấn Củ Chi",
        "Xã Phú Hòa Đông",
        "Xã Tân Thạnh Đông",
        "Xã Tân Thạnh Tây",
        "Xã Tân An Hội",
        "Xã Phước Thạnh",
        "Xã Phước Hiệp",
        "Xã Trung Lập Thượng",
        "Xã Trung Lập Hạ",
        "Xã Thái Mỹ",
        "Xã Tân Phú Trung",
        "Xã Tân Thông Hội",
        "Xã Nhuận Đức",
        "Xã Hòa Phú",
        "Xã Phạm Văn Cội",
        "Xã Phú Mỹ Hưng",
        "Xã Bình Mỹ",
        "Xã An Phú",
        "Xã An Nhơn Tây",
        "Xã Bàu Đưng",
      ],
      "Huyện Hóc Môn": [
        "Thị trấn Hóc Môn",
        "Xã Tân Xuân",
        "Xã Tân Thới Nhì",
        "Xã Nhị Bình",
        "Xã Xuân Thới Sơn",
        "Xã Xuân Thới Thượng",
        "Xã Xuân Thới Đông",
        "Xã Đông Thạnh",
        "Xã Tân Hiệp",
        "Xã Thới Tam Thôn",
        "Xã Bà Điểm",
        "Xã Trung Chánh",
        "Xã Xuân Thới Thượng 1",
        "Xã Xuân Thới Thượng 2",
      ],
      "Huyện Bình Chánh": [
        "Thị trấn Tân Túc",
        "Xã Bình Chánh",
        "Xã Điền Hòa",
        "Xã Đức Hòa",
        "Xã Đức Lập Hạ",
        "Xã Đức Lập Thượng",
        "Xã Tân Quý Tây",
        "Xã Bình Lợi",
        "Xã Lê Minh Xuân",
        "Xã Tân Kiên",
        "Xã An Phú Tây",
        "Xã Hưng Long",
        "Xã Tân Nhựt",
        "Xã Phạm Văn Hai",
        "Xã Bình Hưng",
        "Xã Tân Quý Đông",
        "Xã Vĩnh Lộc A",
        "Xã Vĩnh Lộc B",
      ],
      "Huyện Nhà Bè": [
        "Thị trấn Nhà Bè",
        "Xã Phước Kiển",
        "Xã Nhơn Đức",
        "Xã Long Thới",
        "Xã Hiệp Phước",
        "Xã Phú Xuân",
        "Xã Tân Nhựt",
        "Xã Tân Hòa",
        "Xã Hưng Long",
        "Xã Lê Minh Xuân",
      ],
      "Huyện Cần Giờ": [
        "Thị trấn Cần Thạnh",
        "Xã An Thới Đông",
        "Xã Thạnh An",
        "Xã Long Hòa",
        "Xã Lý Nhơn",
        "Xã Tam Thôn Hiệp",
      ],
    },
    "Đồng Nai": {
      "Thành phố Biên Hòa": [
        "Phường Tân Phong",
        "Phường Tân Biên",
        "Phường Hòa Bình",
        "Phường Quyết Thắng",
        "Phường Tân Tiến",
        "Phường Thanh Bình",
        "Phường Trung Dũng",
        "Phường Thống Nhất",
        "Phường Long Bình",
        "Phường Long Bình Tân",
        "Phường Tam Hiệp",
        "Phường Bửu Hòa",
        "Phường Long Hưng",
        "Phường Tam Hòa",
        "Phường Phước Tân",
        "Phường Tân Vạn",
        "Phường Hiệp Hòa",
        "Phường Hố Nai",
        "Phường Tân Hạnh",
        "Phường Tân Hòa",
        "Phường Tân Mai",
        "Phường Quang Vinh",
        "Phường An Bình",
        "Phường Thống Nhất",
        "Phường Long Bình",
        "Phường Long Bình Tân",
        "Phường Tam Hiệp",
        "Phường Bửu Long",
      ],
      "Thành phố Long Khánh": [
        "Phường Xuân Trung",
        "Phường Xuân Thanh",
        "Phường Xuân Bình",
        "Phường Xuân An",
        "Phường Xuân Hoà",
        "Phường Bàu Sen",
        "Phường Suối Tre",
        "Phường Bảo Vinh",
        "Phường Xuân Lập",
      ],
      "Huyện Tân Phú": [
        "Thị trấn Tân Phú",
        "Xã Tân Hòa",
        "Xã Tân Hưng",
        "Xã Tân Phú",
        "Xã Phú Trung",
        "Xã Phú Điền",
        "Xã Phú Lập",
        "Xã Phú Lâm",
        "Xã Phú Bình",
        "Xã Phú Thanh",
        "Xã Trưởng Thạnh",
        "Xã Phú Xuân",
      ],
      "Huyện Vĩnh Cửu": [
        "Thị trấn Vĩnh An",
        "Xã Bình Lợi",
        "Xã Thạnh Phú",
        "Xã Thống Nhất",
        "Xã Tân An",
        "Xã Hiếu Liêm",
        "Xã Vĩnh Tân",
        "Xã Phú Lý",
        "Xã Vĩnh Hưng",
        "Xã Tân Bình",
      ],
      "Huyện Định Quán": [
        "Thị trấn Định Quán",
        "Xã Thanh Sơn",
        "Xã Phú Tân",
        "Xã Phú Vinh",
        "Xã Phú Lộc",
        "Xã Phú Cường",
        "Xã Gia Canh",
        "Xã Suối Nho",
        "Xã La Ngà",
        "Xã Quảng Lợi",
        "Xã Phú Hòa",
        "Xã Ngọc Định",
        "Xã Phú Lệ",
      ],
      "Huyện Trảng Bom": [
        "Thị trấn Trảng Bom",
        "Xã Thanh Bình",
        "Xã Hưng Thịnh",
        "Xã Quảng Tiến",
        "Xã Tây Hòa",
        "Xã An Viễn",
        "Xã Trung Hòa",
        "Xã Cây Gáo",
        "Xã Bàu Hàm 2",
        "Xã Sông Thao",
        "Xã Sông Trầu",
        "Xã Đông Hoà",
        "Xã Bắc Sơn",
        "Xã Đồi 61",
        "Xã Hợp Nhất",
        "Xã Tân Hạnh",
        "Xã Bình Minh",
        "Xã Thạnh Phú",
        "Xã Gia Tân 1",
        "Xã Gia Tân 2",
        "Xã Gia Tân 3",
      ],
      "Huyện Thống Nhất": [
        "Thị trấn Dầu Giây",
        "Xã Gia Kiệm",
        "Xã Hưng Lộc",
        "Xã Quang Trung",
        "Xã Lộ 25",
        "Xã Xuân Thiện",
        "Xã Xuân Thạnh",
        "Xã Sông Nhạn",
        "Xã Xuân Hòa",
        "Xã Bàu Hàm 2",
        "Xã Bàu Đồn",
      ],
      "Huyện Cẩm Mỹ": [
        "Thị trấn Cẩm Mỹ",
        "Xã Thạnh Phú",
        "Xã Suối Cát",
        "Xã Nhân Nghĩa",
        "Xã Sông Thơm",
        "Xã Thừa Đức",
        "Xã Lương Hòa",
        "Xã Long Giao",
        "Xã Xuân Đông",
        "Xã Xuân Tây",
        "Xã Thắng Lợi",
        "Xã Hòa Thạnh",
        "Xã Sông Ray",
        "Xã Bàu Hàm 2",
      ],
      "Huyện Long Thành": [
        "Thị trấn Long Thành",
        "Xã An Phước",
        "Xã Long An",
        "Xã Long Phước",
        "Xã Phước Bình",
        "Xã Bình An",
        "Xã Long Đức",
        "Xã Đại Phước",
        "Xã Phước Thái",
        "Xã Tam An",
        "Xã Lộc An",
        "Xã Long Hưng",
        "Xã Phước Long Thọ",
      ],
      "Huyện Nhơn Trạch": [
        "Thị trấn Hiệp Phước",
        "Xã Phước Thiền",
        "Xã Nhơn Phú",
        "Xã Long Thọ",
        "Xã Long Tân",
        "Xã Đại Phước",
        "Xã Phú Hội",
        "Xã Phú Thạnh",
        "Xã Phú Đông",
        "Xã Long Tân",
        "Xã Vĩnh Thanh",
        "Xã Phước An",
      ],
      "Huyện Xuân Lộc": [
        "Thị trấn Gia Ray",
        "Xã Lang Minh",
        "Xã Suối Cao",
        "Xã Xuân Định",
        "Xã Xuân Hưng",
        "Xã Xuân Hòa",
        "Xã Xuân Trường",
        "Xã Xuân Phú",
        "Xã Xuân Tín",
        "Xã Xuân Tân",
        "Xã Xuân Lai",
        "Xã Xuân Bắc",
        "Xã Xuân Đông",
        "Xã Xuân Tây",
      ],
    },
  };

  function populateProvinces() {
    provinceSelect.innerHTML = '<option value="">Chọn tỉnh/thành phố</option>';
    for (let province in vietnamAdministrativeData) {
      const option = document.createElement("option");
      option.value = province;
      option.textContent = province;
      provinceSelect.appendChild(option);
    }
  }

  function populateDistricts(province) {
    districtSelect.innerHTML = '<option value="">Chọn quận/huyện</option>';
    wardSelect.innerHTML = '<option value="">Chọn phường/xã</option>';
    if (province && vietnamAdministrativeData[province]) {
      for (let district in vietnamAdministrativeData[province]) {
        const option = document.createElement("option");
        option.value = district;
        option.textContent = district;
        districtSelect.appendChild(option);
      }
    }
  }

  function populateWards(province, district) {
    wardSelect.innerHTML = '<option value="">Chọn phường/xã</option>';
    if (
      province &&
      district &&
      vietnamAdministrativeData[province] &&
      vietnamAdministrativeData[province][district]
    ) {
      vietnamAdministrativeData[province][district].forEach((ward) => {
        const option = document.createElement("option");
        option.value = ward;
        option.textContent = ward;
        wardSelect.appendChild(option);
      });
    }
  }

  provinceSelect.addEventListener("change", () => {
    const selectedProvince = provinceSelect.value;
    populateDistricts(selectedProvince);
    populateWards(selectedProvince, districtSelect.value);
  });

  districtSelect.addEventListener("change", () => {
    const selectedProvince = provinceSelect.value;
    const selectedDistrict = districtSelect.value;
    populateWards(selectedProvince, selectedDistrict);
  });

  populateProvinces();

  if (accountBtn && loginModal && modalContent) {
    const registeredAccounts =
      JSON.parse(localStorage.getItem("registeredAccounts")) || [];
    const currentUserEmail = localStorage.getItem("currentUser");

    if (currentUserEmail) {
      const account = registeredAccounts.find(
        (acc) => acc.email === currentUserEmail
      );
      const displayName = account
        ? `${account.firstname || ""} ${account.lastname || ""}`.trim()
        : "Tài khoản";

      accountBtn.innerHTML = `
                <i class="fa-regular fa-user"></i>
                <span class="action-title">${displayName}</span>
            `;
    } else {
      accountBtn.innerHTML = `
                <i class="fa-regular fa-user"></i>
                <span class="action-title">Tài khoản</span>
            `;
    }

    accountBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (currentUserEmail) {
        if (confirm("Bạn có muốn đăng xuất không?")) {
          localStorage.removeItem("currentUser");
          accountBtn.innerHTML = `
                        <i class="fa-regular fa-user"></i>
                        <span class="action-title">Tài khoản</span>
                    `;
          loginModal.style.display = "block";
          modalContent.style.position = "absolute";
          modalContent.style.top =
            accountBtn.getBoundingClientRect().height + 21 + "px";
          modalContent.style.left = "22px";
          modalContent.style.transform = "translateX(-50%)";
          modalContent.style.width = "180px";
          modalContent.style.minHeight = "40px";
          accountBtn.appendChild(modalContent);
        }
      } else {
        loginModal.style.display = "block";
        modalContent.style.position = "absolute";
        modalContent.style.top =
          accountBtn.getBoundingClientRect().height + 21 + "px";
        modalContent.style.left = "22px";
        modalContent.style.transform = "translateX(-50%)";
        modalContent.style.width = "180px";
        modalContent.style.minHeight = "40px";
        accountBtn.appendChild(modalContent);
      }
    });

    window.addEventListener("click", function (e) {
      if (!accountBtn.contains(e.target) && !loginModal.contains(e.target)) {
        loginModal.style.display = "none";
        if (modalContent.parentElement === accountBtn) {
          loginModal.appendChild(modalContent);
        }
      }
    });

    window.addEventListener("resize", function () {
      if (loginModal.style.display === "block") {
        const rect = accountBtn.getBoundingClientRect();
        modalContent.style.top = rect.height + 21 + "px";
        modalContent.style.left = "22px";
        modalContent.style.transform = "translateX(-50%)";
        modalContent.style.width = "180px";
        modalContent.style.minHeight = "40px";
      }
    });
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function updateCartDisplay() {
    const cartCountElement = document.querySelector(".count-cart");
    let count = 0;

    if (cartItems) {
      cartItems.innerHTML = "";
      if (cart.length === 0) {
        cartItems.innerHTML = `<p class="no-products">Không có sản phẩm</p>`;
        tempTotal.textContent = "0đ";
        shippingFee.textContent = "Miễn phí";
        voucherDiscount.textContent = "0đ";
        overlapDiscount.textContent = "0đ";
        finalTotal.textContent = "0đ (Đã giảm 0đ từ giá gốc)";
        footerTotal.textContent = "0đ";
        footerDiscount.textContent = "Đã giảm: 0đ";
      } else {
        cart.forEach((item, index) => {
          const div = document.createElement("div");
          div.classList.add("cart-item");
          div.innerHTML = `
            <img src="${item.images[0] || "/img/placeholder.jpg"}" alt="${
            item.name
          }" class="item-image">
            <div class="item-details">
              <p class="item-name">${item.name}</p>
              <p class="item-attributes">Đổi ý 15 ngày</p>
              <p class="item-attributes">${item.selectedColor || "N/A"} / ${
            item.selectedSize || "N/A"
          }</p>
              <div class="quantity-control">
                <button class="quantity-btn decrease" data-index="${index}">-</button>
                <input type="number" class="quantity-input" value="${
                  item.quantity || 1
                }" min="1" data-index="${index}">
                <button class="quantity-btn increase" data-index="${index}">+</button>
              </div>
              <p class="item-price">${(
                (item.newPrice || item.price) * (item.quantity || 1)
              ).toLocaleString()}đ</p>
            </div>
            <button class="remove-item" data-index="${index}">X</button>
          `;
          cartItems.appendChild(div);
          count += item.quantity || 1;
        });
        updateTotal();
        attachEventListeners();
      }
    }

    if (cartCountElement) {
      cartCountElement.textContent = count;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function updateTotal() {
    let total = cart.reduce(
      (sum, item) => sum + (item.newPrice || item.price) * (item.quantity || 1),
      0
    );
    let discount =
      parseInt(voucherDiscount.textContent.replace(/[^0-9]/g, "")) || 0;
    tempTotal.textContent = total.toLocaleString() + "đ";
    shippingFee.textContent = "Miễn phí";
    finalTotal.textContent =
      (total - discount).toLocaleString() +
      "đ (Đã giảm " +
      discount.toLocaleString() +
      "đ từ giá gốc)";
    footerTotal.textContent = (total - discount).toLocaleString() + "đ";
    footerDiscount.textContent =
      discount > 0 ? `Đã giảm: ${discount.toLocaleString()}đ` : "Đã giảm: 0đ";
  }

  const voucherRadios = document.querySelectorAll('input[name="voucher"]');

  function applyDiscount(voucherCode) {
    let total = cart.reduce(
      (sum, item) => sum + (item.newPrice || item.price) * (item.quantity || 1),
      0
    );
    let discount = 0;

    if (voucherCode === "D10" && total >= 200000) {
      discount = Math.min(total * 0.1, 20000);
      document.getElementById("voucher-d10").checked = true;
    } else if (voucherCode === "D200" && total >= 1499000) {
      discount = 200000;
      document.getElementById("voucher-d200").checked = true;
    } else if (voucherCode === "D100" && total >= 999000) {
      discount = 100000;
      document.getElementById("voucher-d100").checked = true;
    } else if (voucherCode === "OCT20" && total >= 299000) {
      discount = 20000;
    } else if (voucherCode === "OCT40" && total >= 599000) {
      discount = 40000;
    } else if (voucherCode === "OCT70" && total >= 899000) {
      discount = 70000;
    } else {
      voucherRadios.forEach((radio) => (radio.checked = false));
      discount = 0;
      alert("Mã giảm giá không hợp lệ hoặc không đủ điều kiện áp dụng!");
    }

    voucherDiscount.textContent = discount.toLocaleString() + "đ";
    updateTotal();
  }

  voucherRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      let total = cart.reduce(
        (sum, item) =>
          sum + (item.newPrice || item.price) * (item.quantity || 1),
        0
      );
      let discount = 0;

      if (radio.value === "D10" && total >= 200000) {
        discount = Math.min(total * 0.1, 20000);
      } else if (radio.value === "D200" && total >= 1499000) {
        discount = 200000;
      } else if (radio.value === "D100" && total >= 999000) {
        discount = 100000;
      } else {
        discount = 0;
        alert(
          `Đơn hàng không đủ điều kiện cho voucher ${
            radio.value
          }! Tổng tiền: ${total.toLocaleString()}đ`
        );
        radio.checked = false;
      }

      voucherDiscount.textContent = discount.toLocaleString() + "đ";
      updateTotal();
    });
  });

  applyVoucherBtn.addEventListener("click", () => {
    const voucherCode = voucherInput.value.trim().toUpperCase();
    if (voucherCode) {
      applyDiscount(voucherCode);
      voucherInput.value = "";
    } else {
      alert("Vui lòng nhập mã giảm giá!");
    }
  });

  const orderForm = document.getElementById("orderForm");
  const checkoutBtn = document.querySelector(".checkout-btn");

  function validateForm() {
    const fullName = document.getElementById("fullName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const province = provinceSelect.value;
    const district = districtSelect.value;
    const ward = wardSelect.value;

    if (!fullName || !phone || !address || !province || !district || !ward) {
      alert("Vui lòng điền đầy đủ thông tin bắt buộc!");
      return false;
    }
    if (!/^\d{10}$/.test(phone)) {
      alert("Số điện thoại phải là 10 chữ số!");
      return false;
    }
    return true;
  }

  function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add("show");
    }, 10);

    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 500);
    }, 3000);
  }

  orderForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (cart.length > 0) {
      if (validateForm()) {
        showNotification("Đơn hàng đã được xác nhận!");
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartDisplay();
        orderForm.reset();
      }
    } else {
      alert("Vui lòng thêm sản phẩm vào giỏ hàng trước khi xác nhận!");
    }
  });

  checkoutBtn?.addEventListener("click", (e) => {
    if (!validateForm()) {
      e.preventDefault();
    }
  });

  function attachEventListeners() {
    const decreaseBtns = document.querySelectorAll(".quantity-btn.decrease");
    const increaseBtns = document.querySelectorAll(".quantity-btn.increase");
    const quantityInputs = document.querySelectorAll(".quantity-input");
    const removeBtns = document.querySelectorAll(".remove-item");

    decreaseBtns.forEach((btn) => {
      btn.removeEventListener("click", handleDecrease);
      btn.addEventListener("click", handleDecrease);
    });

    increaseBtns.forEach((btn) => {
      btn.removeEventListener("click", handleIncrease);
      btn.addEventListener("click", handleIncrease);
    });

    quantityInputs.forEach((input) => {
      input.removeEventListener("change", handleQuantityChange);
      input.addEventListener("change", handleQuantityChange);
    });

    removeBtns.forEach((btn) => {
      btn.removeEventListener("click", handleRemove);
      btn.addEventListener("click", handleRemove);
    });
  }

  function handleDecrease(e) {
    const index = e.target.dataset.index;
    if (cart[index].quantity > 1) {
      cart[index].quantity--;
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartDisplay();
    }
  }

  function handleIncrease(e) {
    const index = e.target.dataset.index;
    cart[index].quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
  }

  function handleQuantityChange(e) {
    const index = e.target.dataset.index;
    let value = parseInt(e.target.value);
    if (isNaN(value) || value < 1) value = 1;
    cart[index].quantity = value;
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
  }

  function handleRemove(e) {
    const index = e.target.dataset.index;
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
  }

  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  if (searchForm && searchInput && searchResults) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const query = searchInput.value.trim();
      searchProducts(query);
    });

    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim();
      searchProducts(query);
    });

    document.addEventListener("click", (e) => {
      if (!searchForm.contains(e.target)) {
        searchResults.classList.remove("active");
      }
    });
  }

  function searchProducts(query) {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const searchResults = document.getElementById("searchResults");
    if (!searchResults) return;

    searchResults.innerHTML = "";

    if (query.trim() === "") {
      searchResults.classList.remove("active");
      return;
    }

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredProducts.length > 0) {
      filteredProducts.forEach((product) => {
        const div = document.createElement("div");
        div.classList.add("search-result-item");
        div.innerHTML = `
          <img src="${
            product.images && product.images.length > 0
              ? product.images[0]
              : "/img/placeholder.jpg"
          }" alt="${product.name}">
          <h4>${product.name}</h4>
        `;
        div.addEventListener("click", () => {
          window.location.href = `chitiet.html?id=${encodeURIComponent(
            product.name
          )}`;
          searchResults.classList.remove("active");
        });
        searchResults.appendChild(div);
      });
      searchResults.classList.add("active");
    } else {
      const div = document.createElement("div");
      div.classList.add("search-result-item");
      div.textContent = "Không thấy kết quả tìm kiếm";
      div.style.textAlign = "center";
      div.style.color = "#777";
      searchResults.appendChild(div);
      searchResults.classList.add("active");
    }
  }

  updateCartDisplay();
});
