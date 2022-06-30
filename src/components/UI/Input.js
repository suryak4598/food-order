import classes from "./Input.module.css";


const Input = (props) => {

    return(
        <input type={props.type} onChange={props.onChange} className={`${classes.input_class} ${props.className}`} id={props.id}
         min={props.min} max={props.max} step={props.step} defaultValue={props.defaultValue}
        ></input>
    );

}
 
export default Input;