function addToCart(button) {
						    const item = button.closest('.item');
						    const title = item.querySelector('h3').innerText;
						    const price = item.querySelector('p').innerText;
						    const imagePath = item.querySelector('img').src;

						    const cartItem = {
						        title: title,
						        price: price,
						        imagePath: imagePath
						    };

						    fetch('/dashcart/add', {
						        method: 'POST',
						        headers: {
						            'Content-Type': 'application/json'
						        },
						        body: JSON.stringify(cartItem)
						    })
						    .then(response => {
						        if (response.ok) {
						            alert('Item added to Shopping Page!');
						        } else {
						            alert('Failed to add item to cart.');
						        }
						    })
						    .catch(error => console.error('Error:', error));
						}
						function removeFromCart(button) {
						    const item = button.closest('.item');
						    const title = item.querySelector('h3').innerText;

						    fetch('/dashcart/remove', {
						        method: 'POST',
						        headers: {
						            'Content-Type': 'application/json'
						        },
						        body: JSON.stringify({ title: title })
						    })
						    .then(response => {
						        if (response.ok) {
						            alert('Item removed from Shopping Page!');
						        } else {
						            alert('Failed to remove item from cart.');
						        }
						    })
						    .catch(error => console.error('Error:', error));
						}

