// import "@testing-library/jest-dom";
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Title from '../client/Title'

describe ('< Title/>', () => {
    const wrapper = render(<Title/>)
    expect(wrapper).toBeTruthy()

    const h1 = wrapper.container.querySelector('h1')
    expect(h1?.textContent).toBe('Musical Progress')

    const text = screen.getByText(
        /Fill out the text areas to create a new practice <sheet!/i
    )
    expect(text.textContent).toBeTruthy()
})