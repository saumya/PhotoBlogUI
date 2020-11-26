import { render, screen } from '@testing-library/react'
import PhotosList from './PhotosList.comp'

test('<PhotosList.comp>', () => {
    render(<PhotosList />);
    const subtitleElement = screen.getByText(/List of Data/i);
    expect(subtitleElement).toBeInTheDocument();
})