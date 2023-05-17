import { useRouteError, Link } from 'react-router-dom'

// Define the ErrorResponse interface
interface ErrorResponse {
	status: number
	statusText: string
	message: string
}

// Error component
const Error = () => {
	// Access the error object from the route
	const error = useRouteError() as ErrorResponse

	return (
		<section className='flex h-screen flex-col items-center justify-center gap-4'>
			<h2 className='text-2xl font-bold'>Oops!</h2>
			<p className='text-lg font-medium'>
				Sorry, an unexpected error has occurred.
			</p>
			{/* Display the error message */}
			<p className='text-b cursor-not-allowed rounded-md border border-red-600 bg-red-100 p-2 font-medium text-red-600'>
				<i>{error.statusText || error.message}</i>
			</p>
			{/* Provide a link to the home page */}
			<Link to='/' className='mt-8 text-lg font-medium text-blue-600 underline'>
				Return to home page
			</Link>
		</section>
	)
}

export default Error
