import { FC, useEffect, useState } from 'react'
import TodoItem from 'components/TodoItem'
import { ITodoItem } from 'types/todo'
import TodoInput from 'components/TodoInput'
import { v4 } from 'uuid'
import TodoFilters from 'components/TodoFilters'
import 'styles/TodoList.scss'

const startedTodos = [
	{
		id: v4(),
		title: 'Create your first todo',
		isDone: false,
		isImportant: false
	},
	{
		id: v4(),
		title: 'Mark the most important ones',
		isDone: false,
		isImportant: true
	},
	{
		id: v4(),
		title: 'Complete the task and delete it then',
		isDone: true,
		isImportant: false
	}
]

const TodoList: FC = () => {
	const [todos, setTodos] = useState<ITodoItem[]>(startedTodos)
	const [todosToShow, setTodosToShow] = useState<ITodoItem[]>([...todos])

	useEffect(() => {
		setTodosToShow(todos)
	}, [todos])

	return (
		<div className='todo-list_container'>
			<TodoInput setTodos={setTodos} />
			<div className='todo-list_list'>
				{todosToShow?.length ? (
					todosToShow?.map((todo, index) => (
						<TodoItem
							key={todo.id}
							order={index}
							todo={todo}
							todosToShow={todosToShow}
							setTodos={setTodos}
						/>
					))
				) : (
					<div className='todo-list_list__empty'>No tasks!</div>
				)}
			</div>
			<TodoFilters todos={todos} setTodosToShow={setTodosToShow} />
		</div>
	)
}

export default TodoList
