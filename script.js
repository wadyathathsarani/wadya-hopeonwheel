// Scroll to Top Functionality
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Toast Notification
function showToast(message, type = 'success', duration = 3000) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = toast ${type};
    toast.style.display = 'block';

    setTimeout(() => {
        toast.style.display = 'none';
    }, duration);
}

// Booking Form Handler
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const patientName = document.getElementById('patientName').value.trim();
    const patientPhone = document.getElementById('patientPhone').value.trim();
    const pickupAddress = document.getElementById('pickupAddress').value.trim();
    const hospital = document.getElementById('hospital').value;
    const emergencyType = document.getElementById('emergencyType').value;

    // Validation
    if (!patientName) {
        showToast('Please enter patient name', 'error');
        return false;
    }

    if (!patientPhone || patientPhone.length !== 10) {
        showToast('Please enter a valid 10-digit phone number', 'error');
        return false;
    }

    if (!pickupAddress) {
        showToast('Please enter pickup address', 'error');
        return false;
    }

    if (!hospital) {
        showToast('Please select a destination hospital', 'error');
        return false;
    }

    if (!emergencyType) {
        showToast('Please select emergency type', 'error');
        return false;
    }

    // Show loading state
    const submitBtn = document.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Processing...';
    submitBtn.disabled = true;

    // Simulate form submission
    setTimeout(() => {
        showToast('✓ Ambulance request received! Our team is on the way.', 'success', 5000);
        document.getElementById('bookingForm').reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

        // Scroll to top
        scrollToTop();
    }, 2000);

    // For production, uncomment this to actually submit the form:
    // this.submit();
});

// Open Booking Modal
function openBookingModal() {
    document.querySelector('#booking').scrollIntoView({
        behavior: 'smooth'
    });

    // Focus on first input
    setTimeout(() => {
        document.getElementById('patientName').focus();
    }, 500);
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Form Input Effects
const inputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');

inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.animation = 'slideInFromLeft 0.3s ease-out';
    });

    input.addEventListener('blur', function() {
        if (this.value.trim() !== '') {
            this.style.borderColor = '#28a745';
        }
    });
});

// Animate Elements on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = entry.target.getAttribute('data-animation') || 'fadeIn 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .feature-item, .testimonial-card').forEach(el => {
    observer.observe(el);
});

// Active Navigation Link
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === #${current}) {
            link.style.color = 'var(--primary-color)';
        } else {
            link.style.color = 'var(--dark-text)';
        }
    });
});

// Phone Number Formatting
document.getElementById('patientPhone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 10) {
        value = value.slice(0, 10);
    }
    e.target.value = value;
});

// Page Load Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    console.log('Hope On Wheel Emergency Ambulance Service - Ready to help!');
});

// Keyboard Shortcut - Press '/' to focus on booking form
document.addEventListener('keydown', (e) => {
    if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        document.getElementById('patientName').focus();
        showToast('Focus on patient name field', 'warning', 2000);
    }
});

// Animate Counter for Stats
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 16);
}

// Initialize counters when stats section is visible
const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    const observer2 = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            document.querySelectorAll('.stat-number').forEach(el => {
                const text = el.textContent;
                const number = parseInt(text.replace(/[^\d]/g, ''));
                animateCounter(el, number);
            });
            observer2.unobserve(statsSection);
        }
    });
    observer2.observe(statsSection);
}

// Prevent form resubmission on page refresh
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// Console message
console.log('%c🚑 Hope On Wheel', 'color: #dc3545; font-size: 24px; font-weight: bold;');
console.log('%cEmergency Ambulance Service', 'color: #0056b3; font-size: 16px;');
console.log('%c24/7 Available for Emergencies', 'color: #28a745; font-size: 14px;');