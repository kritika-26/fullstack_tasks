const products = [
    {
        name: "Dell Inspiron 15",
        brand: "Dell",
        category: "Laptop",
        price: 45990,
        oldPrice: 56990,
        rating: 4.5,
        reviews: 123,
        badge: "SALE",
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "HP Pavilion",
        brand: "HP",
        category: "Laptop",
        price: 52990,
        oldPrice: 59990,
        rating: 4.3,
        reviews: 84,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Lenovo IdeaPad",
        brand: "Lenovo",
        category: "Laptop",
        price: 38990,
        oldPrice: 44990,
        rating: 4.2,
        reviews: 164,
        badge: "SALE",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "MacBook Air M2",
        brand: "Apple",
        category: "Laptop",
        price: 89990,
        oldPrice: 99990,
        rating: 4.8,
        reviews: 210,
        badge: "",
        image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "ASUS Vivobook",
        brand: "ASUS",
        category: "Laptop",
        price: 41990,
        oldPrice: 47990,
        rating: 4.4,
        reviews: 126,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Dell XPS 13",
        brand: "Dell",
        category: "Laptop",
        price: 89990,
        oldPrice: 104990,
        rating: 4.6,
        reviews: 94,
        badge: "",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=80"
    }
];

const productsGrid = document.getElementById("productsGrid");

function displayProducts(productList) {

    productsGrid.innerHTML = "";

    productList.forEach(function(product) {

        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            
            <div class="image-box">

                ${
                    product.badge
                    ? `<span class="badge ${product.badge === "SALE" ? "sale" : "new"}">
                        ${product.badge}
                       </span>`
                    : ""
                }

                <img 
                    src="${product.image}" 
                    alt="${product.name}"
                >

            </div>


            <div class="category">
                ${product.category}
            </div>


            <h2 class="product-name">
                ${product.name}
            </h2>


            <div class="rating">
                ⭐ ${product.rating}
                <span>(${product.reviews})</span>
            </div>


            <div class="price-row">

                <span class="price">
                    ₹${product.price.toLocaleString("en-IN")}
                </span>

                <span class="old-price">
                    ₹${product.oldPrice.toLocaleString("en-IN")}
                </span>

            </div>


            <button class="add-cart">
                Add to Cart
            </button>

        `;

        productsGrid.appendChild(card);

    });
}


displayProducts(products);