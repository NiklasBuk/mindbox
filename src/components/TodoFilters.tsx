import { FC, memo, useCallback, useEffect, useState } from 'react'
import FilterButton from 'components/FilterButton'
import { ITodoItem } from 'types/todo'
import 'styles/TodoFilters.scss'

type TodoFilters = {
	todos: ITodoItem[]
	setTodosToShow: (todoArray: ITodoItem[]) => void
}

type FilterTypes = 'all' | 'active' | 'important' | 'done'

const TodoFilters: FC<TodoFilters> = memo(({ todos, setTodosToShow }) => {
	const [todoFilters, setTodoFilters] = useState<Record<string, boolean>>({
		all: true,
		active: false,
		important: false,
		done: false
	})

	const setTodoFilter = (prop: FilterTypes): void => {
		setTodoFilters(prev => {
			if (prev[prop])
				return {
					all: true,
					active: false,
					important: false,
					done: false
				} as Record<string, boolean>
			return {
				all: false,
				active: false,
				important: false,
				done: false,
				[prop]: !prev[prop]
			} as Record<string, boolean>
		})
	}

	const filterTodos = (): void => {
		if (todoFilters.all) setTodosToShow([...todos])
		if (todoFilters.active)
			setTodosToShow([...todos].filter(todo => !todo.isDone))
		if (todoFilters.important)
			setTodosToShow([...todos].filter(todo => todo.isImportant))
		if (todoFilters.done) setTodosToShow([...todos].filter(todo => todo.isDone))
	}

	useEffect(() => {
		filterTodos()
	}, [todoFilters])

	const setTodoFilterAll = useCallback(() => {
		setTodoFilter('all')
	}, [])

	const setTodoFilterActive = useCallback(() => {
		setTodoFilter('active')
	}, [])

	const setTodoFilterImportant = useCallback(() => {
		setTodoFilter('important')
	}, [])

	const setTodoFilterDone = useCallback(() => {
		setTodoFilter('done')
	}, [])

	return (
		<div className='filters-section'>
			<div className='filters-section_counter'>
				<span>
					{todos?.map(todo => !todo.isDone).filter(todo => todo).length} left
				</span>
			</div>
			<div className='filters-section_filters'>
				<FilterButton
					title='All'
					isActive={todoFilters.all}
					cb={setTodoFilterAll}
				/>
				<FilterButton
					title='Active'
					isActive={todoFilters.active}
					cb={setTodoFilterActive}
				/>
				<FilterButton
					title='Important'
					isActive={todoFilters.important}
					cb={setTodoFilterImportant}
				/>
				<FilterButton
					title='Done'
					isActive={todoFilters.done}
					cb={setTodoFilterDone}
				/>
			</div>
		</div>
	)
})

export default TodoFilters
