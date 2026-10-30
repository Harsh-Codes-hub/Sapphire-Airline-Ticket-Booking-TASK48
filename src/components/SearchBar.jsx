const searchBar = () => {
  return (
    <form className="h-10 w-60 flex rounded-sm overflow-hidden">
      <input
        type="text"
        name=""
        id=""
        className="bg-(--off-white) text-(--prussian-blue) px-2 font-body flex-1"
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
