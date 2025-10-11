
document.addEventListener("DOMContentLoaded", () => {
  const accountBtn = document.getElementById("account-btn");
  const loginModal = document.getElementById("loginModal");
  const modalContent = document.querySelector(".modal-content");

  if (accountBtn && loginModal && modalContent) {
    const registeredAccounts = JSON.parse(localStorage.getItem("registeredAccounts")) || [];
    const currentUserEmail = localStorage.getItem("currentUser");

    console.log("Debug - registeredAccounts:", registeredAccounts);
    console.log("Debug - currentUserEmail:", currentUserEmail);

    if (currentUserEmail) {
      const account = registeredAccounts.find((acc) => acc.email === currentUserEmail);
      const displayName = account ? `${account.firstname || ""} ${account.lastname || ""}`.trim() : "Tài khoản";

      console.log("Debug - Account found:", account);
      console.log("Debug - Display name:", displayName);

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
          modalContent.style.minHeight = "40px";
          accountBtn.appendChild(modalContent);
        }
      } else {
        loginModal.style.display = "block";
        modalContent.style.position = "absolute";
        modalContent.style.top = accountBtn.getBoundingClientRect().height + 21 + "px";
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
  } else {
    console.error("Modal elements not fully found!", {
      accountBtn,
      loginModal,
      modalContent,
    });
  }

  // Quản lý giỏ hàng
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function updateCartDisplay() {
    const cartContent = document.getElementById("cart-content");
    const itemCount = document.getElementById("item-count");
    const totalPrice = document.getElementById("total-price");
    const cartCountElement = document.querySelector(".count-cart");

    let total = 0;
    let count = 0;

    if (cartContent && itemCount && totalPrice) {
      cartContent.innerHTML = "";
      if (cart.length === 0) {
        cartContent.innerHTML = `
          <p class="empty-cart-message">Không có sản phẩm trong giỏ hàng</p>
          <a href="sanpham.html" class="add-product-btn">Thêm sản phẩm</a>
        `;
        itemCount.textContent = "0";
        totalPrice.textContent = "0đ";
      } else {
        cart.forEach((item, index) => {
          const itemTotal = (item.newPrice || item.price) * item.quantity;
          total += itemTotal;
          count += item.quantity;

          const div = document.createElement("div");
          div.classList.add("cart-item");
          let attributesHtml = '';
          if (item.selectedSize) attributesHtml += `Size: ${item.selectedSize}`;
          if (item.selectedColor) attributesHtml += `${item.selectedSize ? ', ' : ''}Màu: ${item.selectedColor}`;
          div.innerHTML = `
                <input type="checkbox" class="item-checkbox" checked>
                <img src="${(item.images && item.images.length > 0 ? item.images[0] : "/img/placeholder.jpg")}" alt="${item.name}" class="item-image">
                <div class="item-details">
                    <h3 class="item-name">${item.name}</h3>
                    ${attributesHtml ? `<p class="item-attributes">${attributesHtml}</p>` : ''}
                    <p class="item-price">${item.newPrice || item.price}đ <span class="original-price">${item.oldPrice ? item.oldPrice + "đ" : ""}</span></p>
                    <div class="quantity-control">
                        <button class="quantity-btn">-</button>
                        <input type="number" value="${item.quantity}" min="1" class="quantity-input">
                        <button class="quantity-btn">+</button>
                    </div>
                </div>
                <button class="remove-item" data-index="${index}">Xóa</button>
            `;
          cartContent.appendChild(div);
        });

        // Thêm sự kiện cho các nút tăng/giảm số lượng và xóa
        document.querySelectorAll(".cart-item").forEach((div, index) => {
          const minusBtn = div.querySelector(".quantity-btn:first-child");
          const plusBtn = div.querySelector(".quantity-btn:last-child");
          const quantityInput = div.querySelector(".quantity-input");
          const removeBtn = div.querySelector(".remove-item");

          minusBtn.addEventListener("click", () => {
            if (quantityInput.value > 1) {
              quantityInput.value = parseInt(quantityInput.value) - 1;
              cart[index].quantity = parseInt(quantityInput.value);
              updateCart();
            }
          });

          plusBtn.addEventListener("click", () => {
            quantityInput.value = parseInt(quantityInput.value) + 1;
            cart[index].quantity = parseInt(quantityInput.value);
            updateCart();
          });

          quantityInput.addEventListener("change", () => {
            cart[index].quantity = parseInt(quantityInput.value);
            if (cart[index].quantity < 1) cart[index].quantity = 1;
            quantityInput.value = cart[index].quantity;
            updateCart();
          });

          removeBtn.addEventListener("click", () => {
            if (confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
              cart.splice(index, 1);
              updateCart();
              showToast("Đã xóa sản phẩm khỏi giỏ hàng!", "success");
            }
          });
        });

        itemCount.textContent = count;
        totalPrice.textContent = total + "đ";
      }
    }

    // Cập nhật số lượng sản phẩm trên biểu tượng giỏ hàng
    if (cartCountElement) {
      cartCountElement.textContent = count;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function updateCart() {
    updateCartDisplay();
  }

  // Thêm sự kiện cho nút "Mua Hàng"
  const checkoutBtn = document.querySelector(".checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        showToast("Giỏ hàng trống! Vui lòng thêm sản phẩm trước khi thanh toán.", "error");
      } else {
        window.location.href = "dathang.html";
      }
    });
  }

  // Thêm chức năng cho checkbox "Tích chọn tất cả" và nút "Xóa tất cả"
  const selectAllCheckbox = document.querySelector(".select-all-checkbox");
  const removeAllBtn = document.querySelector(".remove-all-btn");

  if (selectAllCheckbox) {
    selectAllCheckbox.addEventListener("change", () => {
      const checkboxes = document.querySelectorAll(".item-checkbox");
      checkboxes.forEach(checkbox => checkbox.checked = selectAllCheckbox.checked);
    });
  }

  if (removeAllBtn) {
    removeAllBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        showToast("Giỏ hàng đã trống!", "error");
        return;
      }
      if (confirm("Bạn có chắc muốn xóa tất cả sản phẩm không?")) {
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCart();
        showToast("Đã xóa tất cả sản phẩm khỏi giỏ hàng!", "success");
      }
    });
  }

  // Hàm hiển thị toast notification
  function showToast(message, type) {
    const toastContainer = document.createElement("div");
    toastContainer.classList.add("toast-container");
    document.body.appendChild(toastContainer);

    for (let i = 0; i < 2; i++) {
      const toast = document.createElement("div");
      toast.classList.add("toast", "marquee");
      toast.innerHTML = `<div class="marquee-text">${message}</div>`;
      toastContainer.appendChild(toast);

      setTimeout(() => {
        toast.remove();
        if (toastContainer.children.length === 0) toastContainer.remove();
      }, 4500);
    }
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

    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredProducts.length > 0) {
      filteredProducts.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("search-result-item");
        div.innerHTML = `
          <img src="${product.images && product.images.length > 0 ? product.images[0] : '/img/placeholder.jpg'}" alt="${product.name}">
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

  updateCartDisplay();
});