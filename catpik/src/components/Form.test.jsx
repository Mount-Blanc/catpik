import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login.jsx';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

test ('renders submit button' , () => {
    render(<Login/>)

    const button =screen.getByRole('button')

    expect(button).toBeInTheDocument();


})
test ('renders two inputs', () => {
    render(<Login/>)

    const username= screen.getByRole('textbox', {
        name:/username/i

    });

    const password = screen.getByRole('textbox', {
        name:/password/i
    })

    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();



})