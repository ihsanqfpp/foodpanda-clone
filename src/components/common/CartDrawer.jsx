import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart, removeItem, clearCart } from '../../features/cart/cartSlice';
import { FaTimes, FaTrash, FaShoppingBag } from 'react-icons/fa';

const CartDrawer = () => {
  const dispatch = useDispatch();
  const { items, totalAmount, isOpen } = useSelector((state) => state.cart);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={() => dispatch(toggleCart())}
      ></div>

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <FaShoppingBag className="text-foodpanda-primary" />
            Your Cart
          </h2>
          <button 
            onClick={() => dispatch(toggleCart())}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close cart"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-500">
              <FaShoppingBag className="w-16 h-16 text-gray-200 mb-4" />
              <p className="text-lg font-medium text-gray-700">Empty cart</p>
              <p className="text-sm mt-1">You haven't added anything yet.</p>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.id} className="flex justify-between items-center group">
                  <div>
                    <h4 className="text-gray-800 font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    <p className="text-foodpanda-primary font-bold mt-1">Rs. {item.price}</p>
                  </div>
                  <button 
                    onClick={() => dispatch(removeItem(item.id))}
                    className="text-red-400 hover:text-red-600 p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <FaTrash />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-600 font-medium">Total</span>
              <span className="text-xl font-bold text-gray-900">Rs. {totalAmount}</span>
            </div>
            <button className="w-full bg-foodpanda-primary hover:bg-foodpanda-hover text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-all transform active:scale-[0.98]">
              Review Payment and Address
            </button>
            <button 
              onClick={() => dispatch(clearCart())}
              className="w-full mt-3 text-gray-500 text-sm font-medium hover:text-gray-700 transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}

      </div>
    </>
  );
};

export default CartDrawer;
