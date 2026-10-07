import { Link } from "react-router-dom";

const NavLink = ({ path, placeHolder }) => {
  return (
    <li>
      <Link className="text-xl" to={path}>{placeHolder}</Link>
    </li>
  );
};

export default NavLink;
