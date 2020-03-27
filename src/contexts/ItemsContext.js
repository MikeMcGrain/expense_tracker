import React, { createContext, useState } from "react"
import shortid from "shortid"

export const ItemsContext = createContext()
const ItemsContextProvider = props => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("items")) || [])

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
  const updateItem = (id, date, description, type, amount) => {
    items.forEach(item => {
      if (id === item.id) {
        item.date = date
        item.description = description
        item.type = type
        item.amount = amount
      }
    })
  }
  const removeItem = id => {
    setItems(items.filter(item => item.id !== id))
  }
  localStorage.setItem("items", JSON.stringify(items))

  return (
    <ItemsContext.Provider value={{ items, addItem, updateItem, removeItem }}>
      {props.children}
    </ItemsContext.Provider>
  )
}

export default ItemsContextProvider