import React from "react"
import EnterExpense from "./components/EnterExpense"
import DisplayExpense from "./components/DisplayExpense"
import ItemsContextProvider from "./contexts/ItemsContext"

export default () => {
  return (
    <ItemsContextProvider>
      <EnterExpense />
      <DisplayExpense />
    </ItemsContextProvider>
  )
}