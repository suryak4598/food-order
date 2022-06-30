import classes from "./MealList.module.css"
import MealItemForm from "./MealItemForm"

const MealItem = (props) => {

    return (
        <div className={classes.meal}>
              <div>
                <h3>{props.meal.title}</h3>
                <div className={classes.description}>{props.meal.incred}</div>
                <div className={classes.price}>₹{props.meal.amount.toFixed(2)}</div>
              </div>
              <div>
                  <MealItemForm/>
              </div>
        </div>
    );
}

export default MealItem;