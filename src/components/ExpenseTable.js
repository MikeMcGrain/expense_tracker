import React, { useContext } from "react"
import { ItemsContext } from "../contexts/ItemsContext"
import "../index.css"

export default () => {
  const items = useContext(ItemsContext)
  const renderItems = items.map(item => {
    return (
      <tr key={item.id}>
        <td>{item.date}</td>
        <td>{item.description}</td>
        <td>{item.type}</td>
        <td>{item.amount}</td>
      </tr>
    )
  })

  return (
    <div>
      <h1>Expense Table:</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>{renderItems}</tbody>
      </table>
    </div>
  )
}
