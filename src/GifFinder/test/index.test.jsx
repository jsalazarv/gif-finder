import { render } from '@testing-library/react';
import { GifFinder } from '../index';
import { FinderInput } from '../components/FinderInput';

jest.mock('../components/FinderInput');

describe('[GifFinder]', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('[Snapshot]', () => {
    test('Should render and contain class [finder-container]', () => {
      const { container } = render(<GifFinder />);

      expect(container.firstChild).toHaveClass('finder-container');
      expect(container).toMatchSnapshot();
    });

    test('Should render <FinderInput /> component', () => {
      render(<GifFinder />);

      expect(FinderInput).toHaveBeenCalledOnce();
    });
  });
});
