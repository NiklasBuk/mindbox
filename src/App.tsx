import { lazy, Suspense } from 'react'
import Loader from 'components/Loader.js'
import 'styles/App.scss'

const TodoPage = lazy(() => import('pages/TodoPage.tsx'))

const App = () => {
	return (
		<main>
			<div className='app-container'>
				<Suspense
					fallback={
						<div className='loader_wrapper'>
							<Loader />
						</div>
					}
				>
					<TodoPage />
				</Suspense>
			</div>
		</main>
	)
}

export default App
