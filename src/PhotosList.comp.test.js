import { render, screen } from '@testing-library/react'
import PhotosList, { add, getDataFromServer } from './PhotosList.comp'

test('<PhotosList.comp>', () => {
    render(<PhotosList />);
    const subtitleElement = screen.getByText(/List of Data/i);
    expect(subtitleElement).toBeInTheDocument();
})

test ('add', () => {
    expect( add(6,8) ).toBe(14);
})

test('getDataFromServer', () => {
    //expect( getDataFromServer() ).toReturn();
    expect( getDataFromServer() ).toBeCalled();
})