import React from 'react';
import PropTypes from 'prop-types';

const CatalogueItem = ({ meal }) => (
  <div className="col-md-3 mb-5">
    <div className="card card-body bg-dark text-center h-100">
      <img className="w-100 mb-2" src={meal.strMealThumb} alt="meal Cover" />
      <h4 className="text-light card-title">{meal.strMeal}</h4>
      <h6 className="text-light card-title">{meal.strArea}</h6>
    </div>
  </div>
);

CatalogueItem.propTypes = {
  meal: PropTypes.objectOf(PropTypes.string),
};

CatalogueItem.defaultProps = {
  meal: [],
};

export default CatalogueItem;
