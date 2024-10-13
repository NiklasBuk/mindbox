import { describe, it, expect, vi, afterEach } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import TodoInput from 'components/TodoInput'

describe('Testing TodoInput component', () => {
	const setTodos = vi.fn()

	it('Component has been rendered', () => {
		render(<TodoInput setTodos={setTodos} />)
		const inputElement = screen.getByPlaceholderText(/what needs to be done/i)
		const createTodoButton = screen.getByRole('button')
		expect(inputElement).toBeInTheDocument()
		expect(createTodoButton).toBeInTheDocument()
	})

	it('The valid input length allows todo to be created', () => {
		render(<TodoInput setTodos={setTodos} />)
		const inputElement = screen.getByPlaceholderText(/what needs to be done/i)
		const createTodoButton = screen.getByRole('button')

		fireEvent.change(inputElement, { target: { value: 'Valid Todo' } })
		expect(inputElement.value).toBe('Valid Todo')
		fireEvent.click(createTodoButton)
		expect(setTodos).toHaveBeenCalled()
	})

	it('The invalid input length refused todo to be created', () => {
		render(<TodoInput setTodos={setTodos} />)
		const inputElement = screen.getByPlaceholderText(/what needs to be done/i)
		const createTodoButton = screen.getByRole('button')

		fireEvent.change(inputElement, { target: { value: 'No' } })
		expect(inputElement.value).toBe('No')
		fireEvent.click(createTodoButton)
		expect(setTodos).toHaveBeenCalledTimes(0)
	})

	afterEach(() => {
		vi.clearAllMocks()
	})
})
