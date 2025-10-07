// document.addEventListener("DOMContentLoaded", () => {
//   const accountBtn = document.getElementById("account-btn");
//   const loginModal = document.getElementById("loginModal");
//   const modalContent = document.querySelector(".modal-content");

//   if (accountBtn && loginModal && modalContent) {
//     const registeredAccounts = JSON.parse(localStorage.getItem("registeredAccounts")) || [];
//     const currentUserEmail = localStorage.getItem("currentUser");

//     console.log("Debug - registeredAccounts:", registeredAccounts);
//     console.log("Debug - currentUserEmail:", currentUserEmail);

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
//     console.error("Modal elements not fully found!", {
//       accountBtn,
//       loginModal,
//       modalContent,
//     });
//   }

//   // Quản lý giỏ hàng
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   function updateCartDisplay() {
//     const cartContent = document.getElementById("cart-content");
//     const itemCount = document.getElementById("item-count");
//     const totalPrice = document.getElementById("total-price");

//     if (!cartContent || !itemCount || !totalPrice) return;

//     cartContent.innerHTML = "";
//     let total = 0;
//     let count = 0;

//     cart.forEach((item) => {
//       const itemTotal = (item.newPrice || item.price) * item.quantity;
//       total += itemTotal;
//       count += item.quantity;

//       const div = document.createElement("div");
//       div.classList.add("cart-item");
//       div.innerHTML = `
//             <input type="checkbox" class="item-checkbox" checked>
//             <img src="${(item.images && item.images.length > 0 ? item.images[0] : "/img/placeholder.jpg")}" alt="${item.name}" class="item-image">
//             <div class="item-details">
//                 <h3 class="item-name">${item.name}</h3>
//                 <p class="item-price">${item.newPrice || item.price}đ <span class="original-price">${item.oldPrice ? item.oldPrice + "đ" : ""}</span></p>
//                 <div class="quantity-control">
//                     <button class="quantity-btn">-</button>
//                     <input type="number" value="${item.quantity}" min="1" class="quantity-input">
//                     <button class="quantity-btn">+</button>
//                 </div>
//             </div>
//             <button class="remove-item">Xóa</button>
//         `;
//       cartContent.appendChild(div);

//       // Thêm sự kiện cho nút tăng/giảm số lượng
//       const minusBtn = div.querySelector(".quantity-btn:first-child");
//       const plusBtn = div.querySelector(".quantity-btn:last-child");
//       const quantityInput = div.querySelector(".quantity-input");

//       minusBtn.addEventListener("click", () => {
//         if (quantityInput.value > 1) {
//           quantityInput.value = parseInt(quantityInput.value) - 1;
//           item.quantity = parseInt(quantityInput.value);
//           updateCart();
//         }
//       });

//       plusBtn.addEventListener("click", () => {
//         quantityInput.value = parseInt(quantityInput.value) + 1;
//         item.quantity = parseInt(quantityInput.value);
//         updateCart();
//       });

//       quantityInput.addEventListener("change", () => {
//         item.quantity = parseInt(quantityInput.value);
//         if (item.quantity < 1) item.quantity = 1;
//         quantityInput.value = item.quantity;
//         updateCart();
//       });

//       // Thêm sự kiện xóa item
//       div.querySelector(".remove-item").addEventListener("click", () => {
//         if (confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
//           cart = cart.filter((cartItem) => cartItem !== item);
//           updateCart();
//         }
//       });
//     });

//     itemCount.textContent = count;
//     totalPrice.textContent = total + "đ";
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }

//   function updateCart() {
//     updateCartDisplay();
//   }

//   // Hiển thị chi tiết sản phẩm (nếu là trang chi tiết)
//   let currentIndex = 0;
//   let selectedSize = null;
//   let selectedColor = null;

//   function displayProductDetail() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const productId = urlParams.get("id");
//     if (!productId || !document.querySelector(".product-detail")) return;

//     const products = JSON.parse(localStorage.getItem("products")) || [];
//     const product = products.find((p) => p.name === productId);

//     if (product) {
//       document.getElementById("productName").textContent = product.name;
//       document.getElementById("oldPrice").textContent = product.oldPrice ? `${product.oldPrice} VND` : "";
//       document.getElementById("newPrice").textContent = product.newPrice ? `${product.newPrice} VND` : `${product.price} VND`;
//       document.getElementById("category").textContent = product.category || "N/A";
//       const sizesContainer = document.getElementById("sizes-container");
//       sizesContainer.innerHTML = "";
//       (product.sizes || []).forEach((size, index) => {
//         const button = document.createElement("button");
//         button.textContent = size;
//         button.addEventListener("click", () => selectSize(size, button));
//         sizesContainer.appendChild(button);
//         if (index === 0) selectSize(size, button);
//       });
//       const colorsContainer = document.getElementById("colors-container");
//       colorsContainer.innerHTML = "";
//       (product.colors || []).forEach((color) => {
//         const button = document.createElement("button");
//         button.textContent = color;
//         button.addEventListener("click", () => selectColor(color, button));
//         colorsContainer.appendChild(button);
//       });
//       const oldPrice = product.oldPrice || product.price;
//       const newPrice = product.newPrice || product.price;
//       document.getElementById("discount").textContent = oldPrice ? Math.round(((oldPrice - newPrice) / oldPrice) * 100) : 0;
//       const quantityInput = document.getElementById("quantity");
//       quantityInput.value = 1;
//       quantityInput.addEventListener("input", (e) => {
//         let value = parseInt(e.target.value) || 1;
//         if (value < 1) value = 1;
//         e.target.value = value;
//       });

//       const thumbnails = document.querySelectorAll(".thumbnail");
//       const mainImage = document.getElementById("mainImage");
//       product.images.forEach((img, index) => {
//         if (index < 9 && thumbnails[index]) {
//           thumbnails[index].src = img || "/img/placeholder.jpg";
//           thumbnails[index].style.display = "block";
//         }
//       });
//       mainImage.src = product.images[0] || "/img/placeholder.jpg";

//       // Xử lý nút "Thêm vào giỏ hàng"
//       const addToCartBtn = document.querySelector(".add-to-cart-btn");
//       if (addToCartBtn) {
//         addToCartBtn.addEventListener("click", () => {
//           let selectedSize = null;
//           let selectedColor = null;
//           const sizeButtons = document.querySelectorAll("#sizes-container button.active");
//           const colorButtons = document.querySelectorAll("#colors-container button.active");
//           if (sizeButtons.length > 0) selectedSize = sizeButtons[0].textContent;
//           if (colorButtons.length > 0) selectedColor = colorButtons[0].textContent;

//           if (!selectedSize) {
//             alert("Vui lòng chọn kích thước!");
//             return;
//           }
//           if (!selectedColor) {
//             alert("Vui lòng chọn màu sắc!");
//             return;
//           }

//           const quantity = parseInt(document.getElementById("quantity").value) || 1;
//           const cartItem = {
//             ...product,
//             quantity: quantity,
//             selectedSize: selectedSize,
//             selectedColor: selectedColor
//           };
//           cart.push(cartItem);
//           localStorage.setItem("cart", JSON.stringify(cart));
//           updateCart();
//           alert(`Đã thêm ${quantity} sản phẩm kích thước ${selectedSize} màu ${selectedColor} vào giỏ hàng!`);
//         });
//       }
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

//   // Gọi hàm khi trang load
//   if (document.querySelector(".product-detail")) {
//     displayProductDetail();
//   } else {
//     updateCartDisplay();
//   }

//   // Thêm chức năng cuộn thumbnail
//   const thumbnailGallery = document.querySelector(".thumbnail-gallery");
//   const thumbnails = document.querySelectorAll(".thumbnail");

//   function changeImage(thumbnail, index) {
//     const mainImage = document.getElementById("mainImage");
//     mainImage.src = thumbnail.src;
//     updateActiveThumbnail(index);
//     scrollToThumbnail(index);
//   }

//   function updateActiveThumbnail(index) {
//     thumbnails.forEach((thumb, i) => thumb.classList.toggle("active", i === index));
//   }

//   function scrollToThumbnail(index) {
//     const thumbnailWidth = thumbnails[0].offsetWidth + 25;
//     const scrollPosition = index * thumbnailWidth;
//     thumbnailGallery.scrollTo({ left: scrollPosition, behavior: "smooth" });
//   }

//   thumbnails.forEach((thumbnail, index) => {
//     thumbnail.addEventListener("click", () => changeImage(thumbnail, index));
//   });

//   const prevThumbBtn = document.querySelector(".prev-btn");
//   const nextThumbBtn = document.querySelector(".next-btn");

//   prevThumbBtn?.addEventListener("click", () => {
//     currentIndex = currentIndex > 0 ? currentIndex - 1 : 8;
//     changeImage(thumbnails[currentIndex], currentIndex);
//   });

//   nextThumbBtn?.addEventListener("click", () => {
//     currentIndex = currentIndex < 8 ? currentIndex + 1 : 0;
//     changeImage(thumbnails[currentIndex], currentIndex);
//   });

//   // Xử lý tăng/giảm số lượng
//   const decreaseBtn = document.querySelector(".decrease");
//   const increaseBtn = document.querySelector(".increase");
//   const quantityInput = document.getElementById("quantity");

//   decreaseBtn?.addEventListener("click", () => {
//     let value = parseInt(quantityInput.value) || 1;
//     if (value > 1) {
//       value--;
//       quantityInput.value = value;
//     }
//   });

//   increaseBtn?.addEventListener("click", () => {
//     let value = parseInt(quantityInput.value) || 1;
//     value++;
//     quantityInput.value = value;
//   });

//   // Thêm chức năng cho checkbox "Tích chọn tất cả" và nút "Xóa tất cả"
//   const selectAllCheckbox = document.querySelector(".select-all-checkbox");
//   const removeAllBtn = document.querySelector(".remove-all-btn");

//   selectAllCheckbox.addEventListener("change", () => {
//     const checkboxes = document.querySelectorAll(".item-checkbox");
//     checkboxes.forEach(checkbox => checkbox.checked = selectAllCheckbox.checked);
//   });

//   removeAllBtn.addEventListener("click", () => {
//     if (confirm("Bạn có chắc muốn xóa tất cả sản phẩm không?")) {
//       cart = [];
//       updateCart();
//     }
//   });
// });
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

    if (!cartContent || !itemCount || !totalPrice) return;

    cartContent.innerHTML = "";
    let total = 0;
    let count = 0;

    cart.forEach((item) => {
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
            <button class="remove-item">Xóa</button>
        `;
      cartContent.appendChild(div);

      // Thêm sự kiện cho nút tăng/giảm số lượng
      const minusBtn = div.querySelector(".quantity-btn:first-child");
      const plusBtn = div.querySelector(".quantity-btn:last-child");
      const quantityInput = div.querySelector(".quantity-input");

      minusBtn.addEventListener("click", () => {
        if (quantityInput.value > 1) {
          quantityInput.value = parseInt(quantityInput.value) - 1;
          item.quantity = parseInt(quantityInput.value);
          updateCart();
        }
      });

      plusBtn.addEventListener("click", () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
        item.quantity = parseInt(quantityInput.value);
        updateCart();
      });

      quantityInput.addEventListener("change", () => {
        item.quantity = parseInt(quantityInput.value);
        if (item.quantity < 1) item.quantity = 1;
        quantityInput.value = item.quantity;
        updateCart();
      });

      // Thêm sự kiện xóa item
      div.querySelector(".remove-item").addEventListener("click", () => {
        if (confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
          cart = cart.filter((cartItem) => cartItem !== item);
          updateCart();
        }
      });
    });

    itemCount.textContent = count;
    totalPrice.textContent = total + "đ";
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function updateCart() {
    updateCartDisplay();
  }

  // Hiển thị chi tiết sản phẩm (nếu là trang chi tiết)
  let currentIndex = 0;
  let selectedSize = null;
  let selectedColor = null;

  function displayProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    if (!productId || !document.querySelector(".product-detail")) return;

    const products = JSON.parse(localStorage.getItem("products")) || [];
    const product = products.find((p) => p.name === productId);

    if (product) {
      document.getElementById("productName").textContent = product.name;
      document.getElementById("oldPrice").textContent = product.oldPrice ? `${product.oldPrice} VND` : "";
      document.getElementById("newPrice").textContent = product.newPrice ? `${product.newPrice} VND` : `${product.price} VND`;
      document.getElementById("category").textContent = product.category || "N/A";
      const sizesContainer = document.getElementById("sizes-container");
      sizesContainer.innerHTML = "";
      (product.sizes || []).forEach((size, index) => {
        const button = document.createElement("button");
        button.textContent = size;
        button.addEventListener("click", () => selectSize(size, button));
        sizesContainer.appendChild(button);
        if (index === 0) selectSize(size, button);
      });
      const colorsContainer = document.getElementById("colors-container");
      colorsContainer.innerHTML = "";
      (product.colors || []).forEach((color) => {
        const button = document.createElement("button");
        button.textContent = color;
        button.addEventListener("click", () => selectColor(color, button));
        colorsContainer.appendChild(button);
      });
      const oldPrice = product.oldPrice || product.price;
      const newPrice = product.newPrice || product.price;
      document.getElementById("discount").textContent = oldPrice ? Math.round(((oldPrice - newPrice) / oldPrice) * 100) : 0;
      const quantityInput = document.getElementById("quantity");
      quantityInput.value = 1;
      quantityInput.addEventListener("input", (e) => {
        let value = parseInt(e.target.value) || 1;
        if (value < 1) value = 1;
        e.target.value = value;
      });

      const thumbnails = document.querySelectorAll(".thumbnail");
      const mainImage = document.getElementById("mainImage");
      product.images.forEach((img, index) => {
        if (index < 9 && thumbnails[index]) {
          thumbnails[index].src = img || "/img/placeholder.jpg";
          thumbnails[index].style.display = "block";
        }
      });
      mainImage.src = product.images[0] || "/img/placeholder.jpg";

      // Xử lý nút "Thêm vào giỏ hàng"
      const addToCartBtn = document.querySelector(".add-to-cart-btn");
      if (addToCartBtn) {
        addToCartBtn.addEventListener("click", () => {
          let selectedSize = null;
          let selectedColor = null;
          const sizeButtons = document.querySelectorAll("#sizes-container button.active");
          const colorButtons = document.querySelectorAll("#colors-container button.active");
          if (sizeButtons.length > 0) selectedSize = sizeButtons[0].textContent;
          if (colorButtons.length > 0) selectedColor = colorButtons[0].textContent;

          if (!selectedSize) {
            showToast("Vui lòng chọn kích thước!", "error");
            return;
          }
          if (!selectedColor) {
            showToast("Vui lòng chọn màu sắc!", "error");
            return;
          }

          const quantity = parseInt(document.getElementById("quantity").value) || 1;
          const cartItem = {
            ...product,
            quantity: quantity,
            selectedSize: selectedSize,
            selectedColor: selectedColor
          };
          cart.push(cartItem);
          localStorage.setItem("cart", JSON.stringify(cart));
          updateCart();
          showToast(`Đã thêm ${quantity} sản phẩm kích thước ${selectedSize} màu ${selectedColor} vào giỏ hàng!`, "success");
        });
      }
    }
  }

  function selectSize(size, button) {
    selectedSize = size;
    const buttons = document.querySelectorAll("#sizes-container button");
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  }

  function selectColor(color, button) {
    selectedColor = color;
    const buttons = document.querySelectorAll("#colors-container button");
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  }

  // Gọi hàm khi trang load
  if (document.querySelector(".product-detail")) {
    displayProductDetail();
  } else {
    updateCartDisplay();
  }

  // Thêm chức năng cuộn thumbnail
  const thumbnailGallery = document.querySelector(".thumbnail-gallery");
  const thumbnails = document.querySelectorAll(".thumbnail");

  function changeImage(thumbnail, index) {
    const mainImage = document.getElementById("mainImage");
    mainImage.src = thumbnail.src;
    updateActiveThumbnail(index);
    scrollToThumbnail(index);
  }

  function updateActiveThumbnail(index) {
    thumbnails.forEach((thumb, i) => thumb.classList.toggle("active", i === index));
  }

  function scrollToThumbnail(index) {
    const thumbnailWidth = thumbnails[0].offsetWidth + 25;
    const scrollPosition = index * thumbnailWidth;
    thumbnailGallery.scrollTo({ left: scrollPosition, behavior: "smooth" });
  }

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => changeImage(thumbnail, index));
  });

  const prevThumbBtn = document.querySelector(".prev-btn");
  const nextThumbBtn = document.querySelector(".next-btn");

  prevThumbBtn?.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : 8;
    changeImage(thumbnails[currentIndex], currentIndex);
  });

  nextThumbBtn?.addEventListener("click", () => {
    currentIndex = currentIndex < 8 ? currentIndex + 1 : 0;
    changeImage(thumbnails[currentIndex], currentIndex);
  });

  // Xử lý tăng/giảm số lượng
  const decreaseBtn = document.querySelector(".decrease");
  const increaseBtn = document.querySelector(".increase");
  const quantityInput = document.getElementById("quantity");

  decreaseBtn?.addEventListener("click", () => {
    let value = parseInt(quantityInput.value) || 1;
    if (value > 1) {
      value--;
      quantityInput.value = value;
    }
  });

  increaseBtn?.addEventListener("click", () => {
    let value = parseInt(quantityInput.value) || 1;
    value++;
    quantityInput.value = value;
  });

  // Thêm chức năng cho checkbox "Tích chọn tất cả" và nút "Xóa tất cả"
  const selectAllCheckbox = document.querySelector(".select-all-checkbox");
  const removeAllBtn = document.querySelector(".remove-all-btn");

  selectAllCheckbox.addEventListener("change", () => {
    const checkboxes = document.querySelectorAll(".item-checkbox");
    checkboxes.forEach(checkbox => checkbox.checked = selectAllCheckbox.checked);
  });

  removeAllBtn.addEventListener("click", () => {
    if (confirm("Bạn có chắc muốn xóa tất cả sản phẩm không?")) {
      cart = [];
      updateCart();
      showToast("Đã xóa tất cả sản phẩm khỏi giỏ hàng!", "success");
    }
  });

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

      // Xóa toast sau khi animation kết thúc
      setTimeout(() => {
        toast.remove();
        if (toastContainer.children.length === 0) toastContainer.remove();
      }, 4500); // 4s hiển thị + 0.5s fade out
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
        <img src="${product.images && product.images.length > 0 ? product.images[0] : '/img/placeholder.jpg'}" alt="${product.name}">
        <h4>${product.name}</h4>
      `;
      div.addEventListener("click", () => {
        window.location.href = `/html/chitiet.html?id=${encodeURIComponent(product.name)}`;
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