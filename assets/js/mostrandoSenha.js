const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');

togglePassword.addEventListener('click', () => {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        togglePassword.classList.remove('bi-eye-slash-fill'); 
        togglePassword.classList.add('bi-eye-fill');
        
       
    } else {
        passwordField.type === 'text';
        passwordField.type = 'password';  
        togglePassword.classList.remove('bi-eye-fill');
        togglePassword.classList.add('bi-eye-slash-fill'); 
            
    }
});
