import { FC, memo } from 'react'
import 'styles/FilterButton.scss'

type FilterButton = {
	title: string
	isActive: boolean
	cb: () => void
}

const FilterButton: FC<FilterButton> = memo(({ title, isActive, cb }) => {
	return (
		<button
			className={isActive ? 'filter-button active' : 'filter-button'}
			onClick={cb}
		>
			{title}
		</button>
	)
})

export default FilterButton
