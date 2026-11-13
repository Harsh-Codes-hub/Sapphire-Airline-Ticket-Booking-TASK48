import Container from "../components/Container";
import ServiceCard from "../components/ServiceCard";
import serviceData from "../data/serviceData"

const Services = () => {
  return (
    <>
      <section className="min-h-dvh">
        <Container>
          <section className="mt-25 md:mt-45">
            <h3 className="font-heading font-semibold text-5xl md:text-7xl uppercase tracking-tighter mb-4 text-(--yale-blue) text-center">
              Our Services
            </h3>
            <hr className="text-(--yale-blue) w-80 md:w-120 mx-auto -mt-3 mb-4 border" />
            <ul className="grid grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-5 place-items-center">
              {serviceData.map((card) => <ServiceCard key={card.id} {...card}/>)}
            </ul>
          </section>
        </Container>
      </section>
      <section>
        <Container></Container>
      </section>
    </>
  );
};

export default Services;
