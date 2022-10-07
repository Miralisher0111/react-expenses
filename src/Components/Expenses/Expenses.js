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

            <ExpenseItem

                id={props.item[0].id}
                title={props.item[0].title}
                amount={props.item[0].amount}
                date={props.item[0].date}
            >

            </ExpenseItem>


            <ExpenseItem
                id={props.item[1].id}
                title={props.item[1].title}
                amount={props.item[1].amount}
                date={props.item[1].date}
            ></ExpenseItem>


            <ExpenseItem
                id={props.item[2].id}
                title={props.item[2].title}
                amount={props.item[2].amount}
                date={props.item[2].date}
            ></ExpenseItem>

            <ExpenseItem
                id={props.item[3].id}
                title={props.item[3].title}
                amount={props.item[3].amount}
                date={props.item[3].date}
            ></ExpenseItem>

            <ExpenseItem
                id={props.item[4].id}
                title={props.item[4].title}
                amount={props.item[4].amount}
                date={props.item[4].date}
            ></ExpenseItem>
        </div>
    );
}



export default expenses