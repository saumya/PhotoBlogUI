import { render, screen } from '@testing-library/react'
import PhotoComp from './Photo.comp'

test('<PhotosList.comp>', () => {
    render(<PhotoComp />);
    const subtitleElement = screen.getByText(/List of Data/i);
    expect(subtitleElement).toBeInTheDocument();
})