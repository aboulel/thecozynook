document.addEventListener("DOMContentLoaded", function () {
    const serviceBoxes = document.querySelectorAll(".service-box");

    serviceBoxes.forEach((box) => {
        box.addEventListener("click", function (event) {
            // Check if the click is inside an input, textarea, or button
            if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA" || event.target.tagName === "BUTTON") {
                return; // Prevent toggling when interacting with form elements
            }

            // Collapse other service boxes
            serviceBoxes.forEach((b) => {
                if (b !== box) {
                    b.classList.remove("expanded");
                }
            });

            // Expand or collapse the clicked box
            box.classList.toggle("expanded");
        });
    });

    // Delivery Form Submission
    document.getElementById("delivery-form").addEventListener("submit", function (event) {
        event.preventDefault();
        document.getElementById("confirmation-message").style.display = "block";
    });

    // Maintenance Form Submission
    document.getElementById("maintenance-form").addEventListener("submit", function (event) {
        event.preventDefault();
        document.getElementById("maintenance-confirmation").style.display = "block";
    });
});
