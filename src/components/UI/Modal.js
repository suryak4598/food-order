import classes from "./Modal.module.css";
import ReactDOM from "react-dom";


const BackDrop = () => {
    return(<div className={classes.backdrop}></div>)
}

const OverLay = (props) => {

    return(
        <div className={classes.model}>
            <div>{props.children}</div>
            </div>
    );

}

const Modal = () => {
    return(
        <div >
            {ReactDOM.createPortal(<BackDrop/>, document.getElementById("overlay"))}
            {ReactDOM.createPortal(<OverLay/>, document.getElementById("overlay"))}
        </div>
    );
}

export default Modal;