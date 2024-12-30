document.addEventListener('DOMContentLoaded', () => {
            const cartItemsContainer = document.getElementById('cart-items');
            const totalItemsElement = document.getElementById('total-items');
            const totalPriceElement = document.getElementById('total-price');
			const checkoutButton = document.getElementById('checkout-button');

            fetch('/cart/items')
                .then(response => response.json())
                .then(items => {
                    cartItemsContainer.innerHTML = ''; // Clear placeholder text
                    let totalPrice = 0;

                    if (items.length === 0) {
                        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
						
                        return;
                    }

                    items.forEach(item => {
                        const cartItem = document.createElement('div');
                        cartItem.className = 'cart-item';
                        cartItem.innerHTML = `
                            <img src="${item.imagePath}" alt="${item.title}" class="cart-item-image">
                            <div class="cart-item-details">
                                <h3>${item.title}</h3>
                                <p>Price: ${item.price}</p>
                                <button class="remove-button" data-id="${item.id}">Remove</button>
                            </div>
                        `;
                        cartItemsContainer.appendChild(cartItem);

                        const price = parseFloat(item.price.replace('$', ''));
                        totalPrice += price;
                    });

                    totalItemsElement.innerText = items.length;
                    totalPriceElement.innerText = totalPrice.toFixed(2);

                    // Attach event listeners to remove buttons
                    const removeButtons = document.querySelectorAll('.remove-button');
                    removeButtons.forEach(button => {
                        button.addEventListener('click', (e) => {
                            const itemId = e.target.dataset.id;
                            deleteCartItem(itemId);
                        });
                    });
                })
                .catch(error => {
                    console.error('Error fetching cart items:', error);
                    cartItemsContainer.innerHTML = '<p>Failed to load cart items.</p>';
                });

            function deleteCartItem(itemId) {
                fetch(`/cart/items/${itemId}`, {
                    method: 'DELETE',
                })
                    .then(response => {
                        if (response.ok) {
                            
                            location.reload();
                        } else {
                            alert('Failed to remove item');
                        }
                    })
                    .catch(error => {
                        console.error('Error deleting item:', error);
                    });
            }
			checkoutButton.addEventListener('click', () => {
				const totalItemsElement = document.getElementById('total-items');
				if(totalItemsElement.innerText==='0'){
					alert('Add some item into cart')
					window.location.href = '/newpage';
					return;
				}
				else{
			         window.location.href = '/payment'; // Redirect to payment page
					}
			            });
        });