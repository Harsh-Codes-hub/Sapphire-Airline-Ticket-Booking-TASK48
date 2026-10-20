import NavLink from "./NavLink";

const Navbar = () => {
  const links = [
    { path: "/", placeHolder: "Home" },
    { path: "/Flight", placeHolder: "Flight" },
    { path: "/Services", placeHolder: "Services" },
    { path: "/AboutUs", placeHolder: "About Us" },
    { path: "/ContactUs", placeHolder: "Contact Us" },
  ];

  return (
    <header className="relative py-2 px-4 bg-blue-700 text-white">
      <div className="flex items-center justify-between lg:block">
        <h1 className="text-3xl font-bold mb-2">SAPPHIRE</h1>
        <nav className="hidden items-center lg:flex pb-2">
          <ul className="flex gap-6 items-center mr-auto ml-8 text-white font-medium">
            {links.map(({ path, placeHolder }) => (
              <NavLink path={path} placeHolder={placeHolder} />
            ))}
          </ul>
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
        </nav>
        <nav className="lg:hidden">
          <button type="button">
            <i className="ri-menu-3-line text-2xl"></i>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
