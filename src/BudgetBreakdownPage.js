
import React, { useContext } from "react";
import ExpenseSummary from "./ExpenseSummary.js";
import { ExpenseContext } from './ExpenseProvider';

function BudgetBreakdownPage() {
  const { expenses, budget } = useContext(ExpenseContext);
  
  const totalExpenses = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
  const remainingBudget = budget - totalExpenses;

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
