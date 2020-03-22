import React from "react"
import ExpenseForm from "./Components/ExpenseForm"
// import List from "./Components/List"

export default App => {
  return (
    <div>
      <ItemContext.Provider value={"testItem"}>
        <ExpenseForm />
        
      </ItemContext.Provider>
    </div>
  )
}

export const ItemContext = React.createContext()