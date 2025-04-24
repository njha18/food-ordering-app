import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    //    console.log('testttttt')
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-5 p-5">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className=" m-auto w-6/12">
        <button
          className="m-2 p-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          clear cart
        </button>
        {cartItems.length === 0 && <h1>cart is empty.Add items to the cart</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
