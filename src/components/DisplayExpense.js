import React, { useContext, useState } from "react"
import { ItemsContext } from "../contexts/ItemsContext"
import EditExpense from "./EditExpense"
import "../index.css"

export default () => {
  const { items, removeItem } = useContext(ItemsContext)
  const [showModal, setShowModal] = useState(false)
  const [itemToEdit, setItemToEdit] = useState("")

  function editItem(itemToView) {
    setShowModal(true)
    setItemToEdit(itemToView)
  }

  const renderItems = items.map(item => {
    return (
      <tr key={item.id}>
        <td>{item.date}</td>
        <td>
          {item.description}
          <button onClick={() => editItem(item)}>Edit</button>
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
      <EditExpense
        showModal={showModal}
        itemToEdit={itemToEdit}
        closeModal={() => setShowModal(false)}
      />
    </div>
  )
}