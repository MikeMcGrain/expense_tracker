import React, { useContext } from "react"
import { ExpenseItemsContext } from "../App.js"
import "../index.css"

export default ExpenseTable => {
  const items = useContext(ExpenseItemsContext)

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
        <tbody>
          {items.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.description}</td>
                <td>{item.type}</td>
                <td>{item.amount}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
