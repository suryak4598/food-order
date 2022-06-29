import classes from "./HeaderCart.module.css"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import CardItem from "../Cart/CartIcon"

const HeaderCart = () => {
  return (
    // <div className={classes.header__cart}>
    //   <ShoppingCartIcon />
    //   <h3>Your Cart</h3>
    //   <div className={classes.inner__header__card}>
    //     <h3 className={classes.total}>0</h3>
    //   </div>
    // </div>
    <button className={classes.header__cart__button}>
      <span className={classes.icon}>
        <ShoppingCartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  )
}

export default HeaderCart
