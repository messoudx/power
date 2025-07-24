// js/render-products.js
function renderProductCards(products) {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  grid.innerHTML = ''; // تفريغ الشبكة أولاً

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <div class="content">
        <h3>${product.name}</h3>
        <p class="price">${product.price} د.ج</p>
        <button onclick="window.location.href='product.html?id=${product.id}'">عرض التفاصيل</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

renderProductCards(window.products);
// js/render-products.js
const grid = document.getElementById('products-grid');
grid.innerHTML = '';
window.products.forEach(p => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <div class="content">
      <h3>${p.name}</h3>
      <p class="price">${p.price} د.ج</p>
      <button onclick="window.location.href='product.html?id=${p.id}'">عرض التفاصيل</button>
    </div>
  `;
  grid.appendChild(card);
});
