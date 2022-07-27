import './Expenses.css';
import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = props => {
  const { expensesArr } = props;

  const [selectedYear, setSelectedYear] = useState('2020');

  function selectChangedHandler(selectedFilterParameterYear) {
    console.log('AHOY from Expenses.js ', selectedFilterParameterYear);
    setSelectedYear(selectedFilterParameterYear);
  }

  const filteredExpenses = expensesArr.filter(
    exp => exp.date.getFullYear() === Number(selectedYear)
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onChangedYear={selectChangedHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
