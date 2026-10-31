import NavLinks from "./NavLinks";

const FooterLinkSection = ({ headline, links }) => {
  return (
    <section>
      <h3 className="text-(--navajo-white) font-heading text-3xl footerHeadline">
        {headline}
      </h3>
      <ul className="flex flex-col items-start gap-2 text-(--off-white) text-xl mt-2 px-4 opacity-85">
        {links.map(({ to, message }) => (
          <NavLinks to={to} message={message} activeClass={"footerLinkActive"} inActiveClass={"footerLinkInActive"}/>
        ))}
      </ul>
    </section>
  );
};

export default FooterLinkSection;
