// Import necessary dependencies
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './components/Error'
import { store } from './context/store'
import './index.css'
import ChartsAndMaps from './routes/ChartsAndMaps'
import Home from './routes/Home'
import Layout from './routes/Layout'
import ContactDetails from './routes/ContactDetails'
import EditContact from './routes/EditContact'
import CreateContact from './routes/CreateContact'

// Create an instance of React Query Client
const queryClient = new QueryClient()

// Create an instance of React Router
const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: 'contact/:id',
				element: <ContactDetails />
			},
			{
				path: 'contact/create',
				element: <CreateContact />
			},
			{
				path: 'contact/:id/edit',
				element: <EditContact />
			},
			{
				path: '/charts-and-maps',
				element: <ChartsAndMaps />
			}
		]
	}
])

// Render the application
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		{/* Provide the Redux store to the entire application */}
		<Provider store={store}>
			{/* Provide the React Query Client to the entire application */}
			<QueryClientProvider client={queryClient}>
				{/* Provide the React Router instance to the entire application */}
				<RouterProvider router={router} />
			</QueryClientProvider>
		</Provider>
	</React.StrictMode>
)
