document.addEventListener('DOMContentLoaded', function() {
    // Create particles
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 5 + 1;
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        const delay = Math.random() * 15;
        const duration = 10 + Math.random() * 20;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        particlesContainer.appendChild(particle);
    }

    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');
    const loadingDiv = document.getElementById('loading');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.textContent = type === 'password' ? '👁️' : '🔒';
    });

    // Form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Clear previous messages
        messageDiv.style.display = 'none';
        messageDiv.className = 'message';
        loginForm.classList.remove('shake');
        
        // Show loading
        loadingDiv.style.display = 'block';
        
        // Simulate network delay
        setTimeout(function() {
            loadingDiv.style.display = 'none';
            
            // Validate password
            if (password === 'caryz48') {
                // Success
                messageDiv.textContent = `Login berhasil! Mengarahkan...`;
                messageDiv.className = 'message success';
                messageDiv.style.display = 'block';
                
                // Redirect after 2 seconds
                setTimeout(function() {
                    window.location.href = 'https://www.example.com'; // Ganti dengan URL tujuan Anda
                }, 2000);
            } else {
                // Error
                messageDiv.textContent = 'Password salah! Gunakan password "caryz48".';
                messageDiv.className = 'message error';
                messageDiv.style.display = 'block';
                loginForm.classList.add('shake');
                
                // Focus on password field
                passwordInput.focus();
            }
        }, 1500);
    });
});