import React, { useContext, useState } from "react"
import { ItemsContext } from "../contexts/ItemsContext"
import EditExpense from "./EditExpense"
import "../index.css"
import Modal from "react-modal"

Modal.setAppElement(document.getElementById("root"))

export default () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [itemID, setItemID] = useState("")
  const { items, removeItem } = useContext(ItemsContext)

  function displayItem(itemID) {
    setModalIsOpen(true)
    setItemID(itemID)
  }

  const renderItems = items.map(item => {
    return (
      <tr key={item.id}>
        <td>{item.date}</td>
        <td>
          {item.description}
          <button onClick={() => displayItem(item.id)}>Edit</button>
          <button onClick={() => removeItem(item.id)}>Delete</button>
        </td>
        <td>{item.type}</td>
        <td>{item.amount}</td>
      </tr>
    )
  })

  return (
    <div>
      <h1>Expense Table</h1>
      <table>
        <thead>
          <tr>
            <th>Date:</th>
            <th>Description:</th>
            <th>Type:</th>
            <th>Amount:</th>
          </tr>
        </thead>
        <tbody>{renderItems}</tbody>
      </table>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <EditExpense itemID={itemID} />
        <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  )
}
