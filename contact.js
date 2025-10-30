/**
 * CONTACT PAGE - JavaScript
 * Handles form validation and submission
 */

// Create particles
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        container.appendChild(particle);
    }
}

// Form validation
function validateForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Reset errors
        nameError.textContent = '';
        emailError.textContent = '';
        subjectError.textContent = '';
        messageError.textContent = '';
        
        let isValid = true;
        
        // Validate name
        if (name.value.trim().length < 2) {
            nameError.textContent = 'Name must be at least 2 characters';
            isValid = false;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            emailError.textContent = 'Please enter a valid email address';
            isValid = false;
        }
        
        // Validate subject
        if (subject.value.trim().length < 3) {
            subjectError.textContent = 'Subject must be at least 3 characters';
            isValid = false;
        }
        
        // Validate message
        if (message.value.trim().length < 10) {
            messageError.textContent = 'Message must be at least 10 characters';
            isValid = false;
        }
        
        if (isValid) {
            // Show success message
            showSuccessMessage();
            
            // Reset form
            form.reset();
            
            // Play success sound
            playSuccessSound();
        } else {
            playErrorSound();
        }
    });
    
    // Real-time validation
    name.addEventListener('blur', () => {
        if (name.value.trim().length < 2 && name.value.length > 0) {
            nameError.textContent = 'Name must be at least 2 characters';
        } else {
            nameError.textContent = '';
        }
    });
    
    email.addEventListener('blur', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value) && email.value.length > 0) {
            emailError.textContent = 'Please enter a valid email address';
        } else {
            emailError.textContent = '';
        }
    });
}

// Show success message
function showSuccessMessage() {
    const form = document.querySelector('.contact-form');
    const successMessage = document.getElementById('successMessage');
    
    if (!form || !successMessage) return;
    
    form.style.display = 'none';
    successMessage.classList.add('active');
    
    // Hide success message after 5 seconds and show form again
    setTimeout(() => {
        successMessage.classList.remove('active');
        form.style.display = 'block';
    }, 5000);
}

// Sound effects
function playSuccessSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Play ascending tones
        [523.25, 659.25, 783.99].forEach((freq, index) => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = freq;
            oscillator.type = 'sine';
            
            const startTime = audioContext.currentTime + (index * 0.1);
            gainNode.gain.setValueAtTime(0.2, startTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.3);
            
            oscillator.start(startTime);
            oscillator.stop(startTime + 0.3);
        });
    } catch (e) {
        // Sound not supported
    }
}

function playErrorSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 200;
        oscillator.type = 'sawtooth';
        
        gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
    } catch (e) {
        // Sound not supported
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    validateForm();
    initMainNavigation();
    initAmbientSound();
});
