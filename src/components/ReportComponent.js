import { useContext } from "react"
import DataContext from "../data/dataContext"
import './ReportComponent.css'

function ReportComponent(){
    const {income,expense} = useContext(DataContext)

    function formatNumber(num){
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <div>
            <h4>Remaining (SGD)</h4>
            <h1>${formatNumber((income-expense).toFixed(2))}</h1>
            <div className="report-container">
                <div>
                    <h4>Income</h4>
                    <p className="report plus">${formatNumber(income)}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p className="report minus">${formatNumber(expense)}</p>
                </div>
            </div>
        </div>
    )
}
export default ReportComponent