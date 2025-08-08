// Load 14 product images (replace with your actual image paths)
// Sample Product Data (Replace with your actual products)
const products = [
    { id: 1, name: "Parfum Luxe Homme", price: 45.99, image: "product/josh 1.jpeg", desc: "Un parfum boisépicé pour hommes." },
    { id: 2, name: "Eau de Parfum Femme", price: 39.99, image: "product/josh 2.jpeg", desc: "Floral et élégant pour les femmes." },
    { id: 3, name: "Eau de Parfum Femme", price: 39.99, image: "product/josh 3.jpeg", desc: "Floral et élégant pour les femmes." },
    { id: 4, name: "Eau de Parfum Femme", price: 39.99, image: "product/josh 4.jpeg", desc: "Floral et élégant pour les femmes." },
    { id: 5, name: "Eau de Parfum Femme", price: 39.99, image: "product/josh 5.jpeg", desc: "Floral et élégant pour les femmes." },
    { id: 6, name: "Eau de Parfum Femme", price: 39.99, image: "product/josh 6.jpeg", desc: "Floral et élégant pour les femmes." },
    { id: 7, name: "Eau de Parfum Femme", price: 39.99, image: "product/josh 7.jpeg", desc: "Floral et élégant pour les femmes." },
    { id: 8, name: "Eau de Parfum Femme", price: 39.99, image: "product/josh 8.jpeg", desc: "Floral et élégant pour les femmes." },
    { id: 9, name: "Eau de Parfum Femme", price: 39.99, image: "product/josh 9.jpeg", desc: "Floral et élégant pour les femmes." },
    { id: 10, name: "Eau de Parfum Femme", price: 39.99, image: "product/josh 10.jpeg", desc: "Floral et élégant pour les femmes." },
    { id: 11, name: "Eau de Parfum Femme", price: 39.99, image: "product/josh 11.jpeg", desc: "Floral et élégant pour les femmes." },
    { id: 12, name: "Eau de Parfum Femme", price: 39.99, image: "product/josh 12.jpeg", desc: "Floral et élégant pour les femmes." },
    // Add 12 more products...
];

// Load Products
function loadProducts() {
    const productGrid = document.getElementById("product-grid");
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
                <button class="order-btn" onclick="openModal(${product.id})">Commander</button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Modal Functions
function openModal(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById("product-modal");
    document.getElementById("modal-image").src = product.image;
    document.getElementById("modal-title").textContent = product.name;
    document.getElementById("modal-price").textContent = `$${product.price.toFixed(2)}`;
    document.getElementById("modal-desc").textContent = product.desc;
    
    // Set WhatsApp link with product details
    const whatsappLink = document.getElementById("whatsapp-order-link");
    const message = `Je souhaite commander: ${product.name} ($${product.price}). Mon adresse est: [Votre Adresse]`;
    whatsappLink.href = `https://wa.me/243XXXXXXXXX?text=${encodeURIComponent(message)}`;
    
    modal.style.display = "flex";
}

// Close Modal
document.querySelector(".close-modal").addEventListener("click", () => {
    document.getElementById("product-modal").style.display = "none";
});

// Close modal if clicked outside
window.addEventListener("click", (e) => {
    if (e.target === document.getElementById("product-modal")) {
        document.getElementById("product-modal").style.display = "none";
    }
});

// Initialize
loadProducts();