import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import ItemsContextProvider from "./contexts/ItemsContext"
import EnterExpense from "./components/EnterExpense"
import DisplayExpense from "./components/DisplayExpense"
import Navbar from "./components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"

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