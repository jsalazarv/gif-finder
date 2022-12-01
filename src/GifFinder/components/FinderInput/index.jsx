import { useState } from 'react';
import './styles.css';

export const FinderInput = ({ onAddCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onAddCategories(inputValue.trim());
  };

  return (
    <div className="finder">
      <form role="form" onSubmit={onSubmit}>
        <div className="wrapper">
          <input
            type="text"
            placeholder="Hello, search all the GIFs..."
            value={inputValue}
            onChange={onInputChange}
          />
          <span className="underline"></span>
        </div>
      </form>
    </div>
  );
};
