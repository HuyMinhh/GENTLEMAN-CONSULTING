// // Hàm cập nhật số lượng giỏ hàng
// function updateCartCount() {
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const countCart = document.querySelector(".count-cart");
//   if (countCart) {
//     const total = cart.reduce((sum, item) => sum + (item.quantity || 0), 0); // Xử lý nếu quantity không tồn tại
//     countCart.textContent = total > 0 ? total : "0";
//     countCart.style.opacity = total > 0 ? "1" : "0"; // Ẩn nếu rỗng
//     countCart.style.color = "#ffffff";
//   } else {
//     console.warn("Element with class 'count-cart' not found! Kiểm tra HTML để đảm bảo có thẻ <span class='count-cart'>0</span> trong giỏ hàng.");
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

//   // Gọi hàm cập nhật giỏ hàng khi trang load
//   updateCartCount();

//   // Theo dõi thay đổi trong localStorage (khi thêm sản phẩm từ trang khác)
//   window.addEventListener("storage", () => {
//     updateCartCount();
//   });
// });

// Hàm cập nhật số lượng giỏ hàng
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const countCart = document.querySelector(".count-cart");
  if (countCart) {
    const total = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
    countCart.textContent = total > 0 ? total : "0";
    countCart.style.opacity = total > 0 ? "1" : "0";
    countCart.style.color = "#ffffff";
  } else {
    console.warn("Element with class 'count-cart' not found!");
  }
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
          <button class="add-to-cart-confirm"><span>Thêm vào giỏ hàng</span><i class="success-checkmark">✓</i></button>
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
  const addToCartBtn = modal.querySelector(".add-to-cart-confirm");
  const successCheckmark = addToCartBtn.querySelector(".success-checkmark");
  addToCartBtn.addEventListener("click", () => {
    if (!modal.selectedSize) return alert("Vui lòng chọn kích thước!");
    if (!modal.selectedColor) return alert("Vui lòng chọn màu sắc!");
    const quantity = parseInt(quantityInput.value) || 1;
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItem = { ...product, quantity, selectedSize: modal.selectedSize, selectedColor: modal.selectedColor };
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();

    // Hiển thị dấu tích xanh lá
    successCheckmark.style.display = "block";
    setTimeout(() => {
      successCheckmark.style.display = "none";
      modal.remove();
    }, 2000); // Ẩn sau 2 giây
  });
}

// Hàm hiển thị sản phẩm từ localStorage với giới hạn số lượng
function displayProducts(sortOrder = "asc", startIndex = 0, limit = 6) {
  const productList = document.getElementById("product-list");
  if (!productList) {
    console.error("Element with id 'product-list' not found!");
    return;
  }

  let products = JSON.parse(localStorage.getItem("products")) || [];
  // Sắp xếp sản phẩm theo giá
  products.sort((a, b) => {
    const priceA = a.newPrice || a.price || 0;
    const priceB = b.newPrice || b.price || 0;
    return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
  });

  // Lấy danh sách sản phẩm từ startIndex với giới hạn limit
  const displayedProducts = products.slice(startIndex, startIndex + limit);

  productList.innerHTML = ""; // Xóa nội dung cũ
  displayedProducts.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product-item");
    let imagesHtml = "";
    if (product.images && product.images.length > 0) {
      imagesHtml = `<div class="image-container"><img src="${product.images[0]}" alt="${product.name}" onerror="this.src='/img/placeholder.jpg';"><i class="fa-solid fa-magnifying-glass view-detail"></i></div>`;
    } else {
      imagesHtml = `<div class="image-container"><img src="/img/placeholder.jpg" alt="No image" class="placeholder"><i class="fa-solid fa-magnifying-glass view-detail"></i></div>`;
    }
    div.innerHTML = `
      ${imagesHtml}
      <h3>${product.name || "Tên sản phẩm"}</h3>
      <p class="old-price">${product.oldPrice ? product.oldPrice + " VND" : ""}</p>
      <p class="new-price">${product.newPrice || product.price ? (product.newPrice || product.price) + " VND" : "N/A"}</p>
      <button class="add-to-cart-btn"><i class="fas fa-shopping-cart"></i><span>Thêm vào giỏ hàng</span></button>
    `;

    // Thêm sự kiện click vào icon kính lúp
    const viewDetailIcon = div.querySelector(".view-detail");
    if (viewDetailIcon) {
      viewDetailIcon.addEventListener("click", () => {
        window.location.href = `chitiet.html?id=${encodeURIComponent(product.name)}`;
      });
    }

    // Thêm sự kiện thêm vào giỏ hàng (gọi modal)
    const addToCartBtn = div.querySelector(".add-to-cart-btn");
    if (addToCartBtn) {
      addToCartBtn.addEventListener("click", () => {
        showAddToCartModal(product);
      });
    }

    productList.appendChild(div);
  });

  // Cập nhật trạng thái nút "Xem thêm"
  const loadMoreBtn = document.getElementById("load-more-btn");
  const noMoreProductsMsg = document.getElementById("no-more-products-msg");
  if (loadMoreBtn && noMoreProductsMsg) {
    const totalDisplayed = startIndex + displayedProducts.length;
    if (totalDisplayed >= products.length) {
      loadMoreBtn.classList.add("disabled");
      noMoreProductsMsg.style.display = "block";
    } else {
      loadMoreBtn.classList.remove("disabled");
      noMoreProductsMsg.style.display = "none";
    }
  }
}

// Hàm load thêm sản phẩm khi nhấn "Xem thêm"
function loadMoreProducts() {
  let startIndex = document.querySelectorAll("#product-list .product-item").length;
  const sortSelect = document.getElementById("sort-select");
  const sortOrder = sortSelect ? sortSelect.value : "asc";
  displayProducts(sortOrder, startIndex, 6);
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

  // Gọi hàm hiển thị sản phẩm ban đầu với 6 sản phẩm
  displayProducts();

  // Thêm sự kiện cho combobox sắp xếp
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      const sortOrder = sortSelect.value;
      if (sortOrder !== "default") {
        document.getElementById("product-list").innerHTML = ""; // Xóa danh sách hiện tại
        displayProducts(sortOrder); // Hiển thị lại từ đầu với sắp xếp mới
      }
    });
  }

  updateCartCount();

  // Theo dõi thay đổi trong localStorage
  window.addEventListener("storage", () => {
    updateCartCount();
  });

  // Thêm sự kiện cho nút "Xem thêm"
  const loadMoreBtn = document.getElementById("load-more-btn");
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", loadMoreProducts);
  }

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