import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props){

    const expenses = props.expenses;

    const filterExpenseDataHandler = (year) => {
        const filteredExpenses = expenses.filter((expense) => expense.date.toLocaleString('en-US', {year: 'numeric'}) === year);
        console.log(filteredExpenses);
    }

    return (
        <div className={"expenses"}>
            <ExpenseFilter onFilterExpenseDataHandler={filterExpenseDataHandler}/>
            {props.expenses.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>)}
        </div>
    )
}

export default Expenses;