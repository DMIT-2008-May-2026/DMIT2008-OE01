//Instruction On expense-tracker-code-explained.md
import theExpenses from "./expense-data.js";


const expenseContainer = document.getElementById("expense-container");


function renderExpenses(expenses) {
  expenseContainer.innerHTML = "";

  expenses.forEach((expense) => {
    expenseContainer.innerHTML += `
      <div class="card" id="${expense.id}">
        <div class="header">
          <div>
            <div class="title">${expense.title}</div>
            <div class="meta category">${expense.category}</div>
          </div>
          <div class="amount">${expense.amount}</div>
        </div>
        <div class="meta date">${expense.date}</div>
        <div class="actions">
          <button class="edit-btn" id=${expense.id}>Edit</button>
          <button class="delete-btn" id=${expense.id}>Delete</button>
        </div>
      </div>`;
  });
}

renderExpenses(theExpenses);
