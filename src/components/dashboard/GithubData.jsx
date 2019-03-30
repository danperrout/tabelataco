import React from "react";
import { connect } from "react-redux";

function GithubData({ data }) {
  if (!data) {
    return <div>No Data</div>;
  }
  return (
    <div>
      <div>Name: {data.name}</div>
      <br />
      <div>Blog: {data.blog}</div>
      <br />
      <div>Github Followers: {data.followers}</div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.github.payload
  };
};

export default connect(
  mapStateToProps,
  null
)(GithubData);
