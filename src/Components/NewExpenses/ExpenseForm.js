import React,{useState} from "react";
import'./ExpenseForm.css'

function ExpenseForm(){

    const[entredTitle,NewEntredTitle]=useState('');
    const[entredAmount,NewEntredAmount]=useState('');
    const[entredDate,NewEntredDate]=useState('');
    

   const titleChangeHandler=(event)=>{
    NewEntredTitle(event.target.value)
console.log(event.target.value);
   }

   const amountChangeHandler=(event)=>{
    NewEntredTitle(event.target.value)
console.log(event.target.value);
   }
   

   const dateChangeHandler=(event)=>{
    NewEntredTitle(event.target.value)
console.log(event.target.value);
   }
   
   
    return(
    
            <form action="/Post" method="GET">
<div className="new-expense__controls">
<div className="new-expense__control">
    <label>title</label>
    <input type='text' onChange={titleChangeHandler}/>
</div>

<div className="new-expense__control">
    <label>amount</label>
    <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler}/>
</div>

<div className="new-expense__control">
    <label>date</label>
    <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
</div>

<div className="new-expense__actions">
    <button type="submit">Add Expense</button>
</div>
</div>
            </form>
       
    )
}


export default ExpenseForm;