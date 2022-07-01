import classes from "./HeaderCart.module.css"
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import CartIcon from '../Cart/CartIcon';
import CartContext from "../store/cart-context";
import { useContext } from "react";

const HeaderCart = (props) => {
          const ctx = useContext(CartContext);
          const noOfItems = ctx.items.reduce((totalNUmber, item) => {
            return totalNUmber + item.amount;
          }, 0)
  return (
    <button className={classes.header__cart__button} onClick={props.onClick}>
      <span className={classes.icon}>
        {/* <ShoppingCartIcon /> */}
        <CartIcon />
      </span>
      <span>Your Cart</span>
  <span className={classes.badge}>{noOfItems}</span>
    </button>
  )
}

export default HeaderCart
