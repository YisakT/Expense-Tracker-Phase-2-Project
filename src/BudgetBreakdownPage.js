import React, { useContext } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import ExpenseSummary from "./ExpenseSummary.js";
import { ExpenseContext } from './ExpenseProvider';

function BudgetBreakdownPage() {
  const { expenses, budget } = useContext(ExpenseContext);

  const totalExpenses = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
  const remainingBudget = budget - totalExpenses;

  const data = [
    { name: "Total Expenses", value: totalExpenses },
    { name: "Remaining Budget", value: remainingBudget },
  ];

  const colors = ["#FF5722", "#3F51B5"];

  return (
    <div style={{ backgroundImage: "url(https://drive.google.com/uc?export=view&id=1Bq8FBY2GYXZGbNKDX2zsU0ad03Mp15os)", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
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



