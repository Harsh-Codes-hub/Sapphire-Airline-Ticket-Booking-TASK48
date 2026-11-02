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
          className="absolute inset-0 size-full object-cover md:hidden"
        >
          <source src="/video/hero-bg-m.mp4" type="video/mp4" />
        </video>

        <Container></Container>
      </section>
      <section className="">
        <Container></Container>
      </section>
    </>
  );
};

export default Home;
