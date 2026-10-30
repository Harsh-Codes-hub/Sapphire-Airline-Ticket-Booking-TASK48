const NormalLinks = ({ to, message }) => {
  return (
    <li>
      <a href={to} className="hover:text-(--deep-saffron)"><i className={message}></i></a>
    </li>
  );
};

export default NormalLinks;
