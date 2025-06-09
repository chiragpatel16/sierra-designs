//     let container = document.querySelector(".slider-wrapper5");
//   let allProducts = []; // for sorting


// fetch('http://localhost:3000/products')
//   .then(response => response.json())
//   .then(products => {
//     products.forEach(product => {
//       const productCard = document.createElement('div');
//       productCard.className = 'product-card me-3 mb-4';

  
//        productCard.innerHTML = `
//     <div class="image-card1">
//       <div class="image-hover1"><a href="description2.html?id=${product.id}">
//         <img src="${product.image}" alt="${product.name} (Image)" class="girl1" />
//         <img src="${product.url}" alt="${product.name} (Detail)" class="boy1" />
//       </div></a>
//       <div class="product-info1">
//         <h5>${product.name}</h5>
//          <p><del>${product.original_price}</del>
//        &nbsp;&nbsp;${product.sale_price}</p>
        
//         <button class="cart_btn">Add to Cart</button>
//       </div>
//     </div>
//   `;
  
//       // Button logic
//       const cartBtn = productCard.querySelector('.cart_btn');
//       cartBtn.addEventListener('click', () => {
//         addToCart(product);
//         openCart();
//       });

//       container.appendChild(productCard);
//     });
//   })
//   .catch(error => {
//     container.innerHTML = `<p style="color:white;">Error: ${error.message}</p>`;
//    });


 const container = document.querySelector(".slider-wrapper5");
  let allProducts = []; // for sorting

  // Fetch and render products
  fetch("http://localhost:3000/products")
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
      <div class="image-hover1"><a href="description2.html?id=${product.id}">
       <img src="${product.image}" alt="${product.name} (Image)" class="girl1" />
        <img src="${product.url}" alt="${product.name} (Detail)" class="boy1" />
      </div></a>
      <div class="product-info1">
        <h5>${product.name}</h5>
         <p><del>${product.original_price}</del>
       &nbsp;&nbsp;${product.sale_price}</p>
        
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

  //function addToCart(product) {
//   // Get existing cart or create empty array
//   let cart = JSON.parse(localStorage.getItem('cart')) || [];

//   // Check if product already in cart
//   let existingProduct = cart.find(item => item.id === product.id);

//   if (existingProduct) {
//     // Increase quantity       
//     existingProduct.quantity += 1;
//   } else {
//     // Add new product with quantity 1
//     cart.push({...product, quantity: 1});
//   }

//   // Save updated cart back to localStorage
//   localStorage.setItem('cart', JSON.stringify(cart));
//   alert(`${product.title} added to cart!`);
// }

// function openCart() {
//   window.location.href = 'add_to_cart.html';
// }