import axios from 'axios';
import {
  FETCH_MEALS_REQUEST, FETCH_MEALS_SUCCESS, FETCH_MEALS_FAILURE, FETCH_MEAL_BY_ID,
} from './types';

export const fetchMealsRequest = () => ({
  type: FETCH_MEALS_REQUEST,
});

export const fetchMealsSuccess = mealsList => ({
  type: FETCH_MEALS_SUCCESS,
  payload: mealsList,
});

export const fetchMealByIdSuccess = meal => ({
  type: FETCH_MEAL_BY_ID,
  payload: meal,
});

export const fetchMealsFailure = error => ({
  type: FETCH_MEALS_FAILURE,
  payload: error,
});

export const fetchMeals = () => dispatch => {
  dispatch(fetchMealsRequest());
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

export const fetchMealsById = id => async dispatch => {
  dispatch(fetchMealsRequest());
  try {
    // fetch data from a url endpoint
    const mealsList = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    dispatch(fetchMealByIdSuccess(mealsList.data.meals[0]));
  } catch (error) {
    dispatch(fetchMealsFailure(error.message));
  }
};
