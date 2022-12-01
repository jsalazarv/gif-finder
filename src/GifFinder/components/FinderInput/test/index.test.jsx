import { fireEvent, render, screen } from '@testing-library/react';
import { FinderInput } from '../index';

describe('[FinderInput]', () => {
  describe('[Snapshots]', () => {
    test('It should contain [finder] class', () => {
      const { container } = render(<FinderInput />);

      expect(container.firstChild).toHaveClass('finder');
      expect(container).toMatchSnapshot();
    });
  });

  describe('[Events]', () => {
    test('Should change the value of the input', () => {
      render(<FinderInput onAddCategories={() => {}} />);
      const input = screen.getByRole('textbox');

      fireEvent.input(input, { target: { value: 'search test' } });

      expect(input.value).toBe('search test');
    });

    test('Should call [onAddCategories] if the form is submitted', () => {
      const inputValue = 'search test';
      const onAddCategories = jest.fn();

      render(<FinderInput onAddCategories={onAddCategories} />);

      const input = screen.getByRole('textbox');
      const form = screen.getByRole('form');

      fireEvent.input(input, { target: { value: 'search test' } });
      fireEvent.submit(form);

      expect(onAddCategories).toHaveBeenCalled();
      expect(onAddCategories).toHaveBeenCalledTimes(1);
      expect(onAddCategories).toHaveBeenCalledWith(inputValue);
    });

    test('Should not call [onAddCategories] if the input is empty', () => {
      const onAddCategories = jest.fn();

      render(<FinderInput onAddCategories={onAddCategories} />);

      const form = screen.getByRole('form');
      fireEvent.submit(form);

      expect(onAddCategories).toHaveBeenCalledTimes(0);
      expect(onAddCategories).not.toHaveBeenCalled();
    });
  });
});
