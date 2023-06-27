import React, { useState, useContext } from 'react';
import { ExpenseContext } from './ExpenseProvider';

const ExpenseForm = () => {
  const { addExpense } = useContext(ExpenseContext);

  const [formState, setFormState] = useState({
    description: '',
    amount: '',
    classification: '',
    receiptAvailable: false,
  });

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckboxChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addExpense(formState);
    setFormState({
      description: '',
      amount: '',
      classification: '',
      receiptAvailable: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input
          name="description"
          type="text"
          value={formState.description}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Amount:
        <input
          name="amount"
          type="number"
          value={formState.amount}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Classification:
        <input
          name="classification"
          type="text"
          value={formState.classification}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Receipt Available:
        <input
          name="receiptAvailable"
          type="checkbox"
          checked={formState.receiptAvailable}
          onChange={handleCheckboxChange}
        />
      </label>

      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
