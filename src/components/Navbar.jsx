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
    <header className="py-2 px-4 bg-blue-700 text-white">
      <h1 className="text-5xl font-bold mb-4">SAPPHIRE</h1>
      <nav className="flex items-center">
        <ul className="flex gap-6 items-center mr-auto">
          {links.map(({ path, placeHolder }) => (
            <NavLink path={path} placeHolder={placeHolder} />
          ))}
        </ul>
        <div className="mr-4 flex items-center">
          <input
            type="text"
            className="bg-white text-black px-2 py-1 outline-0"
          />
          <button type="button" className="bg-black py-1 px-2">Oi</button>
        </div>
        <button
          type="button"
          className="bg-cyan-300 text-blue-700 py-1 px-3 text-lg font-medium rounded-lg"
        >
          Sign In
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
