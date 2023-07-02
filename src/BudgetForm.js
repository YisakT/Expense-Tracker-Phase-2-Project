
import React, { useState } from "react";

interface Props {
  updateBudget: (value: number) => void;
}

const BudgetForm: React.FC<Props> = ({ updateBudget }) => {
  const [budget, setBudgetValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (budget !== "" && !isNaN(Number(budget))) {
      updateBudget(parseFloat(budget));
      setBudgetValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Enter Budget"
        value={budget}
        onChange={(e) => setBudgetValue(e.target.value)}
      />
      <button type="submit">Set Budget</button>
    </form>
  );
}

export default BudgetForm;
