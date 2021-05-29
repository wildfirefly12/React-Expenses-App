import "./ExpenseItem.css";

function ExpenseItem(props){
    var month = props.date.toLocaleString('en-US', {month: 'long'});
    var day = props.date.toLocaleString('en-US', {day: 'numeric'});
    var year = props.date.toLocaleString('en-US', {year: 'numeric'});
    return <div className="expense-item">
        <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    </div>
}

export default ExpenseItem;