// js/admin.js
const form       = document.getElementById('product-form');
const idField    = document.getElementById('product-id');
const nameField  = document.getElementById('name');
const priceField = document.getElementById('price');
const imgField   = document.getElementById('img');
const descField  = document.getElementById('desc');
const listDiv    = document.getElementById('admin-list');

let products = JSON.parse(localStorage.getItem('products')) || [];

function renderAdminList() {
  listDiv.innerHTML = '';
  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'admin-card';
    card.innerHTML = `
      <strong>${p.name}</strong> — ${p.price} SK
      <div>
        <button onclick="startEdit(${p.id})">تعديل</button>
        <button onclick="deleteProduct(${p.id})">حذف</button>
      </div>
    `;
    listDiv.appendChild(card);
  });
}

function startEdit(id) {
  const prod = products.find(x => x.id === id);
  if (!prod) return;
  idField.value    = prod.id;
  nameField.value  = prod.name;
  priceField.value = prod.price;
  imgField.value   = prod.img;
  descField.value  = prod.desc;
  form.querySelector('button[type="submit"]').textContent = 'تحديث المنتج';
}

function deleteProduct(id) {
  if (!confirm('هل أنت متأكد من الحذف؟')) return;
  products = products.filter(x => x.id !== id);
  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem('products', JSON.stringify(products));
  renderAdminList();
  form.reset();
  idField.value = '';
  form.querySelector('button[type="submit"]').textContent = 'حفظ المنتج';
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const id    = idField.value ? parseInt(idField.value) : null;
  const name  = nameField.value.trim();
  const price = parseFloat(priceField.value);
  const img   = imgField.value.trim();
  const desc  = descField.value.trim();

  if (!name || !img || isNaN(price) || !desc) {
    alert('يرجى ملء كل الحقول بشكل صحيح.');
    return;
  }

  if (id) {
    const idx = products.findIndex(x => x.id === id);
    if (idx !== -1) {
      products[idx] = { id, name, price, img, desc };
    }
  } else {
    const newId = products.length ? Math.max(...products.map(x => x.id)) + 1 : 1;
    products.push({ id: newId, name, price, img, desc });
  }

  saveAndRender();
});

renderAdminList();
