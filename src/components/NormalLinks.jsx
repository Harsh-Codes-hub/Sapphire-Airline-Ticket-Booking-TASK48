const NormalLinks = ({ to, message, extra}) => {
  return (
    <li>
      <a href={to} className={`${extra}`}>
        <i className={message}></i>
        </a>
    </li>
  );
};

export default NormalLinks;
