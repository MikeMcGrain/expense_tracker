import React from "react"
import Navbar from "react-bootstrap/Navbar"

export default () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand>Expense Tracker</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Created by: <a href="http://mikemcgrain.com/">Mike McGrain</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}
