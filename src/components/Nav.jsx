import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import logo from "../../images/logo.png";

const NavItem = ({ title, classProps }) => {
  return (
    <li className={`mx-4 cursor-pointer list-none ${classProps}`}>{title}</li>
  );
};
const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4 2xl:px-10">
      <div className="md:flex-[0.5] flex-initial justify-center items-center 2xl:flex-1">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden items-center 2xl:justify-end 2xl:flex-1">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavItem key={item + index} title={item} />
        ))}
        <li className="bg-[#4f1974] py-2 px-7 mx-4 text-white rounded-full list-none cursor-pointer hover:bg-[#5c1d86]">
          Login
        </li>
      </ul>

      <div className="flex relative ">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism animate-slide-in">
            <li className="text-xl w-full my-2">
              <AiOutlineClose
                className="text-white cursor-pointer"
                onClick={() => setToggleMenu(false)}
              />
            </li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => (
                <NavItem
                  key={item + index}
                  title={item}
                  classProps={"my-2 text-lg text-white"}
                />
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
