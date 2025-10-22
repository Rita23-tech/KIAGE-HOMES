// Show/Hide sections
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(sectionId).classList.remove('hidden');
}

// TENANT INFO
const tenantForm = document.getElementById('tenantForm');
const tenantList = document.getElementById('tenantList');
let tenants = JSON.parse(localStorage.getItem('tenants')) || [];

tenantForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('tenantName').value.trim();
  const house = document.getElementById('tenantHouse').value.trim();
  if (name && house) {
    tenants.push({ name, house });
    localStorage.setItem('tenants', JSON.stringify(tenants));
    tenantForm.reset();
    renderTenants();
  }
});

function renderTenants() {
  tenantList.innerHTML = '';
  tenants.forEach((t, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${t.name} - ${t.house} 
      <button onclick="editTenant(${index})">Edit</button>
      <button onclick="deleteTenant(${index})">Delete</button>`;
    tenantList.appendChild(li);
  });
}

function editTenant(index) {
  const newName = prompt("Edit tenant name:", tenants[index].name);
  const newHouse = prompt("Edit house number:", tenants[index].house);
  if (newName && newHouse) {
    tenants[index] = { name: newName, house: newHouse };
    localStorage.setItem('tenants', JSON.stringify(tenants));
    renderTenants();
  }
}

function deleteTenant(index) {
  if (confirm("Delete this tenant?")) {
    tenants.splice(index, 1);
    localStorage.setItem('tenants', JSON.stringify(tenants));
    renderTenants();
  }
}

renderTenants();

// COMPLAINTS
const complaintForm = document.getElementById('complaintForm');
const complaintList = document.getElementById('complaintList');
let complaints = JSON.parse(localStorage.getItem('complaints')) || [];

complaintForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = document.getElementById('complaintText').value.trim();
  if (text) {
    complaints.push(text);
    localStorage.setItem('complaints', JSON.stringify(complaints));
    complaintForm.reset();
    renderComplaints();
  }
});

function renderComplaints() {
  complaintList.innerHTML = '';
  complaints.forEach((c, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${c} 
      <button onclick="deleteComplaint(${index})">Delete</button>`;
    complaintList.appendChild(li);
  });
}

function deleteComplaint(index) {
  if (confirm("Delete this complaint?")) {
    complaints.splice(index, 1);
    localStorage.setItem('complaints', JSON.stringify(complaints));
    renderComplaints();
  }
}

renderComplaints();

// PAYMENTS
const paymentForm = document.getElementById('paymentForm');
const paymentList = document.getElementById('paymentList');
let payments = JSON.parse(localStorage.getItem('payments')) || [];

paymentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const tenant = document.getElementById('paymentTenant').value.trim();
  const amount = document.getElementById('paymentAmount').value.trim();
  if (tenant && amount) {
    payments.push({ tenant, amount });
    localStorage.setItem('payments', JSON.stringify(payments));
    paymentForm.reset();
    renderPayments();
  }
});

function renderPayments() {
  paymentList.innerHTML = '';
  payments.forEach((p, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${p.tenant} - Ksh ${p.amount} 
      <button onclick="deletePayment(${index})">Delete</button>`;
    paymentList.appendChild(li);
  });
}

function deletePayment(index) {
  if (confirm("Delete this payment?")) {
    payments.splice(index, 1);
    localStorage.setItem('payments', JSON.stringify(payments));
    renderPayments();
  }
}

renderPayments();