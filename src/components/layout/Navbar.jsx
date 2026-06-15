import React from 'react';
import { FaGlobe, FaShoppingBag, FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../features/cart/cartSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const { totalQuantity } = useSelector((state) => state.cart);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm py-3 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO */}
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => dispatch(toggleCart())}
          role="button"
          aria-label="Toggle cart"
        >
          {/* We assume panda.png is inside public/images/ */}
          <div className="bg-foodpanda-primary rounded-xl p-1 flex items-center justify-center relative">
            <FaShoppingBag className="text-white w-6 h-6" />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {totalQuantity}
              </span>
            )}
          </div>
          <span className="text-foodpanda-primary font-bold text-xl tracking-tight hidden sm:block">foodpanda</span>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3 sm:gap-6">
          <button 
            className="hidden sm:flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-sm font-semibold hover:bg-gray-50 transition-colors"
            aria-label="Log in to your account"
          >
            <FaUser className="w-4 h-4" />
            Log in
          </button>
          
          <button 
            className="bg-foodpanda-primary hover:bg-foodpanda-hover text-white rounded-lg px-5 py-2 text-sm font-semibold transition-colors shadow-sm"
            aria-label="Sign up for an account"
          >
            Sign up
          </button>
          
          <div 
            className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-foodpanda-primary font-medium text-sm transition-colors"
            role="button"
            aria-label="Select language"
          >
            <FaGlobe className="w-5 h-5" />
            <span className="hidden sm:block">EN</span>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
