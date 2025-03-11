document.addEventListener("DOMContentLoaded", function () {
    let cartCount = localStorage.getItem("cartCount") || 0;
    updateCartCount(cartCount);

    const categorySelect = document.getElementById("category-select");
    const categories = document.querySelectorAll(".gallery-category");

    categorySelect.addEventListener("change", function () {
        const selectedCategory = this.value;

        categories.forEach(category => {
            if (category.id === selectedCategory) {
                category.style.display = "block";
            } else {
                category.style.display = "none";
            }
        });
    });

    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            let itemName = this.getAttribute("data-name");
            let itemPrice = parseFloat(this.getAttribute("data-price"));

            addToCart(itemName, itemPrice);
        });
    });
});

function updateCartCount(count) {
    const cartBadge = document.querySelector(".cart-count");
    cartBadge.textContent = count;
}

function addToCart(itemName, itemPrice) {
    let cartCount = localStorage.getItem("cartCount") || 0;
    cartCount = parseInt(cartCount) + 1;
    localStorage.setItem("cartCount", cartCount);
    updateCartCount(cartCount);
}
