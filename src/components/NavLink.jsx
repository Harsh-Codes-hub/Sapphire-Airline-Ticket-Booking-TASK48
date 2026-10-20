import { Link } from "react-router-dom";

const NavLink = ({ path, placeHolder }) => {
  return (
    <li>
      <Link className="uppercase" to={path}>{placeHolder}</Link>
    </li>
  );
};

export default NavLink;
