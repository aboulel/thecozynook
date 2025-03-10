document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const inputs = document.querySelectorAll(".input-data input, .textarea textarea");
    const submitBtn = document.querySelector(".submit-btn input");

    // Slide-in animation for the form
    form.style.opacity = "0";
    form.style.transform = "translateY(20px)";
    setTimeout(() => {
        form.style.transition = "all 0.8s ease-in-out";
        form.style.opacity = "1";
        form.style.transform = "translateY(0)";
    }, 300);

    // Floating labels effect with animation
    inputs.forEach((input) => {
        input.addEventListener("focus", function () {
            this.parentNode.querySelector("label").classList.add("active");
        });

        input.addEventListener("blur", function () {
            if (this.value === "") {
                this.parentNode.querySelector("label").classList.remove("active");
            }
        });
    });

    // Button click animation
    submitBtn.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent form submission for testing animation
        let isValid = true;

        inputs.forEach((input) => {
            if (input.value.trim() === "") {
                isValid = false;
                input.classList.add("shake");

                // Remove shake effect after animation
                setTimeout(() => {
                    input.classList.remove("shake");
                }, 500);
            }
        });

        if (isValid) {
            submitBtn.classList.add("clicked");

            // Simulating form submission effect
            setTimeout(() => {
                submitBtn.value = "Sent!";
                submitBtn.style.background = "#4CAF50";
            }, 1000);
        }
    });
});
