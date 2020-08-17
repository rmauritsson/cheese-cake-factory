import axios from 'axios';
import {
  FETCH_MEALS_REQUEST, FETCH_MEALS_SUCCESS, FETCH_MEALS_FAILURE,
} from './types';

export const fetchMealsRequest = () => ({
  type: FETCH_MEALS_REQUEST,
});

export const fetchMealsSuccess = mealsList => ({
  type: FETCH_MEALS_SUCCESS,
  payload: mealsList,
});

export const fetchMealsFailure = error => ({
  type: FETCH_MEALS_FAILURE,
  payload: error,
});

export const fetchMeals = () => dispatch => {
  dispatch(fetchMealsRequest());
  // https://jsonplaceholder.typicode.com/users
  axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then(response => {
      const mealsList = response.data.meals;
      // const mealsList = response.data;
      dispatch(fetchMealsSuccess(mealsList));
    })
    .catch(error => {
      dispatch(fetchMealsFailure(error.message));
    });
};

export const fetchMealsById = id => dispatch => {
  dispatch(fetchMealsRequest());
  // https://jsonplaceholder.typicode.com/users
  axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => {
      const mealsList = response.data.meals;
      // const mealsList = response.data;
      dispatch(fetchMealsSuccess(mealsList));
    })
    .catch(error => {
      dispatch(fetchMealsFailure(error.message));
    });
};
