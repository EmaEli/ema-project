import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useTranslation } from 'react-i18next';
import AppGenericError from './AppGenericError';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(),
}));

describe('AppGenericError', () => {
  beforeEach(() => {
    // Mock translations
    (useTranslation as jest.Mock).mockReturnValue({
      t: (key: string, fallback: string) => fallback,
    });
  });

  test('renders error messages', () => {
    render(<AppGenericError />);

    // Check if the title and message are rendered
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByText('We encountered an unexpected error. Please try again later.')).toBeInTheDocument();
  });

  test('renders the reload button', () => {
    render(<AppGenericError />);

    // Check if the button is rendered
    const button = screen.getByRole('button', { name: 'Reload Page' });
    expect(button).toBeInTheDocument();
  });

  test('reloads the page when the button is clicked', () => {
    // Mock window.location.reload
    const reloadMock = jest.spyOn(window.location, 'reload').mockImplementation(() => {});

    render(<AppGenericError />);

    // Simulate button click
    const button = screen.getByRole('button', { name: 'Reload Page' });
    userEvent.click(button);

    // Verify reload was called
    expect(reloadMock).toHaveBeenCalled();

    // Clean up mock
    reloadMock.mockRestore();
  });
});
