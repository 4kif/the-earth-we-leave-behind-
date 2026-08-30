document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");
    const topicButtons = document.querySelectorAll(".topic-btn");

    let selectedTopic = "GENERAL";


    // =========================
    // TOPIC BUTTONS
    // =========================

    topicButtons.forEach(button => {

        button.addEventListener("click", function () {

            topicButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            selectedTopic = this.textContent.trim();

        });

    });


    // =========================
    // FORM SUBMIT
    // =========================

    form.addEventListener("submit", async function (e) {

        e.preventDefault();

        const submitButton = form.querySelector(".submit-btn");
        const submitText = submitButton.querySelector("span");

        submitButton.disabled = true;
        submitText.textContent = "SENDING...";

        const formData = new FormData(form);

        // Tambah topic yang dipilih
        formData.append("topic", selectedTopic);

        try {

            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {

                formMessage.textContent =
                    "MESSAGE SENT. THANK YOU FOR REACHING OUT.";

                formMessage.style.color = "#8ccf63";

                form.reset();

                // Reset topic kepada GENERAL
                topicButtons.forEach(btn => {
                    btn.classList.remove("active");
                });

                topicButtons[0].classList.add("active");

                selectedTopic = "GENERAL";

            } else {

                formMessage.textContent =
                    "SOMETHING WENT WRONG. PLEASE TRY AGAIN.";

                formMessage.style.color = "#ff6b6b";

            }

        } catch (error) {

            formMessage.textContent =
                "UNABLE TO SEND MESSAGE. PLEASE TRY AGAIN.";

            formMessage.style.color = "#ff6b6b";

        }

        submitButton.disabled = false;
        submitText.textContent = "SEND MESSAGE";

    });

});
