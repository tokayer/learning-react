import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false);

  const saveExpenseDataHandler = enteredExpenseDate => {
    const expenseData = {
      ...enteredExpenseDate,
      id: Math.random().toString()
    }

    props.onAddExpense(expenseData);

    toggleDisplayFormHandler();
  }

  const toggleDisplayFormHandler = () => {
    console.log('hello')
    setDisplayForm((prevDisplayForm) => !prevDisplayForm);
  }

  if (!displayForm) {
    return (
      <div className="new-expense">
        <button onClick={toggleDisplayFormHandler}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onToggleDisplayForm={toggleDisplayFormHandler} />
    </div>
  );
}

export default NewExpense;