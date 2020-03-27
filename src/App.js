import React from "react"
import EnterExpense from "./components/EnterExpense"
import DisplayExpense from "./components/DisplayExpense"
import ItemsContextProvider from "./contexts/ItemsContext"
import Navbar from "./components/Navbar"

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

export default () => {
  return (
    <>
      <Navbar />
      <ItemsContextProvider>
        <Container>
          <Row>
            <Col>
              <EnterExpense />
            </Col>
            <Col>
              <DisplayExpense />
            </Col>
          </Row>
        </Container>
      </ItemsContextProvider>
    </>
  )
}
