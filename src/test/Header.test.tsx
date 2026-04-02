import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import { describe, it, expect } from 'vitest';

describe('Header Component', () => {
  it('should render the logo', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText('H3rmes')).toBeInTheDocument();
  });

  it('should render navigation links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText('Serviços')).toBeInTheDocument();
    expect(screen.getByText('Preços')).toBeInTheDocument();
    expect(screen.getByText('Rastreamento')).toBeInTheDocument();
    expect(screen.getByText('Suporte')).toBeInTheDocument();
  });
});
