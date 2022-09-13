import './FormComponent.css'
import {useState,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';

function FormComponent(props){
    
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)
    const [formValid,setFormValid] = useState(false)

    function inputTitle(event){
        setTitle(event.target.value)
    }
    function inputAmount(event){
        setAmount(event.target.value)
    }
    function saveItem(event){
        event.preventDefault()
        const itemData = {
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount(0)
    }

    useEffect(()=>{
        const checkData = title.trim().length >0 && amount !== 0
        setFormValid(checkData)
    },[title,amount])
    
    return(
        <div>
            <form onSubmit={saveItem}>
                <div className = "form-control">
                    <label>Detail</label>
                    <input type = "text" placeholder="Detail" onChange={inputTitle} value={title}></input>    
                </div>
                <div className = "form-control">
                    <label>Amount</label>
                    <input type = "number" placeholder="Amount (+income -expenses)" onChange={inputAmount} value={amount}></input>    
                </div>
                <div>
                    <button type="submit" className="btn" disabled={!formValid}>Submit Detail</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent