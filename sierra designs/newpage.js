 const container = document.querySelector(".slider-wrapper6");
  let allProducts = []; // for sorting

  // Fetch and render products
  fetch("http://localhost:3000/new")
    .then((response) => response.json())
    .then((newProducts) => {
      allProducts = newProducts;
      renderProducts(allProducts);
    })
    .catch((error) => {
      container.innerHTML = `<p style="color:white;">Error: ${error.message}</p>`;
    });

  // Render function
  function renderProducts(products) {
    container.innerHTML = ""; // Clear previous

    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card me-3 mb-4";

      productCard.innerHTML = `
        <div class="image-card1">
          <div class="image-hover1">
            <a href="description1.html?id=${product.id}">
              <img src="${product.image}" alt="${product.title} (Image)" class="girl1" />
              <img src="${product.hoverImage}" alt="${product.title} (Detail)" class="boy1" />
            </a>
          </div>
          <div class="product-info1">
            <h5>${product.title}</h5>
            <p>${product.price}</p>
            <button class="cart_btn">Add to Cart</button>
          </div>
        </div>
      `;

      const cartBtn = productCard.querySelector(".cart_btn");
      cartBtn.addEventListener("click", () => {
        addToCart(product);
        openCart();
      });

      container.appendChild(productCard);
    });
  }

  // Sorting: Price Low to High
  const lowToHighBtn = document.getElementById("low");
  const highToLowBtn = document.getElementById("high");

low.addEventListener("click", () => {
  console.log("Low to High clicked");
  const sorted = [...allProducts].sort((a, b) => Number(a.price) - Number(b.price));
  renderProducts(sorted);
});


  // Sorting: Price High to Low
high.addEventListener("click", () => {
  console.log("Low to High clicked");
  const sorted = [...allProducts].sort((a, b) => Number(a.price) - Number(b.price));
  renderProducts(sorted);
});


// lowToHighBtn.addEventListener("click", () => {
//   fetch("http://localhost:3000/new")
//     .then((res) => res.json())
//     .then((data) => {
//       let sorted = data.sort((a, b) => Number(a.price) - Number(b.price));
//       renderProducts(sorted);
//     });
// });


//   // Sorting: Price High to Low
// highToLowBtn.addEventListener("click", () => {
//   fetch("http://localhost:3000/new")
//     .then((res) => res.json())
//     .then((data) => {
//       let sorted = data.sort((a, b) => Number(b.price) - Number(a.price));
//       renderProducts(sorted);
//     });
// });

  // Sorting: Alphabetically A to Z
  const sortAtoZ = document.getElementById("sortAtoZ");
  if (sortAtoZ) {
    sortAtoZ.addEventListener("change", () => {
      const sorted = [...allProducts].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      renderProducts(sorted);
    });
  }

  // Sorting: Alphabetically Z to A
  const sortZtoA = document.getElementById("sortZtoA");
  if (sortZtoA) {
    sortZtoA.addEventListener("change", () => {
      const sorted = [...allProducts].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      renderProducts(sorted);
    });
  }
