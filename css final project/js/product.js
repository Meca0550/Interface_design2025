document.addEventListener('DOMContentLoaded', function() {
    // Thumbnail image switcher
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const newImage = this.style.backgroundImage;
            mainImage.style.backgroundImage = newImage; 
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const minusBtn = document.querySelector('.minus');
    const plusBtn = document.querySelector('.plus');
    const quantityInput = document.querySelector('.quantity-selector input');
    
    if (minusBtn && plusBtn && quantityInput) {
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

    const wishlistBtn = document.querySelector('.wishlist-btn');
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            this.textContent = this.classList.contains('active') 
                ? '♥ Saved to Wishlist' 
                : '♡ Wishlist';
        });
    }
});