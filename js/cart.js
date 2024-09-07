document.addEventListener('DOMContentLoaded', function() {
    // Example cart items (you'll need to fetch these from your backend or local storage)
    const cartItems = [
        { id: 1, name: 'Product 1', price: 20, quantity: 2, image: 'images/product1.jpg' },
        { id: 2, name: 'Product 2', price: 15, quantity: 1, image: 'images/product2.jpg' }
    ];

    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    function updateCart() {
        cartItemsContainer.innerHTML = ''; // Clear existing items
        let total = 0;

        cartItems.forEach(item => {
            total += item.price * item.quantity;

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <button class="btn" onclick="removeItem(${item.id})">Remove</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    }

    window.removeItem = function(itemId) {
        // Remove item from cartItems array
        const index = cartItems.findIndex(item => item.id === itemId);
        if (index !== -1) {
            cartItems.splice(index, 1);
            updateCart(); // Update cart display
        }
    }

    updateCart(); // Initial cart rendering
});
