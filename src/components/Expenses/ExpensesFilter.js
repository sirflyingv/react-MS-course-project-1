import './ExpensesFilter.css';

const ExpensesFilter = props => {
  // TO DO rename "changeYear" stuff to changeYearFilter or something like this
  function yearFilterChangeHandler(e) {
    props.onChangedYear(e.target.value);
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearFilterChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
