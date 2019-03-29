import React from "react";

const FoodSummary = ({ food }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{food.description}</span>
        <p>Postado por </p>
        <p className="grey-text">1st de Maio, 2am</p>
      </div>
    </div>
  );
};

export default FoodSummary;
