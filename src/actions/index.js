import axios from 'axios';
import {
  LOADING_STATUS, FETCH_MEALS_SUCCESS, FETCH_MEALS_FAILURE, FETCH_MEAL_BY_ID, SEARCH_MEAL,
  FETCH_MEAL_BY_SEARCH,
} from './types';

export const setLoadingStatus = () => ({
  type: LOADING_STATUS,
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

export const searchMealSuccess = query => ({
  type: SEARCH_MEAL,
  payload: query,
});

export const fetchMeals = () => dispatch => {
  dispatch(setLoadingStatus());
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
  dispatch(setLoadingStatus());
  try {
    // fetch data from a url endpoint
    const mealsList = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    dispatch(fetchMealByIdSuccess(mealsList.data.meals[0]));
  } catch (error) {
    dispatch(fetchMealsFailure(error.message));
  }
};

export const searchMeal = query => async dispatch => {
  dispatch(searchMealSuccess(query));
};

export const fetchMealBySearch = query => async dispatch => {
  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    dispatch({
      type: FETCH_MEAL_BY_SEARCH,
      payload: response.data.meals,
    });
  } catch (error) {
    console.log(error);
  }
};
