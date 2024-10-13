import { FC, useState } from 'react'
import { ITodoItem } from 'types/todo'
import { v4 } from 'uuid'
import 'styles/TodoInput.scss'

type TodoInput = {
	setTodos: (todoArray: ITodoItem[]) => void
}

const TodoInput: FC<TodoInput> = ({ setTodos }) => {
	const [newTodoTitle, setNewTodoTitle] = useState<string>('')

	const addTodo = (title: string): void => {
		if (title.trim().length >= 3) {
			const newTodo: ITodoItem = {
				id: v4(),
				title: title.trim(),
				isDone: false,
				isImportant: false
			}
			setTodos(prev => [newTodo, ...prev])
			setNewTodoTitle('')
		}
	}

	return (
		<div className='todo-input'>
			<input
				className='todo-input_input'
				placeholder='What needs to be done?'
				value={newTodoTitle}
				onChange={e => setNewTodoTitle(e.target.value)}
				onKeyDown={e => e.key === 'Enter' && addTodo(newTodoTitle)}
			/>
			<button
				className={
					newTodoTitle.trim().length < 3
						? 'todo-input_btn inert'
						: 'todo-input_btn'
				}
				onClick={
					newTodoTitle.trim().length >= 3 ? () => addTodo(newTodoTitle) : () => alert('Todo title should be 3 or more letters length')
				}
			>
				&gt;
			</button>
		</div>
	)
}

export default TodoInput
