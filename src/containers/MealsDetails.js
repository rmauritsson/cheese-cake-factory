import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMealsById } from '../actions';

const MealsDetails = props => {
  const mealsList = useSelector(state => state.catalogue.mealsList);
  const dispatch = useDispatch();
  const { id } = props.match.params;

  useEffect(() => {
    dispatch(fetchMealsById(id));
  }, []);

  return (
    <div className="">
      Details Page -
      {
        console.log(mealsList)
      }
    </div>
  );
};

export default MealsDetails;
