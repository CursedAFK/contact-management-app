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

// React Query Builder
const queryClient = new QueryClient()

// React Router Builder
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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</Provider>
	</React.StrictMode>
)
