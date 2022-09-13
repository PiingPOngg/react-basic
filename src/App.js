import Transaction from "./components/Transaction";
import './App.css'
import FormComponent from "./components/FormComponent"
import { useEffect, useState } from "react";
import DataContext from "./data/dataContext";
import ReportComponent from "./components/ReportComponent";
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

function App() {
  const design = {color:'red', textAlign:"center",fontSize:'1.5rem'}

  const [items,setItems] = useState([])
  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, setReportExpense]  = useState(0)

  function onAddNewItem(newItem){
    setItems((prevItem)=>{
      return [newItem,...prevItem]
    })
  }
  useEffect(()=>{
    const amounts = items.map(items=>items.amount)
    const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const expense = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0)) * -1
    setReportIncome(income.toFixed(2))
    setReportExpense(expense.toFixed(2))
  },[items,reportIncome,reportExpense])


  return (
    <DataContext.Provider value={{income: reportIncome,expense: reportExpense}}>
      <div className="container">
        <h1 style = {design}>Expenses Report</h1>
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">Account Infomation</Link>
              </li>
              <li>
                <Link to="/insert">Insert Detail</Link>
              </li>
            </ul>
            <Routes>
              <Route path="/" element={<ReportComponent/>} />
              <Route path="/insert" element={<><FormComponent onAddItem = {onAddNewItem}/><Transaction items = {items}/></>} />
            </Routes>
          </div>
        </Router>
      </div>
    </DataContext.Provider>
  );
}

export default App;
