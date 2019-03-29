import React, { Component } from "react";
import Notifications from "./Notifications";
import FoodList from "../foods/FoodList";
import { connect } from "react-redux";

class Dashboard extends Component {
  state = {};
  render() {
    const { foods } = this.props;

    return (
      <React.Fragment>
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m6">
              <FoodList foods={foods} />
            </div>
            <div className="col s12 m5 offet-m1">
              <Notifications />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    foods: state.food.foods
  };
};

export default connect(mapStateToProps)(Dashboard);
