// tenant.js

// Handle complaint submission
function submitComplaint() {
    const name = document.getElementById("tenantName").value;
    const complaint = document.getElementById("complaintText").value;

    if (!name || !complaint) {
        alert("Please fill in all fields!");
        return;
    }

    const complaints = JSON.parse(localStorage.getItem("complaints")) || [];
    complaints.push({ name, complaint, date: new Date().toLocaleString() });
    localStorage.setItem("complaints", JSON.stringify(complaints));

    alert("Complaint submitted successfully!");
    document.getElementById("tenantName").value = "";
    document.getElementById("complaintText").value = "";
}

// Handle rent payment record
function recordPayment() {
    const tenant = document.getElementById("tenantPaymentName").value;
    const amount = document.getElementById("paymentAmount").value;

    if (!tenant || !amount) {
        alert("Please enter tenant name and amount!");
        return;
    }

    const payments = JSON.parse(localStorage.getItem("payments")) || [];
    payments.push({ tenant, amount, date: new Date().toLocaleString() });
    localStorage.setItem("payments", JSON.stringify(payments));

    alert("Payment recorded successfully!");
    document.getElementById("tenantPaymentName").value = "";
    document.getElementById("paymentAmount").value = "";
}

// Show all complaints in console (for testing)
function viewComplaints() {
    console.table(JSON.parse(localStorage.getItem("complaints")) || []);
}

// Show all payments in console (for testing)
function viewPayments() {
    console.table(JSON.parse(localStorage.getItem("payments")) || []);
}