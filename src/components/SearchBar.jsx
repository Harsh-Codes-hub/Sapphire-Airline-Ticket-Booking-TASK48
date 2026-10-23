const searchBar = () => {
  return (
    <form className="h-full overflow-hidden flex rounded-lg">
      <input
        type="text"
        name=""
        id=""
        className="bg-(--off-white) text-(--prussian-blue) px-2 font-body"
        placeholder="Search..."
      />
      <button
        type="submit"
        className="h-10 aspect-square bg-(--deep-saffron) text-(--prussian-blue) text-3xl font-black"
      >
        <i className="ri-search-2-line"></i>
      </button>
    </form>
  );
};

export default searchBar;
