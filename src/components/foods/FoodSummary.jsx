import React, { Component } from "react";
import GoogleImageSearch from "../../utils/googleSearchImage";
import withUnmounted from "@ishawnwang/withunmounted";

class FoodSummary extends Component {
  hasUnmounted = false;

  constructor(props) {
    super(props);
    this.state = {
      imageEnd: "http://www.devsanon.com/wp-content/uploads/2015/12/null.png"
    };
  }

  componentDidMount() {
    // fetch the project name, once it retrieves resolve the promsie and update the state.
    const imageWeb = GoogleImageSearch.searchImage(
      this.props.food.description
    ).then(res => res[0]);

    imageWeb.then(v => {
      if (this.hasUnmounted) {
        //console.log("Tentou renderizar com componente destruído.");
        return;
      }
      this.setState({
        ...this.state,
        imageEnd: v
      });
    });
  }

  render() {
    const { food } = this.props;

    return (
      <div className="card z-depth-0 project-summary">
        {this.state.imageEnd && (
          <div
            className="card-image"
            style={{
              width: "100%",
              height: "150px",
              backgroundImage: `url(${this.state.imageEnd})`
            }}
          />
        )}
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{food.description}</span>
          <p>
            Calorias: {parseFloat(food.energy_kcal).toFixed(2)}kcal por 100g
          </p>
          <p>Proteína: {parseFloat(food.protein_g).toFixed(2)}g por 100g</p>
          <p>Gorduras: {parseFloat(food.lipid_g).toFixed(2)}g por 100g</p>
          <p>
            Carboidratos: {parseFloat(food.carbohydrate_g).toFixed(2)}g por 100g
          </p>
          <p className="grey-text">{food.category}</p>
        </div>
      </div>
    );
  }
}

export default withUnmounted(FoodSummary);
