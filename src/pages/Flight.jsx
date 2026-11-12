import Container from "../components/Container";
import FlightCard from "../components/FlightCard";

const Flight = () => {
  return (
    <>
      <section className="min-h-dvh">
        <Container>
          <section className="mt-25 md:mt-45 bg-(--off-white) py-6 px-2 max-h-200 rounded-xl shadow-lg overflow-hidden">
            <header className="w-full py-2 bg-(--prussian-blue) text-(--navajo-white) text-center md:grid grid-cols-[1fr_2fr_1.5fr_0.5fr] text-xl font-heading font-semibold uppercase md:gird hidden rounded-t-lg">
              <h3>Flight</h3>
              <h3>Route</h3>
              <div className="grid grid-cols-2">
                <h3>Economy</h3>
                <h3>Business</h3>
              </div>
              <h3>Action</h3>
            </header>
            <ul className="list-none flex flex-col mt-4 gap-4 md:gap-6 overflow-auto">
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
