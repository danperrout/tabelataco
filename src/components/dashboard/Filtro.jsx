import React, { Component } from "react";
import { connect } from "react-redux";
import { filterFood } from "../../store/actions";
import SearchBox from "./searchBox";

class Filtro extends Component {
  state = { searchQuery: "", groupSearch: [] };

  handleSearch = query => {
    const groupSearch = query.split(" ");
    this.setState({
      ...this.state,
      searchQuery: query,
      groupSearch
    });

    this.getPagedData(query, groupSearch);
  };

  getPagedData = (query, groupSearch) => {
    const searchQuery = query;
    let filteredFoods = this.props.foods;

    groupSearch.map(x => {
      filteredFoods = filteredFoods.filter(m =>
        m.description.toLowerCase().includes(x.toLowerCase())
      );
      return this.props.filterFood(filteredFoods);
    });

    if (searchQuery === "") {
      filteredFoods = this.props.foods;
      this.props.filterFood(filteredFoods);
    }
  };
  handleDelete = value => event => {
    console.log(value);
  };

  render() {
    const { searchQuery, groupSearch } = this.state;
    return (
      <div>
        <SearchBox value={searchQuery} onChange={this.handleSearch} />
        Termos buscados:
        <ul>
          {groupSearch.map(d => (
            <li key={d} value={d}>
              {d}{" "}
              <button
                onClick={this.handleDelete(d)}
                className="btn btn-small red"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    foods: state.food.foods,
    isLoaded: state.food.isLoaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filterFood: filteredFoods => dispatch(filterFood(filteredFoods))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filtro);
