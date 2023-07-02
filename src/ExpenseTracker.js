
// import React, { useContext } from "react";
// import ExpenseForm from "./ExpenseForm";
// import ExpenseList from "./ExpenseList";
// import BudgetForm from "./BudgetForm";
// import ExpenseSummary from "./ExpenseSummary.js";
// import { ExpenseContext } from './ExpenseProvider';

// function ExpenseTracker() {
//   const { expenses, addExpense, deleteExpense, budget, updateBudget } = useContext(ExpenseContext);

//   const totalExpenses = expenses.reduce(
//     (total, expense) => total + parseFloat(expense.amount),
//     0
//   );

//   const remainingBudget = budget - totalExpenses;


//   return (
//     <div>
//       <h1>Expense Tracker</h1>
//       <BudgetForm updateBudget={updateBudget} />

//       <h2>Add Expense</h2>
//       <ExpenseForm />

//       <h2>Expenses</h2>
//       <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />

//       <h2>Expense Summary</h2>
//       <ExpenseSummary totalExpenses={totalExpenses} remainingBudget={remainingBudget} />

      
//     </div>
//   );
// }

// export default ExpenseTracker;


import React, { useContext } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import BudgetForm from "./BudgetForm";
import ExpenseSummary from "./ExpenseSummary.js";
import { ExpenseContext } from './ExpenseProvider';
import piggyBankImage from './images/piggy-bank-and-budget-money.jpg';

function ExpenseTracker() {
  const { expenses, addExpense, deleteExpense, budget, updateBudget } = useContext(ExpenseContext);

  const totalExpenses = expenses.reduce(
    (total, expense) => total + parseFloat(expense.amount),
    0
  );

  const remainingBudget = budget - totalExpenses;

  return (
    <div style={{ backgroundImage: `url(${piggyBankImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <h1 style={{ color: 'white' }}>Expense Tracker</h1>
      <BudgetForm updateBudget={updateBudget} />

      <h2 style={{ color: 'white' }}>Add Expense</h2>
      <ExpenseForm />

      <h2 style={{ color: 'white' }}>Expenses</h2>
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />

      <h2 style={{ color: 'white' }}>Expense Summary</h2>
      <div style={{ color: 'white' }}>
        <ExpenseSummary totalExpenses={totalExpenses} remainingBudget={remainingBudget} />
      </div>

      <style>{`
        button {
          color: white;
          background-color: orange;
          border: none;
          padding: 10px 20px;
          margin: 10px 0;
          cursor: pointer;
        }

        .total-expenses {
          color: white;
          font-weight: bold;
        }

        .remaining-budget {
          color: white;
          font-weight: bold;
        }
        
        .expense-item {
          color: white;
        }
      `}</style>
    </div>
  );
}

export default ExpenseTracker;

