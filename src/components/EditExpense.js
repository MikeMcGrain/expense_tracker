import React, { useContext, useState, useEffect } from "react"
import { ItemsContext } from "../contexts/ItemsContext"
import EditExpenseModal from "react-modal"

EditExpenseModal.setAppElement(document.getElementById("root"))

export default props => {
  const { updateItem } = useContext(ItemsContext)
  const [id, setID] = useState()
  const [date, setDate] = useState()
  const [description, setDescription] = useState()
  const [type, setType] = useState()
  const [amount, setAmount] = useState()

  useEffect(() => {
    setID(props.itemToEdit.id)
    setDate(props.itemToEdit.date)
    setDescription(props.itemToEdit.description)
    setType(props.itemToEdit.type)
    setAmount(props.itemToEdit.amount)
  }, [props])

  function handleSubmit(event) {
    event.preventDefault()
    updateItem(id, date, description, type, amount)
    props.closeModal()
  }

  return (
    <EditExpenseModal
      isOpen={props.showModal}
      onRequestClose={props.closeModal}
    >
      <h2>EditExpense</h2>
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
        <button onClick={props.closeModal}>Cancel</button>
        <input type="submit" value="Save Changes" />
      </form>
    </EditExpenseModal>
  )
}