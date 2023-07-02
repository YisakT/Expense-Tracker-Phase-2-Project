
import React from 'react';
import { ExpenseConsumer } from './ExpenseProvider';

const ExpenseList = () => {
  return (
    <ExpenseConsumer>
      {({ expenses, deleteExpense }) => (
        <div>
          {expenses.map((expense, index) => (
            <div key={expense.id}>
              <p>{expense.description}: ${expense.amount}</p>
              <button onClick={() => deleteExpense(expense.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </ExpenseConsumer>
  );
};

export default ExpenseList;
