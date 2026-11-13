const ServiceCard = ({icon, serviceName, description}) => {
  return (
    <li>
      <article className="bg-(--off-white) py-4 px-6 w-80 sm:w-75 md:w-70 aspect-square flex flex-col items-center justify-evenly text-center shadow-lg">
        <i className={`${icon} text-5xl text-(--prussian-blue) icon-shadow`}></i>
        <h4 className="font-heading text-2xl font-semibold text-(--yale-blue)">{serviceName}</h4>
        <p className="font-body text-lg">{description}</p>
      </article>
    </li>
  );
};

export default ServiceCard;
