import React from "react";

function ExpenseList({ expenses = [], deleteExpense }) {
  return (
    <ul>
      {expenses.map((expense, index) => (
        <li key={index}>
          {expense.description} - ${expense.amount}
          <button onClick={() => deleteExpense(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;

