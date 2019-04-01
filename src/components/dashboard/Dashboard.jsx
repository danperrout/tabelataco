import React, { Component } from "react";
import FoodList from "../foods/FoodList";
import { connect } from "react-redux";
import Filtro from "./Filtro";

class Dashboard extends Component {
  state = {};
  render() {
    const { filteredFoods, foods, isLoaded } = this.props;
    return (
      <React.Fragment>
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m6">
              {isLoaded ? (
                <FoodList foods={filteredFoods} originalFoods={foods} />
              ) : (
                "Carregando..."
              )}
            </div>
            <div className="col s12 m5 offet-m1">
              <blockquote>
                Busque pelos alimentos presentes na tabela TACO. <br />O app
                mostrará no máximo 10 alimentos por vez.
              </blockquote>
              <Filtro />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {}
}

const mapStateToProps = state => {
  return {
    foods: state.food.foods,
    filteredFoods: state.food.filteredFoods,
    isLoaded: state.food.isLoaded
  };
};

export default connect(mapStateToProps)(Dashboard);
