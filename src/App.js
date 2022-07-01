import Header from "./components/Layout/Header"
import React, { useState } from "react"
import Meals from "./components/main/Meals"
import Cart from "./components/Cart/Cart"
import CartProvider from "./components/store/CartProvider";


function App() {
  const [showCart, setShowCart] = useState(false);

  function showCartHandler(){

    setShowCart(true);

  }

  function hideCartHandler(){
    
    setShowCart(false);
  }

  return (
    <CartProvider>
      {showCart && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}></Header>
      <Meals/>
    </CartProvider>
  )
}

export default App
