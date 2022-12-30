import { useEffect, useState } from 'react';
import { GiphyService } from '../../services/GiphyService.js';
import { gifAdapter } from '../../adapters/GifAdapter/gifAdapter.js';

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const giphyService = new GiphyService();

  const getGifList = async () => {
    const { data } = await giphyService.findGifs(category);
    const gifList = data.map((item) => gifAdapter(item));

    setGifs(gifList);
    setIsLoading(false);
  };

  useEffect(() => {
    getGifList();
  }, []);

  return { gifs, isLoading };
};
