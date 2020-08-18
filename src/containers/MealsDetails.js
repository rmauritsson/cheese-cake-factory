import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMealsById } from '../actions';
import Spinner from '../components/Spinner';

const MealsDetails = ({ match, fetchMealsById, selectedMeal }) => {
  useEffect(() => {
    const { id } = match.params;
    fetchMealsById(id);
  }, []);

  const renderIngredients = () => {
    const string = [];

    for (let i = 0; i < 20; i += 1) {
      if (selectedMeal[`strIngredient${i + 1}`]) {
        const li = (<li className="list-group-item" key={i + 1}>{`${selectedMeal[`strMeasure${i + 1}`]} of ${selectedMeal[`strIngredient${i + 1}`]}`}</li>);
        string.push(li);
      }
    }

    return string;
  };

  return selectedMeal.loading && selectedMeal.selectedMeal ? <Spinner /> : (
    <div className="container mt-4">
      <div className="row my-5">
        <div className="col-md-4 card card-body bg-light">
          <img className="w-100" src={selectedMeal.strMealThumb} alt="meal Cover" />
        </div>
        <div className="col-md-8">
          <div className="card card-body bg-light text-dark">
            <h3> Instructions </h3>
            { selectedMeal.strInstructions }
            <hr />
            <a
              href={selectedMeal.strSource}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-default mb-2"
            >
              View Source
            </a>
            <a
              href={selectedMeal.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning"
            >
              View from Youtube
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 mb-5">
          <h2 className="mb-4">
            { selectedMeal.strMeal }
            Ingredients
          </h2>
          <ul className="list-group">
            { renderIngredients() }
          </ul>
        </div>
      </div>
    </div>
  );
};

MealsDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.string),
  fetchMealsById: PropTypes.func,
  selectedMeal: PropTypes.objectOf(PropTypes.array),
};

MealsDetails.defaultProps = {
  match: '',
  fetchMealsById: () => {},
  selectedMeal: [],
};

const mapStateToProps = state => ({
  selectedMeal: state.catalogue.selectedMeal,
});

const mapDispatchToProps = dispatch => ({
  fetchMealsById: id => dispatch(fetchMealsById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MealsDetails);
