import React, { useContext } from "react"
// import { ItemContext } from "../App.js"
import "../index.css"

export default ExpenseTable => {
  // const item = useContext(ItemContext)
  return (
    <div>
      <h1>Expense Table</h1>

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
            <td>21/02/2020</td>
            <td>steaks</td>
            <td>cash</td>
            <td>$40.00</td>
          </tr>
          <tr>
            <td>21/02/2020</td>
            <td>eggs</td>
            <td>credit</td>
            <td>$21.50</td>
          </tr>
          <tr>
            <td>21/02/2020</td>
            <td>liver</td>
            <td>debit</td>
            <td>$14.00</td>
          </tr>
        </tbody>
      </table>

      {/* <h1>Test from List Component</h1>
      <p>{item}</p> */}
    </div>
  )
}
