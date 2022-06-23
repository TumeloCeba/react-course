import './ExpenseDate.css';


const ExpenseDate = (props) => {
  /*toLocaleString turns the date to a human readable format */
  const locale = "en-US";
  const month = props.date.toLocaleString(locale, { month: "long" });
  const day = props.date.toLocaleString(locale, { day: "numeric" });
  const year = props.date.toLocaleString(locale, { year: "numeric" });

  return (
    <div className = 'expense-date'>
      <div className = 'expense-date__month'>{month}</div>
      <div className = 'expense-date__year'>{year}</div>
      <div className = 'expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;
