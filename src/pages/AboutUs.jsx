import Container from "../components/Container";
import bgImg1 from "../assets/images/airline/sapphire-airplane.jpg";
import avatar from "../assets/images/avatar/avatar.jpg";
import JourneyCard from "../components/JourneyCard";
import journeyData from "../data/journeyData";
import serviceData2 from "../data/serviceData2";
import ServiceCard from "../components/ServiceCard"


const AboutUs = () => {
  return (
    <section>
      <Container>
        <section
          className="relative z-0 mt-25 md:mt-45 bg-cover bg-center py-8 rounded-2xl overflow-hidden shadow-lg"
          style={{ backgroundImage: `url(${bgImg1})` }}
        >
          <div className="absolute inset-0 -z-5 backdrop-blur-xs about-bg-overlay-gradient"></div>
          <h3 className="relative z-0 font-attention font-semibold text-4xl md:text-6xl capitalize tracking-wide text-center w-fit mx-auto text-(--deep-saffron) mix-blend-color-dodge">
            About Sapphire
          </h3>
          <p className="font-heading text-(--navajo-white) w-fit mx-auto text-md font-semibold md:text-2xl mix-blend-color-dodge mt-1 md:mt-2">
            Elevating Your Travel Experience
          </p>
        </section>

        <section className="relative z-0 mt-8 bg-cover bg-center py-8 px-8 rounded-2xl overflow-hidden flex items-center flex-col md:flex-row gap-6">
          <img
            src={avatar}
            alt=""
            className="min-h-50 h-80 aspect-square bg-gray-900 rounded-full object-cover object-center"
          />
          <div className="flex flex-col items-start gap-2">
            <h4 className="font-attention uppercase text-(--prussian-blue) text-4xl font-semibold">
              Our Founder
            </h4>
            <h5 className="font-heading uppercase text-(--yale-blue) font-semibold text-3xl">
              Harsh Gajrani
            </h5>
            <h6 className="font-heading uppercase text-(--yale-blue)/75 font-semibold text-xl tracking-wide">
              CEO & Founder
            </h6>
            <p className="font-body tracking-wide text-lg text-(--ink-black)">
              A visionary in the travel industry with over a year of experience,
              Harsh founded SAPPHIRE with the mission to revolutionize flight
              booking. His expertise in aviation and technology has transformed
              SAPPHIRE into a leading platform that countless travelers trust.
            </p>
          </div>
        </section>
        <section className="mt-8">
          <h3 className="font-heading font-semibold text-4xl md:text-6xl tracking-tighter mb-6 text-(--yale-blue) w-fit mx-auto border-b-2 border-(--yale-blue) capitalize">
            Our Journey
          </h3>
          <ul className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-4 place-items-center">
            {journeyData.map((journey) => (
              <JourneyCard key={`journeyCardID-${journey.id}`} {...journey} />
            ))}
          </ul>
        </section>
        <section className="mt-8">
          <h3 className="font-heading font-semibold text-4xl md:text-6xl tracking-tighter mb-6 text-(--yale-blue) w-fit mx-auto border-b-2 border-(--yale-blue) capitalize whitespace-nowrap">
            Why SAPPHIRE
          </h3>
          <ul className="grid grid-cols-1 grid-rows-4 sm:grid-rows-2 lg:grid-rows-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
            {serviceData2.map((service) => <ServiceCard key={`ServiceCardID-${service.id}`} {...service} />)}
          </ul>
        </section>
        <section className="my-12 flex justify-center items-center">
            <button type="button" className="font-heading text-3xl bg-(--prussian-blue) text-(--navajo-white) py-4 px-6 rounded-full font-semibold shadow-lg">
              Get in Touch
            </button>
        </section>
      </Container>
    </section>
  );
};

export default AboutUs;
