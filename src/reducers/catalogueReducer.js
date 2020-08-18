import {
  FETCH_MEALS_REQUEST, FETCH_MEALS_SUCCESS, FETCH_MEALS_FAILURE, FETCH_MEAL_BY_ID,
} from '../actions/types';

const initialState = {
  loading: false,
  mealsList: [],
  error: '',
  selectedMeal: [],
};

const catalogueReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEALS_REQUEST: return { ...state, loading: true };
    case FETCH_MEALS_SUCCESS: return {
      ...state,
      loading: false,
      mealsList: action.payload,
    };
    case FETCH_MEAL_BY_ID: return {
      ...state,
      loading: false,
      selectedMeal: action.payload,
    };
    case FETCH_MEALS_FAILURE: return {
      ...state,
      loading: false,
      error: action.payload,
    };
    default: return state;
  }
};

export default catalogueReducer;
