import React from 'react'
import { render, screen } from '@testing-library/react'
import Counter from './Counter'

describe('Componente contador', () => {
    test('mostrar el valor inicial del contador', () => {
        render(<Counter />);
        // const countValue = screen.getByTestId('count-value')
        
    })
})