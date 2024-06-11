import React, { useEffect, useState, useRef } from "react";
import logo from "../assets/logo.png";
import { LuMapPin } from "react-icons/lu";
import { RiEnglishInput } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCaretDown } from "react-icons/fa";
import {Link} from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";

import india from "../assets/india.png";
import { toast, Bounce } from "react-toastify";

function Header() {
  const [name,setName ] = useState(null);
  

const auth = getAuth();

  const user = auth.currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;

  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;
  
  console.log(displayName, email, photoURL, emailVerified);
  const uid = user.uid;
}

const name2 = useRef(auth?.currentUser?.displayName)
console.log(name2.current, name2);

  useEffect(()=>{
    const user = auth?.currentUser;
    setName(user?.displayName);
    console.log();
  },[ auth?.currentUser])

  const handleSignOut = ()=>{
    console.log("logout clicked");
    signOut(auth).then(() => {
      toast("Logged Out", {
        position: "bottom-right",
        autoClose: 1800,
        closeOnClick: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
    }).catch((error) => {
      // An error happened.
      toast(error, {
        position: "bottom-right",
        autoClose: 1800,
        closeOnClick: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
    });
  }

  const amazonCategories = [
    "All Categories",
    "Alexa Skills",
    "Amazon Devices",
    "Amazon Fashion",
    "Amazon Fresh",
    // "Amazon Pharmacy",
    "Appliances",
    "Apps & Games",
    "Baby",
    "Beauty",
    "Books",
    "Car & Motorbike",
    // "Clothing & Accessories",
    "Collectibles",
    // "Computers & Accessories",
    "Electronics",
    "Furniture",
    // "Garden & Outdoors",
    "Gift Cards",
    // "Grocery & Gourmet Foods",
    // "Health & Personal Care",
    "Home & Kitchen",
    // "Industrial & Scientific",
    "Jewellery",
    "Kindle Store",
    "Luggage & Bags",
    "Luxury Beauty",
    // "Movies & TV Shows",
    "Music",
    // "Musical Instruments",
    // "Office Products",
    "Pet Supplies",
    "Prime Video",
    // "Shoes & Handbags",
    "Software",
    // "Sports, Fitness & Outdoors",
    // "Tools & Home Improvement",
    "Toys & Games",
    "Under ₹500",
    "Video Games",
    "Watches"
  ];
  

  return (
    <div className="text-white ">
      <div className="h-[60px] bg-[rgb(19,25,33)] px-4 py-2 flex items-center overflow-hidden">
        <span className="h-[90%] border hover:cursor-pointer hover:border-white border-[rgb(19,25,33)] flex items-center justify-center">
          <img
            src={logo}
            className="px-2 py-[2px] h-[95%] rounded-sm"
            alt="amazon logo"
          />
          <span className="text-white font-semibold pb-2 pr-1">.in</span>
        </span>

        <span className="h-[90%] flex items-center border hover:border-white border-[rgb(19,25,33)] rounded-sm px-2 py-2 hover:cursor-pointer">
          <span className="text-[rgb(220,220,220)] flex flex-col text-[12px]">
            <span className=" pl-5 ">Delivering to Mumbai 400001</span>
            <span className="flex text-[14px] text-[rgb(240,240,240)] font-bold ">
              <LuMapPin className="text-white text-xl" />
              Update location
            </span>
          </span>
        </span>

        <div className="flex items-center w-[50%] border-4 border-[rgb(19,25,33)] focus:border-yellow-400 mx-auto  rounded-lg overflow-hidden">
          <select className="h-10 border-none m-w-[100px] text-black px-2 bg-gray-100">
            {amazonCategories.map((category, index) => (
          <option key={index} value={category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}>
            {category}
          </option>
          ))}
          </select>
          <input
            type="text"
            className="flex-grow text-black h-10 border-none px-2 outline-none"
            placeholder="Search"
          />
          <button className="h-10 px-4 bg-yellow-400 text-gray-800">
            <IoSearch className="text-white font-bold text-2xl" />
          </button>
        </div>

        <span  className="h-[90%] flex items-end border hover:border-white border-[rgb(19,25,33)] rounded-sm px-2 pb-1 hover:cursor-pointer">
         { name ?
          <span className=" font-semibold" onClick={handleSignOut}>Logout</span>
          : <><img src={india} alt="" className="  h-[70%]" />
          <span className="flex pb-[1px]"><RiEnglishInput className="font-extrabold text-white" /><FaCaretDown /></span></>
          }
        </span>

       

        <Link to='/signin'>
        <span className="h-[90%] flex flex-col border hover:border-white border-[rgb(19,25,33)] rounded-sm px-2 hover:cursor-pointer ">
            <span className="text-[rgb(220,220,220)] text-[12px]">
              Hello, {user?.displayName ? user?.displayName : "sign in"}
            </span>
          <span className="text-[14px] text-[rgb(240,240,240)] font-bold flex items-end">
            Account & Lists <FaCaretDown className="mb-1" />
          </span>
        </span>
        </Link>

        <span className="h-[90%] flex flex-col border hover:border-white border-[rgb(19,25,33)] rounded-sm px-2 hover:cursor-pointer ">
          <span className="text-[rgb(220,220,220)] text-[12px]">Returns</span>
          <span className="text-[14px] text-[rgb(240,240,240)] font-bold">
            & Orders
          </span>
        </span>

        <Link to='/cart'>
        <span className="h-[90%] flex items-end border hover:border-white border-[rgb(19,25,33)] rounded-sm px-2 hover:cursor-pointer ">
          <span className="text-[rgb(220,220,220)] text-[35px]">
            <FiShoppingCart />
          </span>
          <span className="text-[14px] text-[rgb(240,240,240)] font-bold">
            Cart
          </span>
        </span>
        </Link>
      </div>

      {/* second nav */}
      <div className="bg-[rgb(35,47,62)] text-white h-[40px] flex items-center px-4 ">
        <div className=" h-[90%] px-2 text-[15px] border border-[rgb(35,47,62)]  hover:border-white  flex items-center gap-1 hover:cursor-pointer"><GiHamburgerMenu className="text-xl " /> All</div>
        <div className=" h-[90%] px-2 text-[15px] border border-[rgb(35,47,62)]  hover:border-white  flex items-center gap-1 hover:cursor-pointer">Fresh <FaCaretDown /></div>
        <div className=" h-[90%] px-2 text-[15px] border border-[rgb(35,47,62)]  hover:border-white  flex items-center gap-1 hover:cursor-pointer">Amazon miniTv</div>
        <div className=" h-[90%] px-2 text-[15px] border border-[rgb(35,47,62)]  hover:border-white  flex items-center gap-1 hover:cursor-pointer">Sell</div>
        <div className=" h-[90%] px-2 text-[15px] border border-[rgb(35,47,62)]  hover:border-white  flex items-center gap-1 hover:cursor-pointer">Best Sellers</div>
        <div className=" h-[90%] px-2 text-[15px] border border-[rgb(35,47,62)]  hover:border-white  flex items-center gap-1 hover:cursor-pointer">Mobiles</div>
        <div className=" h-[90%] px-2 text-[15px] border border-[rgb(35,47,62)]  hover:border-white  flex items-center gap-1 hover:cursor-pointer">Today&apos;s Deal</div>
        <div className=" h-[90%] px-2 text-[15px] border border-[rgb(35,47,62)]  hover:border-white  flex items-center gap-1 hover:cursor-pointer">Fashion</div>
        <div className=" h-[90%] px-2 text-[15px] border border-[rgb(35,47,62)]  hover:border-white  lg:flex items-center gap-1 hover:cursor-pointer hidden">Electronics</div>
        <div className=" h-[90%] px-2 text-[15px] border border-[rgb(35,47,62)]  hover:border-white  lg:flex items-center gap-1 hover:cursor-pointer hidden">Prime <FaCaretDown /></div>
        <div className=" h-[90%] px-2 text-[15px] border border-[rgb(35,47,62)]  hover:border-white  lg:flex items-center gap-1 hover:cursor-pointer hidden">Home & Kitchen</div>
        <div className=" h-[90%] px-2 text-[15px] border border-[rgb(35,47,62)]  hover:border-white  lg:flex items-center gap-1 hover:cursor-pointer hidden">New Releases</div>
        <div className=" h-[90%] px-2 text-[15px] border border-[rgb(35,47,62)]  hover:border-white  lg:flex items-center gap-1 hover:cursor-pointer hidden">Customer Service</div>
        <div className=" h-[90%] px-2 text-[15px] border border-[rgb(35,47,62)]  hover:border-white  lg:flex items-center gap-1 hover:cursor-pointer hidden">Amazon Pay</div>
        <div className=" h-[90%] px-2 text-[15px] border border-[rgb(35,47,62)]  hover:border-white  lg:flex items-center gap-1 hover:cursor-pointer hidden">Computers</div>
        <div className=" h-[90%] px-2 text-[15px] border border-[rgb(35,47,62)]  hover:border-white  lg:flex items-center gap-1 hover:cursor-pointer hidden">Books</div>
        
        
        
      </div>
    </div>
  );
}

export default Header;
