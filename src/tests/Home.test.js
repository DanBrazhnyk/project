import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Pages/home/Home';
import '@testing-library/jest-dom/extend-expect';

describe('Home component', () => {
  it('renders profile information', () => {
    render(<Home />);

    const profileName = screen.getByText('Danylo Brazhnyk');
    expect(profileName).toBeInTheDocument();

    const email = screen.getByText('danylo.brazhnyk@gmail.com');
    expect(email).toBeInTheDocument();

    const dob = screen.getByText('04.10.2002');
    expect(dob).toBeInTheDocument();

    const city = screen.getByText('Warsaw, Masovian Voivodeship');
    expect(city).toBeInTheDocument();
  });

  it('renders buttons', () => {
    render(<Home />);

    const aboutButton = screen.getByText( 'About' );
    expect(aboutButton).toBeInTheDocument();

    const activityButton = screen.getByText('Activity');
    expect(activityButton).toBeInTheDocument();

    const projectsButton = screen.getByText('Projects');
    expect(projectsButton).toBeInTheDocument();
  });
});
