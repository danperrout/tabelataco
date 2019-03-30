import React, { Component } from "react";
import FoodList from "../foods/FoodList";
import { connect } from "react-redux";
import GithubData from "./GithubData";

class Dashboard extends Component {
  state = {};
  render() {
    const { foods, isLoaded } = this.props;
    return (
      <React.Fragment>
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m6">
              {isLoaded ? <FoodList foods={foods} /> : "Carregando..."}
            </div>
            <div className="col s12 m5 offet-m1" />
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
    isLoaded: state.food.isLoaded
  };
};

export default connect(mapStateToProps)(Dashboard);
