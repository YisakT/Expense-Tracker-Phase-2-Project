import React from 'react';
import ReactDOM from 'react-dom';
import { ExpenseProvider } from './ExpenseProvider';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ExpenseProvider>
      <App />
    </ExpenseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
