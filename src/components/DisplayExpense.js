import React, { useContext, useState } from "react"
import { Table, Button } from "react-bootstrap"
import { Container, Col, Row } from "react-bootstrap"

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
          <Container>
            <Row>
              <Col>{item.description}</Col>
              <Col>
                <Button onClick={() => editItem(item)} size="sm">
                  Edit
                </Button>
              </Col>
              <Col>
                <Button
                  onClick={() => removeItem(item.id)}
                  variant="danger"
                  size="sm"
                >
                  Delete
                </Button>
              </Col>
            </Row>
          </Container>

          {/* <i
            onClick={() => editItem(item)}
            className="glyphicon glyphicon-edit"
            style={{ fontSize: "25px", color: "blue" }}
          ></i>
          <i
            onClick={() => removeItem(item.id)}
            className="glyphicon glyphicon-trash"
            style={{ fontSize: "25px", color: "red" }}
          ></i> */}
        </td>
        <td>{item.type}</td>
        <td>{item.amount}</td>
      </tr>
    )
  })

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date:</th>
            <th>Description:</th>
            <th>Type:</th>
            <th>Amount:</th>
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
