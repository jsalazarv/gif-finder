import { render } from '@testing-library/react';
import { Header } from '../index';
import { FinderInput } from '../../../GifFinder/components/FinderInput/index.jsx';

jest.mock('../../../GifFinder/components/FinderInput');

describe('[Header]', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should render the [Header] component', () => {
    const { container } = render(<Header />);

    expect(container.firstChild).toHaveClass('header');
    expect(container).toHaveTextContent('GIF');
    expect(container).toHaveTextContent('INDER');
    expect(container).toMatchSnapshot();
  });

  test('Should render [FinderInput]', async () => {
    render(<Header />);

    expect(FinderInput).toHaveBeenCalledOnce();
  });
});
