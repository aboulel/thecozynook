document.addEventListener("DOMContentLoaded", function () {
    let cartCount = localStorage.getItem("cartCount") || 0;
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    let totalAmount = localStorage.getItem("cartTotal") || 0;

    updateCartCount(cartCount);
    updateCartDisplay(cartItems, totalAmount);

    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            let itemName = this.getAttribute("data-name");
            let itemPrice = parseFloat(this.getAttribute("data-price"));
            addToCart(itemName, itemPrice);
        });
    });

    // Clear Cart Button
    const clearCartBtn = document.getElementById("clear-cart");
    if (clearCartBtn) {
        clearCartBtn.addEventListener("click", function () {
            clearCart();
        });
    }
});

// ✅ Function to Update Cart Count in Gallery & Cart Page
function updateCartCount(count) {
    const cartBadge = document.querySelector(".cart-count");
    if (cartBadge) {
        cartBadge.textContent = count;
    }
}

// ✅ Function to Add Items to Cart
function addToCart(itemName, itemPrice) {
    let cartCount = localStorage.getItem("cartCount") || 0;
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    let totalAmount = localStorage.getItem("cartTotal") || 0;

    // Update Cart Count
    cartCount = parseInt(cartCount) + 1;
    localStorage.setItem("cartCount", cartCount);
    updateCartCount(cartCount);

    // Add Item to Cart
    let existingItem = cartItems.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({ name: itemName, price: itemPrice, quantity: 1 });
    }

    // Update Total Amount
    totalAmount = parseFloat(totalAmount) + itemPrice;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("cartTotal", totalAmount.toFixed(2));

    updateCartDisplay(cartItems, totalAmount);
}

// ✅ Function to Update Cart Display in Cart Page
function updateCartDisplay(cartItems, totalAmount) {
    const cartTableBody = document.getElementById("cart-items");
    const cartTotalDisplay = document.getElementById("cart-total");

    if (!cartTableBody || !cartTotalDisplay) return; // Prevent errors if elements are missing

    cartTableBody.innerHTML = ""; // Clear Table
    cartItems.forEach((item, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>$${(item.quantity * item.price).toFixed(2)}</td>
            <td><button class="remove-item" data-index="${index}">❌ Remove</button></td>
        `;
        cartTableBody.appendChild(row);
    });

    cartTotalDisplay.textContent = totalAmount.toFixed(2);

    // Add Event Listeners to Remove Buttons
    document.querySelectorAll(".remove-item").forEach(button => {
        button.addEventListener("click", function () {
            removeItem(this.getAttribute("data-index"));
        });
    });
}

// ✅ Function to Remove an Item from the Cart
function removeItem(index) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    let cartCount = localStorage.getItem("cartCount") || 0;
    let totalAmount = localStorage.getItem("cartTotal") || 0;

    if (cartItems.length > index) {
        let removedItem = cartItems[index];
        totalAmount -= removedItem.price * removedItem.quantity;
        cartCount -= removedItem.quantity;

        cartItems.splice(index, 1);

        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        localStorage.setItem("cartCount", cartCount);
        localStorage.setItem("cartTotal", totalAmount.toFixed(2));

        updateCartCount(cartCount);
        updateCartDisplay(cartItems, totalAmount);
    }
}

// ✅ Function to Clear the Cart
function clearCart() {
    localStorage.removeItem("cartItems");
    localStorage.removeItem("cartCount");
    localStorage.removeItem("cartTotal");

    updateCartCount(0);
    updateCartDisplay([], 0);
}
