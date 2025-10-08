// // const accountBtn = document.getElementById('account-btn');
// //     const loginModal = document.getElementById('loginModal');
// //     const modalContent = document.querySelector('.modal-content');

// //     if (accountBtn && loginModal && modalContent) {
// //         accountBtn.addEventListener('click', function(e) {
// //             e.preventDefault();
// //             const rect = accountBtn.getBoundingClientRect();
// //             loginModal.style.display = 'block';
// //             // Đặt modal-content ngay dưới accountBtn và căn chỉnh hợp lý
// //             modalContent.style.position = 'absolute';
// //             modalContent.style.top = (rect.height + 21) + 'px'; // Thêm 21px để đạt khoảng 51.4444px (dựa trên chiều cao icon ~30px)
// //             modalContent.style.left = '22px'; // Đặt left cố định theo yêu cầu
// //             modalContent.style.transform = 'translateX(-50%)'; // Vẫn căn giữa nhưng dựa trên left 22px
// //             modalContent.style.width = '180px'; // Chiều rộng cố định
// //             modalContent.style.minHeight = '40px'; // Đảm bảo chiều cao đủ cho button
// //             // Đặt modal-content bên trong accountBtn
// //             accountBtn.appendChild(modalContent);
// //         });

// //         window.addEventListener('click', function(e) {
// //             if (!accountBtn.contains(e.target) && !loginModal.contains(e.target)) {
// //                 loginModal.style.display = 'none';
// //                 // Di chuyển modal-content trở lại modal khi đóng
// //                 if (modalContent.parentElement === accountBtn) {
// //                     loginModal.appendChild(modalContent);
// //                 }
// //             }
// //         });

// //         window.addEventListener('resize', function() {
// //             if (loginModal.style.display === 'block') {
// //                 const rect = accountBtn.getBoundingClientRect();
// //                 modalContent.style.top = (rect.height + 21) + 'px';
// //                 modalContent.style.left = '22px';
// //                 modalContent.style.transform = 'translateX(-50%)';
// //                 modalContent.style.width = '180px';
// //                 modalContent.style.minHeight = '40px';
// //             }
// //         });
// //     }


// //     document.getElementById('showPassword').addEventListener('change', function() {
// //             const passwordField = document.getElementById('password');
// //             if (this.checked) {
// //                 passwordField.type = 'text';
// //             } else {
// //                 passwordField.type = 'password';
// //             }
// //         });

// document.addEventListener('DOMContentLoaded', () => {
//     const accountBtn = document.getElementById('account-btn');
//     const loginModal = document.getElementById('loginModal');
//     const modalContent = document.querySelector('.modal-content');
//     const loginForm = document.querySelector('.login-container form');
//     const emailInput = document.querySelector('.login-container input[type="email"]');
//     const passwordInput = document.getElementById('password');
//     const showPasswordCheckbox = document.getElementById('showPassword');

//     // Check if required elements exist
//     if (!loginForm) console.error('Login form not found!');
//     if (!emailInput) console.error('Email input not found!');
//     if (!passwordInput) console.error('Password input not found!');
//     if (!showPasswordCheckbox) console.error('Show password checkbox not found!');
//     if (!loginForm || !emailInput || !passwordInput || !showPasswordCheckbox) return;

//     // Show/Hide Password
//     showPasswordCheckbox.addEventListener('change', function() {
//         passwordInput.type = this.checked ? 'text' : 'password';
//         passwordInput.style.width = '100%';
//         passwordInput.style.padding = '10px';
//         passwordInput.style.border = '1px solid #ccc';
//         passwordInput.style.borderRadius = '4px';
//     });

//     // Form Submission
//     loginForm.addEventListener('submit', function(e) {
//         e.preventDefault();
//         console.log('Form submitted');

//         let isValid = true;

//         // Validate email
//         const emailValue = emailInput.value.trim();
//         if (!emailValue) {
//             alert('Vui lòng nhập email hoặc số điện thoại!');
//             isValid = false;
//         } else if (!/^\S+@\S+\.\S+$/.test(emailValue) && !/^\d{10}$/.test(emailValue)) {
//             alert('Email hoặc số điện thoại không hợp lệ!');
//             isValid = false;
//         }

//         // Validate password
//         const passwordValue = passwordInput.value.trim();
//         if (!passwordValue) {
//             alert('Vui lòng nhập mật khẩu!');
//             isValid = false;
//         } else if (passwordValue.length < 6) {
//             alert('Mật khẩu phải có ít nhất 6 ký tự!');
//             isValid = false;
//         }

//         if (isValid) {
//             // Simulate account check
//             const registeredAccounts = [
//                 { email: 'user@example.com', password: 'password123' },
//                 { email: '1234567890', password: 'pass123' }
//             ];
//             const account = registeredAccounts.find(acc => 
//                 (acc.email === emailValue || emailValue === '1234567890') && acc.password === passwordValue
//             );

//             if (account) {
//                 alert('Đăng nhập thành công!');
//                 loginForm.reset();
//                 if (loginModal) loginModal.style.display = 'none';
//             } else {
//                 alert('Tài khoản không tồn tại!');
//             }
//         }
//     });

//     // Modal Handling (only if all modal elements exist)
//     if (accountBtn && loginModal && modalContent) {
//         accountBtn.addEventListener('click', function(e) {
//             e.preventDefault();
//             const rect = accountBtn.getBoundingClientRect();
//             loginModal.style.display = 'block';
//             modalContent.style.position = 'absolute';
//             modalContent.style.top = (rect.height + 21) + 'px';
//             modalContent.style.left = '22px';
//             modalContent.style.transform = 'translateX(-50%)';
//             modalContent.style.width = '180px';
//             modalContent.style.minHeight = '40px';
//             accountBtn.appendChild(modalContent);
//         });

//         window.addEventListener('click', function(e) {
//             if (!accountBtn.contains(e.target) && !loginModal.contains(e.target)) {
//                 loginModal.style.display = 'none';
//                 if (modalContent.parentElement === accountBtn) {
//                     loginModal.appendChild(modalContent);
//                 }
//             }
//         });

//         window.addEventListener('resize', function() {
//             if (loginModal.style.display === 'block') {
//                 const rect = accountBtn.getBoundingClientRect();
//                 modalContent.style.top = (rect.height + 21) + 'px';
//                 modalContent.style.left = '22px';
//                 modalContent.style.transform = 'translateX(-50%)';
//                 modalContent.style.width = '180px';
//                 modalContent.style.minHeight = '40px';
//             }
//         });
//     } else if (!accountBtn || !loginModal || !modalContent) {
//         console.error('Modal elements not fully found!');
//     }
// });


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

// document.addEventListener('DOMContentLoaded', () => {
//     const accountBtn = document.getElementById('account-btn');
//     const loginModal = document.getElementById('loginModal');
//     const modalContent = document.querySelector('.modal-content');
//     const loginForm = document.querySelector('.login-container form');
//     const emailInput = document.querySelector('.login-container input[type="email"]');
//     const passwordInput = document.getElementById('password');
//     const showPasswordCheckbox = document.getElementById('showPassword');

//     if (!loginForm || !emailInput || !passwordInput || !showPasswordCheckbox) {
//         console.error('One or more form elements not found!');
//         return;
//     }

//     // Show/Hide Password
//     showPasswordCheckbox.addEventListener('change', function() {
//         passwordInput.type = this.checked ? 'text' : 'password';
//         passwordInput.style.width = '100%';
//         passwordInput.style.padding = '10px';
//         passwordInput.style.border = '1px solid #ccc';
//         passwordInput.style.borderRadius = '4px';
//     });

//     // Form Submission
//     loginForm.addEventListener('submit', function(e) {
//         e.preventDefault();
//         console.log('Form submitted');

//         let isValid = true;

//         // Validate email
//         const emailValue = emailInput.value.trim();
//         if (!emailValue) {
//             alert('Vui lòng nhập email hoặc số điện thoại!');
//             isValid = false;
//         } else if (!/^\S+@\S+\.\S+$/.test(emailValue) && !/^\d{10}$/.test(emailValue)) {
//             alert('Email hoặc số điện thoại không hợp lệ!');
//             isValid = false;
//         }

//         // Validate password
//         const passwordValue = passwordInput.value.trim();
//         if (!passwordValue) {
//             alert('Vui lòng nhập mật khẩu!');
//             isValid = false;
//         } else if (passwordValue.length < 6) {
//             alert('Mật khẩu phải có ít nhất 6 ký tự!');
//             isValid = false;
//         }

//         if (isValid) {
//             // Get registered accounts from localStorage
//             const registeredAccounts = JSON.parse(localStorage.getItem('registeredAccounts')) || [];

//             // Check if account exists
//             const account = registeredAccounts.find(acc => 
//                 acc.email === emailValue && acc.password === passwordValue
//             );

//             if (account) {
//                 alert('Đăng nhập thành công!');
//                 // Lưu email vào localStorage để theo dõi người dùng đã đăng nhập
//                 localStorage.setItem('currentUser', emailValue);
//                 loginForm.reset();
//                 if (loginModal) loginModal.style.display = 'none';
//                 // Điều hướng về index.html
//                 setTimeout(() => {
//                     window.location.href = 'index.html';
//                 }, 500);
//             } else {
//                 alert('Tài khoản không tồn tại!');
//             }
//         }
//     });

//     // Modal Handling
//     if (accountBtn && loginModal && modalContent) {
//         accountBtn.addEventListener('click', function(e) {
//             e.preventDefault();
//             const rect = accountBtn.getBoundingClientRect();
//             loginModal.style.display = 'block';
//             modalContent.style.position = 'absolute';
//             modalContent.style.top = (rect.height + 21) + 'px';
//             modalContent.style.left = '22px';
//             modalContent.style.transform = 'translateX(-50%)';
//             modalContent.style.width = '180px';
//             modalContent.style.minHeight = '40px';
//             accountBtn.appendChild(modalContent);
//         });

//         window.addEventListener('click', function(e) {
//             if (!accountBtn.contains(e.target) && !loginModal.contains(e.target)) {
//                 loginModal.style.display = 'none';
//                 if (modalContent.parentElement === accountBtn) {
//                     loginModal.appendChild(modalContent);
//                 }
//             }
//         });

//         window.addEventListener('resize', function() {
//             if (loginModal.style.display === 'block') {
//                 const rect = accountBtn.getBoundingClientRect();
//                 modalContent.style.top = (rect.height + 21) + 'px';
//                 modalContent.style.left = '22px';
//                 modalContent.style.transform = 'translateX(-50%)';
//                 modalContent.style.width = '180px';
//                 modalContent.style.minHeight = '40px';
//             }
//         });
//     } else if (!accountBtn || !loginModal || !modalContent) {
//         console.error('Modal elements not fully found!');
//     }
// });
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
