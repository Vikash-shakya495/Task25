import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cartSlice';

const AddProduct = ({ item }) => {
  const dispatch = useDispatch();
  const isPaymentView = useSelector(state => state.cart.isPaymentView);

  return (
    <div className='bg-[#010926] text-[#dcf6fe] w-full p-4 flex justify-evenly items-center rounded-lg'>
      <div className="w-20 h-20">
        <img src={item.img} alt={item.productName} className='w-full h-full rounded-lg'/>
      </div>
      <div className="w-2/5 flex flex-col justify-center items-center">
        <h3>{item.productName}</h3>
        <p>₹{item.price}</p>
      </div>
      <div className='w-1/3 p-2 flex justify-around items-center rounded-l-lg'>
        <button
          className={`w-10 h-10 border-none rounded-lg ${isPaymentView ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#e32f1b]'} text-white text-xl`}
          onClick={() => dispatch(removeFromCart(item))}
          disabled={isPaymentView}
        >
          −
        </button>
        {item.quantity}
        <button
          className={`w-10 h-10 border-none rounded-lg ${isPaymentView ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-600'} text-white text-xl`}
          onClick={() => dispatch(addToCart(item))}
          disabled={isPaymentView}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
