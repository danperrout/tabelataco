import React from "react";

const FoodSummary = ({ food }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{food.description}</span>
        <p>Calorias: {parseFloat(food.energy_kcal).toFixed(2)}kcal por 100g</p>
        <p>Proteína: {parseFloat(food.protein_g).toFixed(2)}g por 100g</p>
        <p>Gorduras: {parseFloat(food.lipid_g).toFixed(2)}g por 100g</p>
        <p>
          Carboidratos: {parseFloat(food.carbohydrate_g).toFixed(2)}g por 100g
        </p>
        <p className="grey-text">{food.category}</p>
      </div>
    </div>
  );
};

export default FoodSummary;
