import React, { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import AddNewExpense from './AddNewExpense';

function NewExpense(props) {
  //
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }

  const [formActive, setFormActive] = useState(false);

  function addNewExpenseButtonHandler() {
    setFormActive(true);
  }

  function cancelButtonHandler() {
    setFormActive(false);
  }

  return (
    <div className="new-expense">
      {formActive ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          toCloseForm={cancelButtonHandler}
        />
      ) : (
        <AddNewExpense
          formActive={formActive}
          onClickButton={addNewExpenseButtonHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
