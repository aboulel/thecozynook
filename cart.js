document.addEventListener("DOMContentLoaded", function () {
    let cartCount = localStorage.getItem("cartCount") || 0;
    updateCartCount(cartCount);
});

function updateCartCount(count) {
    const cartBadge = document.querySelector(".cart-count");
    cartBadge.textContent = count;
}

// Example function to add items to the cart
function addToCart() {
    let cartCount = localStorage.getItem("cartCount") || 0;
    cartCount = parseInt(cartCount) + 1;
    localStorage.setItem("cartCount", cartCount);
    updateCartCount(cartCount);
}
