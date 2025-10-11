
document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  let quantity = 1;
  let selectedSize = null;
  let selectedColor = null;
  let productSliderIndex = 0; // Chỉ số hiện tại của slider sản phẩm liên quan

  // Hàm định dạng giá với dấu phẩy
  function formatPrice(price) {
    if (!price) return "N/A";
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // Hiển thị tên đăng nhập
  function displayUserName() {
    const accountBtn = document.getElementById("account-btn");
    if (!accountBtn) return;

    const registeredAccounts = JSON.parse(localStorage.getItem("registeredAccounts")) || [];
    const currentUserEmail = localStorage.getItem("currentUser");
    if (currentUserEmail) {
      const account = registeredAccounts.find(acc => acc.email === currentUserEmail);
      const displayName = account ? `${account.firstname || ""} ${account.lastname || ""}`.trim() : currentUserEmail;
      accountBtn.innerHTML = `<i class="fa-regular fa-user"></i><span class="action-title">${displayName}</span>`;
    } else {
      accountBtn.innerHTML = `<i class="fa-regular fa-user"></i><span class="action-title">Tài khoản</span>`;
    }

    accountBtn.addEventListener("click", e => {
      e.preventDefault();
      const loginModal = document.getElementById("loginModal");
      const modalContent = document.querySelector(".modal-content");
      if (!loginModal || !modalContent) return;

      if (currentUserEmail) {
        if (confirm("Bạn có muốn đăng xuất không?")) {
          localStorage.removeItem("currentUser");
          accountBtn.innerHTML = `<i class="fa-regular fa-user"></i><span class="action-title">Tài khoản</span>`;
          loginModal.style.display = "block";
          positionModal(modalContent, accountBtn);
        }
      } else {
        loginModal.style.display = "block";
        positionModal(modalContent, accountBtn);
      }
    });

    window.addEventListener("click", e => {
      if (!accountBtn.contains(e.target) && !loginModal.contains(e.target)) {
        loginModal.style.display = "none";
      }
    });

    window.addEventListener("resize", () => {
      if (loginModal.style.display === "block") {
        positionModal(document.querySelector(".modal-content"), accountBtn);
      }
    });
  }

  function positionModal(modalContent, accountBtn) {
    const rect = accountBtn.getBoundingClientRect();
    modalContent.style.top = `${rect.bottom + window.scrollY + 10}px`;
    modalContent.style.left = `${rect.left + rect.width / 2}px`;
    modalContent.style.transform = "translateX(-50%)";
    modalContent.style.width = "200px";
  }

  function selectSize(size, button) {
    selectedSize = size;
    document.querySelectorAll("#sizes-container button").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  }

  function selectColor(color, button) {
    selectedColor = color;
    document.querySelectorAll("#colors-container button").forEach(btn => btn.classList.remove("color-selected"));
    button.classList.add("color-selected");
  }

  function changeImage(thumbnail, index) {
    const mainImage = document.getElementById("mainImage");
    mainImage.src = thumbnail.src;
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
    if (!gallery || !thumbnails[index]) return;
    const thumbWidth = thumbnails[0].offsetWidth + 10;
    const scrollPos = index * thumbWidth;
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
    document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
    document.querySelectorAll(".tab-button").forEach(b => b.classList.remove("active"));
    const pane = document.getElementById(tabName);
    const button = document.querySelector(`.tab-button[onclick="openTab('${tabName}')"]`);
    if (pane) pane.classList.add("active");
    if (button) button.classList.add("active");
  };

  function showAddToCartModal(product) {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.style.display = "block";
    modal.innerHTML = `
      <div class="modal-content1">
        <span class="close-modal">&times;</span>
        <div class="product-mini-detail">
          <img src="${product.images[0] || "img/placeholder.jpg"}" alt="${product.name}">
          <div>
            <h2>${product.name}</h2>
            <p class="price-section">
              <span class="new-price">${formatPrice(product.newPrice || product.price)} VND</span>
              <span class="old-price">${product.oldPrice ? formatPrice(product.oldPrice) + " VND" : ""}</span>
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

    modal.querySelector(".close-modal").addEventListener("click", () => modal.remove());

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

    const quantityInput = modal.querySelector("#modal-quantity");
    modal.querySelector(".decrease").addEventListener("click", () => {
      let val = parseInt(quantityInput.value) || 1;
      if (val > 1) quantityInput.value = --val;
    });
    modal.querySelector(".increase").addEventListener("click", () => {
      let val = parseInt(quantityInput.value) || 1;
      quantityInput.value = ++val;
    });

    modal.querySelector(".add-to-cart-confirm").addEventListener("click", () => {
      if (!modal.selectedSize) return alert("Vui lòng chọn kích thước!");
      if (!modal.selectedColor) return alert("Vui lòng chọn màu sắc!");
      const quantity = parseInt(quantityInput.value) || 1;
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const cartItem = { ...product, quantity, selectedSize: modal.selectedSize, selectedColor: modal.selectedColor };
      cart.push(cartItem);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();

      const confirmBtn = modal.querySelector(".add-to-cart-confirm");
      confirmBtn.innerHTML = `<span class="success-checkmark">✓</span>`;
      confirmBtn.disabled = true;
      setTimeout(() => {
        confirmBtn.innerHTML = "Thêm vào giỏ hàng";
        confirmBtn.disabled = false;
        modal.remove();
      }, 2000);
    });
  }

  // Hàm khởi tạo slider sản phẩm liên quan
  function initProductSlider() {
    const productList = document.getElementById("product-list");
    const prevBtn = document.querySelector(".product-prev-btn");
    const nextBtn = document.querySelector(".product-next-btn");
    const dotsContainer = document.querySelector(".product-dots");
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const relatedProducts = products.filter(product => product.category === getCurrentProductCategory() && product.name !== getCurrentProductId()).slice(0, 6);

    if (!productList || relatedProducts.length === 0) return;

    // Tạo các chấm điều hướng (dots)
    dotsContainer.innerHTML = "";
    const totalSlides = Math.ceil(relatedProducts.length / getItemsPerSlide());
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        productSliderIndex = i;
        updateProductSlider();
      });
      dotsContainer.appendChild(dot);
    }

    // Xử lý sự kiện nút Previous
    prevBtn.addEventListener("click", () => {
      if (productSliderIndex > 0) {
        productSliderIndex--;
        updateProductSlider();
      }
    });

    // Xử lý sự kiện nút Next
    nextBtn.addEventListener("click", () => {
      if (productSliderIndex < totalSlides - 1) {
        productSliderIndex++;
        updateProductSlider();
      }
    });

    // Cập nhật trạng thái slider
    updateProductSlider();
  }

  // Hàm lấy số lượng sản phẩm hiển thị mỗi lần dựa trên kích thước màn hình
  function getItemsPerSlide() {
    if (window.innerWidth <= 480) return 1; // 1 sản phẩm trên mobile
    if (window.innerWidth <= 768) return 2; // 2 sản phẩm trên tablet
    return 4; // 4 sản phẩm trên desktop
  }

  // Hàm lấy danh mục sản phẩm hiện tại
  function getCurrentProductCategory() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const product = products.find(p => p.name === productId);
    return product ? product.category : "";
  }

  // Hàm lấy ID sản phẩm hiện tại
  function getCurrentProductId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
  }

  // Hàm cập nhật slider sản phẩm liên quan
  function updateProductSlider() {
    const productList = document.getElementById("product-list");
    const prevBtn = document.querySelector(".product-prev-btn");
    const nextBtn = document.querySelector(".product-next-btn");
    const dots = document.querySelectorAll(".product-dots .dot");
    const itemsPerSlide = getItemsPerSlide();
    const itemWidth = 100 / itemsPerSlide; // Phần trăm chiều rộng mỗi sản phẩm
    const translateX = -productSliderIndex * 100; // Dịch chuyển theo phần trăm

    productList.style.transform = `translateX(${translateX}%)`;

    // Cập nhật trạng thái nút điều hướng
    prevBtn.disabled = productSliderIndex === 0;
    nextBtn.disabled = productSliderIndex >= Math.ceil(dots.length - 1);

    // Cập nhật chấm điều hướng
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === productSliderIndex);
    });
  }

  function displayRelatedProducts(category, currentProductId) {
    const productList = document.getElementById("product-list");
    if (!productList) return;

    const products = JSON.parse(localStorage.getItem("products")) || [];
    const relatedProducts = products
      .filter(product => product.category === category && product.name !== currentProductId)
      .slice(0, 6);

    productList.innerHTML = "";

    if (relatedProducts.length === 0) {
      productList.innerHTML = "<p>Không có sản phẩm liên quan.</p>";
      return;
    }

    relatedProducts.forEach(product => {
      const div = document.createElement("div");
      div.classList.add("product-item");
      let imagesHtml = product.images && product.images.length > 0
        ? `<div class="image-container"><img src="${product.images[0]}" alt="${product.name}" onerror="this.src='/img/placeholder.jpg';"><i class="fa-solid fa-magnifying-glass view-detail"></i></div>`
        : `<div class="image-container"><img src="/img/placeholder.jpg" alt="No image" class="placeholder"><i class="fa-solid fa-magnifying-glass view-detail"></i></div>`;
      div.innerHTML = `
        ${imagesHtml}
        <h3>${product.name || "Tên sản phẩm"}</h3>
        <p class="old-price">${product.oldPrice ? formatPrice(product.oldPrice) + " VND" : ""}</p>
        <p class="new-price">${product.newPrice || product.price ? formatPrice(product.newPrice || product.price) + " VND" : "N/A"}</p>
        <button class="add-to-cart-btn1"><i class="fas fa-shopping-cart"></i><span>Thêm vào giỏ hàng</span></button>
      `;
      productList.appendChild(div);
    });

    document.querySelectorAll(".add-to-cart-btn1").forEach(btn => {
      btn.addEventListener("click", () => {
        const productName = btn.closest(".product-item").querySelector("h3").textContent;
        showAddToCartModal(products.find(p => p.name === productName));
      });
    });

    document.querySelectorAll(".view-detail").forEach(icon => {
      icon.addEventListener("click", () => {
        const productName = icon.closest(".product-item").querySelector("h3").textContent;
        window.location.href = `chitiet.html?id=${encodeURIComponent(productName)}`;
      });
    });

    // Khởi tạo slider
    initProductSlider();
  }

  function displayProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const product = products.find(p => p.name === productId);

    if (!productId || !product) {
      document.querySelector(".product-detail").innerHTML = "<p>Sản phẩm không tìm thấy!</p>";
      return;
    }

    document.getElementById("productName").textContent = product.name || "Tên sản phẩm không xác định";
    document.getElementById("newPrice").textContent = `${formatPrice(product.newPrice || product.price)} VND`;
    document.getElementById("oldPrice").textContent = product.oldPrice ? `${formatPrice(product.oldPrice)} VND` : "";
    document.getElementById("category").textContent = product.category || "N/A";

    const sizeContainer = document.getElementById("sizes-container");
    sizeContainer.innerHTML = "";
    (product.sizes || []).forEach((size, i) => {
      const btn = document.createElement("button");
      btn.textContent = size;
      btn.addEventListener("click", () => selectSize(size, btn));
      sizeContainer.appendChild(btn);
      if (i === 0) selectSize(size, btn);
    });

    const colorContainer = document.getElementById("colors-container");
    colorContainer.innerHTML = "";
    (product.colors || []).forEach((color, i) => {
      const btn = document.createElement("button");
      btn.textContent = color;
      btn.addEventListener("click", () => selectColor(color, btn));
      colorContainer.appendChild(btn);
      if (i === 0) selectColor(color, btn);
    });

    const oldP = product.oldPrice || product.price;
    const newP = product.newPrice || product.price;
    const discount = oldP ? Math.round(((oldP - newP) / oldP) * 100) : 0;
    document.getElementById("discount").textContent = discount;

    const mainImg = document.getElementById("mainImage");
    const thumbnails = document.querySelectorAll(".thumbnail");
    (product.images || []).forEach((img, i) => {
      if (thumbnails[i]) {
        thumbnails[i].src = img || "/img/placeholder.jpg";
        thumbnails[i].style.display = "block";
        thumbnails[i].alt = `Hình ảnh sản phẩm ${i + 1}`;
      }
    });
    mainImg.src = product.images[0] || "/img/placeholder.jpg";
    updateActiveThumbnail(0);

    document.getElementById("description-content").textContent = product.description || "Chưa có mô tả.";
    document.getElementById("warranty-content").textContent = product.warrantyInfo || "Bảo hành 12 tháng.";
    document.getElementById("shipping-content").textContent = product.shippingInfo || "Giao hàng 3-5 ngày.";

    const ratingStars = document.getElementById("ratingStars");
    const ratingScore = document.getElementById("ratingScore");
    const ratingCount = document.getElementById("ratingCount");
    const rating = product.rating || 4.5;
    const totalReviews = product.totalReviews || 123;

    ratingStars.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("span");
      star.className = "star";
      if (i <= Math.floor(rating)) {
        star.classList.add("filled");
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        star.classList.add("half-filled");
      }
      star.innerHTML = "★";
      ratingStars.appendChild(star);
    }
    ratingScore.textContent = `(${rating}/5)`;
    ratingCount.textContent = `(${totalReviews} đánh giá)`;

    const quantityInput = document.getElementById("quantity");
    quantityInput.value = quantity;
    quantityInput.addEventListener("input", e => {
      let val = parseInt(e.target.value) || 1;
      if (val < 1) val = 1;
      e.target.value = val;
      quantity = val;
    });

    displayRelatedProducts(product.category, productId);
  }

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

  document.querySelector(".add-to-cart-btn1")?.addEventListener("click", () => {
    if (!selectedSize) return alert("Vui lòng chọn kích thước!");
    if (!selectedColor) return alert("Vui lòng chọn màu sắc!");

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const product = products.find(p => p.name === productId);

    if (!product) return alert("Sản phẩm không tồn tại!");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItem = { ...product, quantity, selectedSize, selectedColor };
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();

    const successPopup = document.createElement("div");
    successPopup.className = "success-popup";
    successPopup.innerHTML = `<span class="checkmark">✓</span><span>Đã thêm vào giỏ hàng!</span>`;
    document.body.appendChild(successPopup);
    setTimeout(() => successPopup.remove(), 2000);
  });

  document.querySelector(".buy-now-btn")?.addEventListener("click", () => {
    if (!selectedSize) return alert("Vui lòng chọn kích thước!");
    if (!selectedColor) return alert("Vui lòng chọn màu sắc!");

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const product = products.find(p => p.name === productId);

    if (!product) return alert("Sản phẩm không tồn tại!");

    // Clear the existing cart
    localStorage.removeItem("cart");

    // Add the selected product to the cart
    const cartItem = {
      ...product,
      quantity: quantity,
      selectedSize: selectedSize,
      selectedColor: selectedColor
    };
    const cart = [cartItem];
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();

    // Redirect to dathang.html
    window.location.href = "dathang.html";
  });

  document.querySelectorAll(".thumbnail").forEach((thumb, i) => {
    thumb.addEventListener("click", () => changeImage(thumb, i));
  });

  document.querySelector(".prev-btn")?.addEventListener("click", () => {
    const thumbnails = document.querySelectorAll(".thumbnail");
    currentIndex = currentIndex > 0 ? currentIndex - 1 : thumbnails.length - 1;
    document.getElementById("mainImage").src = thumbnails[currentIndex].src;
    updateActiveThumbnail(currentIndex);
    scrollToThumbnail(currentIndex);
  });

  document.querySelector(".next-btn")?.addEventListener("click", () => {
    const thumbnails = document.querySelectorAll(".thumbnail");
    currentIndex = currentIndex < thumbnails.length - 1 ? currentIndex + 1 : 0;
    document.getElementById("mainImage").src = thumbnails[currentIndex].src;
    updateActiveThumbnail(currentIndex);
    scrollToThumbnail(currentIndex);
  });

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
    zoomImage.src = document.getElementById("mainImage").src;
    zoomImage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
    zoomModal.style.display = "flex";
  });

  zoomModal.querySelector(".close-zoom").addEventListener("click", () => {
    zoomModal.style.display = "none";
    scale = 1;
    translateX = 0;
    translateY = 0;
  });

  zoomModal.addEventListener("wheel", e => {
    e.preventDefault();
    const zoomImage = zoomModal.querySelector(".zoom-image");
    const rect = zoomImage.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const zoomStep = 0.2;
    scale += e.deltaY < 0 ? zoomStep : -zoomStep;
    scale = Math.max(1, Math.min(4, scale));

    const newWidth = rect.width * scale;
    const newHeight = rect.height * scale;
    translateX = ((mouseX / rect.width) * (rect.width - newWidth)) - translateX;
    translateY = ((mouseY / rect.height) * (rect.height - newHeight)) - translateY;

    const maxTranslateX = (newWidth - rect.width) / 2;
    const maxTranslateY = (newHeight - rect.height) / 2;
    translateX = Math.max(-maxTranslateX, Math.min(maxTranslateX, translateX));
    translateY = Math.max(-maxTranslateY, Math.min(maxTranslateY, translateY));

    zoomImage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
  });

  zoomModal.querySelector(".zoom-image").addEventListener("mousedown", e => {
    if (e.button === 0) {
      e.preventDefault();
      isDragging = true;
      previousX = e.clientX;
      previousY = e.clientY;
      zoomModal.classList.add("grabbing");
    }
  });

  document.addEventListener("mousemove", e => {
    if (isDragging) {
      const zoomImage = zoomModal.querySelector(".zoom-image");
      const dx = e.clientX - previousX;
      const dy = e.clientY - previousY;
      translateX += dx;
      translateY += dy;

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
      zoomModal.classList.remove("grabbing");
    }
  });

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

  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  if (searchForm && searchInput && searchResults) {
    searchForm.addEventListener("submit", e => {
      e.preventDefault();
      searchProducts(searchInput.value.trim());
    });

    searchInput.addEventListener("input", e => {
      searchProducts(e.target.value.trim());
    });

    document.addEventListener("click", e => {
      if (!searchForm.contains(e.target)) {
        searchResults.classList.remove("active");
      }
    });
  }

  function searchProducts(query) {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    searchResults.innerHTML = "";

    if (!query) {
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
      div.textContent = "Không tìm thấy sản phẩm";
      div.style.textAlign = "center";
      div.style.color = "#777";
      searchResults.appendChild(div);
      searchResults.classList.add("active");
    }
  }

  // Xử lý thay đổi kích thước màn hình
  window.addEventListener("resize", () => {
    updateProductSlider();
  });

  displayProductDetail();
  updateCartCount();
  displayUserName();
});