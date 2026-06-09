import expenses from './expense-data.js';

// custom components
import './components/ExpenseSearch.js';
import './components/ExpenseForm.js';


const expenseContainer = document.getElementById('expense-container');

function renderExpenses(expenseData) {
  expenseContainer.innerHTML = expenseData.map(
    (expense) => `
      <div class="card">
        <div class="header">
          <div>
            <div class="title">${expense.title}</div>
            <div class="meta category">${expense.category}</div>
          </div>
          <div class="amount">$${expense.amount}</div>
        </div>
        <div class="meta date">${expense.date}</div>
        <div class="actions">
          <button class="edit-btn" data-id="${expense.id}">Edit</button>
          <button class="delete-btn" data-id="${expense.id}">Delete</button>
        </div>
      </div>
    `
  ).join("")
}

function addExpense({title, category, date, amount}) {
  const maxId = expenses.reduce(
    (highest, expense) => Math.max(highest, expense.id),
    0
  );

  expenses.push({
    id: maxId + 1,  // tada!
    title,
    category,
    date,
    amount
  });
}

function updateExpense(id, fields) {
  const expense = expenses.find((expense) => expense.id === id);
  if (expense) Object.assign(expense, fields); 
}

function deleteExpense(id) {
  const index = expenses.findIndex((expense) => expense.id === id);
  if (index !== -1) expenses.splice(index, 1) 
}

function searchExpenses(query) {
  const q = query.toLowerCase();
  return expenses.filter(
    (expense) => expense.title.toLowerCase().includes(q)
  );
}

function handleFormSubmit(event) {
  event.preventDefault();
  const formFields = readFormData();

  if (!validateFormData(formFields)) {
    alert("Please fill in all fields correctly.");
    return;
  }
  // we'll need to include this somehow:
  // if (submitButton.innerText === "Add Expense") {
  //   addExpense(formFields);
  // } else {
  //   const id = parseInt(document.getElementById("expense-id").value);
  //   updateExpense(id, formFields);
  // }

  // renderExpenses(expenses);
  resetForm();
}

function handleSearch(event) {
  const filteredExpenses = searchExpenses(event.target.value);
  renderExpenses(filteredExpenses);
}

function handleExpenseContainerClick(event) {
  const id = parseInt(event.target.dataset.id);

  if (event.target.classList.contains("delete-btn")) {
    deleteExpense(id);
    renderExpenses(expenses);
  } else if (event.target.classList.contains("edit-btn")) {
    const expense = expenses.find((e) => e.id === id);
    if (expense) populateForm(expense);
  }
}


expenseContainer.addEventListener("click", handleExpenseContainerClick);

document.addEventListener("DOMContentLoaded", (event) => { 
  renderExpenses(expenses);
});
