import React, { useState } from "react";

interface Props {
  setBudget: (value: number) => void;
}

const BudgetForm: React.FC<Props> = ({ setBudget }) => {
  const [budget, setBudgetValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (budget !== "" && !isNaN(Number(budget))) {
      setBudget(parseFloat(budget));
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
