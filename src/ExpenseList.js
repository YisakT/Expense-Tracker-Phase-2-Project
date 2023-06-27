import React from "react";

function ExpenseList({ expenses = [], deleteExpense }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Classification</th>
          <th>Receipt</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index}>
            <td>{expense.description}</td>
            <td>${expense.amount}</td>
            <td>{expense.classification}</td>
            <td>{expense.hasReceipt}</td>
            <td>
              <button onClick={() => deleteExpense(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


export default ExpenseList;

