const ContactInfoCard = ({ icon, headline, description }) => {
  return (
    <li>
      <article className="bg-(--off-white) shadow-lg px-4 py-6 rounded-lg">
        <header className="flex items-center justify-start gap-2 text-(--yale-blue)">
          <i className={`${icon} text-3xl`}></i>
          <span className="text-2xl font-semibold font-heading">{headline}</span>
        </header>
        <ul className="pl-2">
          {description.map((line) => (
            <li className="font-body text-lg text-(--prussian-blue)/75">
              <p>{line}</p>
            </li>
          ))}
        </ul>
      </article>
    </li>
  );
};

export default ContactInfoCard;
