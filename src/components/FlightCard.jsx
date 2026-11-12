const FlightCard = () => {
  return (
    <li>
      <article className="text-center flight-card-bg md:grid md:grid-cols-[1fr_2fr_1.5fr] flex flex-col border border-(--prussian-blue) rounded-lg overflow-hidden">
        <div className="md:border-r border-(--prussian-blue)">
          <h3 className="flight-card-heading text-xl">Flight</h3>
          <p className="flight-card-body">
            <span>Smith Group</span> - <span>Flight SG204</span>
          </p>
        </div>
        <div className="md:border-r border-(--prussian-blue)">
          <h3 className="flight-card-heading text-xl">Route</h3>
          <div className="grid grid-cols-3 flight-card-body">
            <div>
              <p>18:29</p>
              <p>Lake Ryanville</p>
            </div>
            <div>
              <p>Direct Flight</p>
              <p>3h 25m</p>
            </div>
            <div>
              <p>21:45</p>
              <p>New Joshua</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <h3 className="flight-card-heading text-xl">Economy</h3>
            <div className="flight-card-body">
              <p>136.00</p>
              <p>12 Seats available</p>
            </div>
          </div>
          <div>
            <h3 className="flight-card-heading text-xl">Business</h3>
            <div className="flight-card-body">
              <p>320.00</p>
              <p>12 Seats available</p>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
};

export default FlightCard;
