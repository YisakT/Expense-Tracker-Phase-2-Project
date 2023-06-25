import React from "react";
import ExpenseSummary from "./ExpenseSummary.js";

function BudgetBreakdownPage({ totalExpenses, remainingBudget }) {
  return (
    <div>
      <h1>Budget Breakdown Page</h1>
      <ExpenseSummary
        totalExpenses={totalExpenses}
        remainingBudget={remainingBudget}
      />
    </div>
  );
}

export default BudgetBreakdownPage;
