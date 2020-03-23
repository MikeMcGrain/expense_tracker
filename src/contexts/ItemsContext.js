import React, { createContext, useState } from "react"
import shortid from "shortid"

export const ItemsContext = createContext()

const ItemsContextProvider = props => {
  const [items, setItems] = useState([
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
  ])
  const addItem = (date, description, type, amount) => {
    setItems(...items, {
      id: shortid.generate(),
      date,
      description,
      type,
      amount
    })
  }
  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }
  return (
    <ItemsContext.Provider value={{items, addItem, removeItem}}>
      {props.children}
    </ItemsContext.Provider>
  )
}

export default ItemsContextProvider
