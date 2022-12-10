import { useState } from 'react';

import { FinderInput } from './components/FinderInput';
import './styles.css';

export const GifFinder = () => {
  const [categories, setCategories] = useState(['']);

  const onAddCategory = (item) => {
    if (categories.includes(item)) return;
    setCategories([...categories, item]);
  };

  return (
    <div className="finder-container">
      <FinderInput onAddCategories={onAddCategory} />
    </div>
  );
};
