import './ExpenseItem.css'

function ExpenseItem() {
  const date = new Date(2022, 11, 17);
  const title = "Car Insurance";
  const amount = 345;

  return (
    <div className='expense-item'>
      <div>{date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;