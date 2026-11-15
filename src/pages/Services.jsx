import Container from "../components/Container";
import ServiceCard from "../components/ServiceCard";
import serviceData from "../data/serviceData";
import TermsCard from "../components/TermsCard";
import termsData from "../data/termsData";

const Services = () => {
  return (
    <>
      <section>
        <Container>
          <section className="mt-25 md:mt-45 pt-4 md:pt-0">
            <h3 className="font-heading font-semibold text-4xl md:text-6xl uppercase tracking-tighter mb-6 text-(--yale-blue) text-center w-fit mx-auto border-b-2 border-(--yale-blue)">
              Our Services
            </h3>
            <ul className="grid grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-5 place-items-center">
              {serviceData.map((card) => (
                <ServiceCard key={card.id} {...card} />
              ))}
            </ul>
          </section>
        </Container>
      </section>
      <section>
        <Container>
          <section className="mt-15 md:mt-35 mb-10">
            <h3 className="font-heading font-semibold text-4xl md:text-6xl uppercase tracking-tighter mb-8 text-(--yale-blue) text-center w-fit mx-auto border-b-2 border-(--yale-blue)">
              Legal Information
            </h3>
            <ul className="flex flex-col gap-4">
              {termsData.map((term) => <TermsCard key={`termID-${term.id}`} {...term}/>)}
            </ul>
          </section>
        </Container>
      </section>
    </>
  );
};

export default Services;
