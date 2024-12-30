// Toast Notification Function
       function showToast(message, duration = 3000) {
           const toastContainer = document.getElementById('toast-container');
           const toast = document.createElement('div');
           toast.className = 'toast';
           toast.innerHTML = `
               ${message}
               <span class="close-btn" onclick="this.parentElement.remove()">×</span>
           `;
           
           toastContainer.appendChild(toast);

           // Show toast
           setTimeout(() => {
               toast.classList.add('show');
           }, 100);

           // Remove toast after duration
           setTimeout(() => {
               toast.remove();
           }, duration);
       }

       function filterItems() {
           let input = document.getElementById('search-bar').value.toLowerCase();
           let items = document.getElementsByClassName('item');
           let visibleCount = 0; // To track visible items count

           for (let i = 0; i < items.length; i++) {
               let item = items[i];
               let title = item.getElementsByTagName('h3')[0].innerText.toLowerCase();

               if (title.indexOf(input) > -1) {
                   item.style.display = "";
                   visibleCount++;
               } else {
                   item.style.display = "none";
               }
           }

           // Update the result count
           document.getElementById('count').innerText = `${visibleCount} results`;
       }

       function countInitialItems() {
           let items = document.getElementsByClassName('item'); // Get all items
           let initialCount = items.length; // Count the items
           document.getElementById('count').innerText = `${initialCount} results`; // Update the count in the header
       }

       // Call the function when the page loads
       document.addEventListener('DOMContentLoaded', countInitialItems);
       fetch('/api/user')
           .then(response => response.json())
           .then(user => {
               document.getElementById('username').innerText = user.username;
           });

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

           fetch('/cart/add', {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify(cartItem)
           })
           .then(response => {
               if (response.ok) {
                   showToast('Item added to cart!');
               } else {
                   showToast('Failed to add item to cart.');
               }
           })
           .catch(error => console.error('Error:', error));
       }

       document.addEventListener('DOMContentLoaded', () => {
           fetchCartItems();
       });

       async function fetchCartItems() {
           try {
               const response = await fetch('/dashcart/items');
               if (!response.ok) throw new Error('Failed to fetch items');
               const cartItems = await response.json();

               const itemsContainer = document.querySelector('.items');

               cartItems.forEach(item => {
                   if (!isItemPresent(item.title)) {
                       const itemElement = createItemElement(item);
                       itemsContainer.appendChild(itemElement);
                   }
               });
           } catch (error) {
               console.error('Error fetching items:', error);
           }
       }

       function isItemPresent(title) {
           const existingItems = document.querySelectorAll('.items .item h3');
           return Array.from(existingItems).some(item => item.innerText === title);
       }

       function createItemElement(item) {
           const itemDiv = document.createElement('div');
           itemDiv.classList.add('item');

           itemDiv.innerHTML = `
               <img src="${item.imagePath}" alt="${item.title}">
               <h3>${item.title}</h3>
               <p>${item.price}</p>
               <button class="add-to-cart" onclick="addToCart(this)">Add to Cart</button>
           `;

           return itemDiv;
       }