import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

const ExpenseItem = (props) => {

  return(
  <Card className='expense-item'>
    <ExpenseDate date={props.expense.date}/>
    <div className = 'expense-item__description'>
      <h2>{props.expense.title}</h2>
      <div className='expense-item__price'>{props.expense.amount}</div>
    </div>
  </Card>)  
}  

export default ExpenseItem;

/*

For react you must only have one element returned and every other element must be nested
inside it

eg. 

return(
  <div>
    Expense item!
  </div>)  
*/