import Header from "./components/Layout/Header"
import React from "react"
import Meals from "./components/main/Meals"
import Cart from "./components/Cart/Cart"


function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Meals/>
      <Cart></Cart>
    </React.Fragment>
  )
}

export default App
