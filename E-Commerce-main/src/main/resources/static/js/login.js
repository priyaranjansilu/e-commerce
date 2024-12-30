document.getElementById("loginForm").addEventListener("submit", async function (event) {
		        event.preventDefault(); // Prevent default form submission
		        
		        const formData = new FormData(event.target);
		        const data = {
		            username: formData.get("username"),
		            password: formData.get("password")
		        };

		        try {
		            const response = await fetch(event.target.action, {
		                method: "POST",
		                headers: { "Content-Type": "application/x-www-form-urlencoded" },
		                body: new URLSearchParams(data)
		            });

		            const message = await response.text();

		            if (message === "success") {
		                // Redirect to newpage.html on successful login
		                window.location.href = "/newpage";
		            } else {
		                // Show error message
		                document.getElementById("error-message").style.display = "block";
		            }
		        } catch (error) {
		            console.error("Error during login:", error);
		            document.getElementById("error-message").textContent = "An error occurred. Please try again.";
		            document.getElementById("error-message").style.display = "block";
		        }
		    });