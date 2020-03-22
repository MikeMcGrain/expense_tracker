import React from "react"
import shortid from "shortid"
import ExpenseForm from "./components/ExpenseForm"
import ExpenseTable from "./components/ExpenseTable"
import { ItemsProvider } from "./contexts/ItemsContext"

export default () => {
  const expenseItems = [
    {
      id: shortid.generate(),
      date: "some date",
      description: "description of purchase",
      type: "debit",
      amount: "$12.35"
    },
    {
      id: shortid.generate(),
      date: "some other date",
      description: "description of another purchase",
      type: "cash",
      amount: "$40.25"
    },
    {
      id: shortid.generate(),
      date: "different date",
      description: "description of different purchase",
      type: "credit",
      amount: "$70.87"
    }
  ]
  return (
    <div>
      <ItemsProvider value={expenseItems}>
        <ExpenseForm />
        <ExpenseTable />
      </ItemsProvider>
    </div>
  )
}
