// import PropTypes from 'prop-types';
// import { useSelector, useDispatch } from 'react-redux';
// import { getStatusFilter } from 'components/redux/selectors';
// import { setStatusFilter } from 'components/redux/filterSlice';
// import { getFilteredContacts } from 'components/redux/selectors';

// import style from './Filter.module.css';

// const Filter = ({ contacts }) => {
//   const dispatch = useDispatch();
//   const filter = useSelector(getStatusFilter);

//   const handleFilter = () => dispatch(setStatusFilter(filter));

//   const filterContacts = useSelector(state =>
//     getFilteredContacts(contacts, filter)
//   );

//   return (
//     <label className={style.subTitle}>
//       Find contacts by name
//       <input
//         className={style.input}
//         type="text"
//         name="filter"
//         value={filter}
//         onChange={e => dispatch(setStatusFilter(e.target.value))}
//       />
//     </label>
//   );
// };

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   contacts: PropTypes.array.isRequired,
// };

// export default Filter;

import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getStatusFilter } from 'components/redux/selectors';
import { setStatusFilter } from 'components/redux/filterSlice';

import style from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilter = () => {
    dispatch(setStatusFilter(filter));
  };

  return (
    <label className={style.subTitle}>
      Find contacts by name
      <input
        className={style.input}
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(setStatusFilter(e.target.value))}
      />
      <button onClick={handleFilter}>Apply Filter</button>
    </label>
  );
};

Filter.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default Filter;
