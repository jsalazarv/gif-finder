import { gifAdapter } from '../gifAdapter.js';
import { data } from './fake-data.json';

describe('[GIFAdapter]', () => {
  describe('[Adapter]', () => {
    test('Should return the defined object', () => {
      const adaptedResponse = data.data.map((item) => gifAdapter(item));
      const expectedResponse = {
        id: 'cb9aF9tDyiRkYbz3BX',
        title: 'Dragon Ball Kefla GIF by Toei Animation',
        url: 'https://media3.giphy.com/media/cb9aF9tDyiRkYbz3BX/giphy.gif?cid=4b9e5c2b9ladm1lqhy71d7nm7h7p3lu6t11oaskur76gjkzd&rid=giphy.gif&ct=g',
      };

      expect(adaptedResponse[0]).toEqual(expectedResponse);
    });
  });
});
