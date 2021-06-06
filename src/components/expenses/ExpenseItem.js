import React, { useState } from 'react';

import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const changeTitleHandler = () => {
        setTitle("Changed!");
    }

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={changeTitleHandler}>Change Title</button>
        </div>)
}

export default ExpenseItem;