const TermsCard = ({termName, description}) => {
  return (
    <li className="shrink-0 w-[80%] max-w-225 mx-auto">
      <article className="rounded-lg overflow-hidden shadow-lg">
        <header className="w-full py-4 px-6 bg-(--prussian-blue) text-(--navajo-white) flex items-center font-heading capitalize justify-between">
          <h4 className="text-2xl tracking-wide font-semibold">{termName}</h4>
          <button type="button">
            <i className="ri-arrow-down-s-line text-3xl"></i>
          </button>
        </header>
        <main className="bg-(--off-white) py-4 px-6 hidden">{description}</main>
      </article>
    </li>
  );
};

export default TermsCard;
