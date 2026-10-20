import links from "../data/Links";
import NavLink from "./NavLink";

const SideNav = () => {
  return (
    <nav className="absolute bg-blue-800 z-50 w-screen text-white translate-x-full pointer-events-none">
      <div className="flex mt-4 ml-4">
        <div className="mr-4 flex items-center rounded-lg overflow-hidden text-lg">
          <input
            type="text"
            className="bg-white text-black py-1 px-3 outline-0"
          />
          <button type="button" className="bg-black py-1 px-2 text-white">
            <i className="ri-search-line"></i>
          </button>
        </div>
        <button
          type="button"
          className="bg-cyan-300 text-blue-700 py-1 px-3 text-lg font-medium rounded-lg"
        >
          Sign In
        </button>
      </div>
      <ul className="flex flex-col ml-8 gap-4 py-4 text-2xl font-medium">
        {links.map(({ path, placeHolder }) => (
          <NavLink path={path} placeHolder={placeHolder} />
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
