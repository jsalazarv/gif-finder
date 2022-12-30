import { useFetchGifs } from '../../hooks/useFetchGifs.js';
import { Spinner } from '../../../components/Spinner';
import { Gif } from '../Gif';
import './styles.css';

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  if (isLoading) {
    return (
      <div className="gif-grid h-screen flex flex-col justify-center items-center">
        <Spinner />
        <span className="text-red-500 text-xs">LOADING</span>
      </div>
    );
  }

  return (
    <div className="gif-grid">
      {gifs.map((gif) => (
        <Gif key={gif.id} {...gif} />
      ))}
    </div>
  );
};
