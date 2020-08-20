/* eslint class-methods-use-this: ["error", { "exceptMethods": ["handleChange"] }] */

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { searchMeal, fetchMealBySearch } from '../actions';

const SearchForm = props => {
  const handleChange = e => {
    props.searchMeal(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.fetchMealBySearch(props.query);
    props.history.push('/search');
    e.target.reset();
  };

  return (
    <>
      <form className="form-inline my-2 my-lg-0" action="/search" onSubmit={handleSubmit}>
        <input
          id="formInput"
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={handleChange}
        />
        <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
      </form>
    </>
  );
};

SearchForm.propTypes = {
  searchMeal: PropTypes.func.isRequired,
  fetchMealBySearch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  query: PropTypes.string,
};

SearchForm.defaultProps = {
  query: '',
};

const mapStateToProps = state => ({
  query: state.search.query,
  history: state,
});

const mapDispatchToProps = dispatch => ({
  searchMeal: query => dispatch(searchMeal(query)),
  fetchMealBySearch: query => dispatch(fetchMealBySearch(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchForm));
