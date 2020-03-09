import React from "react"

export default function Form() {
  return (
    <>
      <h1>Text from Form Component</h1>
      <ul>
        <li>Type of payment: cash, credit, crypto</li>
        <li>Amount of payment</li>
        <li>Date of payment</li>
        <li>Descripton of purchase</li>
      </ul>
      <form>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label htmlFor="vehicle1"> I have a bike</label>
        <br />
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
        <label htmlFor="vehicle2"> I have a car</label>
        <br />
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
        <label htmlFor="vehicle3"> I have a boat</label>
        <br />
        <input type="submit" value="Submit" />
        <hr />
      </form>
    </>
  )
}