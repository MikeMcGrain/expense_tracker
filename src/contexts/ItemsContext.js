import React, { createContext, useState, useEffect } from "react"
import shortid from "shortid"

export const ItemsContext = createContext()
const ItemsContextProvider = props => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("ExpenseTrackerItems")) || []
  )

  useEffect(() => {
    localStorage.setItem("ExpenseTrackerItems", JSON.stringify(items))
  }, [items])

  const addItem = item => {
    setItems([
      ...items,
      {
        id: shortid.generate(),
        date: item.date,
        description: item.description,
        type: item.type,
        amount: item.amount
      }
    ])
  }
  const updateItem = itemToUpdate => {
    const itemsClone = [...items]
    itemsClone.forEach(item => {
      if (itemToUpdate.id === item.id) {
        item.date = itemToUpdate.date
        item.description = itemToUpdate.description
        item.type = itemToUpdate.type
        item.amount = itemToUpdate.amount
      }
    })
    setItems(itemsClone)
  }
  const removeItem = id => {
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <ItemsContext.Provider value={{ items, addItem, updateItem, removeItem }}>
      {props.children}
    </ItemsContext.Provider>
  )
}

export default ItemsContextProvider