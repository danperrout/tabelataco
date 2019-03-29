import React from "react";

const FoodDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Comida Id {id}</span>
          <p>TextpTextpTextpTextpTextp TextpTextpTextpTextpTextp</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Postado por</div>
          <div>DATA AQUI</div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
