document.addEventListener('DOMContentLoaded', () => {
            const paymentForm = document.getElementById('payment-form');
            const paymentMethodSelect = document.getElementById('payment-method');
            const cardFields = document.getElementById('card-fields');
            const upiFields = document.getElementById('upi-fields');
            const responseMessage = document.getElementById('response-message');

            // Fetch the total price
			const amountInput = document.getElementById('amount');

			           // Fetch the cart items and calculate total price
			           fetch('/cart/items')
			               .then(response => response.json())
			               .then(items => {
			                   let totalPrice = 0;

			                   if (items.length === 0) {
			                       amountInput.value = '$0.00'; // Default for empty cart
			                       return;
			                   }

			                   // Calculate total price
			                   items.forEach(item => {
			                       const price = parseFloat(item.price.replace('$', ''));
			                       totalPrice += price;
			                   });

			                   // Display total price
			                   amountInput.value = `$${totalPrice.toFixed(2)}`;
			               })
			               .catch(error => {
			                   console.error('Error fetching cart items:', error);
			                   amountInput.value = 'Error'; // Display an error if fetch fails
			               });

            // Handle payment method change
            paymentMethodSelect.addEventListener('change', () => {
                const selectedMethod = paymentMethodSelect.value;

                // Show relevant fields
                cardFields.classList.toggle('hidden', selectedMethod !== 'card');
                upiFields.classList.toggle('hidden', selectedMethod !== 'upi');
            });

            // Handle form submission
            paymentForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(paymentForm);
                const paymentDetails = Object.fromEntries(formData.entries());

                fetch('/payment/process', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(paymentDetails),
                })
                .then(response => {
                    if (response.ok) {
                      //  responseMessage.textContent = 'Payment Successful!';
						fetch('/cart/clear', {
						                    method: 'DELETE',
						                })
						                .then(clearResponse => {
						                    if (clearResponse.ok) {
						                        alert('Cart is now empty.');
												window.location.href = '/paymentsuccess';
												 
													} else {
						                        alert('Failed to clear the cart.');
						                    }
						                })
						                .catch(error => {
						                    console.error('Error clearing the cart:', error);
						                });
                        paymentForm.reset();
                    } else {
                        responseMessage.textContent = 'Payment Failed. Please try again.';
                    }
                })
                .catch(error => {
                    console.error('Error processing payment:', error);
                });
            });
        });