import React, { useContext, useState } from "react"
import { ItemsContext } from "../contexts/ItemsContext"

export default props => {
  const { updateItem } = useContext(ItemsContext)
  const [id] = useState(props.itemToEdit.id)
  const [date, setDate] = useState(props.itemToEdit.date)
  const [description, setDescription] = useState(props.itemToEdit.description)
  const [type, setType] = useState(props.itemToEdit.type)
  const [amount, setAmount] = useState(props.itemToEdit.amount)

  function handleSubmit(event) {
    event.preventDefault()
    updateItem(id, date, description, type, amount)
  }

  return (
    <div>
      <h1>EditExpense Component</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date: </label>
          <input
            id="date"
            name="date"
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="description">Description: </label>
          <input
            id="description"
            name="description"
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            autoFocus
            required
          />
        </div>

        <div>
          <label htmlFor="type">Type: </label>
          <select
            id="type"
            name="type"
            value={type}
            onChange={e => setType(e.target.value)}
          >
            <option value="cash">cash</option>
            <option value="debit">debit</option>
            <option value="credit">credit</option>
            <option value="check">check</option>
          </select>
        </div>

        <div>
          <label htmlFor="amount">Amount: </label>
          <input
            id="amount"
            name="amount"
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            required
          />
        </div>

        <input type="submit" value="Save Changes" />
        <input type="reset" value="Reset" />
      </form>
    </div>
  )
}
