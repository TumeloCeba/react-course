import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './Expenses.css';

const Expenses = (props) => {
    return (
      <Card className = 'expenses'>
        {props?.expenses?.map((expense) => <ExpenseItem key={expense.id} expense={expense} />)}
      </Card>
    )
};

export default Expenses;
