import React, { useContext, useState } from "react"
import { ItemsContext } from "../contexts/ItemsContext"

export default () => {
  const [date, setDate] = useState(getCurrentDate)
  const [description, setDescription] = useState()
  const [type, setType] = useState()
  const [amount, setAmount] = useState()
  const { addItem } = useContext(ItemsContext)

  function getCurrentDate() {
    const date = new Date()
    return `${date.getFullYear()}-${("0" + date.getMonth()).slice(-2)}-${date.getDate()}` 
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    // console.log(date, description, type, amount)
    addItem(date, description, type, amount)
  }

  return (
    <div>
      <h1>Expense Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date: </label>
          <input
            id="date"
            name="date"
            type="date"
            defaultValue={date}
            onChange={(e)=> setDate(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="description">Description: </label>
          <input id="description" name="description" type="text" onChange={(e)=> setDescription(e.target.value)} required />
        </div>

        <div>
          <label htmlFor="type">Type: </label>
          <select id="type" name="type" onChange={(e)=> setType(e.target.value)}>
            <option value="cash">cash</option>
            <option value="debit">debit</option>
            <option value="credit">credit</option>
            <option value="check">check</option>
          </select>
        </div>

        <div>
          <label htmlFor="amount">Amount: </label>
          <input id="amount" name="amount" type="number" min="1" onChange={(e)=> setAmount(e.target.value)} required />
        </div>

        <input type="submit" value="Submit" />
        <input type="reset" value="Reset" />
      </form>
    </div>
  )
}
