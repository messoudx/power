// js/products.js

// 1. جلب قائمة المنتجات من localStorage
//    أو تهيئة قيم افتراضية عند أول تشغيل
let products = JSON.parse(localStorage.getItem('products')) || [
  {
    id: 1,
    name: "بطاقة ادخار",
    price: 500,
    img: "images/products/product1.jpg",
    desc: "وصف تفصيلي لبطاقة الادخار..."
  },
  {
    id: 2,
    name: "قرض شخصي",
    price: 1500,
    img: "images/products/product2.jpg",
    desc: "وصف تفصيلي للقرض الشخصي..."
  }
];

// 2. حفظها مجدّداً في localStorage لضمان توفرها للصفحات الأخرى
localStorage.setItem("products", JSON.stringify(products));
