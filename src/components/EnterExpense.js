import React, { useContext, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { ItemsContext } from "../contexts/ItemsContext"

export default () => {
  const { addItem } = useContext(ItemsContext)
  const [date, setDate] = useState(getCurrentDate)
  const [description, setDescription] = useState("")
  const [type, setType] = useState("cash")
  const [amount, setAmount] = useState("")

  function getCurrentDate() {
    const date = new Date()
    const month = date.getMonth() + 1
    return `${date.getFullYear()}-${("0" + month).slice(-2)}-${date.getDate()}`
  }

  function handleSubmit(event) {
    event.preventDefault()
    addItem(date, description, type, amount)
    setDate(getCurrentDate)
    setDescription("")
    setType("cash")
    setAmount("")
  }

  return (
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
          placeholder="description of expense"
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
          placeholder="0.00"
          required
        />
      </Form.Group>
      <Button type="submit" variant="success">
        Submit
      </Button>
    </Form>
  )
}