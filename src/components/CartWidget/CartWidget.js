import Cart from "./Cart.png"
import './CartWidget.scss'



export const CartWidget = () => {

    return(
        <div nameClass="cart-wrapper">
             {<img src={Cart} alt ="shopping cart" className="shopping-cart" id="shopping-cart" height="auto" width="200px"/>}
             <span className="cartCounter">1</span>
        </div>
       
    )
}