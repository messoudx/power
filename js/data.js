// js/data.js
window.products = JSON.parse(localStorage.getItem('products')) || [];
// js/data.js
const defaultProducts = [
  { id: 1, name: "بطاقة ادخار", price: 500, img: "./images/products/product1.jpg", desc: "وصف تفصيلي لبطاقة الادخار..." },
  { id: 2, name: "قرض شخصي", price: 1500, img: "./images/products/product2.jpg", desc: "وصف تفصيلي للقرض الشخصي..." }
];
window.products = JSON.parse(localStorage.getItem('products')) || defaultProducts;
localStorage.setItem("products", JSON.stringify(window.products));
