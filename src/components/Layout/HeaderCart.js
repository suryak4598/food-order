import classes from "./HeaderCart.module.css"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"

const HeaderCart = () => {
  return (
    <button className={classes.header__cart__button}>
      <span className={classes.icon}>
        <ShoppingCartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>0</span>
    </button>
  )
}

export default HeaderCart
