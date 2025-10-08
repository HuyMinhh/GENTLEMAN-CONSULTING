// let slideIndex = 0;
// let slides = document.querySelectorAll(".slide");
// let dots = document.querySelectorAll(".dot");
// let timer;

// function showSlides() {
//   slides.forEach((slide) => slide.classList.remove("active"));
//   dots.forEach((dot) => dot.classList.remove("active"));

//   slideIndex = (slideIndex + 1) % slides.length;

//   slides[slideIndex].classList.add("active");
//   dots[slideIndex].classList.add("active");

//   timer = setTimeout(showSlides, 4000); // đổi slide sau 4 giây
// }

// function setSlide(index) {
//   clearTimeout(timer);
//   slideIndex = index;

//   slides.forEach((slide) => slide.classList.remove("active"));
//   dots.forEach((dot) => dot.classList.remove("active"));

//   slides[slideIndex].classList.add("active");
//   dots[slideIndex].classList.add("active");

//   timer = setTimeout(showSlides, 4000);
// }

// function changeSlide(step) {
//   clearTimeout(timer);
//   slideIndex = (slideIndex + step + slides.length) % slides.length;

//   slides.forEach((slide) => slide.classList.remove("active"));
//   dots.forEach((dot) => dot.classList.remove("active"));

//   slides[slideIndex].classList.add("active");
//   dots[slideIndex].classList.add("active");

//   timer = setTimeout(showSlides, 4000);
// }

// // Chạy khi load trang
// showSlides();

// function copyCode(code) {
//   navigator.clipboard.writeText(code).then(() => {
//     alert("Đã sao chép mã: " + code);
//   });
// }

// // Kiểm tra và cập nhật trạng thái tài khoản
// document.addEventListener("DOMContentLoaded", () => {
//   const accountBtn = document.getElementById("account-btn");
//   const loginModal = document.getElementById("loginModal");
//   const modalContent = document.querySelector(".modal-content");

//   if (accountBtn && loginModal && modalContent) {
//     // Lấy danh sách tài khoản từ localStorage
//     const registeredAccounts =
//       JSON.parse(localStorage.getItem("registeredAccounts")) || [];
//     const currentUserEmail = localStorage.getItem("currentUser");

//     console.log("Debug - registeredAccounts:", registeredAccounts);
//     console.log("Debug - currentUserEmail:", currentUserEmail);

//     // Cập nhật nội dung của accountBtn dựa trên trạng thái đăng nhập
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

//     // Xử lý sự kiện click trên accountBtn
//     accountBtn.addEventListener("click", function (e) {
//       e.preventDefault();
//       if (currentUserEmail) {
//         // Nếu đã đăng nhập, hiển thị tùy chọn đăng xuất
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
//         // Nếu chưa đăng nhập, hiển thị modal đăng nhập
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
// });

// let slideIndex = 0;
// let slides = document.querySelectorAll(".slide");
// let dots = document.querySelectorAll(".dot");
// let timer;

// // Hàm hiển thị slide
// function showSlides() {
//   slides.forEach((slide) => slide.classList.remove("active"));
//   dots.forEach((dot) => dot.classList.remove("active"));

//   slideIndex = (slideIndex + 1) % slides.length;

//   slides[slideIndex].classList.add("active");
//   dots[slideIndex].classList.add("active");

//   timer = setTimeout(showSlides, 4000); // đổi slide sau 4 giây
// }

// // Hàm đặt slide
// function setSlide(index) {
//   clearTimeout(timer);
//   slideIndex = index;

//   slides.forEach((slide) => slide.classList.remove("active"));
//   dots.forEach((dot) => dot.classList.remove("active"));

//   slides[slideIndex].classList.add("active");
//   dots[slideIndex].classList.add("active");

//   timer = setTimeout(showSlides, 4000);
// }

// // Hàm thay đổi slide
// function changeSlide(step) {
//   clearTimeout(timer);
//   slideIndex = (slideIndex + step + slides.length) % slides.length;

//   slides.forEach((slide) => slide.classList.remove("active"));
//   dots.forEach((dot) => dot.classList.remove("active"));

//   slides[slideIndex].classList.add("active");
//   dots[slideIndex].classList.add("active");

//   timer = setTimeout(showSlides, 4000);
// }

// // Chạy khi load trang
// showSlides();

// // Hàm sao chép mã
// function copyCode(code) {
//   navigator.clipboard.writeText(code).then(() => {
//     alert("Đã sao chép mã: " + code);
//   });
// }

// // Kiểm tra và cập nhật trạng thái tài khoản
// document.addEventListener("DOMContentLoaded", () => {
//   const accountBtn = document.getElementById("account-btn");
//   const loginModal = document.getElementById("loginModal");
//   const modalContent = document.querySelector(".modal-content");

//   if (accountBtn && loginModal && modalContent) {
//     // Lấy danh sách tài khoản từ localStorage
//     const registeredAccounts = JSON.parse(localStorage.getItem("registeredAccounts")) || [];
//     const currentUserEmail = localStorage.getItem("currentUser");

//     console.log("Debug - registeredAccounts:", registeredAccounts);
//     console.log("Debug - currentUserEmail:", currentUserEmail);

//     // Cập nhật nội dung của accountBtn dựa trên trạng thái đăng nhập
//     if (currentUserEmail) {
//       const account = registeredAccounts.find((acc) => acc.email === currentUserEmail);
//       const displayName = account ? `${account.firstname || ""} ${account.lastname || ""}`.trim() : "Tài khoản";

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

//     // Xử lý sự kiện click trên accountBtn
//     accountBtn.addEventListener("click", function (e) {
//       e.preventDefault();
//       if (currentUserEmail) {
//         // Nếu đã đăng nhập, hiển thị tùy chọn đăng xuất
//         if (confirm("Bạn có muốn đăng xuất không?")) {
//           localStorage.removeItem("currentUser");
//           accountBtn.innerHTML = `
//                         <i class="fa-regular fa-user"></i>
//                         <span class="action-title">Tài khoản</span>
//                     `;
//           loginModal.style.display = "block";
//           modalContent.style.position = "absolute";
//           modalContent.style.top = accountBtn.getBoundingClientRect().height + 21 + "px";
//           modalContent.style.left = "22px";
//           modalContent.style.transform = "translateX(-50%)";
//           modalContent.style.width = "180px";
//           modalContent.style.minHeight = "40px";
//           accountBtn.appendChild(modalContent);
//         }
//       } else {
//         // Nếu chưa đăng nhập, hiển thị modal đăng nhập
//         loginModal.style.display = "block";
//         modalContent.style.position = "absolute";
//         modalContent.style.top = accountBtn.getBoundingClientRect().height + 21 + "px";
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

//   // Hàm hiển thị sản phẩm từ localStorage
//   function displayProducts() {
//     const productList = document.getElementById('product-list');
//     if (!productList) {
//       console.error("Element with id 'product-list' not found!");
//       return;
//     }
//     productList.innerHTML = ''; // Xóa nội dung cũ

//     const products = JSON.parse(localStorage.getItem('products')) || [];
//     products.forEach(product => {
//       const div = document.createElement('div');
//       div.classList.add('product-item');
//       let imagesHtml = '';
//       if (product.images && product.images.length > 0) {
//         imagesHtml = `<img src="${product.images[0]}" alt="${product.name}">`; // Hiển thị ảnh đầu tiên
//       }
//       div.innerHTML = `
//         <h3>${product.name}</h3>
//         <p class="old-price">${product.oldPrice ? product.oldPrice + ' VND' : 'N/A'}</p>
//         <p class="new-price">${(product.newPrice || product.price) ? (product.newPrice || product.price) + ' VND' : 'N/A'}</p>
//         <p>Kích Thước: ${product.sizes ? product.sizes.join(', ') : 'N/A'}</p>
//         <p>Mô Tả: ${product.description || 'Chưa có mô tả'}</p>
//       `;
//       productList.appendChild(div);
//     });
//   }

//   // Gọi hàm hiển thị sản phẩm khi trang load
//   displayProducts();
// });

// let slideIndex = 0;
// let slides = document.querySelectorAll(".slide");
// let dots = document.querySelectorAll(".dot");
// let timer;

// // Hàm hiển thị slide
// function showSlides() {
//   slides.forEach((slide) => slide.classList.remove("active"));
//   dots.forEach((dot) => dot.classList.remove("active"));

//   slideIndex = (slideIndex + 1) % slides.length;

//   slides[slideIndex].classList.add("active");
//   dots[slideIndex].classList.add("active");

//   timer = setTimeout(showSlides, 4000); // đổi slide sau 4 giây
// }

// // Hàm đặt slide
// function setSlide(index) {
//   clearTimeout(timer);
//   slideIndex = index;

//   slides.forEach((slide) => slide.classList.remove("active"));
//   dots.forEach((dot) => dot.classList.remove("active"));

//   slides[slideIndex].classList.add("active");
//   dots[slideIndex].classList.add("active");

//   timer = setTimeout(showSlides, 4000);
// }

// // Hàm thay đổi slide
// function changeSlide(step) {
//   clearTimeout(timer);
//   slideIndex = (slideIndex + step + slides.length) % slides.length;

//   slides.forEach((slide) => slide.classList.remove("active"));
//   dots.forEach((dot) => dot.classList.remove("active"));

//   slides[slideIndex].classList.add("active");
//   dots[slideIndex].classList.add("active");

//   timer = setTimeout(showSlides, 4000);
// }

// // Chạy khi load trang
// showSlides();

// // Hàm sao chép mã
// function copyCode(code) {
//   navigator.clipboard.writeText(code).then(() => {
//     alert("Đã sao chép mã: " + code);
//   });
// }

// // Hàm hiển thị sản phẩm từ localStorage
// function displayProducts() {
//   const productList = document.getElementById('product-list');
//   if (!productList) {
//     console.error("Element with id 'product-list' not found!");
//     return;
//   }

//   const products = JSON.parse(localStorage.getItem('products')) || [];
//   productList.innerHTML = ''; // Xóa nội dung cũ

//   products.forEach(product => {
//     const div = document.createElement('div');
//     div.classList.add('product-item');
//     let imagesHtml = '';
//     if (product.images && product.images.length > 0) {
//       imagesHtml = `<img src="${product.images[0]}" alt="${product.name}" onerror="this.src='/img/placeholder.jpg';">`; // Thêm onerror cho placeholder
//     } else {
//       imagesHtml = `<img src="/img/placeholder.jpg" alt="No image" class="placeholder">`; // Placeholder nếu không có ảnh
//     }
//     div.innerHTML = `
//       ${imagesHtml}
//       <h3>${product.name || 'Tên sản phẩm'}</h3>
//       <p class="old-price">${product.oldPrice ? product.oldPrice + ' VND' : ''}</p>
//       <p class="new-price">${(product.newPrice || product.price) ? (product.newPrice || product.price) + ' VND' : 'N/A'}</p>
//       <button class="add-to-cart-btn"><i class="fas fa-shopping-cart"></i> Thêm vào giỏ hàng</button>
//     `;
//     productList.appendChild(div);
//   });

//   // Thêm nút "Xem thêm" nếu không có
//   let loadMoreBtn = document.getElementById('load-more-btn');
//   if (!loadMoreBtn) {
//     loadMoreBtn = document.createElement('a');
//     loadMoreBtn.id = 'load-more-btn';
//     loadMoreBtn.className = 'load-more-btn';
//     loadMoreBtn.href = '/html/products.html'; // Thay bằng đường dẫn thực tế
//     loadMoreBtn.textContent = 'Xem thêm';
//     productList.appendChild(loadMoreBtn);
//   }
// }
// // Kiểm tra và cập nhật trạng thái tài khoản
// document.addEventListener("DOMContentLoaded", () => {
//   const accountBtn = document.getElementById("account-btn");
//   const loginModal = document.getElementById("loginModal");
//   const modalContent = document.querySelector(".modal-content");

//   if (accountBtn && loginModal && modalContent) {
//     // Lấy danh sách tài khoản từ localStorage
//     const registeredAccounts = JSON.parse(localStorage.getItem("registeredAccounts")) || [];
//     const currentUserEmail = localStorage.getItem("currentUser");

//     console.log("Debug - registeredAccounts:", registeredAccounts);
//     console.log("Debug - currentUserEmail:", currentUserEmail);

//     // Cập nhật nội dung của accountBtn dựa trên trạng thái đăng nhập
//     if (currentUserEmail) {
//       const account = registeredAccounts.find((acc) => acc.email === currentUserEmail);
//       const displayName = account ? `${account.firstname || ""} ${account.lastname || ""}`.trim() : "Tài khoản";

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

//     // Xử lý sự kiện click trên accountBtn
//     accountBtn.addEventListener("click", function (e) {
//       e.preventDefault();
//       if (currentUserEmail) {
//         // Nếu đã đăng nhập, hiển thị tùy chọn đăng xuất
//         if (confirm("Bạn có muốn đăng xuất không?")) {
//           localStorage.removeItem("currentUser");
//           accountBtn.innerHTML = `
//                         <i class="fa-regular fa-user"></i>
//                         <span class="action-title">Tài khoản</span>
//                     `;
//           loginModal.style.display = "block";
//           modalContent.style.position = "absolute";
//           modalContent.style.top = accountBtn.getBoundingClientRect().height + 21 + "px";
//           modalContent.style.left = "22px";
//           modalContent.style.transform = "translateX(-50%)";
//           modalContent.style.width = "180px";
//           modalContent.style.minHeight = "40px";
//           accountBtn.appendChild(modalContent);
//         }
//       } else {
//         // Nếu chưa đăng nhập, hiển thị modal đăng nhập
//         loginModal.style.display = "block";
//         modalContent.style.position = "absolute";
//         modalContent.style.top = accountBtn.getBoundingClientRect().height + 21 + "px";
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

//   // Gọi hàm hiển thị sản phẩm khi trang load
//   displayProducts();
// });

// // Hàm hiển thị sản phẩm từ localStorage
// function displayProducts() {
//   const productList = document.getElementById('product-list');
//   if (!productList) {
//     console.error("Element with id 'product-list' not found!");
//     return;
//   }

//   const products = JSON.parse(localStorage.getItem('products')) || [];
//   productList.innerHTML = ''; // Xóa nội dung cũ

//   products.forEach(product => {
//     const div = document.createElement('div');
//     div.classList.add('product-item');
//     let imagesHtml = '';
//     // Xử lý ảnh từ admin
//     if (product.images && product.images.length > 0) {
//       imagesHtml = `<img src="${product.images[0]}" alt="${product.name}" onerror="this.src='/img/placeholder.jpg';">`;
//     } else {
//       imagesHtml = `<img src="/img/placeholder.jpg" alt="No image" class="placeholder">`; // Placeholder nếu không có ảnh
//     }
//     div.innerHTML = `
//       ${imagesHtml}
//       <h3>${product.name || 'Tên sản phẩm'}</h3>
//       <p class="old-price">${product.oldPrice ? product.oldPrice + ' VND' : ''}</p>
//       <p class="new-price">${(product.newPrice || product.price) ? (product.newPrice || product.price) + ' VND' : 'N/A'}</p>
//       <button class="add-to-cart-btn">Thêm vào giỏ hàng</button>
//     `;
//     productList.appendChild(div);
//   });

//   // Thêm nút "Xem thêm" nếu không có
//   let loadMoreBtn = document.getElementById('load-more-btn');
//   if (!loadMoreBtn) {
//     loadMoreBtn = document.createElement('a');
//     loadMoreBtn.id = 'load-more-btn';
//     loadMoreBtn.className = 'load-more-btn';
//     loadMoreBtn.href = '/html/products.html';
//     loadMoreBtn.textContent = 'Xem thêm';
//     productList.appendChild(loadMoreBtn);
//   }
// }

// let slideIndex = 0;
// let slides = document.querySelectorAll(".slide");
// let dots = document.querySelectorAll(".dot");
// let timer;

// // Hàm hiển thị slide
// function showSlides() {
//   slides.forEach((slide) => slide.classList.remove("active"));
//   dots.forEach((dot) => dot.classList.remove("active"));

//   slideIndex = (slideIndex + 1) % slides.length;
//   slides[slideIndex].classList.add("active");
//   dots[slideIndex].classList.add("active");

//   timer = setTimeout(showSlides, 4000); // đổi slide sau 4 giây
// }

// // Hàm đặt slide
// function setSlide(index) {
//   clearTimeout(timer);
//   slideIndex = index;

//   slides.forEach((slide) => slide.classList.remove("active"));
//   dots.forEach((dot) => dot.classList.remove("active"));

//   slides[slideIndex].classList.add("active");
//   dots[slideIndex].classList.add("active");

//   timer = setTimeout(showSlides, 4000);
// }

// // Hàm thay đổi slide
// function changeSlide(step) {
//   clearTimeout(timer);
//   slideIndex = (slideIndex + step + slides.length) % slides.length;

//   slides.forEach((slide) => slide.classList.remove("active"));
//   dots.forEach((dot) => dot.classList.remove("active"));

//   slides[slideIndex].classList.add("active");
//   dots[slideIndex].classList.add("active");

//   timer = setTimeout(showSlides, 4000);
// }

// // Hàm cập nhật số lượng giỏ hàng
// function updateCartCount() {
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const countCart = document.querySelector(".count-cart");
//   if (countCart) {
//     const total = cart.reduce((sum, item) => sum + item.quantity, 0);
//     countCart.textContent = total > 0 ? total : "0";
//     // Đảm bảo phần tử không bị mờ
//     countCart.style.opacity = "1";
//     countCart.style.color = "#ffffffff"; // Màu chữ rõ ràng
//   } else {
//     console.warn("Element with class 'count-cart' not found!");
//   }
// }

// // Hàm sao chép mã
// function copyCode(code) {
//   navigator.clipboard.writeText(code).then(() => {
//     alert("Đã sao chép mã: " + code);
//   });
// }

// // Hàm hiển thị sản phẩm từ localStorage với slider
// function displayProducts() {
//   const productList = document.getElementById("product-list");
//   if (!productList) {
//     console.error("Element with id 'product-list' not found!");
//     return;
//   }

//   const products = JSON.parse(localStorage.getItem("products")) || [];
//   productList.innerHTML = ""; // Xóa nội dung cũ

//   products.forEach((product) => {
//     const div = document.createElement("div");
//     div.classList.add("product-item");
//     let imagesHtml = "";
//     if (product.images && product.images.length > 0) {
//       imagesHtml = `<div class="image-container"><img src="${product.images[0]}" alt="${product.name}" onerror="this.src='/img/placeholder.jpg';"><i class="fa-solid fa-magnifying-glass view-detail"></i></div>`;
//     } else {
//       imagesHtml = `<div class="image-container"><img src="/img/placeholder.jpg" alt="No image" class="placeholder"><i class="fa-solid fa-magnifying-glass view-detail"></i></div>`;
//     }
//     div.innerHTML = `
//       ${imagesHtml}
//       <h3>${product.name || "Tên sản phẩm"}</h3>
//       <p class="old-price">${product.oldPrice ? product.oldPrice + " VND" : ""}</p>
//       <p class="new-price">${product.newPrice || product.price ? (product.newPrice || product.price) + " VND" : "N/A"}</p>
//       <button class="add-to-cart-btn"><i class="fas fa-shopping-cart"></i><span>Thêm vào giỏ hàng</span></button>
//     `;

//     // Thêm sự kiện click vào icon kính lúp
//     const viewDetailIcon = div.querySelector(".view-detail");
//     if (viewDetailIcon) {
//       viewDetailIcon.addEventListener("click", () => {
//         window.location.href = `/html/chitiet.html?id=${encodeURIComponent(product.name)}`;
//       });
//     }

//     // Thêm sự kiện thêm vào giỏ hàng
//     const addToCartBtn = div.querySelector(".add-to-cart-btn");
//     if (addToCartBtn) {
//       addToCartBtn.addEventListener("click", () => {
//         let cart = JSON.parse(localStorage.getItem("cart")) || [];
//         const cartItem = { ...product, quantity: 1 };
//         cart.push(cartItem);
//         localStorage.setItem("cart", JSON.stringify(cart));
//         updateCartCount();
//       });
//     }

//     productList.appendChild(div);
//   });

//   // Thêm slider cho sản phẩm
//   let productIndex = 0;
//   const productItems = document.querySelectorAll(".product-item");
//   const totalProducts = productItems.length;
//   const productsPerSlide = 4;

//   function updateProductSlider() {
//     const offset = -productIndex * (100 / Math.ceil(totalProducts / productsPerSlide));
//     productList.style.transform = `translateX(${offset}%)`;
//     updateProductDots();
//   }

//   function createProductDots() {
//     const dotsContainer = document.querySelector(".product-dots");
//     if (dotsContainer) {
//       dotsContainer.innerHTML = "";
//       const totalSlides = Math.ceil(totalProducts / productsPerSlide);
//       for (let i = 0; i < totalSlides; i++) {
//         const dot = document.createElement("span");
//         dot.classList.add("dot");
//         dot.addEventListener("click", () => {
//           productIndex = i;
//           updateProductSlider();
//         });
//         dotsContainer.appendChild(dot);
//       }
//       updateProductDots();
//     }
//   }

//   function updateProductDots() {
//     const productDots = document.querySelectorAll(".product-dots .dot");
//     productDots.forEach((dot, index) => {
//       dot.classList.toggle("active", index === productIndex);
//     });
//   }

//   function changeProductSlide(step) {
//     const totalSlides = Math.ceil(totalProducts / productsPerSlide);
//     productIndex = (productIndex + step + totalSlides) % totalSlides;
//     updateProductSlider();
//   }

//   const prevBtn = document.querySelector(".product-prev-btn");
//   const nextBtn = document.querySelector(".product-next-btn");
//   if (prevBtn && nextBtn) {
//     prevBtn.addEventListener("click", () => changeProductSlide(-1));
//     nextBtn.addEventListener("click", () => changeProductSlide(1));
//   }

//   if (productItems.length > productsPerSlide) {
//     createProductDots();
//     updateProductSlider();
//   }

//   let loadMoreBtn = document.getElementById("load-more-btn");
//   if (!loadMoreBtn) {
//     loadMoreBtn = document.createElement("a");
//     loadMoreBtn.id = "load-more-btn";
//     loadMoreBtn.className = "load-more-btn";
//     loadMoreBtn.href = "/html/products.html";
//     loadMoreBtn.textContent = "Xem thêm";
//     productList.parentElement.appendChild(loadMoreBtn);
//   }
// }

// // Kiểm tra và cập nhật trạng thái tài khoản
// document.addEventListener("DOMContentLoaded", () => {
//   const accountBtn = document.getElementById("account-btn");
//   const loginModal = document.getElementById("loginModal");
//   const modalContent = document.querySelector(".modal-content");

//   if (accountBtn && loginModal && modalContent) {
//     const registeredAccounts = JSON.parse(localStorage.getItem("registeredAccounts")) || [];
//     const currentUserEmail = localStorage.getItem("currentUser");

//     if (currentUserEmail) {
//       const account = registeredAccounts.find((acc) => acc.email === currentUserEmail);
//       const displayName = account ? `${account.firstname || ""} ${account.lastname || ""}`.trim() : "Tài khoản";

//       accountBtn.innerHTML = `
//         <i class="fa-regular fa-user"></i>
//         <span class="action-title">${displayName}</span>
//       `;
//     } else {
//       accountBtn.innerHTML = `
//         <i class="fa-regular fa-user"></i>
//         <span class="action-title">Tài khoản</span>
//       `;
//     }

//     accountBtn.addEventListener("click", function (e) {
//       e.preventDefault();
//       if (currentUserEmail) {
//         if (confirm("Bạn có muốn đăng xuất không?")) {
//           localStorage.removeItem("currentUser");
//           accountBtn.innerHTML = `
//             <i class="fa-regular fa-user"></i>
//             <span class="action-title">Tài khoản</span>
//           `;
//           loginModal.style.display = "block";
//           modalContent.style.position = "absolute";
//           modalContent.style.top = accountBtn.getBoundingClientRect().height + 21 + "px";
//           modalContent.style.left = "22px";
//           modalContent.style.transform = "translateX(-50%)";
//           modalContent.style.width = "180px";
//           modalContent.style.minHeight = "40px";
//           accountBtn.appendChild(modalContent);
//         }
//       } else {
//         loginModal.style.display = "block";
//         modalContent.style.position = "absolute";
//         modalContent.style.top = accountBtn.getBoundingClientRect().height + 21 + "px";
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
//     console.error("Modal elements not fully found!", { accountBtn, loginModal, modalContent });
//   }

//   // Gọi hàm hiển thị sản phẩm và cập nhật giỏ hàng khi trang load
//   displayProducts();
//   updateCartCount();
// });



// let slideIndex = 0;
// let slides = document.querySelectorAll(".slide");
// let dots = document.querySelectorAll(".dot");
// let timer;

// // Hàm hiển thị slide
// function showSlides() {
//   slides.forEach((slide) => slide.classList.remove("active"));
//   dots.forEach((dot) => dot.classList.remove("active"));

//   slideIndex = (slideIndex + 1) % slides.length;
//   slides[slideIndex].classList.add("active");
//   dots[slideIndex].classList.add("active");

//   timer = setTimeout(showSlides, 4000); // đổi slide sau 4 giây
// }

// // Hàm đặt slide
// function setSlide(index) {
//   clearTimeout(timer);
//   slideIndex = index;

//   slides.forEach((slide) => slide.classList.remove("active"));
//   dots.forEach((dot) => dot.classList.remove("active"));

//   slides[slideIndex].classList.add("active");
//   dots[slideIndex].classList.add("active");

//   timer = setTimeout(showSlides, 4000);
// }

// // Hàm thay đổi slide
// function changeSlide(step) {
//   clearTimeout(timer);
//   slideIndex = (slideIndex + step + slides.length) % slides.length;

//   slides.forEach((slide) => slide.classList.remove("active"));
//   dots.forEach((dot) => dot.classList.remove("active"));

//   slides[slideIndex].classList.add("active");
//   dots[slideIndex].classList.add("active");

//   timer = setTimeout(showSlides, 4000);
// }

// // Hàm cập nhật số lượng giỏ hàng
// function updateCartCount() {
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const countCart = document.querySelector(".count-cart");
//   if (countCart) {
//     const total = cart.reduce((sum, item) => sum + item.quantity, 0);
//     countCart.textContent = total > 0 ? total : "0";
//     countCart.style.opacity = "1";
//     countCart.style.color = "#ffffff";
//   } else {
//     console.warn("Element with class 'count-cart' not found!");
//   }
// }

// // Hàm sao chép mã
// function copyCode(code) {
//   navigator.clipboard.writeText(code).then(() => {
//     alert("Đã sao chép mã: " + code);
//   });
// }

// // Hàm hiển thị sản phẩm từ localStorage với slider
// function displayProducts() {
//   const productList = document.getElementById("product-list");
//   if (!productList) {
//     console.error("Element with id 'product-list' not found!");
//     return;
//   }

//   const products = JSON.parse(localStorage.getItem("products")) || [];
//   productList.innerHTML = ""; // Xóa nội dung cũ

//   products.forEach((product) => {
//     const div = document.createElement("div");
//     div.classList.add("product-item");
//     let imagesHtml = "";
//     if (product.images && product.images.length > 0) {
//       imagesHtml = `<div class="image-container"><img src="${product.images[0]}" alt="${product.name}" onerror="this.src='/img/placeholder.jpg';"><i class="fa-solid fa-magnifying-glass view-detail"></i></div>`;
//     } else {
//       imagesHtml = `<div class="image-container"><img src="/img/placeholder.jpg" alt="No image" class="placeholder"><i class="fa-solid fa-magnifying-glass view-detail"></i></div>`;
//     }
//     div.innerHTML = `
//       ${imagesHtml}
//       <h3>${product.name || "Tên sản phẩm"}</h3>
//       <p class="old-price">${product.oldPrice ? product.oldPrice + " VND" : ""}</p>
//       <p class="new-price">${product.newPrice || product.price ? (product.newPrice || product.price) + " VND" : "N/A"}</p>
//       <button class="add-to-cart-btn"><i class="fas fa-shopping-cart"></i><span>Thêm vào giỏ hàng</span></button>
//     `;

//     // Thêm sự kiện click vào icon kính lúp
//     const viewDetailIcon = div.querySelector(".view-detail");
//     if (viewDetailIcon) {
//       viewDetailIcon.addEventListener("click", () => {
//         window.location.href = `/html/chitiet.html?id=${encodeURIComponent(product.name)}`;
//       });
//     }

//     // Thêm sự kiện thêm vào giỏ hàng
//     const addToCartBtn = div.querySelector(".add-to-cart-btn");
//     if (addToCartBtn) {
//       addToCartBtn.addEventListener("click", () => {
//         let cart = JSON.parse(localStorage.getItem("cart")) || [];
//         const cartItem = { ...product, quantity: 1 };
//         cart.push(cartItem);
//         localStorage.setItem("cart", JSON.stringify(cart));
//         updateCartCount();
//       });
//     }

//     productList.appendChild(div);
//   });

//   // Thêm slider cho sản phẩm
//   let productIndex = 0;
//   const productItems = document.querySelectorAll(".product-item");
//   const totalProducts = productItems.length;
//   const productsPerSlide = 4;

//   function updateProductSlider() {
//     const offset = -productIndex * (100 / Math.ceil(totalProducts / productsPerSlide));
//     productList.style.transform = `translateX(${offset}%)`;
//     updateProductDots();
//   }

//   function createProductDots() {
//     const dotsContainer = document.querySelector(".product-dots");
//     if (dotsContainer) {
//       dotsContainer.innerHTML = "";
//       const totalSlides = Math.ceil(totalProducts / productsPerSlide);
//       for (let i = 0; i < totalSlides; i++) {
//         const dot = document.createElement("span");
//         dot.classList.add("dot");
//         dot.addEventListener("click", () => {
//           productIndex = i;
//           updateProductSlider();
//         });
//         dotsContainer.appendChild(dot);
//       }
//       updateProductDots();
//     }
//   }

//   function updateProductDots() {
//     const productDots = document.querySelectorAll(".product-dots .dot");
//     productDots.forEach((dot, index) => {
//       dot.classList.toggle("active", index === productIndex);
//     });
//   }

//   function changeProductSlide(step) {
//     const totalSlides = Math.ceil(totalProducts / productsPerSlide);
//     productIndex = (productIndex + step + totalSlides) % totalSlides;
//     updateProductSlider();
//   }

//   const prevBtn = document.querySelector(".product-prev-btn");
//   const nextBtn = document.querySelector(".product-next-btn");
//   if (prevBtn && nextBtn) {
//     prevBtn.addEventListener("click", () => changeProductSlide(-1));
//     nextBtn.addEventListener("click", () => changeProductSlide(1));
//   }

//   if (productItems.length > productsPerSlide) {
//     createProductDots();
//     updateProductSlider();
//   }

//   let loadMoreBtn = document.getElementById("load-more-btn");
//   if (!loadMoreBtn) {
//     loadMoreBtn = document.createElement("a");
//     loadMoreBtn.id = "load-more-btn";
//     loadMoreBtn.className = "load-more-btn";
//     loadMoreBtn.href = "/html/products.html";
//     loadMoreBtn.textContent = "Xem thêm";
//     productList.parentElement.appendChild(loadMoreBtn);
//   }
// }

// // Kiểm tra và cập nhật trạng thái tài khoản
// document.addEventListener("DOMContentLoaded", () => {
//   const accountBtn = document.getElementById("account-btn");
//   const loginModal = document.getElementById("loginModal");
//   const modalContent = document.querySelector(".modal-content");

//   if (accountBtn && loginModal && modalContent) {
//     const registeredAccounts = JSON.parse(localStorage.getItem("registeredAccounts")) || [];
//     const currentUserEmail = localStorage.getItem("currentUser");

//     if (currentUserEmail) {
//       const account = registeredAccounts.find((acc) => acc.email === currentUserEmail);
//       const displayName = account ? `${account.firstname || ""} ${account.lastname || ""}`.trim() : "Tài khoản";

//       accountBtn.innerHTML = `
//         <i class="fa-regular fa-user"></i>
//         <span class="action-title">${displayName}</span>
//       `;
//     } else {
//       accountBtn.innerHTML = `
//         <i class="fa-regular fa-user"></i>
//         <span class="action-title">Tài khoản</span>
//       `;
//     }

//     accountBtn.addEventListener("click", function (e) {
//       e.preventDefault();
//       if (currentUserEmail) {
//         if (confirm("Bạn có muốn đăng xuất không?")) {
//           localStorage.removeItem("currentUser");
//           accountBtn.innerHTML = `
//             <i class="fa-regular fa-user"></i>
//             <span class="action-title">Tài khoản</span>
//           `;
//           loginModal.style.display = "block";
//           modalContent.style.position = "absolute";
//           modalContent.style.top = accountBtn.getBoundingClientRect().height + 21 + "px";
//           modalContent.style.left = "22px";
//           modalContent.style.transform = "translateX(-50%)";
//           modalContent.style.width = "180px";
//           modalContent.style.minHeight = "40px";
//           accountBtn.appendChild(modalContent);
//         }
//       } else {
//         loginModal.style.display = "block";
//         modalContent.style.position = "absolute";
//         modalContent.style.top = accountBtn.getBoundingClientRect().height + 21 + "px";
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
//     console.error("Modal elements not fully found!", { accountBtn, loginModal, modalContent });
//   }

//   // Gọi hàm hiển thị sản phẩm và cập nhật giỏ hàng khi trang load
//   displayProducts();
//   updateCartCount();
// });


// let slideIndex = 0;
// let slides = document.querySelectorAll(".slide");
// let dots = document.querySelectorAll(".dot");
// let timer;

// // Hàm hiển thị slide (dành cho slideshow chính)
// function showSlides() {
//   slides.forEach((slide) => slide.classList.remove("active"));
//   dots.forEach((dot) => dot.classList.remove("active"));

//   slideIndex = (slideIndex + 1) % slides.length;
//   slides[slideIndex].classList.add("active");
//   dots[slideIndex].classList.add("active");

//   timer = setTimeout(showSlides, 4000); // Đổi slide sau 4 giây
// }

// // Hàm đặt slide (dành cho slideshow chính)
// function setSlide(index) {
//   clearTimeout(timer);
//   slideIndex = index;

//   slides.forEach((slide) => slide.classList.remove("active"));
//   dots.forEach((dot) => dot.classList.remove("active"));

//   slides[slideIndex].classList.add("active");
//   dots[slideIndex].classList.add("active");

//   timer = setTimeout(showSlides, 4000);
// }

// // Hàm thay đổi slide (dành cho slideshow chính)
// function changeSlide(step) {
//   clearTimeout(timer);
//   slideIndex = (slideIndex + step + slides.length) % slides.length;

//   slides.forEach((slide) => slide.classList.remove("active"));
//   dots.forEach((dot) => dot.classList.remove("active"));

//   slides[slideIndex].classList.add("active");
//   dots[slideIndex].classList.add("active");

//   timer = setTimeout(showSlides, 4000);
// }

// // Hàm cập nhật số lượng giỏ hàng
// function updateCartCount() {
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const countCart = document.querySelector(".count-cart");
//   if (countCart) {
//     const total = cart.reduce((sum, item) => sum + item.quantity, 0);
//     countCart.textContent = total > 0 ? total : "0";
//     countCart.style.opacity = "1";
//     countCart.style.color = "#ffffff";
//   } else {
//     console.warn("Element with class 'count-cart' not found!");
//   }
// }

// // Hàm sao chép mã
// function copyCode(code) {
//   navigator.clipboard.writeText(code).then(() => {
//     alert("Đã sao chép mã: " + code);
//   });
// }

// // Hàm hiển thị modal thêm vào giỏ
// function showAddToCartModal(product) {
//   const modal = document.createElement("div");
//   modal.className = "modal";
//   modal.style.display = "block";
//   modal.innerHTML = `
//     <div class="modal-content">
//       <span class="close-modal">&times;</span>
//       <div class="product-mini-detail">
//         <img src="${product.images[0] || "/img/placeholder.jpg"}" alt="${product.name}">
//         <div>
//           <h2>${product.name}</h2>
//           <p class="price-section">
//             <span class="new-price">${product.newPrice || product.price} VND</span>
//             <span class="old-price">${product.oldPrice ? product.oldPrice + " VND" : ""}</span>
//           </p>
//           <p><strong>Kích thước:</strong></p>
//           <div id="modal-sizes-container"></div>
//           <p><strong>Màu sắc:</strong></p>
//           <div id="modal-colors-container"></div>
//           <p><strong>Số lượng:</strong></p>
//           <div class="quantity-section">
//             <button class="quantity-btn decrease">-</button>
//             <input type="number" id="modal-quantity" value="1" min="1">
//             <button class="quantity-btn increase">+</button>
//           </div>
//           <button class="add-to-cart-confirm">Thêm vào giỏ hàng</button>
//         </div>
//       </div>
//     </div>
//   `;
//   document.body.appendChild(modal);

//   // Đóng modal
//   modal.querySelector(".close-modal").addEventListener("click", () => modal.remove());

//   // Kích thước
//   const sizesContainer = modal.querySelector("#modal-sizes-container");
//   if (product.sizes && product.sizes.length > 0) {
//     product.sizes.forEach((size, i) => {
//       const btn = document.createElement("button");
//       btn.textContent = size.trim();
//       btn.addEventListener("click", () => {
//         sizesContainer.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
//         btn.classList.add("active");
//         modal.selectedSize = size.trim();
//       });
//       sizesContainer.appendChild(btn);
//       if (i === 0) {
//         btn.classList.add("active");
//         modal.selectedSize = size.trim();
//       }
//     });
//   } else {
//     const noSize = document.createElement("p");
//     noSize.textContent = "Chưa có kích thước";
//     noSize.style.color = "#777";
//     sizesContainer.appendChild(noSize);
//   }

//   // Màu sắc
//   const colorsContainer = modal.querySelector("#modal-colors-container");
//   if (product.colors && product.colors.length > 0) {
//     product.colors.forEach((color, i) => {
//       const btn = document.createElement("button");
//       btn.textContent = color.trim();
//       btn.addEventListener("click", () => {
//         colorsContainer.querySelectorAll("button").forEach((b) => b.classList.remove("color-selected"));
//         btn.classList.add("color-selected");
//         modal.selectedColor = color.trim();
//       });
//       colorsContainer.appendChild(btn);
//       if (i === 0) {
//         btn.classList.add("color-selected");
//         modal.selectedColor = color.trim();
//       }
//     });
//   } else {
//     const noColor = document.createElement("p");
//     noColor.textContent = "Chưa có màu sắc";
//     noColor.style.color = "#777";
//     colorsContainer.appendChild(noColor);
//   }

//   // Số lượng
//   const quantityInput = modal.querySelector("#modal-quantity");
//   modal.querySelector(".decrease").addEventListener("click", () => {
//     let val = parseInt(quantityInput.value) || 1;
//     if (val > 1) quantityInput.value = --val;
//   });
//   modal.querySelector(".increase").addEventListener("click", () => {
//     let val = parseInt(quantityInput.value) || 1;
//     quantityInput.value = ++val;
//   });

//   // Xác nhận thêm
//   modal.querySelector(".add-to-cart-confirm").addEventListener("click", () => {
//     if (!modal.selectedSize) return alert("Vui lòng chọn kích thước!");
//     if (!modal.selectedColor) return alert("Vui lòng chọn màu sắc!");
//     const quantity = parseInt(quantityInput.value) || 1;
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const cartItem = { ...product, quantity, selectedSize: modal.selectedSize, selectedColor: modal.selectedColor };
//     cart.push(cartItem);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartCount();
//     modal.remove();
//   });
// }

// // Hàm hiển thị sản phẩm với slider
// function displayProducts() {
//   const productList = document.getElementById("product-list");
//   const featuredGrid = document.querySelector(".featured-grid");
//   if (!productList || !featuredGrid) {
//     console.error("Elements not found!");
//     return;
//   }

//   const products = JSON.parse(localStorage.getItem("products")) || [];

//   // Hiển thị cho slider (product-list) với tối đa 6 sản phẩm
//   productList.innerHTML = "";
//   products.slice(0, 6).forEach((product) => {
//     const div = document.createElement("div");
//     div.classList.add("product-item");
//     let imagesHtml = product.images && product.images.length > 0
//       ? `<div class="image-container"><img src="${product.images[0]}" alt="${product.name}" onerror="this.src='/img/placeholder.jpg';"><i class="fa-solid fa-magnifying-glass view-detail"></i></div>`
//       : `<div class="image-container"><img src="/img/placeholder.jpg" alt="No image" class="placeholder"><i class="fa-solid fa-magnifying-glass view-detail"></i></div>`;
//     div.innerHTML = `
//       ${imagesHtml}
//       <h3>${product.name || "Tên sản phẩm"}</h3>
//       <p class="old-price">${product.oldPrice ? product.oldPrice + " VND" : ""}</p>
//       <p class="new-price">${product.newPrice || product.price ? (product.newPrice || product.price) + " VND" : "N/A"}</p>
//       <button class="add-to-cart-btn"><i class="fas fa-shopping-cart"></i><span>Thêm vào giỏ hàng</span></button>
//     `;
//     productList.appendChild(div);
//   });

//   // Thêm slider cho sản phẩm
//   let productIndex = 0;
//   const productItems = document.querySelectorAll(".product-item");
//   const totalProducts = productItems.length;
//   const productsPerSlide = 4; // Số sản phẩm trên mỗi slide, điều chỉnh theo nhu cầu (hình ảnh bạn cung cấp là 4)

//   function updateProductSlider() {
//     const offset = -productIndex * (100 / Math.ceil(totalProducts / productsPerSlide));
//     productList.style.transform = `translateX(${offset}%)`;
//     updateProductDots();
//   }

//   function createProductDots() {
//     const dotsContainer = document.querySelector(".product-dots");
//     if (dotsContainer) {
//       dotsContainer.innerHTML = "";
//       const totalSlides = Math.ceil(totalProducts / productsPerSlide);
//       for (let i = 0; i < totalSlides; i++) {
//         const dot = document.createElement("span");
//         dot.classList.add("dot");
//         dot.addEventListener("click", () => {
//           productIndex = i;
//           updateProductSlider();
//         });
//         dotsContainer.appendChild(dot);
//       }
//       updateProductDots();
//     }
//   }

//   function updateProductDots() {
//     const productDots = document.querySelectorAll(".product-dots .dot");
//     productDots.forEach((dot, index) => {
//       dot.classList.toggle("active", index === productIndex);
//     });
//   }

//   function changeProductSlide(step) {
//     const totalSlides = Math.ceil(totalProducts / productsPerSlide);
//     productIndex = (productIndex + step + totalSlides) % totalSlides;
//     updateProductSlider();
//   }

//   // Đảm bảo các nút prev/next hoạt động
//   const prevBtn = document.querySelector(".product-prev-btn");
//   const nextBtn = document.querySelector(".product-next-btn");
//   if (prevBtn && nextBtn) {
//     prevBtn.addEventListener("click", () => {
//       changeProductSlide(-1);
//     });
//     nextBtn.addEventListener("click", () => {
//       changeProductSlide(1);
//     });
//   }

//   if (productItems.length > productsPerSlide) {
//     createProductDots();
//     updateProductSlider();
//   }

//   let loadMoreBtn = document.getElementById("load-more-btn");
//   if (!loadMoreBtn) {
//     loadMoreBtn = document.createElement("a");
//     loadMoreBtn.id = "load-more-btn";
//     loadMoreBtn.className = "load-more-btn";
//     loadMoreBtn.href = "/html/products.html";
//     loadMoreBtn.textContent = "Xem thêm";
//     productList.parentElement.appendChild(loadMoreBtn);
//   }

//   // Hiển thị cho grid (featured-grid) với 10 sản phẩm ngẫu nhiên
//   featuredGrid.innerHTML = "";
//   const shuffledProducts = [...products].sort(() => Math.random() - 0.5);
//   shuffledProducts.slice(0, 10).forEach((product) => {
//     const div = document.createElement("div");
//     div.classList.add("product-item");
//     let imagesHtml = product.images && product.images.length > 0
//       ? `<div class="image-container"><img src="${product.images[0]}" alt="${product.name}" onerror="this.src='/img/placeholder.jpg';"><i class="fa-solid fa-magnifying-glass view-detail"></i></div>`
//       : `<div class="image-container"><img src="/img/placeholder.jpg" alt="No image" class="placeholder"><i class="fa-solid fa-magnifying-glass view-detail"></i></div>`;
//     div.innerHTML = `
//       ${imagesHtml}
//       <h3>${product.name || "Tên sản phẩm"}</h3>
//       <p class="old-price">${product.oldPrice ? product.oldPrice + " VND" : ""}</p>
//       <p class="new-price">${product.newPrice || product.price ? (product.newPrice || product.price) + " VND" : "N/A"}</p>
//       <button class="add-to-cart-btn"><i class="fas fa-shopping-cart"></i><span>Thêm vào giỏ hàng</span></button>
//     `;
//     featuredGrid.appendChild(div);
//   });

//   // Thêm sự kiện cho nút "Thêm vào giỏ hàng" cho cả slider và grid
//   document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
//     btn.addEventListener("click", () => {
//       const productName = btn.closest(".product-item").querySelector("h3").textContent;
//       showAddToCartModal(products.find(p => p.name === productName));
//     });
//   });

//   // Thêm sự kiện click vào icon kính lúp
//   document.querySelectorAll(".view-detail").forEach(icon => {
//     icon.addEventListener("click", () => {
//       const productName = icon.closest(".product-item").querySelector("h3").textContent;
//       window.location.href = `/html/chitiet.html?id=${encodeURIComponent(productName)}`;
//     });
//   });
// }

// // Kiểm tra và cập nhật trạng thái tài khoản
// document.addEventListener("DOMContentLoaded", () => {
//   const accountBtn = document.getElementById("account-btn");
//   const loginModal = document.getElementById("loginModal");
//   const modalContent = document.querySelector(".modal-content");

//   if (accountBtn && loginModal && modalContent) {
//     const registeredAccounts = JSON.parse(localStorage.getItem("registeredAccounts")) || [];
//     const currentUserEmail = localStorage.getItem("currentUser");

//     if (currentUserEmail) {
//       const account = registeredAccounts.find((acc) => acc.email === currentUserEmail);
//       const displayName = account ? `${account.firstname || ""} ${account.lastname || ""}`.trim() : "Tài khoản";
//       accountBtn.innerHTML = `
//         <i class="fa-regular fa-user"></i>
//         <span class="action-title">${displayName}</span>
//       `;
//     } else {
//       accountBtn.innerHTML = `
//         <i class="fa-regular fa-user"></i>
//         <span class="action-title">Tài khoản</span>
//       `;
//     }

//     accountBtn.addEventListener("click", function (e) {
//       e.preventDefault();
//       if (currentUserEmail) {
//         if (confirm("Bạn có muốn đăng xuất không?")) {
//           localStorage.removeItem("currentUser");
//           accountBtn.innerHTML = `
//             <i class="fa-regular fa-user"></i>
//             <span class="action-title">Tài khoản</span>
//           `;
//           loginModal.style.display = "block";
//           modalContent.style.position = "absolute";
//           modalContent.style.top = accountBtn.getBoundingClientRect().height + 21 + "px";
//           modalContent.style.left = "22px";
//           modalContent.style.transform = "translateX(-50%)";
//           modalContent.style.width = "180px";
//           modalContent.style.minHeight = "40px";
//           accountBtn.appendChild(modalContent);
//         }
//       } else {
//         loginModal.style.display = "block";
//         modalContent.style.position = "absolute";
//         modalContent.style.top = accountBtn.getBoundingClientRect().height + 21 + "px";
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
//     console.error("Modal elements not fully found!", { accountBtn, loginModal, modalContent });
//   }

//   // Gọi hàm hiển thị sản phẩm và cập nhật giỏ hàng khi trang load
//   displayProducts();
//   updateCartCount();
// });

// // 🧩 Kiểm tra và cập nhật trạng thái tài khoản
// document.addEventListener("DOMContentLoaded", () => {
//   const accountBtn = document.getElementById("account-btn");
//   const loginModal = document.getElementById("loginModal");
//   const modalContent = document.querySelector(".modal-content");

//   if (accountBtn && loginModal && modalContent) {
//     const registeredAccounts = JSON.parse(localStorage.getItem("registeredAccounts")) || [];
//     let currentUserEmail = localStorage.getItem("currentUser");

//     // Cập nhật giao diện nút tài khoản
//     function updateAccountButton() {
//       if (currentUserEmail) {
//         const account = registeredAccounts.find(acc => acc.email === currentUserEmail);
//         const displayName = account
//           ? `${account.firstname || ""} ${account.lastname || ""}`.trim() || "Tài khoản"
//           : "Tài khoản";
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

//     updateAccountButton();

//     // Gắn sự kiện click (chỉ gắn 1 lần)
//     let isAccountListenerAdded = false;
//     if (!isAccountListenerAdded) {
//       accountBtn.addEventListener("click", (e) => {
//         e.preventDefault();

//         currentUserEmail = localStorage.getItem("currentUser");

//         if (currentUserEmail) {
//           // Nếu đang đăng nhập → hỏi có muốn đăng xuất không
//           if (confirm("Bạn có muốn đăng xuất không?")) {
//             localStorage.removeItem("currentUser");
//             currentUserEmail = null;
//             updateAccountButton();
//             alert("Đăng xuất thành công!");
//           }
//         } else {
//           // Nếu chưa đăng nhập → mở form login
//           loginModal.style.display = "block";
//           modalContent.style.position = "absolute";
//           modalContent.style.top = accountBtn.getBoundingClientRect().height + 21 + "px";
//           modalContent.style.left = "22px";
//           modalContent.style.transform = "translateX(-50%)";
//           modalContent.style.width = "180px";
//           modalContent.style.minHeight = "60px";
//           accountBtn.appendChild(modalContent);
//         }
//       });
//       isAccountListenerAdded = true;
//     }

//     // Ẩn modal khi click ra ngoài
//     window.addEventListener("click", (e) => {
//       if (!accountBtn.contains(e.target) && !loginModal.contains(e.target)) {
//         loginModal.style.display = "none";
//         if (modalContent.parentElement === accountBtn) {
//           loginModal.appendChild(modalContent);
//         }
//       }
//     });

//     // Cập nhật vị trí modal khi resize
//     window.addEventListener("resize", () => {
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
//     console.error("Modal elements not fully found!", { accountBtn, loginModal, modalContent });
//   }

//   // Gọi hàm hiển thị sản phẩm và giỏ hàng
//   displayProducts();
//   updateCartCount();

//   // 🔍 Xử lý tìm kiếm
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
//       if (!searchBar.contains(e.target)) {
//         searchResults.classList.remove("active");
//       }
//     });
//   }
// });


// // Thêm ngày và giờ hiện tại
// const currentDate = new Date();
// const formattedDate = `${currentDate.toLocaleString("vi-VN", { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", timeZone: "Asia/Ho_Chi_Minh" })}`;
// console.log("Ngày và giờ hiện tại: " + formattedDate);



let slideIndex = 0;
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let timer;

// Hàm hiển thị slide
function showSlides() {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");

  timer = setTimeout(showSlides, 4000); // đổi slide sau 4 giây
}

// Hàm đặt slide
function setSlide1(index) {
  clearTimeout(timer);
  slideIndex = index;

  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");

  timer = setTimeout(showSlides, 4000);
}

// Hàm thay đổi slide
function changeSlide1(step) {
  clearTimeout(timer);
  slideIndex = (slideIndex + step + slides.length) % slides.length;

  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");

  timer = setTimeout(showSlides, 4000);
}

// Hàm cập nhật số lượng giỏ hàng
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const countCart = document.querySelector(".count-cart");
  if (countCart) {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    countCart.textContent = total > 0 ? total : "0";
    countCart.style.opacity = "1";
    countCart.style.color = "#ffffff";
  } else {
    console.warn("Element with class 'count-cart' not found!");
  }
}

// Hàm sao chép mã
function copyCode(code) {
  navigator.clipboard.writeText(code).then(() => {
    alert("Đã sao chép mã: " + code);
  });
}

// Hàm hiển thị modal thêm vào giỏ
function showAddToCartModal(product) {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.style.display = "block";
  modal.innerHTML = `
    <div class="modal-content1">
      <span class="close-modal">&times;</span>
      <div class="product-mini-detail">
        <img src="${product.images[0] || "/img/placeholder.jpg"}" alt="${product.name}">
        <div>
          <h2>${product.name}</h2>
          <p class="price-section">
            <span class="new-price">${product.newPrice || product.price} VND</span>
            <span class="old-price">${product.oldPrice ? product.oldPrice + " VND" : ""}</span>
          </p>
          <p><strong>Kích thước:</strong></p>
          <div id="modal-sizes-container"></div>
          <p><strong>Màu sắc:</strong></p>
          <div id="modal-colors-container"></div>
          <p><strong>Số lượng:</strong></p>
          <div class="quantity-section">
            <button class="quantity-btn decrease">-</button>
            <input type="number" id="modal-quantity" value="1" min="1">
            <button class="quantity-btn increase">+</button>
          </div>
          <button class="add-to-cart-confirm">Thêm vào giỏ hàng</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  // Đóng modal
  modal.querySelector(".close-modal").addEventListener("click", () => modal.remove());

  // Kích thước
  const sizesContainer = modal.querySelector("#modal-sizes-container");
  if (product.sizes && product.sizes.length > 0) {
    product.sizes.forEach((size, i) => {
      const btn = document.createElement("button");
      btn.textContent = size.trim();
      btn.addEventListener("click", () => {
        sizesContainer.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        modal.selectedSize = size.trim();
      });
      sizesContainer.appendChild(btn);
      if (i === 0) {
        btn.classList.add("active");
        modal.selectedSize = size.trim();
      }
    });
  } else {
    const noSize = document.createElement("p");
    noSize.textContent = "Chưa có kích thước";
    noSize.style.color = "#777";
    sizesContainer.appendChild(noSize);
  }

  // Màu sắc
  const colorsContainer = modal.querySelector("#modal-colors-container");
  if (product.colors && product.colors.length > 0) {
    product.colors.forEach((color, i) => {
      const btn = document.createElement("button");
      btn.textContent = color.trim();
      btn.addEventListener("click", () => {
        colorsContainer.querySelectorAll("button").forEach((b) => b.classList.remove("color-selected"));
        btn.classList.add("color-selected");
        modal.selectedColor = color.trim();
      });
      colorsContainer.appendChild(btn);
      if (i === 0) {
        btn.classList.add("color-selected");
        modal.selectedColor = color.trim();
      }
    });
  } else {
    const noColor = document.createElement("p");
    noColor.textContent = "Chưa có màu sắc";
    noColor.style.color = "#777";
    colorsContainer.appendChild(noColor);
  }

  // Số lượng
  const quantityInput = modal.querySelector("#modal-quantity");
  modal.querySelector(".decrease").addEventListener("click", () => {
    let val = parseInt(quantityInput.value) || 1;
    if (val > 1) quantityInput.value = --val;
  });
  modal.querySelector(".increase").addEventListener("click", () => {
    let val = parseInt(quantityInput.value) || 1;
    quantityInput.value = ++val;
  });

  // Xác nhận thêm
  modal.querySelector(".add-to-cart-confirm").addEventListener("click", () => {
    if (!modal.selectedSize) return alert("Vui lòng chọn kích thước!");
    if (!modal.selectedColor) return alert("Vui lòng chọn màu sắc!");
    const quantity = parseInt(quantityInput.value) || 1;
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItem = { ...product, quantity, selectedSize: modal.selectedSize, selectedColor: modal.selectedColor };
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    modal.remove();
  });
}

// Hàm tìm kiếm sản phẩm
function searchProducts(query) {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const searchResults = document.getElementById("searchResults");
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

// Hàm hiển thị sản phẩm từ localStorage với slider và grid
function displayProducts() {
  const productList = document.getElementById("product-list");
  const featuredGrid = document.querySelector(".featured-grid");
  if (!productList || !featuredGrid) {
    console.error("Elements not found!");
    return;
  }

  const products = JSON.parse(localStorage.getItem("products")) || [];

  // Hiển thị cho slider (product-list) với đúng 6 sản phẩm
  productList.innerHTML = "";
  products.slice(0, 6).forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product-item", "slide1"); // Thêm class "slide" cho slider
    let imagesHtml = product.images && product.images.length > 0
      ? `<div class="image-container"><img src="${product.images[0]}" alt="${product.name}" onerror="this.src='img/placeholder.jpg';"><i class="fa-solid fa-magnifying-glass view-detail"></i></div>`
      : `<div class="image-container"><img src="img/placeholder.jpg" alt="No image" class="placeholder"><i class="fa-solid fa-magnifying-glass view-detail"></i></div>`;
    div.innerHTML = `
      ${imagesHtml}
      <h3>${product.name || "Tên sản phẩm"}</h3>
      <p class="old-price">${product.oldPrice ? product.oldPrice + " VND" : ""}</p>
      <p class="new-price">${product.newPrice || product.price ? (product.newPrice || product.price) + " VND" : "N/A"}</p>
      <button class="add-to-cart-btn"><i class="fas fa-shopping-cart"></i><span>Thêm vào giỏ hàng</span></button>
    `;
    productList.appendChild(div);
  });

  // // Cập nhật slides sau khi thêm sản phẩm
  // slides = document.querySelectorAll(".slide");
  // dots = document.querySelectorAll(".dot");

  // // Thêm slider cho sản phẩm
  // let productIndex = 0;
  // const productItems = document.querySelectorAll(".slide");
  // const totalProducts = productItems.length;
  // const productsPerSlide = 6; // Đổi thành 6 sản phẩm mỗi slide

  function updateProductSlider() {
    const offset = -productIndex * (100 / Math.ceil(totalProducts / productsPerSlide));
    productList.style.transform = `translateX(${offset}%)`;
    updateProductDots();
  }

  function createProductDots() {
    const dotsContainer = document.querySelector(".product-dots");
    if (dotsContainer) {
      dotsContainer.innerHTML = "";
      const totalSlides = Math.ceil(totalProducts / productsPerSlide);
      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => {
          productIndex = i;
          updateProductSlider();
        });
        dotsContainer.appendChild(dot);
      }
      updateProductDots();
    }
  }

  function updateProductDots() {
    const productDots = document.querySelectorAll(".product-dots .dot");
    productDots.forEach((dot, index) => {
      dot.classList.toggle("active", index === productIndex);
    });
  }

  function changeProductSlide(step) {
    const totalSlides = Math.ceil(totalProducts / productsPerSlide);
    productIndex = (productIndex + step + totalSlides) % totalSlides;
    updateProductSlider();
  }

  const prevBtn = document.querySelector(".product-prev-btn");
  const nextBtn = document.querySelector(".product-next-btn");
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => changeProductSlide(-1));
    nextBtn.addEventListener("click", () => changeProductSlide(1));
  }

  if (productItems.length > productsPerSlide) {
    createProductDots();
    updateProductSlider();
    showSlides(); // Khởi động slider
  }

  let loadMoreBtn = document.getElementById("load-more-btn");
  if (!loadMoreBtn) {
    loadMoreBtn = document.createElement("a");
    loadMoreBtn.id = "load-more-btn";
    loadMoreBtn.className = "load-more-btn";
    loadMoreBtn.href = "/html/products.html";
    loadMoreBtn.textContent = "Xem thêm";
    productList.parentElement.appendChild(loadMoreBtn);
  }

  // Hiển thị cho grid (featured-grid) với 10 sản phẩm ngẫu nhiên
  featuredGrid.innerHTML = "";
  const shuffledProducts = [...products].sort(() => Math.random() - 0.5); // Xáo trộn mảng sản phẩm
  shuffledProducts.slice(0, 10).forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product-item");
    let imagesHtml = product.images && product.images.length > 0
      ? `<div class="image-container"><img src="${product.images[0]}" alt="${product.name}" onerror="this.src='img/placeholder.jpg';"><i class="fa-solid fa-magnifying-glass view-detail"></i></div>`
      : `<div class="image-container"><img src="img/placeholder.jpg" alt="No image" class="placeholder"><i class="fa-solid fa-magnifying-glass view-detail"></i></div>`;
    div.innerHTML = `
      ${imagesHtml}
      <h3>${product.name || "Tên sản phẩm"}</h3>
      <p class="old-price">${product.oldPrice ? product.oldPrice + " VND" : ""}</p>
      <p class="new-price">${product.newPrice || product.price ? (product.newPrice || product.price) + " VND" : "N/A"}</p>
      <button class="add-to-cart-btn"><i class="fas fa-shopping-cart"></i><span>Thêm vào giỏ hàng</span></button>
    `;
    featuredGrid.appendChild(div);
  });

  // Thêm sự kiện cho nút "Thêm vào giỏ hàng" cho cả slider và grid
  document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const productName = btn.closest(".product-item").querySelector("h3").textContent;
      showAddToCartModal(products.find(p => p.name === productName));
    });
  });

  // Thêm sự kiện click vào icon kính lúp
  document.querySelectorAll(".view-detail").forEach(icon => {
    icon.addEventListener("click", () => {
      const productName = icon.closest(".product-item").querySelector("h3").textContent;
      window.location.href = `chitiet.html?id=${encodeURIComponent(productName)}`;
    });
  });
}

// Kiểm tra và cập nhật trạng thái tài khoản
document.addEventListener("DOMContentLoaded", () => {
  const accountBtn = document.getElementById("account-btn");
  const loginModal = document.getElementById("loginModal");
  const modalContent = document.querySelector(".modal-content");

  if (accountBtn && loginModal && modalContent) {
    const registeredAccounts = JSON.parse(localStorage.getItem("registeredAccounts")) || [];
    const currentUserEmail = localStorage.getItem("currentUser");

    if (currentUserEmail) {
      const account = registeredAccounts.find((acc) => acc.email === currentUserEmail);
      const displayName = account ? `${account.firstname || ""} ${account.lastname || ""}`.trim() : "Tài khoản";

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
          modalContent.style.top = accountBtn.getBoundingClientRect().height + 21 + "px";
          modalContent.style.left = "22px";
          modalContent.style.transform = "translateX(-50%)";
          modalContent.style.width = "180px";
          modalContent.style.minHeight = "60px";
          accountBtn.appendChild(modalContent);
        }
      } else {
        loginModal.style.display = "block";
        modalContent.style.position = "absolute";
        modalContent.style.top = accountBtn.getBoundingClientRect().height + 21 + "px";
        modalContent.style.left = "22px";
        modalContent.style.transform = "translateX(-50%)";
        modalContent.style.width = "180px";
        modalContent.style.minHeight = "60px";
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
  } else {
    console.error("Modal elements not fully found!", { accountBtn, loginModal, modalContent });
  }

  // Gọi hàm hiển thị sản phẩm và cập nhật giỏ hàng khi trang load
  displayProducts();
  updateCartCount();

  // Thêm sự kiện tìm kiếm
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

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
    if (!searchBar.contains(e.target)) {
      searchResults.classList.remove("active");
    }
  });
});

// Đảm bảo searchBar được định nghĩa
const searchBar = document.querySelector(".search_bar");

// Thêm sự kiện cho nút login
document.querySelectorAll(".login-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const loginModal = document.getElementById("loginModal");
    const modalContent = document.querySelector(".modal-content");
    if (loginModal && modalContent) {
      loginModal.style.display = "block";
      modalContent.style.position = "fixed";
      modalContent.style.top = "50%";
      modalContent.style.left = "50%";
      modalContent.style.transform = "translate(-50%, -50%)";
      modalContent.style.width = "300px";
      modalContent.style.minHeight = "200px";
    }
  });
});
