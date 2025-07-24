// js/index.js
// ربط بيانات البنك بالـ HTML
document.getElementById("bank-name").textContent   = bankInfo.name;
document.getElementById("founded").textContent     = bankInfo.founded;
document.getElementById("description").textContent = bankInfo.description;

// مهام البنك
const tasksUl = document.getElementById("tasks-list");
bankInfo.tasks.forEach(t => {
  const li = document.createElement("li");
  li.textContent = t;
  tasksUl.appendChild(li);
});

// جدول المدراء
const managersTbody = document.getElementById("managers-table");
bankInfo.managers.forEach(m => {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${m.name}</td><td>${m.from}</td><td>${m.to}</td>`;
  managersTbody.appendChild(tr);
});
