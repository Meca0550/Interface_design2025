// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuToggle.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
        this.textContent = isExpanded ? '☰' : '✕';
    });

    // Product Filtering (Shop Page)
    if (document.querySelector('.filter-btn')) {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const productCards = document.querySelectorAll('.product-card');

        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active state
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                const filterValue = this.getAttribute('data-filter');

                // Filter products
                productCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Product Sorting (Shop Page)
    if (document.getElementById('sort')) {
        document.getElementById('sort').addEventListener('change', function() {
            const sortValue = this.value;
            const productsGrid = document.querySelector('.products-grid');
            const productCards = Array.from(document.querySelectorAll('.product-card'));

            productCards.sort((a, b) => {
                const priceA = parseFloat(a.querySelector('.price').textContent.replace('$', ''));
                const priceB = parseFloat(b.querySelector('.price').textContent.replace('$', ''));

                switch(sortValue) {
                    case 'price-low':
                        return priceA - priceB;
                    case 'price-high':
                        return priceB - priceA;
                    case 'newest':
                        return 0; // 
                    default:
                        return 0; // '
                }
            });

            // Re-append sorted products
            productCards.forEach(card => productsGrid.appendChild(card));
        });
    }

    // Testimonial
    if (document.querySelector('.testimonial-carousel')) {
        const testimonials = document.querySelectorAll('.testimonial');
        let currentIndex = 0;

        function showTestimonial(index) {
            testimonials.forEach(testimonial => {
                testimonial.classList.remove('active');
            });
            testimonials[index].classList.add('active');
        }

        // Auto-rotate testimonials
        setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        }, 5000);
    }

    // Product Gallery tumbnail
    if (document.querySelector('.thumbnails')) {
        const mainImage = document.querySelector('.main-image');
        const thumbnails = document.querySelectorAll('.thumbnail');

        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                // In a real implementatin
                thumbnails.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
               
            
            });
        });
        if (thumbnails.length > 0) {
            thumbnails[0].classList.add('active');
        }
    }

    //Product Page
    if (document.querySelector('.quantity-selector')) {
        const minusBtn = document.querySelector('.quantity-selector .minus');
        const plusBtn = document.querySelector('.quantity-selector .plus');
        const quantityInput = document.querySelector('.quantity-selector input');

        minusBtn.addEventListener('click', function() {
            let value = parseInt(quantityInput.value);
            if (value > 1) {
                quantityInput.value = value - 1;
            }
        });

        plusBtn.addEventListener('click', function() {
            let value = parseInt(quantityInput.value);
            quantityInput.value = value + 1;
        });
    }

    // Wishlist Button Toggle
    const wishlistButtons = document.querySelectorAll('.wishlist-btn');
    wishlistButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            this.textContent = this.classList.contains('active') ? '♥' : '♡';
        });
    });

    // Form Validation 
    if (document.getElementById('contactForm')) {
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (name === '' || email === '' || message === '') {
                alert('Please fill in all required fields');
                return;
            }
            
            if (!email.includes('@')) {
                alert('Please enter a valid email address');
                return;
            }
            
            // In a real implementation
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});