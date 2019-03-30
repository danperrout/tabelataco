import { FETCH_GITHUB_DATA, FETCH_FOOD_DATA } from "./types";
import axios from "axios";

//axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";

const apiUrl = "https://api.github.com/users/danperrout";

export const fetchData = () => {
  return fetchGithubData();
};

export const fetchGithubData = () => {
  return dispatch => {
    return axios
      .get(apiUrl)
      .then(response => {
        dispatch({
          type: FETCH_GITHUB_DATA,
          payload: response.data
        });
      })
      .catch(error => {
        throw error;
      });
  };
};

export const fetchFoodData = () => {
  return dispatch => {
    return axios
      .get("../TACO.json")
      .then(response => {
        dispatch({
          type: FETCH_FOOD_DATA,
          payload: response.data
        });
      })
      .catch(error => {
        throw error;
      });
  };
};
