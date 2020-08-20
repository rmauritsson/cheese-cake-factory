import { SEARCH_MEAL, FETCH_MEAL_BY_SEARCH } from '../actions/types';

const initialState = {
  query: '',
  loading: false,
  mealsList: [],
  selectedMeal: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MEAL: return {
      ...state,
      loading: false,
      query: action.payload,
    };
    case FETCH_MEAL_BY_SEARCH: return {
      ...state,
      mealsList: action.payload,
    };
    default: return state;
  }
};

export default searchReducer;
