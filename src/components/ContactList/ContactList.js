import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactList.module.css';
import * as actions from '../../store/action';

const ContactsList = () => {
  const items = useSelector(({ app }) => {
    const toLowerCaseFilter = app.filter.toLowerCase();
    const items = app.contacts.filter(el =>
      el.name.toLowerCase().includes(toLowerCaseFilter),
    );
    return items;
  });
  const dispatch = useDispatch();

  return (
    <ul className={styles.list}>
      {items.map(el => {
        return (
          <li className={styles.item} key={el.id}>
            <span className={styles.span}>
              {el.name}: {el.number}
            </span>
            <button
              className={styles.btn}
              type="button"
              id={el.id}
              onClick={() => {
                dispatch(actions.deleteContact(el.id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
