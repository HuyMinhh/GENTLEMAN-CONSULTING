// document.addEventListener('DOMContentLoaded', () => {
//     const accountBtn = document.getElementById('account-btn');
//     const registerModal = document.getElementById('registerModal');
//     const modalContent = document.querySelector('.modal-content');
//     const registerForm = document.querySelector('.register-container form');
//     const emailInput = document.getElementById('register-email');
//     const passwordInput = document.getElementById('register-password');
//     const confirmPasswordInput = document.getElementById('confirm-password');
//     const showPasswordCheckbox = document.getElementById('showRegisterPassword');

//     if (!registerForm || !emailInput || !passwordInput || !confirmPasswordInput || !showPasswordCheckbox) {
//         console.error('One or more registration form elements not found!', {
//             registerForm, emailInput, passwordInput, confirmPasswordInput, showPasswordCheckbox
//         });
//         return;
//     }

//     // Show/Hide Password with debugging
//     showPasswordCheckbox.addEventListener('change', function() {
//         console.log('Checkbox changed, checked:', this.checked);
//         const type = this.checked ? 'text' : 'password';
//         passwordInput.type = type;
//         confirmPasswordInput.type = type;
//         console.log('Password input type set to:', passwordInput.type, 'Confirm input type set to:', confirmPasswordInput.type);

//         // Apply consistent styling
//         [passwordInput, confirmPasswordInput].forEach(input => {
//             input.style.width = '100%';
//             input.style.padding = '10px';
//             input.style.border = '1px solid #ccc';
//             input.style.borderRadius = '4px';
//             // Force re-render by toggling a dummy attribute
//             input.setAttribute('data-render', Date.now());
//         });
//     });

//     // Form Submission
//     registerForm.addEventListener('submit', function(e) {
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

//         // Validate confirm password
//         const confirmPasswordValue = confirmPasswordInput.value.trim();
//         if (!confirmPasswordValue) {
//             alert('Vui lòng xác nhận mật khẩu!');
//             isValid = false;
//         } else if (confirmPasswordValue !== passwordValue) {
//             alert('Mật khẩu và xác nhận mật khẩu không khớp!');
//             isValid = false;
//         }

//         if (isValid) {
//             const registeredAccounts = [
//                 { email: 'user@example.com', password: 'password123' },
//                 { email: '1234567890', password: 'pass123' }
//             ];
//             const existingAccount = registeredAccounts.find(acc => acc.email === emailValue);

//             if (existingAccount) {
//                 alert('Email đã được đăng ký!');
//             } else {
//                 registeredAccounts.push({ email: emailValue, password: passwordValue });
//                 alert('Đăng ký thành công! Vui lòng đăng nhập.');
//                 registerForm.reset();
//                 if (registerModal) registerModal.style.display = 'none';
//                 setTimeout(() => {
//                     window.location.href = 'login.html';
//                 }, 1000);
//             }
//         }
//     });

//     // Modal Handling
//     if (accountBtn && registerModal && modalContent) {
//         accountBtn.addEventListener('click', function(e) {
//             e.preventDefault();
//             const rect = accountBtn.getBoundingClientRect();
//             registerModal.style.display = 'block';
//             modalContent.style.position = 'absolute';
//             modalContent.style.top = (rect.height + 21) + 'px';
//             modalContent.style.left = '22px';
//             modalContent.style.transform = 'translateX(-50%)';
//             modalContent.style.width = '180px';
//             modalContent.style.minHeight = '40px';
//             accountBtn.appendChild(modalContent);
//         });

//         window.addEventListener('click', function(e) {
//             if (!accountBtn.contains(e.target) && !registerModal.contains(e.target)) {
//                 registerModal.style.display = 'none';
//                 if (modalContent.parentElement === accountBtn) {
//                     registerModal.appendChild(modalContent);
//                 }
//             }
//         });

//         window.addEventListener('resize', function() {
//             if (registerModal.style.display === 'block') {
//                 const rect = accountBtn.getBoundingClientRect();
//                 modalContent.style.top = (rect.height + 21) + 'px';
//                 modalContent.style.left = '22px';
//                 modalContent.style.transform = 'translateX(-50%)';
//                 modalContent.style.width = '180px';
//                 modalContent.style.minHeight = '40px';
//             }
//         });
//     } else if (!accountBtn || !registerModal || !modalContent) {
//         console.error('Modal elements not fully found!');
//     }
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const accountBtn = document.getElementById('account-btn');
//     const registerModal = document.getElementById('registerModal');
//     const modalContent = document.querySelector('.modal-content');
//     const registerForm = document.querySelector('.register-container form');
//     const emailInput = document.getElementById('register-email');
//     const passwordInput = document.getElementById('register-password');
//     const confirmPasswordInput = document.getElementById('confirm-password');
//     const showPasswordCheckbox = document.getElementById('showRegisterPassword');

//     if (!registerForm || !emailInput || !passwordInput || !confirmPasswordInput || !showPasswordCheckbox) {
//         console.error('One or more registration form elements not found!');
//         return;
//     }

//     // Show/Hide Password
//     showPasswordCheckbox.addEventListener('change', function() {
//         const type = this.checked ? 'text' : 'password';
//         passwordInput.type = type;
//         confirmPasswordInput.type = type;
//         [passwordInput, confirmPasswordInput].forEach(input => {
//             input.style.width = '100%';
//             input.style.padding = '10px';
//             input.style.border = '1px solid #ccc';
//             input.style.borderRadius = '4px';
//         });
//     });

//     // Form Submission
//     registerForm.addEventListener('submit', function(e) {
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

//         // Validate confirm password
//         const confirmPasswordValue = confirmPasswordInput.value.trim();
//         if (!confirmPasswordValue) {
//             alert('Vui lòng xác nhận mật khẩu!');
//             isValid = false;
//         } else if (confirmPasswordValue !== passwordValue) {
//             alert('Mật khẩu và xác nhận mật khẩu không khớp!');
//             isValid = false;
//         }

//         if (isValid) {
//             // Get existing accounts from localStorage or initialize empty array
//             let registeredAccounts = JSON.parse(localStorage.getItem('registeredAccounts')) || [];

//             // Check if email already exists
//             const existingAccount = registeredAccounts.find(acc => acc.email === emailValue);

//             if (existingAccount) {
//                 alert('Email đã được đăng ký!');
//             } else {
//                 // Add new account
//                 registeredAccounts.push({ email: emailValue, password: passwordValue });
//                 // Save back to localStorage
//                 localStorage.setItem('registeredAccounts', JSON.stringify(registeredAccounts));
//                 alert('Đăng ký thành công! Vui lòng đăng nhập.');
//                 registerForm.reset();
//                 if (registerModal) registerModal.style.display = 'none';
//                 setTimeout(() => {
//                     window.location.href = 'login.html';
//                 }, 1000);
//             }
//         }
//     });

//     // Modal Handling
//     if (accountBtn && registerModal && modalContent) {
//         accountBtn.addEventListener('click', function(e) {
//             e.preventDefault();
//             const rect = accountBtn.getBoundingClientRect();
//             registerModal.style.display = 'block';
//             modalContent.style.position = 'absolute';
//             modalContent.style.top = (rect.height + 21) + 'px';
//             modalContent.style.left = '22px';
//             modalContent.style.transform = 'translateX(-50%)';
//             modalContent.style.width = '180px';
//             modalContent.style.minHeight = '40px';
//             accountBtn.appendChild(modalContent);
//         });

//         window.addEventListener('click', function(e) {
//             if (!accountBtn.contains(e.target) && !registerModal.contains(e.target)) {
//                 registerModal.style.display = 'none';
//                 if (modalContent.parentElement === accountBtn) {
//                     registerModal.appendChild(modalContent);
//                 }
//             }
//         });

//         window.addEventListener('resize', function() {
//             if (registerModal.style.display === 'block') {
//                 const rect = accountBtn.getBoundingClientRect();
//                 modalContent.style.top = (rect.height + 21) + 'px';
//                 modalContent.style.left = '22px';
//                 modalContent.style.transform = 'translateX(-50%)';
//                 modalContent.style.width = '180px';
//                 modalContent.style.minHeight = '40px';
//             }
//         });
//     } else if (!accountBtn || !registerModal || !modalContent) {
//         console.error('Modal elements not fully found!');
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    const accountBtn = document.getElementById('account-btn');
    const registerModal = document.getElementById('registerModal');
    const modalContent = document.querySelector('.modal-content');
    const registerForm = document.querySelector('.register-container form');
    const firstnameInput = document.getElementById('register-firstname');
    const lastnameInput = document.getElementById('register-lastname');
    const emailInput = document.getElementById('register-email');
    const passwordInput = document.getElementById('register-password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const showPasswordCheckbox = document.getElementById('showRegisterPassword');

    if (!registerForm || !firstnameInput || !lastnameInput || !emailInput || !passwordInput || !confirmPasswordInput || !showPasswordCheckbox) {
        console.error('One or more registration form elements not found!');
        return;
    }

    // Show/Hide Password
    showPasswordCheckbox.addEventListener('change', function() {
        const type = this.checked ? 'text' : 'password';
        passwordInput.type = type;
        confirmPasswordInput.type = type;
        [passwordInput, confirmPasswordInput].forEach(input => {
            input.style.width = '100%';
            input.style.padding = '10px';
            input.style.border = '1px solid #ccc';
            input.style.borderRadius = '4px';
        });
    });

    // Form Submission
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted');

        let isValid = true;

        // Validate firstname
        const firstnameValue = firstnameInput.value.trim();
        if (!firstnameValue) {
            alert('Vui lòng nhập họ!');
            isValid = false;
        }

        // Validate lastname
        const lastnameValue = lastnameInput.value.trim();
        if (!lastnameValue) {
            alert('Vui lòng nhập tên!');
            isValid = false;
        }

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

        // Validate confirm password
        const confirmPasswordValue = confirmPasswordInput.value.trim();
        if (!confirmPasswordValue) {
            alert('Vui lòng xác nhận mật khẩu!');
            isValid = false;
        } else if (confirmPasswordValue !== passwordValue) {
            alert('Mật khẩu và xác nhận mật khẩu không khớp!');
            isValid = false;
        }

        if (isValid) {
            // Get existing accounts from localStorage or initialize empty array
            let registeredAccounts = JSON.parse(localStorage.getItem('registeredAccounts')) || [];

            // Check if email already exists
            const existingAccount = registeredAccounts.find(acc => acc.email === emailValue);

            if (existingAccount) {
                alert('Email đã được đăng ký!');
            } else {
                // Add new account with firstname and lastname
                registeredAccounts.push({ 
                    firstname: firstnameValue, 
                    lastname: lastnameValue, 
                    email: emailValue, 
                    password: passwordValue 
                });
                // Save back to localStorage
                localStorage.setItem('registeredAccounts', JSON.stringify(registeredAccounts));
                alert('Đăng ký thành công! Vui lòng đăng nhập.');
                registerForm.reset();
                if (registerModal) registerModal.style.display = 'none';
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 1000);
            }
        }
    });

    // Modal Handling
    if (accountBtn && registerModal && modalContent) {
        accountBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const rect = accountBtn.getBoundingClientRect();
            registerModal.style.display = 'block';
            modalContent.style.position = 'absolute';
            modalContent.style.top = (rect.height + 21) + 'px';
            modalContent.style.left = '22px';
            modalContent.style.transform = 'translateX(-50%)';
            modalContent.style.width = '180px';
            modalContent.style.minHeight = '40px';
            accountBtn.appendChild(modalContent);
        });

        window.addEventListener('click', function(e) {
            if (!accountBtn.contains(e.target) && !registerModal.contains(e.target)) {
                registerModal.style.display = 'none';
                if (modalContent.parentElement === accountBtn) {
                    registerModal.appendChild(modalContent);
                }
            }
        });

        window.addEventListener('resize', function() {
            if (registerModal.style.display === 'block') {
                const rect = accountBtn.getBoundingClientRect();
                modalContent.style.top = (rect.height + 21) + 'px';
                modalContent.style.left = '22px';
                modalContent.style.transform = 'translateX(-50%)';
                modalContent.style.width = '180px';
                modalContent.style.minHeight = '40px';
            }
        });
    } else if (!accountBtn || !registerModal || !modalContent) {
        console.error('Modal elements not fully found!');
    }
});