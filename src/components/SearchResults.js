import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CatalogueItem from './CatalogueItem';
import Spinner from './Spinner';

const SearchResults = ({ search }) => (search.loading ? <Spinner /> : (
  <div className="container mt-4">
    <div className="row">
      {
        search.mealsList.map(meal => <CatalogueItem key={meal.idMeal} meal={meal} />)
      }
    </div>
  </div>
));

SearchResults.propTypes = {
  search: PropTypes.shape({
    mealsList: PropTypes.shape([]),
    loading: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = state => ({
  search: state.search,
});

export default connect(mapStateToProps)(SearchResults);
