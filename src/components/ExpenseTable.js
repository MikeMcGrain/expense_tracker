import React, { useContext, useState } from "react"
import { ItemsContext } from "../contexts/ItemsContext"
import Modal from "react-modal"

import "../index.css"

export default () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { items, removeItem } = useContext(ItemsContext)
  const renderItems = items.map(item => {
    return (
      <tr key={item.id}>
        <td>{item.date}</td>
        <td>
          {item.description}
          <button onClick={() => setModalIsOpen(true)}>Edit</button>
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
      <Modal isOpen={modalIsOpen}>
        <h2>Edit Expense</h2>
        <p>edit single expense here</p>
        <button onClick={() => setModalIsOpen(false)}>Close Modal</button>

      </Modal>
    </div>
  )
}
