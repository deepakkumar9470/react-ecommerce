import React from "react";
import {
  ChevronDown,
  Search,
  ShoppingCart,
  BaggageClaim,
} from "lucide-react";
import {useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const item = useSelector((state) => state.cart)
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();


  return (
    <div className="w-full flex items-center justify-between px-10 py-5">
      <div className="flex items-center gap-2">
        <ShoppingCart
          size={40}
          className="text-xl md:text-3xl font-extrabold"
        />
        <Link to="/">
          <span className="text-xl md:text-3xl text-orange-500 font-extrabold">
            dComm
          </span>
        </Link>
      </div>

      <div className="items-center gap-5 hidden md:block md:flex">
        <div className="flex items-center gap-1">
          <span className="font-bold">Cateogories</span>
          <ChevronDown />
        </div>

        <span className="font-bold">Deals</span>
        <span className="font-bold">Whats'New</span>
        <span className="font-bold">Delivery</span>
      </div>

      <div className="flex items-center gap-2 md:gap-4 px-5 py-5">
        <div className="flex items-center gap-2  px-4 text-white relative">
          <input
            className="bg-gray-50 rounded-full outline-none px-10 py-2 text-gray-500"
            type="text"
            placeholder="Search Product"
          />
          <Search className="absolute right-8 w-5 h-5 text-gray-400" />
        </div>
        {!isAuthenticated && (
          <button
            className="bg-orange-500 text-white font-semibold rounded-md cursor-pointer px-4 py-2"
            onClick={() => loginWithRedirect()}
          >
            Log In
          </button>
        )}

        <div className="md:flex hidden md:block items-center gap-2 pr-4">
          {isAuthenticated && (
            <>
          <img  className="w-6 h-6 rounded-full" 
                src={user.picture} 
                alt={user.nickname}/>
          <span className="font-bold">{user.nickname}</span>
            <button
              className="bg-gray-700 text-white font-semibold rounded-md cursor-pointer px-3 py-2"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
         </>
          )}
        </div>
        {isAuthenticated && (
        <Link to="/cart">
          <div className="md:flex hidden md:block items-center gap-2 pr-4">
          <div className="relative">
          <BaggageClaim size={28} color="gray" className="font-bold" />
          <div className="w-4 h-4 text-sm  text-white font-bold flex
          items-center justify-center rounded-full bg-orange-600 
          absolute top-[-5px] right-[-8px]">
            {item.length || 0}
          </div>
          </div>
          <span className="font-bold">Cart</span>
        </div>
        </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
