import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";

function Expenses(props){

    const expenses = props.expenses;

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterExpenseDataHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p>No expenses found.</p>

    if(filteredExpenses.length > 0){
        expensesContent = filteredExpenses.map(expense => <ExpenseItem
            key={expense.key}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}/>)
    }

    return (
        <div className={"expenses"}>
            <ExpenseFilter selected={filteredYear} onFilterExpenseDataHandler={filterExpenseDataHandler}/>
            {expensesContent}
        </div>
    )
}

export default Expenses;