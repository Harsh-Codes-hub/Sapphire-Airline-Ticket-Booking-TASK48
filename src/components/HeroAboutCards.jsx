const HeroAboutCards = ({title, description, image}) => {
  return (
    <li>
      <article className="bg-(--off-white) p-4 shadow-lg rounded-2xl">
        <div className="mb-4">
          <img src={image} alt={`${title}-image`} className="rounded-xl shadow-lg"/>
        </div>
        <div className="pl-2">
          <h4 className="text-3xl font-heading font-bold text-(--prussian-blue) tracking-wider">{title}</h4>
          <p className="font-body text-lg text-(--yale-blue)">{description}</p>
        </div>
      </article>
    </li>
  );
};

export default HeroAboutCards;
