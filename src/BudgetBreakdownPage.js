


import React, { useContext } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import ExpenseSummary from "./ExpenseSummary.js";
import { ExpenseContext } from './ExpenseProvider';
import budgetBackgroundImage from './images/budget-word-on-white-block.jpg';

function BudgetBreakdownPage() {
  const { expenses, budget } = useContext(ExpenseContext);

  const totalExpenses = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
  const remainingBudget = budget - totalExpenses;

  // Prepare data for the pie chart
  const data = [
    { name: "Total Expenses", value: totalExpenses },
    { name: "Remaining Budget", value: remainingBudget },
  ];

  // Define custom colors for the pie chart
  const colors = ["#FF5722", "#3F51B5"];

  return (
    <div style={{ backgroundImage: `url(${budgetBackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <h1>Budget Breakdown Page</h1>
      <ExpenseSummary
        totalExpenses={totalExpenses}
        remainingBudget={remainingBudget}
      />

      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie dataKey="value" data={data} cx="50%" cy="50%" outerRadius={80} fill="#8884d8">
            {data.map((entry, index) => (
              <Cell key={index} fill={colors[index % colors.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <style>{`
        h1, h2, h3 {
          color: white;
        }
      `}</style>
    </div>
  );
}

export default BudgetBreakdownPage;


// export default BudgetBreakdownPage;

