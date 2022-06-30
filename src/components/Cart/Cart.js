import classes from "./Cart.module.css"
import Modal from "../UI/Modal"

const Cart = () => {

const cardItems = <ul className={classes.cart_items}>{[
    {
        id:"c1",
        title:"Briyani",
        price:100,
        amount:1,
    }
].map(item => <li>{item.title}</li>)}</ul>;

    return (
        <Modal >
            {cardItems}
            <div>
                <span className={classes.total}>Total Amount</span>
                <span>Price</span>
            </div>
            <div className={classes.actions}>
                <button>Close</button>
                <button>Order</button>
            </div>
        </Modal>
    );
}

export default Cart;