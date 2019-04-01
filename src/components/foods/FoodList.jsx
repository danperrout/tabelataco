import React from "react";
import FoodSummary from "./FoodSummary";

const FoodList = ({ foods, originalFoods }) => {
  // ...inside the render() function

  var size = 10;
  var items = foods.slice(0, size).map(i => {
    return <FoodSummary food={i} key={i.id} />;
  });

  return (
    <div className="project-list section">
      Foram carregados {originalFoods.length} alimentos da base de dados.
      Mostrando {items.length} alimentos.
      {items}
    </div>
  );
};

export default FoodList;
