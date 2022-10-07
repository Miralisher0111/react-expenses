import ExpenseItem from "./ExpenceItem";
import ExpensesFilter from "./ExpenseFilter";


function expenses(props) {

const selectedYearHandler=(selectedYear)=>{
console.log('expenses.js !!!')
console.log(selectedYear);
}

    return (
        <div>
            <ExpensesFilter onSelectedYear={selectedYearHandler}></ExpensesFilter>
            
            {props.item.map(
                (expense)=> 
                <ExpenseItem
                id={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                ></ExpenseItem>
            )}
        
            
            

</div>

    );
}



export default expenses