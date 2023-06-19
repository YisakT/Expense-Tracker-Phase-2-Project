import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import BudgetForm from "./BudgetForm";
import ExpenseSummary from "./ExpenseSummary";

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const remainingBudget = budget - totalExpenses;

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      <ExpenseSummary totalExpenses={totalExpenses} remainingBudget={remainingBudget} />
      <BudgetForm setBudget={setBudget} />
    </div>
  );
}

export default ExpenseTracker;
