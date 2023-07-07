import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import ExpensesPage from './ExpensesPage';
import BudgetBreakdownPage from './BudgetBreakdownPage';
import ExpenseTracker from './ExpenseTracker';
import ExpenseSummary from './ExpenseSummary.js';

function App() {
  return (
    <Router>
      <nav style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1em' }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/tracker" style={linkStyle}>Tracker</Link>
        <Link to="/expenses" style={linkStyle}>Expenses</Link>
        <Link to="/budget" style={linkStyle}>Budget</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="/budget" element={<BudgetBreakdownPage />} />
        <Route path="/tracker" element={<ExpenseTracker />} />
        
      </Routes>
    </Router>
  );
}


const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  padding: '0.5em 1em',
  backgroundColor: '#333',
  borderRadius: '4px',
  marginRight: '0.5em',
};

export default App;




