import { render, screen } from '@testing-library/react';
import SaumyaApp from './SaumyaApp'

test('<SaumyaApp> Rendering', () => {
    render(<SaumyaApp />);
    const titleElement = screen.getByText(/Photos/i);
    expect(titleElement).toBeInTheDocument();
})