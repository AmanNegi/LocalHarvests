import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "../components/Button";

function NavBar() {
  return (
    <header className="fixed top-0 z-[1] h-[8vh] w-[100%] bg-white bg-opacity-90 flex px-5 md:px-16 lg:px-16  items-center ">
      {/* <h1>LOGO</h1> */}
      <img className="h-[100px] w-[100px] object-contain" src={logo} alt="" />
      <div className="flex flex-1"></div>

      <NavBarItem text="Home" />
      <NavBarItem text="About" route="/about"   />
      <NavBarItem text="Shop" />

      <Button additionalClasses="hidden lg:block md:block" text="Contact" />
    </header>
  );
}

function NavBarItem({ text = "NavItem", route = "/" }) {
  var navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(route)}
      className="hidden lg:flex md:flex items-center text-center h-[100%] px-5 mx-5 hover:bg-slate-200 hover:text-green-600 "
    >
      <h1 className="text-lg ">{text}</h1>
    </div>
  );
}

export default NavBar;
