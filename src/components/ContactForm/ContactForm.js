import React, {useState} from 'react';
import styles from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState (''); 
  const [number, setNumber] = useState ('')
  
  const handleChange = e => {
   if (e.currentTarget.name === 'name') setName(e.currentTarget.value);
   if (e.currentTarget.name === 'number') setNumber(e.currentTarget.value); 
  };
  
  const handleSubmit = e => {
        e.preventDefault();
        onSubmit({
          name: name,
          number: number,
        });
        setName('');
        setNumber('');
      };
      return (
              <form className={styles['contact_form']} onSubmit={handleSubmit}>
                <label className={styles.label}>
                  Name
                  <input
                    className={styles.input}
                    type="text"
                    name="name"
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    placeholder="Ivan Dulin"
                    required
                    value={name}
                  />
                </label>
                <label className={styles.label}>
                  Number
                  <input
                    className={styles.input}
                    type="tel"
                    name="number"
                    onChange={handleChange}   
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    placeholder="067-233-15-14"
                    required
                    value={number}
                  />
                </label>
                <button className={styles.submit} type="submit">
                  Add contact
                </button>
              </form>
            );

}


export default ContactForm;

