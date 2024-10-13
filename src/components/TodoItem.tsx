import { FC, memo } from 'react'
import { ITodoItem } from 'types/todo'
import 'styles/TodoItem.scss'

type TodoItem = {
	order: number
	todo: ITodoItem
	todosToShow: ITodoItem[]
	setTodos: (todoArray: ITodoItem[]) => void
}

const TodoItem: FC<TodoItem> = memo(
	({ order, todo, todosToShow, setTodos }) => {
		const setImportant = (todoId: number | string): void => {
			setTodos(
				todosToShow.map(todo =>
					todo.id === todoId
						? { ...todo, isImportant: !todo.isImportant }
						: todo
				)
			)
		}

		const setTodoDone = (todoId: number | string): void => {
			setTodos(
				todosToShow.map(todo =>
					todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo
				)
			)
		}

		const removeTodo = (todo: ITodoItem): void => {
			let permissionToRemove = true

			if (todo.isImportant)
				permissionToRemove = confirm(
					'This is an important task! Are you sure you want to delete it?'
				)

			if (permissionToRemove) {
				const filteredTodos = todosToShow.filter(t => t.id !== todo.id)
				setTodos(filteredTodos)
			}
		}

		return (
			<div className='todo-item_wrapper' data-testid='todo-item'>
				<div className='todo-item_info'>
					<span className='todo-item_info__order'>{order + 1}.</span>
					<span
						className={
							todo.isDone
								? 'todo-item_info__title done'
								: 'todo-item_info__title'
						}
						onClick={() => setTodoDone(todo.id)}
						title={todo.title}
					>
						{todo.title}
					</span>
				</div>
				<div className='todo-item_actions'>
					<button
						onClick={() => setImportant(todo.id)}
						className={
							todo.isImportant
								? 'todo-item_actions__important checked'
								: 'todo-item_actions__important'
						}
					>
						!
					</button>
					<button
						className='todo-item_actions__remove'
						onClick={() => removeTodo(todo)}
					>
						&#128465;
					</button>
				</div>
			</div>
		)
	}
)

export default TodoItem
