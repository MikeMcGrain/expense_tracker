import React from "react"
import ExpenseForm from "./components/ExpenseForm"
import ExpenseTable from "./components/ExpenseTable"
import ItemsContextProvider from "./contexts/ItemsContext"

export default () => {
  return (
      <ItemsContextProvider>
        <ExpenseForm />
        <ExpenseTable />
      </ItemsContextProvider>
  )
}
