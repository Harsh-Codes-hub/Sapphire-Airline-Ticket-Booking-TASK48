import Container from "../components/Container";
import FlightCard from "../components/FlightCard";

const Flight = () => {
  return (
    <>
      <section className="min-h-dvh">
        <Container>
          <section className="mt-25 md:mt-45 bg-(--off-white) py-6 px-2 max-h-200 rounded-xl shadow-lg overflow-hidden">
            <header className="w-full py-2 bg-(--yale-blue) text-(--navajo-white) text-center">
              header space
            </header>
            <ul className="list-none flex flex-col mt-4 gap-6 overflow-y-scroll">
              <FlightCard />
              <FlightCard />
              <FlightCard />
              <FlightCard />
              <FlightCard />
            </ul>
          </section>
        </Container>
      </section>
    </>
  );
};

export default Flight;
