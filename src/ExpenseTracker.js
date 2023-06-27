import React, { useContext } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import BudgetForm from "./BudgetForm";
import ExpenseSummary from "./ExpenseSummary.js";
import { ExpenseContext } from './ExpenseProvider';

function ExpenseTracker() {
  const { expenses, addExpense, deleteExpense, budget, setBudget } = useContext(ExpenseContext);

  const totalExpenses = expenses.reduce(
    (total, expense) => total + parseFloat(expense.amount),
    0
  );

  const remainingBudget = budget - totalExpenses;

  const handleCurrencyConversion = () => {
    // Perform currency conversion logic here
    // You can make an API call using Axios to retrieve exchange rates
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <BudgetForm setBudget={setBudget} />

      <h2>Add Expense</h2>
      <ExpenseForm />

      <h2>Expenses</h2>
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />

      <h2>Expense Summary</h2>
      <ExpenseSummary totalExpenses={totalExpenses} remainingBudget={remainingBudget} />

      <button onClick={handleCurrencyConversion}>Convert Currency</button>
      <button>Submit Expense</button>
    </div>
  );
}

export default ExpenseTracker;
