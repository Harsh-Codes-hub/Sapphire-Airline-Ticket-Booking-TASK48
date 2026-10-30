import NavLinks from "./NavLinks";

const FooterLinkSection = ({ headline, links }) => {
  return (
    <section>
      <h3>{headline}</h3>
      <ul className="flex flex-col">
        {links.map(({ to, message }) => (
          <NavLinks to={to} message={message} activeClass={"footerLinkActive"} inActiveClass={"footerLinkInActive"}/>
        ))}
      </ul>
    </section>
  );
};

export default FooterLinkSection;
