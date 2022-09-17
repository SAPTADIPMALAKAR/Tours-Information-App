import React from "react";
import Tour from "./Tour";
import "./tour.css";

const Tours = (props) => {
  
  const { tours, removeTour } = props;

  return (
    <section>
      <h1>Tour Information App</h1>
      <hr></hr>
      <div className="title">
        <h2>All Tours</h2>
        <div className="underline"></div>
      </div>
      <div className="tours-list">
        {tours.map((tour) => {
          return (
            <div className="grid-">
              <Tour key={tour.id} removeTour={removeTour} {...tour} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
