import React from "react";
import { ChevronDown, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./Loading";

const Header = () => {
  const item = useSelector((state) => state.cart);
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  if (isLoading) return <Loading />;

  return (
    <div className="w-full flex items-center justify-between px-10 py-4">
      <div className="flex items-center gap-2">
        <ShoppingCart
          size={40}
          className="text-txtColor  text-xl md:text-3xl font-extrabold"
        />
        <Link to="/">
          <span className="text-xl md:text-3xl text-orange font-extrabold">
            dComm
          </span>
        </Link>
      </div>

      <div className="items-center text-softTxt gap-5 hidden md:block md:flex">
        <div className="flex items-center gap-1">
          <span className="font-bold cursor-pointer">Cateogories</span>
          <ChevronDown />
        </div>

        <span className="font-bold cursor-pointer">Deals</span>
        <span className="font-bold cursor-pointer">Whats'New</span>
        <span className="font-bold cursor-pointer">Delivery</span>
      </div>

      <div className="flex items-center gap-2 md:gap-4 px-5 py-5">
        {!isAuthenticated && (
          <button
            className="bg-orange text-white  font-semibold rounded-md cursor-pointer px-4 py-2"
            onClick={() => loginWithRedirect()}
          >
            Log In
          </button>
        )}

        <div className="md:flex  text-softTxt md:block items-center gap-2 pr-4">
          {isAuthenticated && (
            <div div className="flex items-center gap-4">
              <img
                className="w-12 h-12 md:w-10 md:h-10 rounded-full cursor-pointer"
                src={user.picture}
                alt={user.nickname}
              />
              <span className="hidden md:block font-bold cursor-pointer">
                {user.nickname}
              </span>
              <button
                className="bg-bgLight   text-softTxt font-semibold rounded-md cursor-pointer px-3 py-2"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </div>
          )}
        </div>
        {isAuthenticated && (
          <Link to="/cart">
            <div className="flex items-center gap-3 md:flex  md:block items-center pr-4">
              <div className="relative">
                <ShoppingCart size={28} color="#F86F03" className="font-bold" />
                <div
                  className="w-4 h-4 text-sm  text-white  font-bold flex
          items-center justify-center rounded-full bg-orange 
          absolute top-[-5px] right-[-8px]"
                >
                  {item.length || 0}
                </div>
              </div>
              <span className="font-bold text-softTxt">Cart</span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
