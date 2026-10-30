import Container from "./Container";
import footerRouteData from "../data/footerRouteData";
import FooterLinkSection from "./FooterLinkSection";
import contactRouteData from "../data/contactRouteData";
import NormalLinks from "./NormalLinks";

const Footer = () => {
  return (
    <footer className="w-full bg-(--prussian-blue)">
      <Container>
        <main className="grid grid-cols-5 gap-8 py-8">
          <section>
            <h2 className="font-attention text-5xl text-(--navajo-white) logo mt-6">
              Sapphire
            </h2>
          </section>
          {footerRouteData.map(({ headline, links }) => (
            <FooterLinkSection headline={headline} links={links} />
          ))}
          <section>
            <h3 className="text-(--navajo-white) font-heading text-3xl footerHeadline">
              Contact Us
            </h3>
            <ul className="flex items-start gap-6 text-(--off-white) text-3xl mt-2">
              {contactRouteData.map(({to, message}, index) => <NormalLinks key={`icon-_link-${index}`} to={to} message={message}/>)}
            </ul>
          </section>
        </main>
      </Container>
    </footer>
  );
};

export default Footer;
