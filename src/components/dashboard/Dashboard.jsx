import React, { Component } from "react";
import Notifications from "./Notifications";
import FoodList from "../foods/FoodList";
class Dashboard extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m6">
              <FoodList />
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

export default Dashboard;
