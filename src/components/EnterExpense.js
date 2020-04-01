import React, { useContext, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { ItemsContext } from "../contexts/ItemsContext"

export default () => {
  const defaultItem = {
    date: getCurrentDate(),
    description: "",
    type: "cash",
    amount: ""
  }
  const { addItem } = useContext(ItemsContext)
  const [item, setItem] = useState(defaultItem)

  function getCurrentDate() {
    const date = new Date()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return `${date.getFullYear()}-${("0" + month).slice(-2)}-${("0" + day).slice(-2)}`
  }

  function handleSubmit(event) {
    event.preventDefault()
    addItem(item)
    setItem(defaultItem)
  }

  function handleChange(e) {
    const itemCopy = Object.assign({}, item)
    itemCopy[e.target.name] = e.target.value
    setItem(itemCopy)
  }

  return (
    <Form className="enter-margins" onSubmit={handleSubmit}>
      <Form.Group controlId="date">
        <Form.Label>Date: </Form.Label>
        <Form.Control
          type="date"
          name="date"
          value={item.date}
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
          placeholder="description of expense"
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
          name="amount"
          type="number"
          step="0.01"
          value={item.amount}
          onChange={handleChange}
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