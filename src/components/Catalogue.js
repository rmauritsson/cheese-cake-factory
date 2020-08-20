import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMeals } from '../actions';
import Spinner from './Spinner';
import CatalogueItem from './CatalogueItem';

const Catalogue = ({ mealsData, fetchMeals }) => {
  useEffect(() => {
    fetchMeals();
  }, []);

  return mealsData.loading ? <Spinner /> : (
    <div className="container mt-4">
      <div className="row">
        {
          mealsData.mealsList.map(meal => <CatalogueItem key={meal.idMeal} meal={meal} />)
        }
      </div>
    </div>
  );
};

Catalogue.propTypes = {
  mealsData: PropTypes.shape([]).isRequired,
  fetchMeals: PropTypes.func,
};

Catalogue.defaultProps = {
  fetchMeals: () => {},
};

const mapStateToProps = state => ({
  mealsData: state.catalogue,
});

const mapDispatchToProps = dispatch => ({
  fetchMeals: () => dispatch(fetchMeals()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
