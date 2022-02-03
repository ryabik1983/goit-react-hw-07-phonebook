import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../store';
import styles from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <div className={styles.filter}>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          value={filter}
          onChange={e => {
            dispatch(actions.filterContacts(e.target.value));
          }}
        />
      </label>
    </div>
  );
};

export default Filter;
