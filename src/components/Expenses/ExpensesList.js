import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

function ExpensesList(props) {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map(expenseItemData => (
        <ExpenseItem key={expenseItemData.id} expense={expenseItemData} />
      ))}
    </ul>
  );
}

export default ExpensesList;
