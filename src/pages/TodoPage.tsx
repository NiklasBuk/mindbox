import TodoList from 'components/TodoList'
import 'styles/TodoPage.scss'

const TodoPage = () => {
	return (
		<div className='todo-page_container'>
			<h1>todos</h1>
			<TodoList />
		</div>
	)
}

export default TodoPage
