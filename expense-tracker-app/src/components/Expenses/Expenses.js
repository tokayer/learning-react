import './Expenses.css';
import './ExpenseItem';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import { useState } from 'react';

function Expenses(props) {
  const [filterValue, setFilterValue] = useState('2020');

  const onFilterHandler = value => {
    setFilterValue(value);
    console.log(value);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterValue} onFilter={onFilterHandler} />
        <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date} />
        <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date} />
        <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date} />
        <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date} />
      </Card>
    </div>
  );
}

export default Expenses;