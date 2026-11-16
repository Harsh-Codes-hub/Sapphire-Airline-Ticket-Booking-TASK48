const FlightCard = ({
  id,
  airline,
  from,
  fromTimestamp,
  to,
  toTimestamp,
  flightType,
  economyCharges,
  economySeatsAvailable,
  businessCharges,
  businessSeatsAvailable,
}) => {
  const fromTime = new Date(fromTimestamp);
  const formattedFromTime = fromTime.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const toTime = new Date(toTimestamp);
  const formattedToTime = toTime.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const timeMs = Math.abs(toTime - fromTime);
  const timeM = Math.floor(timeMs / (1000 * 60));
  const timeH = Math.floor(timeM / 60);
  const remainingM = timeM % 60;

  const travelDuration = `${timeH}h ${remainingM}m`;

  return (
    <li>
      <article className="text-center md:grid md:grid-cols-[1fr_2fr_1.5fr_0.5fr] flex flex-col border border-(--prussian-blue) rounded-lg overflow-hidden shadow-lg">
        <div className="md:border-r border-(--prussian-blue)">
          <h3 className="md:hidden flight-card-heading text-xl">Flight</h3>
          <p className="py-4 md:py-2 text-(--yale-blue) font-bold px-2">
            <span>{airline}</span> <span>—</span> <span>Flight {id}</span>
          </p>
        </div>
        <div className="md:border-r border-(--prussian-blue)">
          <h3 className="md:hidden flight-card-heading text-xl">Route</h3>
          <div className="grid grid-cols-3 py-4 md:py-2">
            <div>
              <p className="text-(--yale-blue) font-semibold">
                {formattedFromTime}
              </p>
              <p className="text-(--prussian-blue) font-bold">{from}</p>
            </div>
            <div>
              <p className="text-red-700 font-semibold">{flightType} Flight</p>
              <p className="text-(--yale-blue) font-bold">{travelDuration}</p>
            </div>
            <div>
              <p className="text-(--yale-blue) font-semibold">
                {formattedToTime}
              </p>
              <p className="text-(--prussian-blue) font-bold">{to}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:border-r border-(prussian-blue)">
          <div>
            <h3 className="md:hidden flight-card-heading text-xl">Economy</h3>
            <div className="py-4 md:py-2">
              <p className="text-green-900 font-bold">${economyCharges}</p>
              <p className="text-gray-700 font-medium">
                {economySeatsAvailable} Seats available
              </p>
            </div>
          </div>
          <div>
            <h3 className="md:hidden flight-card-heading text-xl">Business</h3>
            <div className="py-4 md:py-2">
              <p className="text-green-900 font-bold">${businessCharges}</p>
              <p className="text-gray-700 font-medium">
                {businessSeatsAvailable} Seats available
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-t md:border-0 border-(--prussian-blue)">
          <div className="flex-1 grid grid-cols-2 md:grid-rows-2 md:grid-cols-1">
            <button
              type="button"
              className="flight-card-btn border-r md:border-r-0 md:border-b border-(prussian-blue) py-2 md:py-0 text-lg uppercase"
            >
              View
            </button>
            <button type="button" className="flight-card-btn text-lg uppercase">
              Book
            </button>
          </div>
        </div>
      </article>
    </li>
  );
};

export default FlightCard;
