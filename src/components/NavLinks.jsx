import { NavLink } from "react-router-dom";

NavLink;

const NavLinks = ({ to, message }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive}) =>
        isActive ? "linkActive" : "opacity-75 border-b-2 border-b-transparent"
      }
    >
      {message}
    </NavLink>
  );
};

export default NavLinks;
