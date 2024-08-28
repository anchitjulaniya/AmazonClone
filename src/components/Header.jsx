import React from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LuMapPin } from "react-icons/lu";
import { RiEnglishInput } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import logo from "../assets/logo.png";
import india from "../assets/india.png";
import { amazonCategories } from "./data";
import { CLEAR_CART } from "../redux/reducer";
import './Header.css';

const Header = ({ name, setName, query, setQuery, setUseremail, call }) => {
  const { cartItems } = useSelector((store) => store.productCart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth();
  const user = auth.currentUser;

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast("Logged Out", {
          position: "bottom-right",
          autoClose: 1800,
          closeOnClick: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setName(null);
        setUseremail(null);
        dispatch({ type: CLEAR_CART });
      })
      .catch((error) => {
        toast(error, {
          position: "bottom-right",
          autoClose: 1800,
          closeOnClick: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  const search = async () => {
    navigate("/productdisplay");
    await call();
  };

  return (
    <div className="text-white">
      <div className="sticky top-0 left-0 h-[70px] lg:h-[65px] bg-[rgb(19,25,33)] px-4 py-2 flex justify-evenly items-center overflow-hidden">
        <Link className="h-[90%] border hover:cursor-pointer hover:border-white border-[rgb(19,25,33)] flex items-center justify-center" to="/">
          <img
            src={logo}
            className="px-2 py-[2px] h-[70%] md:h-[75%] md:flex lg:h-[80%] xl:h-[85%] rounded-sm"
            alt="amazon logo"
          />
          <span className="text-white font-semibold pb-2 pr-1 hidden md:flex">.in</span>
        </Link>

        <span className="hidden lg:flex items-center border hover:border-white border-[rgb(19,25,33)] rounded-sm xl:px-2 hover:cursor-pointer ml-2">
          <span className="text-[rgb(220,220,220)] flex flex-col text-[12px]">
            <span className="pl-1 xl:pl-3x text-[10px]">Delivering to Mumbai,<span className="hidden lg:flex"> 400001</span></span>
            <span className="flex text-[10px] xl:text-[14px] text-[rgb(240,240,240)] font-bold">
              <LuMapPin className="text-white text-[12px] xl:text-xl" />
              Update location
            </span>
          </span>
        </span>

        <SearchBar
          query={query}
          setQuery={setQuery}
          search={search}
        />

        <span className="h-[90%] flex items-center justify-center border hover:border-white border-[rgb(19,25,33)] rounded-sm px-2 pb-1 hover:cursor-pointer ml-2">
          {name ? (
            <span className="font-semibold" onClick={handleSignOut}>Logout</span>
          ) : (
            <>
              <img src={india} alt="" className="h-[70%]" />
              <span className="flex pb-[1px]">
                <RiEnglishInput className="font-extrabold text-white" />
                <FaCaretDown />
              </span>
            </>
          )}
        </span>

        <Link to="/signin">
          <UserAccount user={user} />
        </Link>

        <span className="h-[90%] hidden xl:flex flex-col border hover:border-white border-[rgb(19,25,33)] rounded-sm px-2 hover:cursor-pointer ml-2">
          <span className="text-[rgb(220,220,220)] text-[12px]">Returns</span>
          <span className="text-[14px] text-[rgb(240,240,240)] font-bold">
            & Orders
          </span>
        </span>

        <Link to="/cart">
          <CartIcon cartItems={cartItems} />
        </Link>
      </div>

      {/* mobile view */}
      <div className=" bg-[rgb(19,25,33)] px-4 pb-2">
        <SearchBar
          query={query}
          setQuery={setQuery}
          search={search}
          isMobile
        />
      </div>

      {/* second nav */}
      <SecondNav />
    </div>
  );
};

const SearchBar = ({ query, setQuery, search, isMobile }) => (
  <div
    className={`${
      isMobile ? "flex md:hidden" : "hidden md:flex"
    } items-start w-full lg:w-[40%] xl:w-[50%] border-4 border-[rgb(19,25,33)] focus:border-yellow-400 mx-2 rounded-lg overflow-hidden`}
  >
    <select className="h-10 border-none w-[10px] xl:w-[140px] 2xl:w-[160px] text-black px-2 bg-gray-100">
      {amazonCategories.map((category, index) => (
        <option
          key={index}
          value={category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}
        >
          {category}
        </option>
      ))}
    </select>
    <input
      type="text"
      className="flex-grow text-black h-10 border-none px-2 outline-none"
      placeholder="Search"
      onChange={(e) => setQuery(e.target.value)}
      value={query}
    />
    <button className="h-10 px-4 bg-yellow-400 text-gray-800" onClick={search}>
      <IoSearch className="text-white font-bold text-2xl" />
    </button>
  </div>
);

const UserAccount = ({ user }) => (
  <span className="h-[90%] flex flex-col border hover:border-white border-[rgb(19,25,33)] rounded-sm px-1 md:px-2 hover:cursor-pointer">
    <span className="text-[rgb(220,220,220)] text-[12px] flex ">
      Hello,
      <span className="flex">
        {user?.displayName ? user?.displayName : "sign in"}
      </span>
    </span>
    <span className="text-[14px] text-[rgb(240,240,240)] font-bold flex items-end">
      Account<span className="xl:flex hidden"> & Lists </span>
      <FaCaretDown className="mb-1" />
    </span>
  </span>
);

const CartIcon = ({ cartItems }) => (
  <span className="h-[90%] flex items-end border hover:border-white border-[rgb(19,25,33)] rounded-sm px-2 hover:cursor-pointer ml-2">
    <span className="text-[rgb(220,220,220)] relative text-[35px]">
      <FiShoppingCart />
      <span
        className={`${
          cartItems.length > 0 ? "" : "hidden"
        } text-[14px] text-white bg-green-600 font-bold w-[25px] h-[25px] rounded-full flex items-center justify-center absolute -right-3 -top-2 text-[rgb(240,240,240)] font-bold`}
      >
        {cartItems.length}
      </span>
    </span>
  </span>
);

const SecondNav = () => (
  <div className="bg-[rgb(35,47,62)] text-white h-[40px] px-5 sm:px-5 md:px-5 lg:px-2 flex items-center justify-evenly lg:justify-center overflow-x-auto scrollbar-hide">
    {[
      { label: "All Products", link: "/product" },
      { label: "Laptops", link: "/product/laptops" },
      { label: "Mobiles", link: "/product/phones" },
      { label: "Electronics", link: "/product/electronics" },
      { label: "Home & Kitchen", link: "/product/homeandkitchen" },
      { label: "Phones", link: "/product/phones" },
      { label: "Fashion", link: "/product/fashion" },
      { label: "Car & Motorbike", link: "/product/carandmotorbike" },
      { label: "Today's Deal", link: "/product/todaysdeal" },
      { label: "Beauty Products", link: "/product/beautyproducts" },
      { label: "Amazon Pharmacy", link: "/product/amazonpharmacy" },
      { label: "Grocery", link: "/product/groceryandgourmetfood" },
      { label: "Handmade", link: "/product/handmade" },
      { label: "Games", link: "/product/videogame" },
    ].map(({ label, link }, index) => (
      <Link
        key={index}
        to={link}
        className="h-[90%] min-w-fit px-2 text-[15px] border border-[rgb(35,47,62)] hover:border-white flex items-center gap-1 hover:cursor-pointer"
      >
        {label}
      </Link>
    ))}
  </div>
);

export default Header;
