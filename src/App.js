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
      <nav>
        <Link to="/">Home</Link>
        <Link to="/expenses">Expenses</Link>
        <Link to="/budget">Budget</Link>
        <Link to="/tracker">Tracker</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="/budget" element={<BudgetBreakdownPage />} />
        <Route path="/tracker" element={<ExpenseTracker />} />
        {/* other routes can be added here */}
      </Routes>
    </Router>
  );
}

export default App;
