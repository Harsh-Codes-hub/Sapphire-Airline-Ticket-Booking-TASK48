import NavLinks from "./NavLinks";
import routeData from "../data/routeData";
import SearchBar from "./SearchBar";

const SideNav = () => {
  return (
    <nav className="bg-(--prussian-blue) text-(--navajo-white) w-full absolute py-4 px-4 translate-x-full lg:hidden  lg:pointer-events-none">
      <ul className="flex flex-col gap-4 text-2xl mb-4">
        {routeData.map(({ to, message }) => (
          <NavLinks to={to} message={message} />
        ))}
      </ul>
      <div className="flex text-lg justify-between">
        <SearchBar width={10}/>
        <button
          type="button"
          className="bg-(--navajo-white) text-(--prussian-blue) font-heading rounded-sm text-xl font-black px-2 whitespace-nowrap"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default SideNav;
