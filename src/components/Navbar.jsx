import Container from "./Container";
import routeData from "../data/routeData";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <header className="bg-(--prussian-blue)">
      <Container>
        <nav className="py-4 flex items-center lg:flex-col lg:items-start">
          <h1 className="font-attention text-4xl text-(--navajo-white) md:text-5xl logo">Sapphire</h1>
          <div className="hidden text-(--navajo-white) lg:flex mt-4 w-full">
            <ul className="flex items-center text-2xl font-heading gap-8 ml-6 font-bold">
              {routeData.map(({to, message}) => <NavLinks to={to} message={message}/>)}
            </ul>
          <div className="flex justify-between items-center ml-auto gap-2">
            <SearchBar />
            <button type="button" className="bg-(--navajo-white) text-(--prussian-blue) font-heading px-2 py-1 rounded-sm text-xl font-black">Sign In</button>
          </div>
          </div>
          <button type="button" className="text-(--navajo-white) text-3xl lg:hidden ml-auto">
            <i className="ri-menu-3-line"></i>
          </button>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
