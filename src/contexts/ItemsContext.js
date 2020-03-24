import React, { createContext, useState } from "react"
import shortid from "shortid"

export const ItemsContext = createContext()
const ItemsContextProvider = props => {
  const [items, setItems] = useState([])

  const addItem = (date, description, type, amount) => {
    setItems([
      ...items,
      {
        id: shortid.generate(),
        date: date,
        description: description,
        type: type,
        amount: amount
      }
    ])
  }
  const removeItem = id => {
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <ItemsContext.Provider value={{ items, addItem, removeItem }}>
      {props.children}
    </ItemsContext.Provider>
  )
}

export default ItemsContextProvider
