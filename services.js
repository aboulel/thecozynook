document.addEventListener("DOMContentLoaded", function() {
    const serviceBoxes = document.querySelectorAll('.service-box');

    serviceBoxes.forEach(box => {
        box.addEventListener("click", function() {
            serviceBoxes.forEach(b => {
                if (b !== box) {
                    b.classList.remove("expanded");
                }
            });

            box.classList.toggle("expanded");
        });
    });

    // Form Submissions with Confirmation Message
    document.getElementById('delivery-form').addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('confirmation-message').style.display = 'block';
    });

    document.getElementById('maintenance-form').addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('maintenance-confirmation').style.display = 'block';
    });
});
