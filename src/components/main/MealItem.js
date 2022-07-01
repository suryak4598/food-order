import classes from "./MealList.module.css"
import MealItemForm from "./MealItemForm"
import { useContext } from "react"
import CartContext from "../store/cart-context"

const MealItem = (props) => {

    const ctx = useContext(CartContext);


    const onAddToCart = (amount) => {

        ctx.addItems({
            id: props.meal.id,
            name: props.meal.title,
            price: props.meal.price,
            amount: amount,
        })
    }

    return (
        <div className={classes.meal}>
              <div>
                <h3>{props.meal.title}</h3>
                <div className={classes.description}>{props.meal.incred}</div>
                <div className={classes.price}>₹{props.meal.price.toFixed(2)}</div>
              </div>
              <div>
                  <MealItemForm onAddToCart={onAddToCart}/>
              </div>
        </div>
    );
}

export default MealItem;