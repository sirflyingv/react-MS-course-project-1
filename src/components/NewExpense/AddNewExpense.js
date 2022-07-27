function AddNewExpense(props) {
  function AddNewExpenseClickHandler() {
    if (!props.formActive) props.onClickButton();
  }
  return <button onClick={AddNewExpenseClickHandler}>Add New Expense</button>;
}

export default AddNewExpense;
