import { fireEvent, render,  } from '@testing-library/react';
import Popover from '../Components/Header/Popover';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

 
describe('Popover Component', () => {
 window.history.pushState({}, 'Test page', '/home');
  test('renders user icon', () => {
    const {getByTestId} = render(<BrowserRouter><Routes>
        <Route path="/home" element={<Popover/>} />
        </Routes></BrowserRouter>);
   const handleFavouriteClick=jest.fn()
    fireEvent.click(getByTestId('user-icon')); 
    expect(handleFavouriteClick)
  });


  
});