document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        product.addEventListener("click", function () {
            // Get the product name
            let productName = product.querySelector("h3").innerText.toLowerCase().replace(" ", "-");

            // Animate before redirecting
            product.classList.add("bounce-effect");

            setTimeout(() => {
                window.location.href = `gallery.html#${productName}`;
            }, 400); // Redirect after animation
        });
    });
});
