import React from "react"
import ExpenseForm from "./components/ExpenseForm"
import ExpenseTable from "./components/ExpenseTable"

export const ExpenseItemsContext = React.createContext()

export default App => {
  let expenseItems = [
    {
      date: "some date",
      description: "description of purchase",
      type: "debit",
      amount: "$12.35"
    },
    {
      date: "some other date",
      description: "description ofj another purchase",
      type: "cash",
      amount: "$40.25"
    }
  ]
  return (
    <div>
      <ExpenseItemsContext.Provider value={expenseItems}>
        <ExpenseForm />
        <ExpenseTable />
      </ExpenseItemsContext.Provider>
    </div>
  )
}
