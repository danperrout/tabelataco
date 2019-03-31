import React from "react";
import FoodSummary from "./FoodSummary";

const FoodList = ({ foods }) => {
  // ...inside the render() function

  var size = 10;
  var items = foods.slice(0, size).map(i => {
    return <FoodSummary food={i} key={i.id} />;
  });

  return (
    <div className="project-list section">
      Foram carregados {foods.length} alimentos. Mostrando {items.length}{" "}
      alimentos.
      {items}
    </div>
  );
};

export default FoodList;
