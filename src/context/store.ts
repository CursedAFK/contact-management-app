import { configureStore } from '@reduxjs/toolkit'
import contactReducer from '../features/contact/contactSlice'

// Configure the Redux store
export const store = configureStore({
	reducer: {
		contact: contactReducer
	}
})

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>

// Define the AppDispatch type
export type AppDispatch = typeof store.dispatch
