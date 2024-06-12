import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_TO_CART } from "../redux/reducer";

function Cart( { name, setName } ) {

  const store = useSelector(store => store.products)
  console.log(store);




  return (
    <div className="flex flex-col justify-center items-center py-6">
      <h1>
        {name ? (
          <div>
            <p>First Login</p>
            <Link to="/signin">Login</Link>
          </div>
        ) : (
          <div>Inside Cart</div>
        )}
      </h1>
      <h1>Cart</h1>
    </div>
  );
}

export default Cart;
