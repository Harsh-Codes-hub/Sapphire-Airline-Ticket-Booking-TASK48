import Container from "../components/Container";

const Home = () => {
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
            <span className="text-(--navajo-white) text-5xl md:text-6xl font-semibold">
              Welcome to
            </span>
            <span className="text-(--deep-saffron) text-7xl md:text-9xl font-black headline-stretch h-auto">
              SAPPHIRE
            </span>
            <span className="text-(--navajo-white) text-5xl md:text-6xl font-semibold">
              Your Journey Begins With Us
            </span>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="grid grid-rows-2">
            <div>
              <h4>About Us</h4>
              <p>
                <span>SAPPHIRE</span> brings you the best flight booking
                experience with exclusive deals and premium services. We're
                committed to making your journey comfortable and memorable.
              </p>
            </div>
            <div>
              <article></article>
              <article></article>
              <article></article>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
