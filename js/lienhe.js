// Kiểm tra và cập nhật trạng thái tài khoản
document.addEventListener("DOMContentLoaded", () => {
  const accountBtn = document.getElementById("account-btn");
  const loginModal = document.getElementById("loginModal");
  const modalContent = document.querySelector(".modal-content");

  if (accountBtn && loginModal && modalContent) {
    // Lấy danh sách tài khoản từ localStorage
    const registeredAccounts = JSON.parse(localStorage.getItem("registeredAccounts")) || [];
    const currentUserEmail = localStorage.getItem("currentUser");

    console.log("Debug - registeredAccounts:", registeredAccounts);
    console.log("Debug - currentUserEmail:", currentUserEmail);

    // Cập nhật nội dung của accountBtn dựa trên trạng thái đăng nhập
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

    // Xử lý sự kiện click trên accountBtn
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

    // Xử lý form liên hệ
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Hiển thị thông báo thành công mà không gửi email
        alert('Thông báo: Đã gửi thành công!');
        contactForm.reset();
      });
    }
  } else {
    console.error("Modal elements not fully found!", {
      accountBtn,
      loginModal,
      modalContent,
    });
  }
});