import '@testing-library/jest-dom';
import React from 'react'
import {render, screen} from '@testing-library/react';
import Hello from './Hello';

test('render title', () => {
    const headerTitle = 'Welcome to application User !';
    render(<Hello title={'User'}/>);
    expect(screen.getByText(headerTitle)).toBeInTheDocument();
});