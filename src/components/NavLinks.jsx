import { NavLink } from "react-router-dom";

const NavLinks = ({ to, message, activeClass, inActiveClass }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
    >
      {message}
    </NavLink>
  );
};

export default NavLinks;
