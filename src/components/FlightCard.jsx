const FlightCard = () => {
  return (
    <li>
      <article className="text-center md:grid md:grid-cols-[1fr_2fr_1.5fr_0.5fr] flex flex-col border border-(--prussian-blue) rounded-lg overflow-hidden shadow-lg">
        <div className="md:border-r border-(--prussian-blue)">
          <h3 className="md:hidden flight-card-heading text-xl">Flight</h3>
          <p className="py-4 md:py-2 text-(--yale-blue) font-bold">
            <span>Smith Group</span> <span>—</span> <span>Flight SG204</span>
          </p>
        </div>
        <div className="md:border-r border-(--prussian-blue)">
          <h3 className="md:hidden flight-card-heading text-xl">Route</h3>
          <div className="grid grid-cols-3 py-4 md:py-2">
            <div>
              <p className="text-(--yale-blue) font-semibold">18:29</p>
              <p className="text-(--prussian-blue) font-bold">Lake Ryanville</p>
            </div>
            <div>
              <p className="text-red-700 font-semibold">Direct Flight</p>
              <p className="text-(--yale-blue) font-bold">3h 25m</p>
            </div>
            <div>
              <p className="text-(--yale-blue) font-semibold">21:45</p>
              <p className="text-(--prussian-blue) font-bold">New Joshua</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:border-r border-(prussian-blue)">
          <div>
            <h3 className="md:hidden flight-card-heading text-xl">Economy</h3>
            <div className="py-4 md:py-2">
              <p className="text-green-900 font-bold">$136.00</p>
              <p className="text-gray-700 font-medium">12 Seats available</p>
            </div>
          </div>
          <div>
            <h3 className="md:hidden flight-card-heading text-xl">Business</h3>
            <div className="py-4 md:py-2">
              <p className="text-green-900 font-bold">$320.00</p>
              <p className="text-gray-700 font-medium">12 Seats available</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-t md:border-0 border-(--prussian-blue)">
          <div className="flex-1 grid grid-cols-2 md:grid-rows-2 md:grid-cols-1">
            <button type="button" className="flight-card-btn border-r md:border-r-0 md:border-b border-(prussian-blue) py-2 md:py-0 text-lg uppercase">View</button>
            <button type="button" className="flight-card-btn text-lg uppercase">Book</button>
          </div>
        </div>
      </article>
    </li>
  );
};

export default FlightCard;
