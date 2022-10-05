
//import ExpenseItem from "./Components/ExpenceItem";

import Expenses from "./Components/Expenses/Expenses";
import NewExpenses from "./Components/NewExpenses/NewExpense.js";
const expences=[
  {id:1,
      title:'tea', 
      amount:2.99,
  date:new Date(2022,12,28)},
  {id:2,
      title:'capuchino', 
      amount:2.99,
  date:new Date(2022,11,31)},
  {id:3,
    title:'coffe', 
    amount:1.34,
date:new Date(2022,11,31)},
{id:4,
  title:'black-bear', 
  amount:2.87,
date:new Date(2022,11,31)},
{id:5,
  title:'dith-wish', 
  amount:3.01,
date:new Date(2022,11,31)}
];


function App() {
  return (
    <div >
     <div>I want learn english</div>
     <NewExpenses></NewExpenses>
     <Expenses item={expences}></Expenses>
    
     
     
    </div>
    

  );
}

export default App;
