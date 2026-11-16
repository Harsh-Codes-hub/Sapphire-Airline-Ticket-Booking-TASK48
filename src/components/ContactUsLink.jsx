const ContactUsLink = ({ to, message}) => {
  return (
    <li>
      <a href={to} className="bg-(--prussian-blue) text-(--navajo-white) aspect-square h-14 md:h-18 text-3xl md:text-4xl flex items-center justify-center rounded-full icon-shadow">
        <i className={message}></i>
      </a>
    </li>
  );
};

export default ContactUsLink;
