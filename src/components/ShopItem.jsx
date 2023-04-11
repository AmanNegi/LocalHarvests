import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function ShopItem({ item }) {
  var navigate = useNavigate();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.25 }}
        viewport={{ once: true }}
        // onClick={() => navigate("/item/" + item._id)}
        className="relative transition duration-500 rounded-lg  cursor-pointer hover:shadow-xl bg-white shadow-md"
      >
        <img
          className="h-40 w-[100%] rounded-t-lg object-contain"
          src={item.image}
          alt=""
        />
        <div className="px-4 py-2  rounded-lg ">
          <h1 className="text-xl font-bold text-gray-700 hover:text-gray-900 hover:cursor-pointer">
            {item.name}
          </h1>
          {/* <p className="overflow-hidden text-sm text-gray-700 h-6 lg:h-14 text-ellipsis">
            {item.description}
          </p> */}
          <button className="px-2 py-1 mt-3 mb-3 text-white transition duration-300 rounded-lg shadow-md text-md bg-green-400 hover:shadow-lg">
            Buy Now
          </button>
        </div>
        <div className="absolute px-4 py-2 bg-black text-white rounded-lg shadow-lg top-2 right-2">
          <span className="text-md">{"₹ " + item.price + "/kg "}</span>
        </div>
      </motion.div>
    </>
  );
}

export default ShopItem;
