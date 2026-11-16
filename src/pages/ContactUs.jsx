import Container from "../components/Container";
import ContactInfoCard from "../components/ContactInfoCard";
import contactData from "../data/contactData";
import contactRouteData from "../data/contactRouteData";
import ContactUsLink from "../components/ContactUsLink";
import ContactForm from "../components/ContactForm";

const ContactUs = () => {
  return (
    <section className="mt-25 md:mt-45 flex flex-col gap-8 min-h-dvh">
      <section>
        <Container>
          <div>
            <h3 className="font-heading font-semibold text-4xl md:text-6xl tracking-tighter mb-4 text-(--yale-blue) w-fit mx-auto border-b-2 border-(--yale-blue) capitalize whitespace-nowrap">
              Contact Us
            </h3>
            <p className="w-fit mx-auto font-heading text-center font-semibold tracking-wide text-(--yale-blue) text-lg mb-8">
              We're here to help and answer any questions you might have
            </p>
            <ul className="grid grid-rows-3 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3 gap-4">
              {contactData.map((contact) => (
                <ContactInfoCard
                  key={`ContactCardID-${contact.id}`}
                  {...contact}
                />
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div>
            <h3 className="font-heading font-semibold text-4xl md:text-6xl tracking-tighter mb-6 text-(--yale-blue) w-fit mx-auto border-b-2 border-(--yale-blue) capitalize whitespace-nowrap">
              Connect with us
            </h3>
            <ul className="list-none flex gap-8 items-center justify-center">
              {contactRouteData.map(({ to, message }, index) => (
                <ContactUsLink
                  key={`icon-_link-${index}`}
                  to={to}
                  message={message}
                />
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <section className="mb-6">
        <Container>
          <ContactForm />
        </Container>
      </section>
    </section>
  );
};

export default ContactUs;
