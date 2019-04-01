import React, { Component } from "react";
import { connect } from "react-redux";
import { filterFood } from "../../store/actions";
import SearchBox from "./searchBox";

class Filtro extends Component {
  state = { searchQuery: "" };

  handleSearch = query => {
    this.setState({
      searchQuery: query
      //selectedGenre: null,
      //currentPage: 1
    });
    this.getPagedData(query);
  };

  getPagedData = () => {
    const { searchQuery } = this.state;

    console.log(searchQuery);
    let filteredFoods = this.props.foods;

    if (searchQuery)
      filteredFoods = this.props.foods.filter(m =>
        m.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

    console.log(filteredFoods.length);
    this.props.filterFood(filteredFoods);
  };

  render() {
    const { searchQuery } = this.state;
    return <SearchBox value={searchQuery} onChange={this.handleSearch} />;
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
