import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders the simulator and lets the user boost production', async () => {
  const user = userEvent.setup();
  render(<App />);

  expect(screen.getByText(/sunrise valley simulator/i)).toBeDefined();

  const button = screen.getByRole('button', { name: /boost production/i });
  await user.click(button);

  expect(screen.getByText(/energy grid: 70%/i)).toBeDefined();
});
