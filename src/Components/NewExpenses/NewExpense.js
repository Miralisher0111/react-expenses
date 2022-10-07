import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

function NewExpenses(props) {

const saveExpeseDateHandler=(entredExpenseDate)=>{
    const expenseDate={
        ...entredExpenseDate,
        id:Math.random().toString()
    };
    //console.log(expenseDate);
    props.onAddExpense(expenseDate)
}



return(
    <div className="new-expense">
<ExpenseForm onSavedExpenseDate={saveExpeseDateHandler}></ExpenseForm>
    </div>
)    
}

export default NewExpenses;

