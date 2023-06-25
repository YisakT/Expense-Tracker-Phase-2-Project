import React from "react";

function ExpenseSummary({ totalExpenses, remainingBudget }) {
  return (
    <div>
      <p>Total Expenses: ${totalExpenses}</p>
      <p>Remaining Budget: ${remainingBudget}</p>
    </div>
  );
}

export default ExpenseSummary;
