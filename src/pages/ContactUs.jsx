import Container from "../components/Container";
import ContactInfoCard from "../components/ContactInfoCard";
import contactData from "../data/contactData";
// import contactRouteData from "../data/contactRouteData";

const ContactUs = () => {
  return (
    <section className="mt-25 md:mt-45 flex flex-col gap-6">
      <section>
        <Container>
          <div>
            <h3 className="font-heading font-semibold text-4xl md:text-6xl tracking-tighter mb-4 text-(--yale-blue) w-fit mx-auto border-b-2 border-(--yale-blue) capitalize whitespace-nowrap">
              Contact Us
            </h3>
            <p className="w-fit mx-auto font-heading text-center font-semibold tracking-wide text-(--yale-blue) text-lg">
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
    </section>
  );
};

export default ContactUs;
