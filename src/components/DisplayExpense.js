import React, { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import { ItemsContext } from "../contexts/ItemsContext"
import EditExpense from "./EditExpense"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons"

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
        <td>{item.description}</td>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="text-danger icon-style"
            onClick={() => removeItem(item.id)}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faPencilAlt}
            className="text-primary icon-style"
            onClick={() => editItem(item)}
          ></FontAwesomeIcon>
        </td>
      </tr>
    )
  })

  return (
    <div className="display-margins">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date:</th>
            <th>Description:</th>
            <th>Type:</th>
            <th>Amount:</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{renderItems}</tbody>
      </Table>
      <EditExpense
        showModal={showModal}
        itemToEdit={itemToEdit}
        closeModal={() => setShowModal(false)}
      />
    </div>
  )
}
