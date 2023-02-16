import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Todos from '../src/client/Todos'
import { MemoryRouter } from 'react-router-dom';
import React from 'react';


describe ('<Todos />', () => {

    test('Todos mounts properly', () => {
        const wrapper = render(<Todos/> , {wrapper: MemoryRouter})
        expect(wrapper).toBeTruthy()
        
       
    })  
});