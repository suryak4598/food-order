import React from "react"
import classes from "./Header.module.css"
import mealsImage from "../../asset/banner.jpg"
import HeaderCart from "./HeaderCart"

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Order Your Food</h1>
        <HeaderCart onClick={props.onShowCart}/>
      </header>
      <div className={classes["background"]}>
        <img src={mealsImage} alt="background" />
      </div>
    </React.Fragment>
  )
}

export default Header
