import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders the hero section', () => {
    render(<App />);
    expect(screen.getByText('Said Ibrahim')).toBeDefined();
    expect(screen.getByText('Software Engineer & UX Designer')).toBeDefined();
  });
});