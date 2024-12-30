// Toast function
        function showToast(message, type = "info") {
            const toastContainer = document.getElementById("toast-container");
            const toast = document.createElement("div");
            toast.className = "toast";
            toast.style.backgroundColor = type === "success" ? "#28a745" : type === "error" ? "#dc3545" : "#333";
            toast.innerText = message;
            toastContainer.appendChild(toast);

            // Remove toast after 4 seconds
            setTimeout(() => {
                toastContainer.removeChild(toast);
            }, 2000);
        }

        document.getElementById("registrationForm").addEventListener("submit", async (event) => {
            event.preventDefault();

            const username = document.querySelector("input[name='username']").value;
            const email = document.querySelector("input[name='email']").value;
            const password = document.querySelector("input[name='password']").value;
            const confirmPassword = document.querySelector("input[name='confirmPassword']").value;
            const terms = document.querySelector("input[name='terms']").checked;

            if (password !== confirmPassword) {
                showToast("Passwords do not match!", "error");
                return;
            }

            if (!terms) {
                showToast("You must agree to the terms and conditions!", "error");
                return;
            }

            const user = {
                username: username,
                email: email,
                password: password
            };

            try {
                const response = await fetch("/api/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(user)
                });

                if (response.ok) {
                    const message = await response.text();
                    showToast(message, "success");
                    setTimeout(() => {
                        window.location.href = "/login";
                    }, 2000);
                } else {
                    showToast("Registration failed. Please try again.", "error");
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                showToast("An error occurred. Please try again.", "error");
            }
        });