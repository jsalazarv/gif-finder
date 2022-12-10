import { render, screen } from '@testing-library/react';
import { Gif } from '../index';

describe('[Gif]', () => {
  describe('[Snapshot]', () => {
    test('Should render [Gif] component and contain class [gif]', () => {
      const { container } = render(<Gif />);

      expect(container.firstChild).toHaveClass('gif');
      expect(container).toMatchSnapshot();
    });

    test('Should contain the text that is received as props', () => {
      const title = 'Test title';
      const { container } = render(<Gif title={title} />);

      expect(container).toHaveTextContent('Test title');
    });

    test('Should contain the URL that is received as props', () => {
      const url = 'https://url-test.com/';
      render(<Gif url={url} />);
      const anchor = screen.getByRole('anchor');

      expect(anchor).toHaveProperty('href', 'https://url-test.com/');
    });
  });
});
