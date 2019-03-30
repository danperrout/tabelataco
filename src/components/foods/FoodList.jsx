import React from "react";
import FoodSummary from "./FoodSummary";

const FoodList = ({ foods }) => {
  return (
    <div className="project-list section">
      Foram carregados {foods.length} alimentos.
      {foods &&
        foods.map(food => {
          return <FoodSummary food={food} key={food.id} />;
        })}
    </div>
  );
};

export default FoodList;
