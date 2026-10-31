import Container from "./Container";
import footerRouteData from "../data/footerRouteData";
import FooterLinkSection from "./FooterLinkSection";
import contactRouteData from "../data/contactRouteData";
import NormalLinks from "./NormalLinks";

const Footer = () => {
  return (
    <footer className="w-full bg-(--prussian-blue) h-fit">
      <Container>
        <h2 className="font-attention text-5xl text-(--navajo-white) logo mt-8">
          Sapphire
        </h2>
        <main className="grid grid-rows-1 sm:grid-cols-2 gap-8 py-6 px-4 lg:grid-cols-4 pb-8">
          {footerRouteData.map(({ headline, links }, index) => (
            <FooterLinkSection headline={headline} links={links} key={`sec-${index}`}/>
          ))}
          <section>
            <h3 className="text-(--navajo-white) font-heading text-3xl footerHeadline">
              Contact Us
            </h3>
            <ul className="flex items-start gap-6 text-(--off-white) text-3xl mt-2 px-4 opacity-85">
              {contactRouteData.map(({ to, message }, index) => (
                <NormalLinks
                  key={`icon-_link-${index}`}
                  to={to}
                  message={message}
                />
              ))}
            </ul>
          </section>
        </main>
      </Container>
    </footer>
  );
};

export default Footer;
