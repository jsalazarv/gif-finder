import { useState } from 'react';

import { clsx } from 'clsx';

import { FinderInput } from '../../GifFinder/components/FinderInput';
import './styles.css';

export const Header = ({ search }) => {
  const [isSearching, setIsSearching] = useState(false);

  const onSearchPerformed = (item) => {
    setIsSearching(true);
    search(item);
  };

  return (
    <header className={clsx('header', { collapsed: isSearching })}>
      <nav className="navbar__content">
        <h1 className="navbar__title">
          <span className="animate-text">GIF</span>
          INDER
        </h1>
        <FinderInput onAddCategories={onSearchPerformed} />
      </nav>
    </header>
  );
};
