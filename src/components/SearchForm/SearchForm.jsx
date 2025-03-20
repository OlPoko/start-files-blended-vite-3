// const regions = [
//   { id: 'africa', value: 'africa', name: 'Africa' },
//   { id: 'america', value: 'america', name: 'America' },
//   { id: 'asia', value: 'asia', name: 'Asia' },
//   { id: 'europe', value: 'europe', name: 'Europe' },
//   { id: 'oceania', value: 'oceania', name: 'Oceania' },
// ];

import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'; // Іконка для кнопки пошуку
import styles from './SearchForm.module.css'; // Імпорт стилів

const SearchForm = ({ onSubmit }) => {
  const [region, setRegion] = useState('default'); // Створюємо стан для вибору регіону

  // Обробник зміни вибраного регіону
  const handleChange = event => {
    setRegion(event.target.value);
  };

  // Обробник сабміту форми
  const handleSubmit = event => {
    event.preventDefault(); // Забороняємо перезавантаження сторінки
    if (region !== 'default') {
      onSubmit(region); // Викликаємо onSubmit з вибраним регіоном
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <FiSearch size="16px" />
      </button>
      <select
        aria-label="select"
        className={styles.select}
        name="region"
        required
        value={region}
        onChange={handleChange}
      >
        <option disabled value="default">
          Select a region
        </option>
        <option value="america">America</option>
        <option value="europe">Europe</option>
        <option value="asia">Asia</option>
        {/* Додаємо інші варіанти регіонів */}
      </select>
    </form>
  );
};

export default SearchForm;
