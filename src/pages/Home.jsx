import Container from "../components/Container";
import HeroAboutCards from "../components/HeroAboutCards";
import premiumService from "../assets/images/services/premiumService.jpg";
import globalCoverage from "../assets/images/services/globalCoverage.jpg";
import support from "../assets/images/services/support.jpg";

const Home = () => {
  const serviceCards = [
    {
      id: 1,
      title: "Premium Service",
      description: "Experience luxury at its finest",
      image: premiumService,
    },
    {
      id: 2,
      title: "Global Coverage",
      description: "Fly anywhere anytime",
      image: globalCoverage,
    },
    {
      id: 3,
      title: "24/7 Support",
      description: "Always here for you",
      image: support,
    },
  ];
  return (
    <>
      <section className="relative isolate min-h-dvh">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 -z-10 hidden size-full object-cover md:block"
        >
          <source src="/video/hero-bg.mp4" type="video/mp4" />
        </video>

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 -z-10 size-full object-cover md:hidden"
        >
          <source src="/video/hero-bg-m.mp4" type="video/mp4" />
        </video>
        <div className="absolute -z-5 inset-0 hero-bg-overlay-gradient"></div>
        <Container>
          <div className="text-black text-5xl flex flex-col items-center justify-center min-h-dvh w-full font-attention text-center mix-blend-color-dodge gap-2">
            <span className="text-(--navajo-white) text-5xl md:text-6xl font-semibold scale-75 sm:scale-85 md:scale-110">
              Welcome to
            </span>
            <span className="text-(--deep-saffron) text-7xl md:text-9xl font-black headline-stretch scale-95 sm:scale-110 md:scale-140 my-0 md:my-2">
              SAPPHIRE
            </span>
            <span className="text-(--navajo-white) text-5xl md:text-6xl font-semibold scale-75 sm:scale-85 md:scale-110">
              Your Journey Begins With Us
            </span>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="flex flex-col justify-between gap-8 md:gap-10 py-10">
            <div>
              <article className="text-center">
                <h4 className="font-heading font-semibold text-5xl md:text-7xl uppercase tracking-tighter mb-4 text-(--yale-blue)">
                  About Us
                </h4>
                <hr className="text-(--yale-blue) w-60 md:w-100 mx-auto -mt-3 mb-4 border" />
                <p className="font-body tracking-wide text-lg md:text-xl text-(--yale-blue)">
                  <span className="font-extrabold tracking-tight">SAPPHIRE</span> brings you the
                  best flight booking experience with exclusive deals and
                  premium services. We're committed to making your journey
                  comfortable and memorable.
                </p>
              </article>
            </div>
            <ul className="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCards.map((card) => (
                <HeroAboutCards key={card.id} {...card} />
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <section className="gradient-bg py-4">
        <Container>
          <div className="relative z-10 w-full flex flex-col items-center h-40 justify-center">
            <h4 className="font-heading text-(--navajo-white) text-4xl md:text-5xl font-semibold">Ready to Take Off</h4>
            <button className="bg-(--navajo-white) text-(--prussian-blue) py-2 px-3 text-3xl font-heading uppercase font-bold rounded-sm shadow-lg -mt-6 hover:mt-0 mix-blend-soft-light" type="button">Sign In</button>
          </div>
        </Container>
      </section>
      <section className="bg-(--navajo-white)">
        <Container>
          <div className="grid grid-rows-[auto_1fr] grid-cols-[auto_1fr] items-center py-4 px-2 gap-3">
              <i className="ri-double-quotes-l text-5xl col-start-1 rows-start-1 text-(--prussian-blue)"></i>
              <p className="text-2xl md:text-3xl font-body quote-box-center col-start-1 row-start-2 col-span-2 text-center text-(--yale-blue) tracking-wide">Experience the skies like never before with <span className="font-attention tracking-tight font-bold">SAPPHIRE</span> - Where luxury meets convenience.</p>
              <i className="ri-double-quotes-r text-5xl col-start-2 row-start-3 justify-self-end text-(--prussian-blue)"></i>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="h-50">

          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
