import React, { useState, useContext } from 'react';
import { ExpenseContext } from './ExpenseProvider';

function ExpensePage() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [classification, setClassification] = useState('');
  const [receiptAvailable, setReceiptAvailable] = useState(false);
  const { addExpense, expenses } = useContext(ExpenseContext);

  const handleSubmit = event => {
    event.preventDefault();
    addExpense({ description, amount, classification, receiptAvailable });
    setDescription('');
    setAmount('');
    setClassification('');
    setReceiptAvailable(false);
  };

  return (
    <div style={{ backgroundImage: 'url("https://drive.google.com/uc?export=view&id=1L8d_QFbp4H6v1KieNXgnkoC0nKPpwaXP")', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <div className="ExpensePage">
        <div className="content">
          <h2>Add Expense</h2>
          <form onSubmit={handleSubmit} className="form-container">
            <label>
              Description:
              <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
            </label>
            <label>
              Amount:
              <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
            </label>
            <label>
              Classification:
              <input type="text" value={classification} onChange={e => setClassification(e.target.value)} />
            </label>
            <label>
              Receipt Available:
              <input type="checkbox" checked={receiptAvailable} onChange={e => setReceiptAvailable(e.target.checked)} />
            </label>
            <button type="submit">Add Expense</button>
          </form>

          <h2>Expenses</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Classification</th>
                <th>Receipt Available</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr key={expense.id}>
                  <td>{expense.description}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.classification}</td>
                  <td>{expense.receiptAvailable ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>

         </div>
      </div>

      <style>{`
       .table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }

        .table th,
        .table td {
          padding: 8px;
          text-align: left;
          border: 1px solid gray;
        }
        .table th {
          background-color: lightgray;
        .buttons {
          margin-top: 20px;
        }

        .buttons button {
          margin-right: 10px;
        }
      `}</style>
    </div>
  );
}

export default ExpensePage;



