import React, { useState } from 'react'
import Button from './Button'

const FormSplitBill = ({selectedFriend , onSplitBill}) => {

  const [billValue , setBillValue] = useState("")
  const [yourExpense , setYourExpense]  = useState("")
  let friendCollection = billValue ? billValue - yourExpense : ""
  const [whoIsPaying , setWhoIsPaying] = useState('user')
  
  function handleSubmit(e){
    e.preventDefault();
    if(!billValue || !yourExpense) return;

    onSplitBill(whoIsPaying === "user" ? friendCollection : -yourExpense )
  }

  return (
    <form className='form-split-bill' onSubmit = {handleSubmit} >

    <h2>SPLIT A BILL WITH {selectedFriend.name}</h2>

    <label>💵 Bill Value</label>
    <input type = 'text' value ={billValue} onChange={(e)=> setBillValue(Number(e.target.value)) } />

    <label>🕴️ Your Expense</label>
    <input type = 'text' value ={yourExpense} onChange={(e) => setYourExpense(Number(e.target.value > billValue ? yourExpense : Number(e.target.value)))} />

    <label>🧑‍🤝‍🧑 {selectedFriend.name} expense</label>
    <input type = 'text' disabled value={friendCollection} />

    <label>💲 whose paying the Bill</label>
    <select value ={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)} >
        <option value ="user" >You</option>
        <option value ="friend" >{selectedFriend.name}</option>
    </select>

    <Button>Split Bill</Button>
    </form>
  )
}

export default FormSplitBill