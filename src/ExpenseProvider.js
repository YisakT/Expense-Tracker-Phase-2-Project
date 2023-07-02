
import React, { Component } from 'react';
import axios from 'axios';

const ExpenseContext = React.createContext();

class ExpenseProvider extends Component {
  state = {
    expenses: [],
    budget: null,
    apiUrl: "http://localhost:3333"
  };

  componentDidMount() {
    this.getExpenses();
    this.getBudget();
  }

  getExpenses = () => {
    axios
      .get(`${this.state.apiUrl}/expenses`)
      .then(response => {
        this.setState({ expenses: response.data });
      })
      .catch(error => console.log(error));
  };

  getBudget = () => {
    axios
      .get(`${this.state.apiUrl}/budget`)
      .then(response => {
        if (response.data.length > 0) {
          this.setState({ budget: response.data[0].total });
        }
      })
      .catch(error => console.log(error));
  };

  addExpense = (expense) => {
    axios
      .post(`${this.state.apiUrl}/expenses`, expense)
      .then(response => {
        this.setState({ expenses: [...this.state.expenses, response.data] });
      })
      .catch(error => console.log(error));
  };

  deleteExpense = (id) => {
    axios
      .delete(`${this.state.apiUrl}/expenses/${id}`)
      .then(response => {
        this.setState({ expenses: this.state.expenses.filter(expense => expense.id !== id) });
      })
      .catch(error => console.log(error));
  };

  addBudget = (newBudget) => {
    axios
      .post(`${this.state.apiUrl}/budget`, { id: 1, total: newBudget })
      .then(response => {
        this.setState({ budget: response.data.total });
      })
      .catch(error => console.log(error));
  };

  updateBudget = (updatedBudget) => {
    axios
      .put(`${this.state.apiUrl}/budget/1`, { total: updatedBudget })
      .then(response => {
        this.setState({ budget: response.data.total });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <ExpenseContext.Provider
        value={{
          expenses: this.state.expenses,
          budget: this.state.budget,
          addExpense: this.addExpense,
          deleteExpense: this.deleteExpense,
          addBudget: this.addBudget,
          updateBudget: this.updateBudget,
        }}
      >
        {this.props.children}
      </ExpenseContext.Provider>
    );
  }
}

const ExpenseConsumer = ExpenseContext.Consumer;

export { ExpenseProvider, ExpenseConsumer, ExpenseContext };
