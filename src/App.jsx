import { Header } from './components/Header';
import { GifGrid } from './GifFinder/components/GifGrid';
import { useState } from 'react';

function App() {
  const [categories, setCategories] = useState(['']);

  const search = (item) => {
    if (categories.includes(item)) return;

    setCategories([...categories, item]);
  };

  return (
    <>
      <Header search={search} />
      <div className="min-h-screen">
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </>
  );
}

export default App;
