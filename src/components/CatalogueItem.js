import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CatalogueItem = ({ meal }) => (
  <div className="col-6 col-sm-4 mb-5">
    <div className="card card-body bg-dark text-center h-100">
      <img className="w-100 mb-2" src={meal.strMealThumb} alt="meal Cover" />
      <h4 className="text-light card-title">{meal.strMeal}</h4>
      <div className="badges">
        <span className="badge badge-pill badge-primary m-2">
          Area :
          { meal.strArea }
        </span>
        <span className="badge badge-pill badge-success">
          Category :
          { meal.strCategory }
        </span>
      </div>
      <Link className="btn catalogueBtn btn-outline-warning" to={`/meal/${meal.idMeal}`}>Find Out More</Link>
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
