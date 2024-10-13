import { FC } from 'react'
import 'styles/Loader.scss'

const Loader: FC = () => {
	return (
		<div className='loader'>
			<div></div>
			<span>Loading...</span>
		</div>
	)
}

export default Loader
