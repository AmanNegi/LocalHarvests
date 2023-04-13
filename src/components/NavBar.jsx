import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [drawerVisible, setdrawerVisible] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        // whileInView={{ y: 0 }}
        className="fixed top-0 z-[2] h-[8vh] w-[100%] bg-white  flex px-2 md lg:px-16  items-center shadow-md "
      >
        {/* <h1>LOGO</h1> */}
        <Link to = "/"><img className="h-20  py-2 object-contain" src={logo} alt="" /></Link>
        <div className="flex flex-1"></div>

        <NavBarItem text="Home" />
        <NavBarItem text="About" route="/about" />
        <NavBarItem text="Shop" route="/shop" />

        <Button additionalClasses="hidden md:block" text="Contact" />
        <div
          onClick={() => {
            setdrawerVisible(!drawerVisible);
          }}
          className="visible md:hidden mr-2 h-[100%] w-[20%] flex justify-end items-center"
        >
          <i
            className={`fa-solid ${!drawerVisible ? "fa-bars" : "fa-close"} `}
          ></i>
        </div>
      </motion.header>
      {drawerVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity:1 }}
          transition={{ duration: 0.5 }}
          className="fixed top-[8vh] z-[1] visible md:hidden w-[100%] flex flex-col"
        >
          <MobileNavBarItem text="Home" route="/" />
          <MobileNavBarItem text="Shop" route="/shop" />
          <MobileNavBarItem text="About" route="/about" />
        </motion.div>
      )}
    </>
  );
}

function MobileNavBarItem({ text = "NavItem", route = "/" }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(route);
      }}
      className="bg-green-100 py-3 px-2 border-b border-green-200" 
    >
      <h1 className="text-green-800">{text}</h1>
    </div>
  );
}

function NavBarItem({ text = "NavItem", route = "/" }) {
  var navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(route)}
      className="hidden lg:flex md:flex items-center text-center h-[100%] px-5 mx-5 hover:bg-green-100 hover:text-green-800 "
    >
      <h1 className="text-lg ">{text}</h1>
    </div>
  );
}

export default NavBar;
