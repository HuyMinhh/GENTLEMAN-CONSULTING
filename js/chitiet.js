// // Kiểm tra và cập nhật trạng thái tài khoản
// document.addEventListener("DOMContentLoaded", () => {
//     const accountBtn = document.getElementById("account-btn");
//     const loginModal = document.getElementById("loginModal");
//     const modalContent = document.querySelector(".modal-content");

//     if (accountBtn && loginModal && modalContent) {
//         const registeredAccounts = JSON.parse(localStorage.getItem("registeredAccounts")) || [];
//         const currentUserEmail = localStorage.getItem("currentUser");

//         console.log("Debug - registeredAccounts:", registeredAccounts);
//         console.log("Debug - currentUserEmail:", currentUserEmail);

//         if (currentUserEmail) {
//             const account = registeredAccounts.find((acc) => acc.email === currentUserEmail);
//             const displayName = account ? `${account.firstname || ""} ${account.lastname || ""}`.trim() : "Tài khoản";

//             console.log("Debug - Account found:", account);
//             console.log("Debug - Display name:", displayName);

//             accountBtn.innerHTML = `
//                 <i class="fa-regular fa-user"></i>
//                 <span class="action-title">${displayName}</span>
//             `;
//         } else {
//             accountBtn.innerHTML = `
//                 <i class="fa-regular fa-user"></i>
//                 <span class="action-title">Tài khoản</span>
//             `;
//         }

//         accountBtn.addEventListener("click", function (e) {
//             e.preventDefault();
//             if (currentUserEmail) {
//                 if (confirm("Bạn có muốn đăng xuất không?")) {
//                     localStorage.removeItem("currentUser");
//                     accountBtn.innerHTML = `
//                         <i class="fa-regular fa-user"></i>
//                         <span class="action-title">Tài khoản</span>
//                     `;
//                     loginModal.style.display = "block";
//                     modalContent.style.position = "absolute";
//                     modalContent.style.top = accountBtn.getBoundingClientRect().height + 21 + "px";
//                     modalContent.style.left = "22px";
//                     modalContent.style.transform = "translateX(-50%)";
//                     modalContent.style.width = "180px";
//                     modalContent.style.minHeight = "40px";
//                     accountBtn.appendChild(modalContent);
//                 }
//             } else {
//                 loginModal.style.display = "block";
//                 modalContent.style.position = "absolute";
//                 modalContent.style.top = accountBtn.getBoundingClientRect().height + 21 + "px";
//                 modalContent.style.left = "22px";
//                 modalContent.style.transform = "translateX(-50%)";
//                 modalContent.style.width = "180px";
//                 modalContent.style.minHeight = "40px";
//                 accountBtn.appendChild(modalContent);
//             }
//         });

//         window.addEventListener("click", function (e) {
//             if (!accountBtn.contains(e.target) && !loginModal.contains(e.target)) {
//                 loginModal.style.display = "none";
//                 if (modalContent.parentElement === accountBtn) {
//                     loginModal.appendChild(modalContent);
//                 }
//             }
//         });

//         window.addEventListener("resize", function () {
//             if (loginModal.style.display === "block") {
//                 const rect = accountBtn.getBoundingClientRect();
//                 modalContent.style.top = rect.height + 21 + "px";
//                 modalContent.style.left = "22px";
//                 modalContent.style.transform = "translateX(-50%)";
//                 modalContent.style.width = "180px";
//                 modalContent.style.minHeight = "40px";
//             }
//         });
//     } else {
//         console.error("Modal elements not fully found!", {
//             accountBtn,
//             loginModal,
//             modalContent,
//         });
//     }

//     // Hiển thị chi tiết sản phẩm
//     let currentIndex = 0;
//     function displayProductDetail() {
//         const urlParams = new URLSearchParams(window.location.search);
//         const productId = urlParams.get('id');
//         if (!productId) {
//             document.querySelector('.product-detail').innerHTML = '<p>Sản phẩm không tồn tại!</p>';
//             return;
//         }

//         const products = JSON.parse(localStorage.getItem('products')) || [];
//         const product = products.find(p => p.name === productId);

//         if (product) {
//             document.getElementById('productName').textContent = product.name;
//             document.getElementById('oldPrice').textContent = product.oldPrice ? `${product.oldPrice} VND` : '';
//             document.getElementById('newPrice').textContent = product.newPrice ? `${product.newPrice} VND` : `${product.price} VND`;
//             document.getElementById('sizes').textContent = product.sizes ? product.sizes.join(', ') : 'N/A';
//             document.getElementById('colors').textContent = product.colors ? product.colors.join(', ') : 'N/A';
//             document.getElementById('description').textContent = product.description || 'N/A';

//             const thumbnails = document.querySelectorAll('.thumbnail');
//             const mainImage = document.getElementById('mainImage');
//             product.images.forEach((img, index) => {
//                 if (index < 9 && thumbnails[index]) {
//                     thumbnails[index].src = img || '/img/placeholder.jpg';
//                     thumbnails[index].style.display = 'block';
//                 }
//             });
//             mainImage.src = product.images[0] || '/img/placeholder.jpg';
//             updateActiveThumbnail(0);
//         } else {
//             document.querySelector('.product-detail').innerHTML = '<p>Sản phẩm không tìm thấy!</p>';
//         }
//     }

//     function changeImage(thumbnail, index) {
//         const mainImage = document.getElementById('mainImage');
//         mainImage.src = thumbnail.src;
//         currentIndex = index;
//         updateActiveThumbnail(currentIndex);
//         scrollToThumbnail(index);
//     }

//     function updateActiveThumbnail(index) {
//         const thumbnails = document.querySelectorAll('.thumbnail');
//         thumbnails.forEach((thumb, i) => {
//             thumb.classList.toggle('active', i === index);
//         });
//     }

//     // Thêm chức năng cuộn thumbnail
//     const thumbnailGallery = document.querySelector('.thumbnail-gallery');
//     const thumbnails = document.querySelectorAll('.thumbnail');

//     function scrollToThumbnail(index) {
//         const thumbnailWidth = thumbnails[0].offsetWidth + 10; // Cộng gap
//         const scrollPosition = index * thumbnailWidth;
//         thumbnailGallery.scrollTo({
//             left: scrollPosition,
//             behavior: 'smooth'
//         });
//     }

//     // Thêm sự kiện click vào thumbnail để trỏ đến hình đó
//     thumbnails.forEach((thumbnail, index) => {
//         thumbnail.addEventListener('click', () => {
//             changeImage(thumbnail, index);
//         });
//     });

//     const prevThumbBtn = document.querySelector('.prev-btn');
//     const nextThumbBtn = document.querySelector('.next-btn');

//     prevThumbBtn.addEventListener('click', () => {
//         currentIndex = (currentIndex > 0) ? currentIndex - 1 : 8; // Giữ cố định từ 0 đến 8
//         const mainImage = document.getElementById('mainImage');
//         mainImage.src = thumbnails[currentIndex].src;
//         updateActiveThumbnail(currentIndex);
//         scrollToThumbnail(currentIndex);
//     });

//     nextThumbBtn.addEventListener('click', () => {
//         currentIndex = (currentIndex < 8) ? currentIndex + 1 : 0; // Khi đến 8 thì quay về 0 cố định
//         const mainImage = document.getElementById('mainImage');
//         mainImage.src = thumbnails[currentIndex].src;
//         updateActiveThumbnail(currentIndex);
//         scrollToThumbnail(currentIndex);
//     });

//     // Gọi hàm khi trang load
//     displayProductDetail();
// });

// // Kiểm tra và cập nhật trạng thái tài khoản
// document.addEventListener("DOMContentLoaded", () => {
//     const accountBtn = document.getElementById("account-btn");
//     const loginModal = document.getElementById("loginModal");
//     const modalContent = document.querySelector(".modal-content");

//     if (accountBtn && loginModal && modalContent) {
//         const registeredAccounts = JSON.parse(localStorage.getItem("registeredAccounts")) || [];
//         const currentUserEmail = localStorage.getItem("currentUser");

//         console.log("Debug - registeredAccounts:", registeredAccounts);
//         console.log("Debug - currentUserEmail:", currentUserEmail);

//         if (currentUserEmail) {
//             const account = registeredAccounts.find((acc) => acc.email === currentUserEmail);
//             const displayName = account ? `${account.firstname || ""} ${account.lastname || ""}`.trim() : "Tài khoản";

//             console.log("Debug - Account found:", account);
//             console.log("Debug - Display name:", displayName);

//             accountBtn.innerHTML = `
//                 <i class="fa-regular fa-user"></i>
//                 <span class="action-title">${displayName}</span>
//             `;
//         } else {
//             accountBtn.innerHTML = `
//                 <i class="fa-regular fa-user"></i>
//                 <span class="action-title">Tài khoản</span>
//             `;
//         }

//         accountBtn.addEventListener("click", function (e) {
//             e.preventDefault();
//             if (currentUserEmail) {
//                 if (confirm("Bạn có muốn đăng xuất không?")) {
//                     localStorage.removeItem("currentUser");
//                     accountBtn.innerHTML = `
//                         <i class="fa-regular fa-user"></i>
//                         <span class="action-title">Tài khoản</span>
//                     `;
//                     loginModal.style.display = "block";
//                     modalContent.style.position = "absolute";
//                     modalContent.style.top = accountBtn.getBoundingClientRect().height + 21 + "px";
//                     modalContent.style.left = "22px";
//                     modalContent.style.transform = "translateX(-50%)";
//                     modalContent.style.width = "180px";
//                     modalContent.style.minHeight = "40px";
//                     accountBtn.appendChild(modalContent);
//                 }
//             } else {
//                 loginModal.style.display = "block";
//                 modalContent.style.position = "absolute";
//                 modalContent.style.top = accountBtn.getBoundingClientRect().height + 21 + "px";
//                 modalContent.style.left = "22px";
//                 modalContent.style.transform = "translateX(-50%)";
//                 modalContent.style.width = "180px";
//                 modalContent.style.minHeight = "40px";
//                 accountBtn.appendChild(modalContent);
//             }
//         });

//         window.addEventListener("click", function (e) {
//             if (!accountBtn.contains(e.target) && !loginModal.contains(e.target)) {
//                 loginModal.style.display = "none";
//                 if (modalContent.parentElement === accountBtn) {
//                     loginModal.appendChild(modalContent);
//                 }
//             }
//         });

//         window.addEventListener("resize", function () {
//             if (loginModal.style.display === "block") {
//                 const rect = accountBtn.getBoundingClientRect();
//                 modalContent.style.top = rect.height + 21 + "px";
//                 modalContent.style.left = "22px";
//                 modalContent.style.transform = "translateX(-50%)";
//                 modalContent.style.width = "180px";
//                 modalContent.style.minHeight = "40px";
//             }
//         });
//     } else {
//         console.error("Modal elements not fully found!", {
//             accountBtn,
//             loginModal,
//             modalContent,
//         });
//     }

//     // Hiển thị chi tiết sản phẩm
//     let currentIndex = 0;
//     let quantity = 1;
//     let selectedSize = null;
//     let selectedColor = null;

//     function displayProductDetail() {
//         const urlParams = new URLSearchParams(window.location.search);
//         const productId = urlParams.get('id');
//         if (!productId) {
//             document.querySelector('.product-detail').innerHTML = '<p>Sản phẩm không tồn tại!</p>';
//             return;
//         }

//         const products = JSON.parse(localStorage.getItem('products')) || [];
//         const product = products.find(p => p.name === productId);

//         if (product) {
//             document.getElementById('productName').textContent = product.name || 'Tên sản phẩm không xác định';
//             document.getElementById('newPrice').textContent = product.newPrice ? `${product.newPrice} VND` : `${product.price} VND`;
//             document.getElementById('oldPrice').textContent = product.oldPrice ? `${product.oldPrice} VND` : '';
//             document.getElementById('category').textContent = product.category || 'N/A';
//             // Tạo nút cho kích thước
//             const sizesContainer = document.getElementById('sizes-container');
//             sizesContainer.innerHTML = '';
//             const sizes = product.sizes || [];
//             sizes.forEach(size => {
//                 const button = document.createElement('button');
//                 button.textContent = size;
//                 button.addEventListener('click', () => selectSize(size, button));
//                 sizesContainer.appendChild(button);
//             });
//             // Tạo nút cho màu sắc
//             const colorsContainer = document.getElementById('colors-container');
//             colorsContainer.innerHTML = '';
//             const colors = product.colors || [];
//             colors.forEach(color => {
//                 const button = document.createElement('button');
//                 button.textContent = color;
//                 button.addEventListener('click', () => selectColor(color, button));
//                 colorsContainer.appendChild(button);
//             });
//             // Tính giảm giá
//             const oldPrice = product.oldPrice || product.price;
//             const newPrice = product.newPrice || product.price;
//             const discount = oldPrice ? Math.round(((oldPrice - newPrice) / oldPrice) * 100) : 0;
//             document.getElementById('discount').textContent = discount;
//             // Cập nhật số lượng thành input
//             const quantityInput = document.getElementById('quantity');
//             quantityInput.value = quantity;
//             quantityInput.addEventListener('input', function (e) {
//                 let value = parseInt(e.target.value) || 1;
//                 if (value < 1) value = 1;
//                 e.target.value = value;
//                 quantity = value;
//             });

//             // Hiển thị mô tả từ admin
//             const descriptionElement = document.getElementById('description');
//             descriptionElement.textContent = product.description || 'Chưa có mô tả sản phẩm.';

//             const thumbnails = document.querySelectorAll('.thumbnail');
//             const mainImage = document.getElementById('mainImage');
//             product.images.forEach((img, index) => {
//                 if (index < 9 && thumbnails[index]) {
//                     thumbnails[index].src = img || '/img/placeholder.jpg';
//                     thumbnails[index].style.display = 'block';
//                 }
//             });
//             mainImage.src = product.images[0] || '/img/placeholder.jpg';
//             updateActiveThumbnail(0);
//         } else {
//             document.querySelector('.product-detail').innerHTML = '<p>Sản phẩm không tìm thấy!</p>';
//         }
//     }

//     function selectSize(size, button) {
//         selectedSize = size;
//         const buttons = document.querySelectorAll('#sizes-container button');
//         buttons.forEach(btn => btn.classList.remove('active'));
//         button.classList.add('active');
//     }

//     function selectColor(color, button) {
//         selectedColor = color;
//         const buttons = document.querySelectorAll('#colors-container button');
//         buttons.forEach(btn => btn.classList.remove('active'));
//         button.classList.add('active');
//     }

//     function changeImage(thumbnail, index) {
//         const mainImage = document.getElementById('mainImage');
//         mainImage.src = thumbnail.src;
//         currentIndex = index;
//         updateActiveThumbnail(currentIndex);
//         scrollToThumbnail(index);
//     }

//     function updateActiveThumbnail(index) {
//         const thumbnails = document.querySelectorAll('.thumbnail');
//         thumbnails.forEach((thumb, i) => {
//             thumb.classList.toggle('active', i === index);
//         });
//     }

//     // Thêm chức năng cuộn thumbnail
//     const thumbnailGallery = document.querySelector('.thumbnail-gallery');
//     const thumbnails = document.querySelectorAll('.thumbnail');

//     function scrollToThumbnail(index) {
//         const thumbnailWidth = thumbnails[0].offsetWidth + 10;
//         const scrollPosition = index * thumbnailWidth;
//         thumbnailGallery.scrollTo({
//             left: scrollPosition,
//             behavior: 'smooth'
//         });
//     }

//     // Thêm sự kiện click vào thumbnail
//     thumbnails.forEach((thumbnail, index) => {
//         thumbnail.addEventListener('click', () => {
//             changeImage(thumbnail, index);
//         });
//     });

//     const prevThumbBtn = document.querySelector('.prev-btn');
//     const nextThumbBtn = document.querySelector('.next-btn');

//     prevThumbBtn.addEventListener('click', () => {
//         currentIndex = (currentIndex > 0) ? currentIndex - 1 : 8;
//         const mainImage = document.getElementById('mainImage');
//         mainImage.src = thumbnails[currentIndex].src;
//         updateActiveThumbnail(currentIndex);
//         scrollToThumbnail(currentIndex);
//     });

//     nextThumbBtn.addEventListener('click', () => {
//         currentIndex = (currentIndex < 8) ? currentIndex + 1 : 0;
//         const mainImage = document.getElementById('mainImage');
//         mainImage.src = thumbnails[currentIndex].src;
//         updateActiveThumbnail(currentIndex);
//         scrollToThumbnail(currentIndex);
//     });

//     // Xử lý tăng/giảm số lượng
//     const decreaseBtn = document.querySelector('.decrease');
//     const increaseBtn = document.querySelector('.increase');
//     const quantityInput = document.getElementById('quantity');

//     decreaseBtn.addEventListener('click', () => {
//         let value = parseInt(quantityInput.value) || 1;
//         if (value > 1) {
//             value--;
//             quantityInput.value = value;
//             quantity = value;
//         }
//     });

//     increaseBtn.addEventListener('click', () => {
//         let value = parseInt(quantityInput.value) || 1;
//         value++;
//         quantityInput.value = value;
//         quantity = value;
//     });

//     // Thêm sự kiện cho nút "Thêm vào giỏ hàng" và "Đặt hàng"
//     document.querySelector('.add-to-cart-btn').addEventListener('click', () => {
//         const quantity = parseInt(document.getElementById('quantity').value) || 1;
//         if (!selectedSize) {
//             alert("Vui lòng chọn kích thước!");
//             return;
//         }
//         if (!selectedColor) {
//             alert("Vui lòng chọn màu sắc!");
//             return;
//         }
//         alert(`Đã thêm ${quantity} sản phẩm kích thước ${selectedSize} màu ${selectedColor} vào giỏ hàng!`);
//     });

//     document.querySelector('.buy-now-btn').addEventListener('click', () => {
//         const quantity = parseInt(document.getElementById('quantity').value) || 1;
//         if (!selectedSize) {
//             alert("Vui lòng chọn kích thước!");
//             return;
//         }
//         if (!selectedColor) {
//             alert("Vui lòng chọn màu sắc!");
//             return;
//         }
//         alert(`Đặt hàng ${quantity} sản phẩm kích thước ${selectedSize} màu ${selectedColor} thành công!`);
//     });

//     // Gọi hàm khi trang load
//     displayProductDetail();
// });

// // Kiểm tra và cập nhật trạng thái tài khoản
// document.addEventListener("DOMContentLoaded", () => {
//   const accountBtn = document.getElementById("account-btn");
//   const loginModal = document.getElementById("loginModal");
//   const modalContent = document.querySelector(".modal-content");

//   if (accountBtn && loginModal && modalContent) {
//     const registeredAccounts =
//       JSON.parse(localStorage.getItem("registeredAccounts")) || [];
//     const currentUserEmail = localStorage.getItem("currentUser");

//     console.log("Debug - registeredAccounts:", registeredAccounts);
//     console.log("Debug - currentUserEmail:", currentUserEmail);

//     if (currentUserEmail) {
//       const account = registeredAccounts.find(
//         (acc) => acc.email === currentUserEmail
//       );
//       const displayName = account
//         ? `${account.firstname || ""} ${account.lastname || ""}`.trim()
//         : "Tài khoản";

//       console.log("Debug - Account found:", account);
//       console.log("Debug - Display name:", displayName);

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

//   // Hiển thị chi tiết sản phẩm
//   let currentIndex = 0;
//   let quantity = 1;
//   let selectedSize = null;
//   let selectedColor = null;

//   function displayProductDetail() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const productId = urlParams.get("id");
//     if (!productId) {
//       document.querySelector(".product-detail").innerHTML =
//         "<p>Sản phẩm không tồn tại!</p>";
//       return;
//     }

//     const products = JSON.parse(localStorage.getItem("products")) || [];
//     const product = products.find((p) => p.name === productId);

//     if (product) {
//       document.getElementById("productName").textContent =
//         product.name || "Tên sản phẩm không xác định";
//       document.getElementById("newPrice").textContent = product.newPrice
//         ? `${product.newPrice} VND`
//         : `${product.price} VND`;
//       document.getElementById("oldPrice").textContent = product.oldPrice
//         ? `${product.oldPrice} VND`
//         : "";
//       document.getElementById("category").textContent =
//         product.category || "N/A";
//       // Tạo nút cho kích thước
//       const sizesContainer = document.getElementById("sizes-container");
//       sizesContainer.innerHTML = "";
//       const sizes = product.sizes || [];

//       sizes.forEach((size, index) => {
//         const button = document.createElement("button");
//         button.textContent = size;

//         // Gắn sự kiện click
//         button.addEventListener("click", () => selectSize(size, button));

//         // Thêm nút vào giao diện
//         sizesContainer.appendChild(button);

//         // ✅ Tự động chọn nút đầu tiên
//         if (index === 0) {
//           selectSize(size, button);
//         }
//       });

//       // Tạo nút cho màu sắc
//       const colorsContainer = document.getElementById("colors-container");
//       colorsContainer.innerHTML = "";
//       const colors = product.colors || [];
//       colors.forEach((color) => {
//         const button = document.createElement("button");
//         button.textContent = color;
//         button.addEventListener("click", () => selectColor(color, button));
//         colorsContainer.appendChild(button);
//       });
//       // Tính giảm giá
//       const oldPrice = product.oldPrice || product.price;
//       const newPrice = product.newPrice || product.price;
//       const discount = oldPrice
//         ? Math.round(((oldPrice - newPrice) / oldPrice) * 100)
//         : 0;
//       document.getElementById("discount").textContent = discount;
//       // Cập nhật số lượng thành input
//       const quantityInput = document.getElementById("quantity");
//       quantityInput.value = quantity;
//       quantityInput.addEventListener("input", function (e) {
//         let value = parseInt(e.target.value) || 1;
//         if (value < 1) value = 1;
//         e.target.value = value;
//         quantity = value;
//       });

//       // Hiển thị nội dung tab
//       const descriptionContent = document.getElementById("description-content");
//       descriptionContent.textContent =
//         product.description || "Chưa có mô tả sản phẩm.";
//       const warrantyContent = document.getElementById("warranty-content");
//       warrantyContent.textContent =
//         product.warrantyInfo ||
//         "Chính sách bảo hành: Bảo hành 12 tháng cho sản phẩm lỗi.";
//       const shippingContent = document.getElementById("shipping-content");
//       shippingContent.textContent =
//         product.shippingInfo ||
//         "Chính sách giao hàng: Giao hàng trong 3-5 ngày làm việc.";

//       const thumbnails = document.querySelectorAll(".thumbnail");
//       const mainImage = document.getElementById("mainImage");
//       product.images.forEach((img, index) => {
//         if (index < 9 && thumbnails[index]) {
//           thumbnails[index].src = img || "/img/placeholder.jpg";
//           thumbnails[index].style.display = "block";
//         }
//       });
//       mainImage.src = product.images[0] || "/img/placeholder.jpg";
//       updateActiveThumbnail(0);
//     } else {
//       document.querySelector(".product-detail").innerHTML =
//         "<p>Sản phẩm không tìm thấy!</p>";
//     }
//   }

//   function selectSize(size, button) {
//     selectedSize = size;
//     const buttons = document.querySelectorAll("#sizes-container button");
//     buttons.forEach((btn) => btn.classList.remove("active"));
//     button.classList.add("active");
//   }

//   function selectColor(color, button) {
//     selectedColor = color;
//     const buttons = document.querySelectorAll("#colors-container button");
//     buttons.forEach((btn) => btn.classList.remove("active"));
//     button.classList.add("active");
//   }

//   function changeImage(thumbnail, index) {
//     const mainImage = document.getElementById("mainImage");
//     mainImage.src = thumbnail.src;
//     currentIndex = index;
//     updateActiveThumbnail(currentIndex);
//     scrollToThumbnail(index);
//   }

//   function updateActiveThumbnail(index) {
//     const thumbnails = document.querySelectorAll(".thumbnail");
//     thumbnails.forEach((thumb, i) => {
//       thumb.classList.toggle("active", i === index);
//     });
//   }

//   // Thêm chức năng cuộn thumbnail
//   const thumbnailGallery = document.querySelector(".thumbnail-gallery");
//   const thumbnails = document.querySelectorAll(".thumbnail");

//   function scrollToThumbnail(index) {
//     const thumbnailWidth = thumbnails[0].offsetWidth + 25;
//     const scrollPosition = index * thumbnailWidth;
//     thumbnailGallery.scrollTo({
//       left: scrollPosition,
//       behavior: "smooth",
//     });
//   }

//   // Thêm sự kiện click vào thumbnail
//   thumbnails.forEach((thumbnail, index) => {
//     thumbnail.addEventListener("click", () => {
//       changeImage(thumbnail, index);
//     });
//   });

//   const prevThumbBtn = document.querySelector(".prev-btn");
//   const nextThumbBtn = document.querySelector(".next-btn");

//   prevThumbBtn.addEventListener("click", () => {
//     currentIndex = currentIndex > 0 ? currentIndex - 1 : 8;
//     const mainImage = document.getElementById("mainImage");
//     mainImage.src = thumbnails[currentIndex].src;
//     updateActiveThumbnail(currentIndex);
//     scrollToThumbnail(currentIndex);
//   });

//   nextThumbBtn.addEventListener("click", () => {
//     currentIndex = currentIndex < 8 ? currentIndex + 1 : 0;
//     const mainImage = document.getElementById("mainImage");
//     mainImage.src = thumbnails[currentIndex].src;
//     updateActiveThumbnail(currentIndex);
//     scrollToThumbnail(currentIndex);
//   });

//   // Xử lý tăng/giảm số lượng
//   const decreaseBtn = document.querySelector(".decrease");
//   const increaseBtn = document.querySelector(".increase");
//   const quantityInput = document.getElementById("quantity");

//   decreaseBtn.addEventListener("click", () => {
//     let value = parseInt(quantityInput.value) || 1;
//     if (value > 1) {
//       value--;
//       quantityInput.value = value;
//       quantity = value;
//     }
//   });

//   increaseBtn.addEventListener("click", () => {
//     let value = parseInt(quantityInput.value) || 1;
//     value++;
//     quantityInput.value = value;
//     quantity = value;
//   });

//   // Thêm sự kiện cho nút "Thêm vào giỏ hàng" và "Đặt hàng"
//   document.querySelector(".add-to-cart-btn").addEventListener("click", () => {
//     const quantity = parseInt(document.getElementById("quantity").value) || 1;
//     if (!selectedSize) {
//       alert("Vui lòng chọn kích thước!");
//       return;
//     }
//     if (!selectedColor) {
//       alert("Vui lòng chọn màu sắc!");
//       return;
//     }
//     alert(
//       `Đã thêm ${quantity} sản phẩm kích thước ${selectedSize} màu ${selectedColor} vào giỏ hàng!`
//     );
//   });

//   document.querySelector(".buy-now-btn").addEventListener("click", () => {
//     const quantity = parseInt(document.getElementById("quantity").value) || 1;
//     if (!selectedSize) {
//       alert("Vui lòng chọn kích thước!");
//       return;
//     }
//     if (!selectedColor) {
//       alert("Vui lòng chọn màu sắc!");
//       return;
//     }
//     alert(
//       `Đặt hàng ${quantity} sản phẩm kích thước ${selectedSize} màu ${selectedColor} thành công!`
//     );
//   });

//   // Hàm chuyển đổi tab
//   window.openTab = function (tabName) {
//     const tabPanes = document.querySelectorAll(".tab-pane");
//     const tabButtons = document.querySelectorAll(".tab-button");
//     tabPanes.forEach((pane) => pane.classList.remove("active"));
//     tabButtons.forEach((button) => button.classList.remove("active"));
//     const activePane = document.getElementById(tabName);
//     if (activePane) {
//       activePane.classList.add("active");
//     }
//     const activeButton = document.querySelector(
//       `.tab-button[onclick="openTab('${tabName}')"]`
//     );
//     if (activeButton) {
//       activeButton.classList.add("active");
//     }
//     console.log(`Switched to tab: ${tabName}`); // Debug log
//   };

//   // Gọi hàm khi trang load
//   displayProductDetail();
// });

// document.addEventListener("DOMContentLoaded", () => {
//   let currentIndex = 0;
//   let quantity = 1;
//   let selectedSize = null;
//   let selectedColor = null;

//   // Hiển thị tên đăng nhập
//   function displayUserName() {
//     const accountBtn = document.getElementById("account-btn");
//     if (accountBtn) {
//       const registeredAccounts = JSON.parse(localStorage.getItem("registeredAccounts")) || [];
//       const currentUserEmail = localStorage.getItem("currentUser");
//       if (currentUserEmail) {
//         const account = registeredAccounts.find((acc) => acc.email === currentUserEmail);
//         const displayName = account ? `${account.firstname || ""} ${account.lastname || ""}`.trim() : currentUserEmail;
//         accountBtn.innerHTML = `
//           <i class="fa-regular fa-user"></i>
//           <span class="action-title">${displayName}</span>
//         `;
//       } else {
//         accountBtn.innerHTML = `
//           <i class="fa-regular fa-user"></i>
//           <span class="action-title">Tài khoản</span>
//         `;
//       }
//     }
//   }

//   function selectSize(size, button) {
//     selectedSize = size;
//     document
//       .querySelectorAll("#sizes-container button")
//       .forEach((btn) => btn.classList.remove("active"));
//     button.classList.add("active");
//   }

//   function selectColor(color, button) {
//     selectedColor = color;
//     document
//       .querySelectorAll("#colors-container button")
//       .forEach((btn) => btn.classList.remove("color-selected"));
//     button.classList.add("color-selected");
//   }

//   function changeImage(thumbnail, index) {
//     document.getElementById("mainImage").src = thumbnail.src;
//     currentIndex = index;
//     updateActiveThumbnail(index);
//     scrollToThumbnail(index);
//   }

//   function updateActiveThumbnail(index) {
//     document.querySelectorAll(".thumbnail").forEach((thumb, i) => {
//       thumb.classList.toggle("active", i === index);
//     });
//   }

//   function scrollToThumbnail(index) {
//     const thumbnails = document.querySelectorAll(".thumbnail");
//     const gallery = document.querySelector(".thumbnail-gallery");
//     const thumbWidth = thumbnails[0]?.offsetWidth || 60;
//     const scrollPos = index * (thumbWidth + 25);
//     gallery.scrollTo({ left: scrollPos, behavior: "smooth" });
//   }

//   function updateCartCount() {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const countCart = document.querySelector(".count-cart");
//     if (countCart) {
//       const total = cart.reduce((sum, item) => sum + item.quantity, 0);
//       countCart.textContent = total > 0 ? total : "0";
//     }
//   }

//   window.openTab = function (tabName) {
//     document
//       .querySelectorAll(".tab-pane")
//       .forEach((p) => p.classList.remove("active"));
//     document
//       .querySelectorAll(".tab-button")
//       .forEach((b) => b.classList.remove("active"));
//     document.getElementById(tabName)?.classList.add("active");
//     document
//       .querySelector(`.tab-button[onclick="openTab('${tabName}')"]`)
//       ?.classList.add("active");
//   };

//   function displayProductDetail() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const productId = urlParams.get("id");
//     const products = JSON.parse(localStorage.getItem("products")) || [];
//     const product = products.find((p) => p.name === productId);

//     if (!product) {
//       document.querySelector(".product-detail").innerHTML =
//         "<p>Sản phẩm không tìm thấy!</p>";
//       return;
//     }

//     document.getElementById("productName").textContent = product.name;
//     document.getElementById("newPrice").textContent = `${
//       product.newPrice || product.price
//     } VND`;
//     document.getElementById("oldPrice").textContent = product.oldPrice
//       ? `${product.oldPrice} VND`
//       : "";
//     document.getElementById("category").textContent = product.category || "N/A";

//     // Kích thước
//     const sizeContainer = document.getElementById("sizes-container");
//     sizeContainer.innerHTML = "";
//     (product.sizes || []).forEach((size, i) => {
//       const btn = document.createElement("button");
//       btn.textContent = size;
//       btn.addEventListener("click", () => selectSize(size, btn));
//       sizeContainer.appendChild(btn);
//       if (i === 0) selectSize(size, btn);
//     });

//     // Màu sắc
//     const colorContainer = document.getElementById("colors-container");
//     colorContainer.innerHTML = "";
//     (product.colors || []).forEach((color, i) => {
//       const btn = document.createElement("button");
//       btn.textContent = color;
//       btn.addEventListener("click", () => selectColor(color, btn));
//       colorContainer.appendChild(btn);
//       if (i === 0) {
//         selectedColor = color;
//         btn.classList.add("color-selected");
//       }
//     });

//     // Giảm giá
//     const oldP = product.oldPrice || product.price;
//     const newP = product.newPrice || product.price;
//     const discount = oldP ? Math.round(((oldP - newP) / oldP) * 100) : 0;
//     document.getElementById("discount").textContent = discount;

//     // Ảnh
//     const mainImg = document.getElementById("mainImage");
//     const thumbnails = document.querySelectorAll(".thumbnail");
//     product.images.forEach((img, i) => {
//       if (thumbnails[i]) {
//         thumbnails[i].src = img || "/img/placeholder.jpg";
//         thumbnails[i].style.display = "block";
//       }
//     });
//     mainImg.src = product.images[0] || "/img/placeholder.jpg";
//     updateActiveThumbnail(0);

//     // Mô tả
//     document.getElementById("description-content").textContent =
//       product.description || "Chưa có mô tả.";
//     document.getElementById("warranty-content").textContent =
//       product.warrantyInfo || "Bảo hành 12 tháng.";
//     document.getElementById("shipping-content").textContent =
//       product.shippingInfo || "Giao hàng 3-5 ngày.";

//     // Số lượng
//     const quantityInput = document.getElementById("quantity");
//     quantityInput.value = quantity;
//     quantityInput.addEventListener("input", (e) => {
//       let val = parseInt(e.target.value) || 1;
//       if (val < 1) val = 1;
//       e.target.value = val;
//       quantity = val;
//     });

//     // Đánh giá
//     const ratingStars = document.getElementById("ratingStars");
//     const ratingScore = document.getElementById("ratingScore");
//     const ratingCount = document.getElementById("ratingCount");
//     const rating = product.rating || 4.5; // Giả sử giá trị mặc định là 4.5
//     const totalReviews = product.totalReviews || 123; // Giả sử số lượng đánh giá

//     ratingStars.innerHTML = "";
//     for (let i = 1; i <= 5; i++) {
//       const star = document.createElement("span");
//       star.className = "star";
//       if (i <= Math.floor(rating)) {
//         star.classList.add("filled");
//       } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
//         star.classList.add("half-filled"); // Có thể thêm style cho nửa sao sau
//       }
//       star.innerHTML = "★";
//       ratingStars.appendChild(star);
//     }
//     ratingScore.textContent = `(${rating}/5)`;
//     ratingCount.textContent = `(${totalReviews} đánh giá)`;
//   }

//   // Nút tăng giảm số lượng
//   document.querySelector(".decrease")?.addEventListener("click", () => {
//     let val = parseInt(document.getElementById("quantity").value) || 1;
//     if (val > 1) {
//       val--;
//       document.getElementById("quantity").value = val;
//       quantity = val;
//     }
//   });

//   document.querySelector(".increase")?.addEventListener("click", () => {
//     let val = parseInt(document.getElementById("quantity").value) || 1;
//     val++;
//     document.getElementById("quantity").value = val;
//     quantity = val;
//   });

//   // Thêm vào giỏ với hiệu ứng dấu tích xanh
//   const addToCartBtn = document.querySelector(".add-to-cart-btn");
//   if (addToCartBtn) {
//     addToCartBtn.addEventListener("click", () => {
//       if (!selectedSize) return alert("Vui lòng chọn kích thước!");
//       if (!selectedColor) return alert("Vui lòng chọn màu sắc!");

//       const urlParams = new URLSearchParams(window.location.search);
//       const productId = urlParams.get("id");
//       const products = JSON.parse(localStorage.getItem("products")) || [];
//       const product = products.find((p) => p.name === productId);

//       if (!product) return alert("Sản phẩm không tồn tại!");

//       const cartItem = {
//         ...product,
//         quantity,
//         selectedSize,
//         selectedColor,
//       };

//       let cart = JSON.parse(localStorage.getItem("cart")) || [];
//       cart.push(cartItem);
//       localStorage.setItem("cart", JSON.stringify(cart));
//       updateCartCount();

//       // Thêm hiệu ứng dấu tích xanh
//       const successPopup = document.createElement("div");
//       successPopup.className = "success-popup";
//       successPopup.innerHTML = `
//         <span class="checkmark">✓</span>
//         <span>Đã thêm vào giỏ hàng!</span>
//       `;
//       document.body.appendChild(successPopup);

//       // Xóa popup sau 2 giây
//       setTimeout(() => {
//         successPopup.remove();
//       }, 2000);
//     });
//   }

//   // Đặt hàng
//   document.querySelector(".buy-now-btn")?.addEventListener("click", () => {
//     if (!selectedSize) return alert("Vui lòng chọn kích thước!");
//     if (!selectedColor) return alert("Vui lòng chọn màu sắc!");
//     alert(
//       `Đặt hàng thành công sản phẩm (${selectedSize}, ${selectedColor}) x${quantity}!`
//     );
//     localStorage.removeItem("cart");
//     updateCartCount();
//   });

//   // Thumbnail click
//   document.querySelectorAll(".thumbnail").forEach((thumb, i) => {
//     thumb.addEventListener("click", () => changeImage(thumb, i));
//   });

//   // Nút chuyển ảnh
//   document.querySelector(".prev-btn")?.addEventListener("click", () => {
//     currentIndex = currentIndex > 0 ? currentIndex - 1 : 8;
//     document.getElementById("mainImage").src =
//       document.querySelectorAll(".thumbnail")[currentIndex].src;
//     updateActiveThumbnail(currentIndex);
//     scrollToThumbnail(currentIndex);
//   });

//   document.querySelector(".next-btn")?.addEventListener("click", () => {
//     currentIndex = currentIndex < 8 ? currentIndex + 1 : 0;
//     document.getElementById("mainImage").src =
//       document.querySelectorAll(".thumbnail")[currentIndex].src;
//     updateActiveThumbnail(currentIndex);
//     scrollToThumbnail(currentIndex);
//   });

//   // Khởi động
//   displayProductDetail();
//   updateCartCount();
//   displayUserName();

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

//     // Ẩn kết quả khi click ra ngoài
//     document.addEventListener("click", (e) => {
//       if (!searchForm.contains(e.target)) {
//         searchResults.classList.remove("active");
//       }
//     });
//   }
// });

// // Đảm bảo searchBar được định nghĩa
// const searchBar = document.querySelector(".search_bar");

// // Hàm tìm kiếm sản phẩm
// function searchProducts(query) {
//   const products = JSON.parse(localStorage.getItem("products")) || [];
//   const searchResults = document.getElementById("searchResults");
//   if (!searchResults) return;

//   searchResults.innerHTML = "";

//   if (query.trim() === "") {
//     searchResults.classList.remove("active");
//     return;
//   }

//   const filteredProducts = products.filter(product =>
//     product.name.toLowerCase().includes(query.toLowerCase())
//   );

//   if (filteredProducts.length > 0) {
//     filteredProducts.forEach(product => {
//       const div = document.createElement("div");
//       div.classList.add("search-result-item");
//       div.innerHTML = `
//         <img src="${product.images && product.images.length > 0 ? product.images[0] : 'img/placeholder.jpg'}" alt="${product.name}">
//         <h4>${product.name}</h4>
//       `;
//       div.addEventListener("click", () => {
//         window.location.href = `chitiet.html?id=${encodeURIComponent(product.name)}`;
//         searchResults.classList.remove("active");
//       });
//       searchResults.appendChild(div);
//     });
//     searchResults.classList.add("active");
//   } else {
//     const div = document.createElement("div");
//     div.classList.add("search-result-item");
//     div.textContent = "Không thấy kết quả tìm kiếm";
//     div.style.textAlign = "center";
//     div.style.color = "#777";
//     searchResults.appendChild(div);
//     searchResults.classList.add("active");
//   }
// }
document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  let quantity = 1;
  let selectedSize = null;
  let selectedColor = null;

  // Hiển thị tên đăng nhập
  function displayUserName() {
    const accountBtn = document.getElementById("account-btn");
    if (accountBtn) {
      const registeredAccounts = JSON.parse(localStorage.getItem("registeredAccounts")) || [];
      const currentUserEmail = localStorage.getItem("currentUser");
      if (currentUserEmail) {
        const account = registeredAccounts.find((acc) => acc.email === currentUserEmail);
        const displayName = account ? `${account.firstname || ""} ${account.lastname || ""}`.trim() : currentUserEmail;
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
    }
  }

  function selectSize(size, button) {
    selectedSize = size;
    document
      .querySelectorAll("#sizes-container button")
      .forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  }

  function selectColor(color, button) {
    selectedColor = color;
    document
      .querySelectorAll("#colors-container button")
      .forEach((btn) => btn.classList.remove("color-selected"));
    button.classList.add("color-selected");
  }

  function changeImage(thumbnail, index) {
    document.getElementById("mainImage").src = thumbnail.src;
    currentIndex = index;
    updateActiveThumbnail(index);
    scrollToThumbnail(index);
  }

  function updateActiveThumbnail(index) {
    document.querySelectorAll(".thumbnail").forEach((thumb, i) => {
      thumb.classList.toggle("active", i === index);
    });
  }

  function scrollToThumbnail(index) {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const gallery = document.querySelector(".thumbnail-gallery");
    const thumbWidth = thumbnails[0]?.offsetWidth || 60;
    const scrollPos = index * (thumbWidth + 25);
    gallery.scrollTo({ left: scrollPos, behavior: "smooth" });
  }

  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const countCart = document.querySelector(".count-cart");
    if (countCart) {
      const total = cart.reduce((sum, item) => sum + item.quantity, 0);
      countCart.textContent = total > 0 ? total : "0";
    }
  }

  window.openTab = function (tabName) {
    document
      .querySelectorAll(".tab-pane")
      .forEach((p) => p.classList.remove("active"));
    document
      .querySelectorAll(".tab-button")
      .forEach((b) => b.classList.remove("active"));
    document.getElementById(tabName)?.classList.add("active");
    document
      .querySelector(`.tab-button[onclick="openTab('${tabName}')"]`)
      ?.classList.add("active");
  };

  function displayProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const product = products.find((p) => p.name === productId);

    if (!product) {
      document.querySelector(".product-detail").innerHTML =
        "<p>Sản phẩm không tìm thấy!</p>";
      return;
    }

    document.getElementById("productName").textContent = product.name;
    document.getElementById("newPrice").textContent = `${
      product.newPrice || product.price
    } VND`;
    document.getElementById("oldPrice").textContent = product.oldPrice
      ? `${product.oldPrice} VND`
      : "";
    document.getElementById("category").textContent = product.category || "N/A";

    // Kích thước
    const sizeContainer = document.getElementById("sizes-container");
    sizeContainer.innerHTML = "";
    (product.sizes || []).forEach((size, i) => {
      const btn = document.createElement("button");
      btn.textContent = size;
      btn.addEventListener("click", () => selectSize(size, btn));
      sizeContainer.appendChild(btn);
      if (i === 0) selectSize(size, btn);
    });

    // Màu sắc
    const colorContainer = document.getElementById("colors-container");
    colorContainer.innerHTML = "";
    (product.colors || []).forEach((color, i) => {
      const btn = document.createElement("button");
      btn.textContent = color;
      btn.addEventListener("click", () => selectColor(color, btn));
      colorContainer.appendChild(btn);
      if (i === 0) {
        selectedColor = color;
        btn.classList.add("color-selected");
      }
    });

    // Giảm giá
    const oldP = product.oldPrice || product.price;
    const newP = product.newPrice || product.price;
    const discount = oldP ? Math.round(((oldP - newP) / oldP) * 100) : 0;
    document.getElementById("discount").textContent = discount;

    // Ảnh
    const mainImg = document.getElementById("mainImage");
    const thumbnails = document.querySelectorAll(".thumbnail");
    product.images.forEach((img, i) => {
      if (thumbnails[i]) {
        thumbnails[i].src = img || "/img/placeholder.jpg";
        thumbnails[i].style.display = "block";
      }
    });
    mainImg.src = product.images[0] || "/img/placeholder.jpg";
    updateActiveThumbnail(0);

    // Mô tả
    document.getElementById("description-content").textContent =
      product.description || "Chưa có mô tả.";
    document.getElementById("warranty-content").textContent =
      product.warrantyInfo || "Bảo hành 12 tháng.";
    document.getElementById("shipping-content").textContent =
      product.shippingInfo || "Giao hàng 3-5 ngày.";

    // Số lượng
    const quantityInput = document.getElementById("quantity");
    quantityInput.value = quantity;
    quantityInput.addEventListener("input", (e) => {
      let val = parseInt(e.target.value) || 1;
      if (val < 1) val = 1;
      e.target.value = val;
      quantity = val;
    });

    // Đánh giá
    const ratingStars = document.getElementById("ratingStars");
    const ratingScore = document.getElementById("ratingScore");
    const ratingCount = document.getElementById("ratingCount");
    const rating = product.rating || 4.5; // Giả sử giá trị mặc định là 4.5
    const totalReviews = product.totalReviews || 123; // Giả sử số lượng đánh giá

    ratingStars.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("span");
      star.className = "star";
      if (i <= Math.floor(rating)) {
        star.classList.add("filled");
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        star.classList.add("half-filled"); // Có thể thêm style cho nửa sao sau
      }
      star.innerHTML = "★";
      ratingStars.appendChild(star);
    }
    ratingScore.textContent = `(${rating}/5)`;
    ratingCount.textContent = `(${totalReviews} đánh giá)`;
  }

  // Nút tăng giảm số lượng
  document.querySelector(".decrease")?.addEventListener("click", () => {
    let val = parseInt(document.getElementById("quantity").value) || 1;
    if (val > 1) {
      val--;
      document.getElementById("quantity").value = val;
      quantity = val;
    }
  });

  document.querySelector(".increase")?.addEventListener("click", () => {
    let val = parseInt(document.getElementById("quantity").value) || 1;
    val++;
    document.getElementById("quantity").value = val;
    quantity = val;
  });

  // Thêm vào giỏ với hiệu ứng dấu tích xanh
  const addToCartBtn = document.querySelector(".add-to-cart-btn");
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      if (!selectedSize) return alert("Vui lòng chọn kích thước!");
      if (!selectedColor) return alert("Vui lòng chọn màu sắc!");

      const urlParams = new URLSearchParams(window.location.search);
      const productId = urlParams.get("id");
      const products = JSON.parse(localStorage.getItem("products")) || [];
      const product = products.find((p) => p.name === productId);

      if (!product) return alert("Sản phẩm không tồn tại!");

      const cartItem = {
        ...product,
        quantity,
        selectedSize,
        selectedColor,
      };

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(cartItem);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();

      // Thêm hiệu ứng dấu tích xanh
      const successPopup = document.createElement("div");
      successPopup.className = "success-popup";
      successPopup.innerHTML = `
        <span class="checkmark">✓</span>
        <span>Đã thêm vào giỏ hàng!</span>
      `;
      document.body.appendChild(successPopup);

      // Xóa popup sau 2 giây
      setTimeout(() => {
        successPopup.remove();
      }, 2000);
    });
  }

  // Đặt hàng
  document.querySelector(".buy-now-btn")?.addEventListener("click", () => {
    if (!selectedSize) return alert("Vui lòng chọn kích thước!");
    if (!selectedColor) return alert("Vui lòng chọn màu sắc!");
    alert(
      `Đặt hàng thành công sản phẩm (${selectedSize}, ${selectedColor}) x${quantity}!`
    );
    localStorage.removeItem("cart");
    updateCartCount();
  });

  // Thumbnail click
  document.querySelectorAll(".thumbnail").forEach((thumb, i) => {
    thumb.addEventListener("click", () => changeImage(thumb, i));
  });

  // Nút chuyển ảnh
  document.querySelector(".prev-btn")?.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : 8;
    document.getElementById("mainImage").src =
      document.querySelectorAll(".thumbnail")[currentIndex].src;
    updateActiveThumbnail(currentIndex);
    scrollToThumbnail(currentIndex);
  });

  document.querySelector(".next-btn")?.addEventListener("click", () => {
    currentIndex = currentIndex < 8 ? currentIndex + 1 : 0;
    document.getElementById("mainImage").src =
      document.querySelectorAll(".thumbnail")[currentIndex].src;
    updateActiveThumbnail(currentIndex);
    scrollToThumbnail(currentIndex);
  });

  // Zoom image functionality
  const mainImage = document.getElementById("mainImage");
  const zoomModal = document.createElement("div");
  zoomModal.className = "zoom-modal";
  zoomModal.innerHTML = `
    <span class="close-zoom">&times;</span>
    <button class="zoom-prev">&lt;</button>
    <img src="" alt="Zoomed Image" class="zoom-image">
    <button class="zoom-next">&gt;</button>
  `;
  document.body.appendChild(zoomModal);

  let isDragging = false;
  let previousX = 0;
  let previousY = 0;
  let translateX = 0;
  let translateY = 0;
  let scale = 1;

  mainImage.addEventListener("click", () => {
    const zoomImage = zoomModal.querySelector(".zoom-image");
    const thumbnails = document.querySelectorAll(".thumbnail");
    zoomImage.src = thumbnails[currentIndex].src;
    zoomImage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
    zoomModal.style.display = "flex";
  });

  zoomModal.querySelector(".close-zoom").addEventListener("click", () => {
    zoomModal.style.display = "none";
  });

  // Handle zoom with mouse wheel based on cursor position
  zoomModal.addEventListener("wheel", (e) => {
    e.preventDefault();
    const zoomImage = zoomModal.querySelector(".zoom-image");
    const rect = zoomImage.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Adjust scale with a step and limit
    const zoomStep = 0.1;
    scale += e.deltaY * -0.01;
    scale = Math.max(1, Math.min(3, scale)); // Limit scale between 1x and 3x

    const newWidth = rect.width * scale;
    const newHeight = rect.height * scale;
    const deltaX = ((mouseX / rect.width) * (rect.width - newWidth)) - translateX;
    const deltaY = ((mouseY / rect.height) * (rect.height - newHeight)) - translateY;

    translateX += deltaX;
    translateY += deltaY;

    // Ensure the image stays within modal bounds
    const maxTranslateX = (newWidth - rect.width) / 2;
    const maxTranslateY = (newHeight - rect.height) / 2;
    translateX = Math.max(-maxTranslateX, Math.min(maxTranslateX, translateX));
    translateY = Math.max(-maxTranslateY, Math.min(maxTranslateY, translateY));

    zoomImage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
  });

  // Handle panning with right-click drag
  zoomModal.querySelector(".zoom-image").addEventListener("mousedown", (e) => {
    if (e.button === 2) { // Right mouse button
      e.preventDefault();
      isDragging = true;
      previousX = e.clientX;
      previousY = e.clientY;
      zoomModal.style.cursor = "grabbing";
    }
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      const zoomImage = zoomModal.querySelector(".zoom-image");
      const dx = e.clientX - previousX;
      const dy = e.clientY - previousY;
      translateX += dx;
      translateY += dy;

      // Boundary checking
      const rect = zoomImage.getBoundingClientRect();
      const maxTranslateX = (rect.width * scale - rect.width) / 2;
      const maxTranslateY = (rect.height * scale - rect.height) / 2;
      translateX = Math.max(-maxTranslateX, Math.min(maxTranslateX, translateX));
      translateY = Math.max(-maxTranslateY, Math.min(maxTranslateY, translateY));

      zoomImage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
      previousX = e.clientX;
      previousY = e.clientY;
    }
  });

  document.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      zoomModal.style.cursor = "zoom-in";
    }
  });

  document.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // Disable default right-click menu
  });

  // Navigation in zoom modal
  zoomModal.querySelector(".zoom-prev").addEventListener("click", () => {
    const thumbnails = document.querySelectorAll(".thumbnail");
    currentIndex = currentIndex > 0 ? currentIndex - 1 : thumbnails.length - 1;
    zoomModal.querySelector(".zoom-image").src = thumbnails[currentIndex].src;
    scale = 1;
    translateX = 0;
    translateY = 0;
    zoomModal.querySelector(".zoom-image").style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
  });

  zoomModal.querySelector(".zoom-next").addEventListener("click", () => {
    const thumbnails = document.querySelectorAll(".thumbnail");
    currentIndex = currentIndex < thumbnails.length - 1 ? currentIndex + 1 : 0;
    zoomModal.querySelector(".zoom-image").src = thumbnails[currentIndex].src;
    scale = 1;
    translateX = 0;
    translateY = 0;
    zoomModal.querySelector(".zoom-image").style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
  });

  // Khởi động
  displayProductDetail();
  updateCartCount();
  displayUserName();

  // Thêm sự kiện tìm kiếm
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

    // Ẩn kết quả khi click ra ngoài
    document.addEventListener("click", (e) => {
      if (!searchForm.contains(e.target)) {
        searchResults.classList.remove("active");
      }
    });
  }
});

// Đảm bảo searchBar được định nghĩa
const searchBar = document.querySelector(".search_bar");

// Hàm tìm kiếm sản phẩm
function searchProducts(query) {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const searchResults = document.getElementById("searchResults");
  if (!searchResults) return;

  searchResults.innerHTML = "";

  if (query.trim() === "") {
    searchResults.classList.remove("active");
    return;
  }

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredProducts.length > 0) {
    filteredProducts.forEach(product => {
      const div = document.createElement("div");
      div.classList.add("search-result-item");
      div.innerHTML = `
        <img src="${product.images && product.images.length > 0 ? product.images[0] : 'img/placeholder.jpg'}" alt="${product.name}">
        <h4>${product.name}</h4>
      `;
      div.addEventListener("click", () => {
        window.location.href = `chitiet.html?id=${encodeURIComponent(product.name)}`;
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