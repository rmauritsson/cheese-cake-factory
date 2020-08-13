import {
  FETCH_MEALS_REQUEST, FETCH_MEALS_SUCCESS, FETCH_MEALS_FAILURE,
} from '../actions/types';

const initialState = {
  loading: false,
  mealsList: [],
  error: '',
};

const catalogueReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEALS_REQUEST: return { loading: true };
    case FETCH_MEALS_SUCCESS: return {
      loading: false,
      mealsList: action.payload,
    };
    case FETCH_MEALS_FAILURE: return {
      loading: false,
      error: action.payload,
    };
    default: return state;
  }
};

export default catalogueReducer;
