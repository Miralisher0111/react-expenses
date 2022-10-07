import React, { useState } from "react";
import './ExpenseForm.css'

function ExpenseForm(props) {

    const[entredTitle,NewEntredTitle]=useState('');
    const[entredAmount,NewEntredAmount]=useState('');
    const[entredDate,NewEntredDate]=useState('');

    // const [state, setState] = useState(
    //     {
    //         title: '',
    //         amount: '',
    //         date: ''

    //     })


    const titleChangeHandler = (event) => {
        //setState({...state,title:event.target.value})
    NewEntredTitle(event.target.value)
        console.log(event.target.value);
    }

    const amountChangeHandler = (event) => {
        //setState({...state,amount:event.target.value})
        NewEntredAmount(event.target.value)
       console.log(event.target.value);
    }


    const dateChangeHandler = (event) => {
       // setState({...state,date:event.target.value})
       
       NewEntredDate(event.target.value)
       console.log(event.target.value);
    }
const SubmitHandler=(event)=>{

    event.preventDefault();
    const ExpenseDate={
         title:entredTitle,
         amount:entredAmount,
         date: new Date(entredDate)
     };
   // console.log(ExpenseDate);
    props.onSavedExpenseDate(ExpenseDate);
    NewEntredTitle('');
     NewEntredAmount('');
     NewEntredDate('');
}

    return (

        <form  onSubmit={SubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>title</label>
                    <input type='text'value={entredTitle} onChange={titleChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>amount</label>
                    <input type='number' min="0.01" step="0.01" value={entredAmount} onChange={amountChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" value={entredDate} onChange={dateChangeHandler} />
                </div>

                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>

    )
}


export default ExpenseForm;