import { useRouteError, Link } from 'react-router-dom'

interface ErrorResponse {
	status: number
	statusText: string
	message: string
}

const Error = () => {
	const error = useRouteError() as ErrorResponse

	return (
		<section className='flex h-screen flex-col items-center justify-center gap-4'>
			<h2 className='text-2xl font-bold'>Oops!</h2>
			<p className='text-lg font-medium'>
				Sorry, an unexpected error has occurred.
			</p>
			<p className='text-b cursor-not-allowed rounded-md border border-red-600 bg-red-100 p-2 font-medium text-red-600'>
				<i>{error.statusText || error.message}</i>
			</p>
			<Link to='/' className='mt-8 text-lg font-medium text-blue-600 underline'>
				Return to home page
			</Link>
		</section>
	)
}

export default Error
