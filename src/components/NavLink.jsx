import { Link } from "react-router-dom";

const NavLink = ({ path, placeHolder }) => {
  return (
    <li>
      <Link className="text-xl uppercase" to={path}>{placeHolder}</Link>
    </li>
  );
};

export default NavLink;
