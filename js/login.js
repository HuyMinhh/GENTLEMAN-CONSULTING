

document.addEventListener('DOMContentLoaded', () => {
    const accountBtn = document.getElementById('account-btn');
    const loginModal = document.getElementById('loginModal');
    const modalContent = document.querySelector('.modal-content');
    const loginForm = document.querySelector('.login-container form');
    const emailInput = document.querySelector('.login-container input[type="email"]');
    const passwordInput = document.getElementById('password');
    const showPasswordCheckbox = document.getElementById('showPassword');

    if (!loginForm || !emailInput || !passwordInput || !showPasswordCheckbox) {
        console.error('One or more form elements not found!');
        return;
    }

    // Show/Hide Password
    showPasswordCheckbox.addEventListener('change', function() {
        passwordInput.type = this.checked ? 'text' : 'password';
        passwordInput.style.width = '100%';
        passwordInput.style.padding = '10px';
        passwordInput.style.border = '1px solid #ccc';
        passwordInput.style.borderRadius = '4px';
    });

    // Form Submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted');

        let isValid = true;

        // Validate email
        const emailValue = emailInput.value.trim();
        if (!emailValue) {
            alert('Vui lòng nhập email hoặc số điện thoại!');
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(emailValue) && !/^\d{10}$/.test(emailValue)) {
            alert('Email hoặc số điện thoại không hợp lệ!');
            isValid = false;
        }

        // Validate password
        const passwordValue = passwordInput.value.trim();
        if (!passwordValue) {
            alert('Vui lòng nhập mật khẩu!');
            isValid = false;
        } else if (passwordValue.length < 6) {
            alert('Mật khẩu phải có ít nhất 6 ký tự!');
            isValid = false;
        }

        if (isValid) {
            // Get registered accounts from localStorage
            const registeredAccounts = JSON.parse(localStorage.getItem('registeredAccounts')) || [];

            // Check if account exists
            const account = registeredAccounts.find(acc => 
                acc.email === emailValue && acc.password === passwordValue
            );

            if (account) {
    alert('Đăng nhập thành công!');
    // Lưu email vào localStorage để theo dõi người dùng đã đăng nhập
    localStorage.setItem('currentUser', emailValue);
    loginForm.reset();
    if (loginModal) loginModal.style.display = 'none';

    // Điều hướng theo vai trò
    setTimeout(() => {
        if (account.role === 'admin') {
            window.location.href = 'admin.html';
        } else {
            window.location.href = 'index.html';
        }
    }, 500);
}

        }
    });

    // Modal Handling
    if (accountBtn && loginModal && modalContent) {
        accountBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const rect = accountBtn.getBoundingClientRect();
            loginModal.style.display = 'block';
            modalContent.style.position = 'absolute';
            modalContent.style.top = (rect.height + 21) + 'px';
            modalContent.style.left = '22px';
            modalContent.style.transform = 'translateX(-50%)';
            modalContent.style.width = '180px';
            modalContent.style.minHeight = '40px';
            accountBtn.appendChild(modalContent);
        });

        window.addEventListener('click', function(e) {
            if (!accountBtn.contains(e.target) && !loginModal.contains(e.target)) {
                loginModal.style.display = 'none';
                if (modalContent.parentElement === accountBtn) {
                    loginModal.appendChild(modalContent);
                }
            }
        });

        window.addEventListener('resize', function() {
            if (loginModal.style.display === 'block') {
                const rect = accountBtn.getBoundingClientRect();
                modalContent.style.top = (rect.height + 21) + 'px';
                modalContent.style.left = '22px';
                modalContent.style.transform = 'translateX(-50%)';
                modalContent.style.width = '180px';
                modalContent.style.minHeight = '40px';
            }
        });
    } else if (!accountBtn || !loginModal || !modalContent) {
        console.error('Modal elements not fully found!');
    }
});


// ====== TẠO TÀI KHOẢN ADMIN MẶC ĐỊNH ======
document.addEventListener('DOMContentLoaded', () => {
    const existingAccounts = JSON.parse(localStorage.getItem('registeredAccounts')) || [];
    
    const adminEmail = 'admin@shop.com';
    const adminPassword = 'admin123';

    const adminExists = existingAccounts.some(acc => acc.email === adminEmail);

    if (!adminExists) {
        existingAccounts.push({ email: adminEmail, password: adminPassword, role: 'admin' });
        localStorage.setItem('registeredAccounts', JSON.stringify(existingAccounts));
        console.log('✅ Tài khoản   admin đã được tạo:', adminEmail);
    }
});
