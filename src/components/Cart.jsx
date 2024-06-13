import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_TO_CART } from "../redux/reducer";
import ReactStars from "react-rating-stars-component";
import isPrime from "../assets/HomeCarousel/isPrime.png";

function Cart( { name, setName } ) {



  const store = useSelector(store => store.productCart);
  console.log(store,"store"); 
  // console.log(store.cartItems[0].quantity,"quantity");
console.log(store.cartItems[0].product_price,"price");

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
      <h1 className="text-black text-2xl font-semibold">Shopping Cart</h1>
      <div className="flex flex-col items-start">
      {store.cartItems?.map((product) => (
        <div key={product.asin} className="flex items-center">
         
          <div className="w-[280px] min-w-[279px] h-[303px] flex justify-center pt-7 relative ">
          {/* <a href={product.product_url}> */}
            <img
              src={product.product_photo}
              alt="product image"
              className="h-[217px] w-[177px]"
            />
            {/* </a> */}
            <span
              className={` ${
                !product.is_amazon_choice ? "hidden" : ""
              } text-white bg-[rgb(0,47,54)] absolute top-0 left-0 px-3 text-md`}
            >
              Amazon&apos;s <span className="text-orange-400"><i>Choice</i></span>
            </span>
          </div>
          {/* product detail */}
          <div className="flex flex-col px-6 gap-2">
            <h1 className="font-bold w-[600px]">{product.product_title}</h1>
            <span className="flex items-center gap-2">
            <ReactStars
              count={5}
              size={24}
              isHalf={true}
              value={product.product_star_rating}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="rgb(255,164,29)"
              edit={false}
            /> <span className="text-blue-500">{product.product_num_ratings}</span>
            </span>
            <span className="text-[rgb(86,89,89)] text-md">{product.sales_volume}</span>
            
            <span className="flex gap-2 items-center">
              <span className="text-xl ">{product.product_price}</span>
              <span className="text-[rgb(86,89,89)] text-sm">
                M.R.P: <s className="">{product.product_original_price}</s>
              </span>
            </span>
            <span className={`${product.is_prime ? "" : "hidden"} `}>
              <img width="50px" height={"15px"} src={isPrime} alt="" />
            </span>
            <div className="h-[80px] pt-5 flex justify-between">
                <span className="flex items-center gap-3">
                    <span className="rounded-full w-[30px] h-[30px] bg-sky-500 text-white font-semibold flex justify-center items-center hover:cursor-pointer pb-1">-</span>
                    <span className="w-[30px] h-[30px] flex justify-center items-center border border-black rounded-sm bg-[rgb(247,247,247)] text-black">{product?.quantity?product.quantity:"0"}</span>
                    <span className="rounded-full w-[30px] h-[30px] bg-sky-500 text-white font-semibold flex justify-center items-center hover:cursor-pointer pb-1">+</span>
                </span>
                <span className="text-2xl font-semibold ">₹ {eval(parseInt(product?.quantity)*parseInt(product?.product_price.split(" ")[0].slice(1)))}</span>
            </div>
            
          </div>
  
        </div>
      ))}
      <div className="h-[80px] flex justify-between">
              <span>Total</span>
              <span>₹ {store.cartItems.reduce((total, item) => total + parseInt(item.product_price.split(" ")[0].slice(1)), 0)}</span>
            </div>
      </div>
    </div>
  );
}

export default Cart;
