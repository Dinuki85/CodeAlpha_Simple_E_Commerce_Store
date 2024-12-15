document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/products')
        .then(res => res.json())
        .then(data => {
            const productList = document.getElementById('product-list');
            data.forEach(product => {
                const productCard = document.createElement('div');
                productCard.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>Price: $${product.price}</p>
                    <button onclick="addToCart('${product.id}')">Add to Cart</button>
                `;
                productList.appendChild(productCard);
            });
        });

    window.addToCart = (productId) => {
        fetch('/api/cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId })
        });
    };
});
