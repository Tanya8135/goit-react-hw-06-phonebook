import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStatusFilter } from 'redux/selectors';
import { setStatusFilter } from 'redux/filterSlice';

import style from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = e => {
    dispatch(setStatusFilter(e.target.value));
  };

  return (
    <div className={style.test}>
      <label className={style.subTitle}>
        Find contacts by name
        <input
          className={style.input}
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
};

export default Filter;
