import { GiHamburgerMenu } from "react-icons/gi";
import { ImCart } from "react-icons/im";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo-removebg-preview.png";

const Navbar = () => {
  return (
    <header>
      <nav className="backdrop-blur-sm bg-black/10  flex justify-between items-center py-2 px-8 fixed top-0 w-full z-50">
        <div className="hidden md:block">
          <ul className=" flex items-center gap-4">
            <li>
              <NavLink>Contact Us</NavLink>
            </li>
            <li>
              <NavLink>About Us</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="cheapkuk"
              className="w-24 h-24 md:h-32 md:w-32"
            />
          </Link>
        </div>
        <div className="hidden md:block">
          <NavLink className="flex items-center gap-4">
            <ImCart />
            <button>Login</button>
          </NavLink>
        </div>
        <div className="block md:hidden">
          <GiHamburgerMenu className="text-4xl" />
        </div>
      </nav>
      <Outlet />
    </header>
  );
};

export default Navbar;
