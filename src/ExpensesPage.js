// import React, { useState, useContext } from 'react';
// import { ExpenseContext } from './ExpenseProvider';
// import './ExpensePage.css'

// function ExpensePage() {
//     const [description, setDescription] = useState('');
//     const [amount, setAmount] = useState('');
//     const [classification, setClassification] = useState('');
//     const [receiptAvailable, setReceiptAvailable] = useState(false);
//     const { addExpense, expenses } = useContext(ExpenseContext);

//     const handleSubmit = event => {
//         event.preventDefault();
//         addExpense({ description, amount, classification, receiptAvailable });
//         setDescription('');
//         setAmount('');
//         setClassification('');
//         setReceiptAvailable(false);
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Description:
//                     <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
//                 </label>
//                 <label>
//                     Amount:
//                     <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
//                 </label>
//                 <label>
//                     Classification:
//                     <input type="text" value={classification} onChange={e => setClassification(e.target.value)} />
//                 </label>
//                 <label>
//                     Receipt Available:
//                     <input type="checkbox" checked={receiptAvailable} onChange={e => setReceiptAvailable(e.target.checked)} />
//                 </label>
//                 <button type="submit">Add Expense</button>
//             </form>
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>Description</th>
//                         <th>Amount</th>
//                         <th>Classification</th>
//                         <th>Receipt Available</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {expenses.map((expense) => (
//                         <tr key={expense.id}>
//                             <td>{expense.description}</td>
//                             <td>{expense.amount}</td>
//                             <td>{expense.classification}</td>
//                             <td>{expense.receiptAvailable ? "Yes" : "No"}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default ExpensePage;

import React, { useState, useContext } from 'react';
import { ExpenseContext } from './ExpenseProvider';
import './ExpensePage.css';

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

        <div className="background-image"></div>
      </div>
    </div>
  );
}

export default ExpensePage;
