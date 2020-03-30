import React, { useContext, useState, useEffect } from "react"
import { ItemsContext } from "../contexts/ItemsContext"
import { Modal, Form, Button } from "react-bootstrap"

export default props => {
  const { updateItem } = useContext(ItemsContext)
  const [id, setID] = useState()
  const [date, setDate] = useState()
  const [description, setDescription] = useState()
  const [type, setType] = useState()
  const [amount, setAmount] = useState()

  useEffect(() => {
    setID(props.itemToEdit.id || "")
    setDate(props.itemToEdit.date || "")
    setDescription(props.itemToEdit.description  || "")
    setType(props.itemToEdit.type  || "")
    setAmount(props.itemToEdit.amount  || "")
  }, [props])

  function handleSubmit(event) {
    event.preventDefault()
    updateItem(id, date, description, type, amount)
    props.closeModal()
  }

  return (
    <Modal show={props.showModal} onHide={props.closeModal}>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="date">
            <Form.Label>Date: </Form.Label>
            <Form.Control
              type="date"
              defaultValue={date}
              onChange={e => setDate(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description: </Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
              autoFocus
              required
            />
          </Form.Group>

          <Form.Group controlId="type">
            <Form.Label>Type: </Form.Label>
            <Form.Control
              as="select"
              value={type}
              onChange={e => setType(e.target.value)}
            >
              <option value="cash">cash</option>
              <option value="debit">debit</option>
              <option value="credit">credit</option>
              <option value="check">check</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="amount">
            <Form.Label>Amount: </Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit" variant="success">Save Changes</Button>
          <Button onClick={props.closeModal}>Cancel</Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}