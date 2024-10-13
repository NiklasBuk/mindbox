import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import TodoItem from 'components/TodoItem'

describe('Testing TodoList component', () => {
	const mockTodo = {
		id: 'id',
		title: 'title',
		isDone: false,
		isImportant: false
	}
	const todosToShow = []
	const setTodos = vi.fn()

	it('Component has been rendered', () => {
		render(
			<TodoItem
				order={1}
				todo={mockTodo}
				todosToShow={todosToShow}
				setTodos={setTodos}
			/>
		)
		const actionButton = screen.getByTestId('todo-item')
		expect(actionButton).toBeInTheDocument()
	})
})
