import React, { useContext, useState, useEffect } from "react"
import { ItemsContext } from "../contexts/ItemsContext"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
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
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="date">
          <Form.Label>Date: </Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description: </Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Enter description of purchase"
            autoFocus
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter a description
          </Form.Control.Feedback>
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
            placeholder="Enter amounnt of purchase"
            required
          />
        </Form.Group>
        <Button type="submit">Save Changes</Button>
        <Button onClick={props.closeModal}>Cancel</Button>
        
      </Form>
    </EditExpenseModal>
  )
}
