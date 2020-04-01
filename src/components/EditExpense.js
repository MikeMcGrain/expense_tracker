import React, { useContext, useState, useEffect } from "react"
import { ItemsContext } from "../contexts/ItemsContext"
import { Modal, Form, Button } from "react-bootstrap"

export default props => {
  const { updateItem } = useContext(ItemsContext)
  const [item, setItem] = useState()

  useEffect(() => {setItem(props.itemToEdit)}, [props])

  function handleSubmit(event) {
    event.preventDefault()
    updateItem(item)
    props.closeModal()
  }

  function handleChange(e) {
    const itemCopy = Object.assign({}, item)
    itemCopy[e.target.name] = e.target.value
    setItem(itemCopy)
  }

  if (!item) {
    return null
  }

  return (
    <Modal show={props.showModal} onHide={props.closeModal}>
      <Modal.Body>
        <Form id="edit-form" onSubmit={handleSubmit}>
          <Form.Group controlId="date">
            <Form.Label>Date: </Form.Label>
            <Form.Control
              type="date"
              name="date"
              defaultValue={item.date}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description: </Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={item.description}
              onChange={handleChange}
              autoFocus
              required
            />
          </Form.Group>

          <Form.Group controlId="type">
            <Form.Label>Type: </Form.Label>
            <Form.Control
              as="select"
              name="type"
              value={item.type}
              onChange={handleChange}
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
              name="amount"
              value={item.amount}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" variant="success" form="edit-form">Save Changes</Button>
        <Button className="cancel-button" onClick={props.closeModal}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  )
}