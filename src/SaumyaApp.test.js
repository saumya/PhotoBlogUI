import { render, screen } from '@testing-library/react';
import SaumyaApp from './SaumyaApp'

test('<SaumyaApp> Rendering', () => {
    render(<SaumyaApp />);
    const subtitleElement = screen.getByText(/The photo life/i);
    expect(subtitleElement).toBeInTheDocument();
})