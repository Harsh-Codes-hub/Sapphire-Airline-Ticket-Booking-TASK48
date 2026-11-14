import Container from "../components/Container";
import bgImg1 from "../assets/images/airline/sapphire-airplane.jpg";
import bgImg2 from "../assets/images/airline/founder-back.jpg";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <section
          className="relative z-0 mt-25 md:mt-45 bg-cover bg-center py-8 rounded-2xl overflow-hidden shadow-lg"
          style={{ backgroundImage: `url(${bgImg1})`}}
        >
          <div className="absolute inset-0 -z-5 backdrop-blur-xs about-bg-overlay-gradient"></div>
          <h3 className="relative z-0 font-attention font-semibold text-4xl md:text-7xl capitalize tracking-wide text-center w-fit mx-auto text-(--deep-saffron) mix-blend-color-dodge">
            About Sapphire
          </h3>
          <p className="font-heading text-(--navajo-white) w-fit mx-auto text-md font-semibold md:text-2xl mix-blend-color-dodge mt-1 md:mt-2">Elevating Your Travel Experience</p>
        </section>

        <section
          className="relative z-0 mt-8 bg-cover bg-center py-8 px-8 rounded-2xl overflow-hidden shadow-lg flex items-center flex-col md:flex-row gap-6"
          style={{ backgroundImage: `url(${bgImg2})`}}
        >
          <div className="absolute inset-0 -z-5 backdrop-blur-xs about-bg-overlay-gradient"></div>
          <img src="" alt="" className="min-h-50 h-80 aspect-square bg-gray-900 rounded-full"/>
          <div>
            <h4>Lorem, ipsum.</h4>
            <h5>Lorem, ipsum.</h5>
            <h6>Lorem, ipsum dolor.</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quas eaque sint aliquam dolorem perferendis accusamus non fugiat, blanditiis illo consequuntur ut ullam est voluptatum? Laudantium reprehenderit quod mollitia! Eum voluptas voluptatem reiciendis iure totam animi laboriosam iste, nesciunt sit?</p>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default AboutUs;
