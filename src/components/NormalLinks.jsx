const NormalLinks = ({ to, message }) => {
  return (
    <li className="">
      <a href={to}><i className={message}></i></a>
    </li>
  );
};

export default NormalLinks;
