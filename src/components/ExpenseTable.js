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
          <tr>
            <td>{items[0].date}</td>
            <td>{items[0].description}</td>
            <td>{items[0].type}</td>
            <td>{items[0].amount}</td>
          </tr>
          <tr>
            <td>{items[1].date}</td>
            <td>{items[1].description}</td>
            <td>{items[1].type}</td>
            <td>{items[1].amount}</td>
          </tr>
          <tr>
            <td>21/02/2020</td>
            <td>eggs</td>
            <td>debit</td>
            <td>$14.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
