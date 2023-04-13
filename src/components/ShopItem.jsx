import { motion } from "framer-motion";
import { useState } from "react";
import Rating from "react-rating";

function ShopItem({ item }) {
  var [count, setCount] = useState(1);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.25 }}
        viewport={{ once: true }}
        className="border border-slate-300 relative transition duration-500 rounded-lg hover:shadow-m d bg-white "
      >
        <div className="h-1"></div>
        <img
          className="h-40 w-[100%] rounded-t-lg object-contain"
          src={item.image}
          alt=""
        />
        <div className="px-4 py-2  rounded-lg ">
          <h1 className="text-xl font-bold text-gray-700 hover:text-gray-900 hover:cursor-pointer">
            {item.name}
          </h1>

          <p className="text-lg text-green-500 font-bold">
            {`₹ ` + item.price + "/kg"}
          </p>

          <div className="h-[1vh]"></div>
          <Rating
            initialRating={4.0}
            fullSymbol="fa-solid fa-star text-amber-400 "
            emptySymbol="fa-regular fa-star text-gray-300"
          />
          {/* <RatingComponent /> */}

          <div className="h-[1vh]"></div>
          <div className="flex flex-row">
            <div className="w-[40%] h-[40px] flex flex-row items-center justify-center border border-gray-300 rounded-md px-2">
              <div
                onClick={() => {
                  if (count > 0) {
                    setCount((count) => {
                      return count-1;
                    });
                  }
                }}
                className="cursor-pointer flex-1 h-[100%] flex justify-center items-center"
              >
                <i className="fa-solid fa-minus"></i>
              </div>
              <div className="flex-1 h-[100%] flex justify-center items-center text-center bg-slate-200">
                {count}
              </div>
              <div
                onClick={() => {
                  setCount((count) => count + 1);
                  console.log(count);
                }}
                className="cursor-pointer flex-1 h-[100%] flex justify-center items-center text-center"
              >
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="ml-4 w-[40px] h-[40px] bg-green-400 flex justify-center items-center rounded-md">
              <i className="fa-solid fa-cart-shopping text-white"></i>
            </div>
          </div>
        </div>
        <div className="h-[1vh]"></div>
      </motion.div>
    </>
  );
}

export default ShopItem;

function RatingComponent() {
  return (
    <>
      <span className="flex items-center">
        <svg
          fill="currentColor"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          className="w-4 h-4 text-yellow-500"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
        <svg
          fill="currentColor"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          className="w-4 h-4 text-yellow-500"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
        <svg
          fill="currentColor"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          className="w-4 h-4 text-yellow-500"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
        <svg
          fill="currentColor"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          className="w-4 h-4 text-yellow-500"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          className="w-4 h-4 text-yellow-500"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
        <span className="text-black font-semibold ml-3">4.0</span>
      </span>
    </>
  );
}
