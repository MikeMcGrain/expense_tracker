import React from "react"

export default function Form() {

  //useEffect() ?
  const date = new Date()
  const currentDate = `${date.getFullYear()}-${("0" + date.getMonth()).slice(-2)}-${date.getDate()}`

  return (
    <>
      <h1>Form Component</h1>
      <form>
        <div>
          <label htmlFor="date">Date: </label>
          <input id="date" name="date" type="date" defaultValue={currentDate} max={currentDate} />
        </div>

        <div>
          <label htmlFor="description">Description: </label>
          <input id="description" name="description" type="text" required />
        </div>

        <div>
          <label htmlFor="type">Type: </label>
          <select id="type" name="type">
            <option value="cash">cash</option>
            <option value="debit">debit</option>
            <option value="credit">credit</option>
            <option value="check">check</option>
          </select>
        </div>

        <div>
          <label htmlFor="amount">Amount: </label>
          <input id="amount" name="amount" type="number" min="1" required />
        </div>

        <input type="submit" value="Submit" />
        <input type="reset" value="Reset" />
      </form>
    </>
  )
}