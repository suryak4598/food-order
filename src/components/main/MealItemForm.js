import classes from "./MealList.module.css"
import Input  from "../UI/Input";
import { useRef } from "react";

const MealItemForm = (props) => {

    const inputRef = useRef();

    function onSubmitHandler(event){
        event.preventDefault();
        props.onAddToCart(+inputRef.current.value);
    }

    return (
        <form className={classes.full_side_menu} onSubmit={onSubmitHandler}>
            <div className={classes.side_menu}>
                <p style={{fontWeight: "bold", marginRight: "0.5rem"}}>Amount</p>
                <Input type="number" min="1" max="5" step="1" defaultValue="0" inputRef = {inputRef}></Input>
            </div>
            <button type="submit">+Add</button>
      </form>
    );
}

export default MealItemForm;