import { FETCH_GITHUB_DATA, FETCH_FOOD_DATA, FILTER_FOOD } from "./types";
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

export const filterFood = newFoodList => {
  return dispatch => {
    return dispatch({
      type: FILTER_FOOD,
      payload: newFoodList
    });
  };
};

export const fetchFoodData = () => {
  return dispatch => {
    //Verifica se os alimentos já existem na máquina
    const tabelaLocal = localStorage.getItem("tabelataco");
    if (tabelaLocal) {
      console.log("JSON encontrado");
      return dispatch({
        type: FETCH_FOOD_DATA,
        payload: JSON.parse(tabelaLocal)
      });
    }
    return axios
      .get("../TACO.json")
      .then(response => {
        console.log("Buscando JSON no servidor...");
        localStorage.setItem("tabelataco", JSON.stringify(response.data));
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
