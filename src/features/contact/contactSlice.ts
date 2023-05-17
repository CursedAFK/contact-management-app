import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define the Contact interface
export interface Contact {
	id: string
	firstName: string
	lastName: string
	status: string
}

// Define the ContactState interface
export interface ContactState {
	contacts: Array<Contact>
}

// Define the initial state for the ContactState
const initialState: ContactState = {
	contacts: []
}

// Create a Redux slice using createSlice
export const contactSlice = createSlice({
	name: 'contact',
	initialState,
	reducers: {
		// Define the addContact reducer
		addContact: (state, action: PayloadAction<Contact>) => {
			state.contacts.push(action.payload)
		},
		// Define the removeContact reducer
		removeContact: (state, action: PayloadAction<Contact>) => {
			state.contacts = state.contacts.filter(
				contact => contact.id !== action.payload.id
			)
		},
		// Define the updateContact reducer
		updateContact: (state, action: PayloadAction<Contact>) => {
			state.contacts = state.contacts.map(contact => {
				if (contact.id === action.payload.id) {
					return action.payload
				} else {
					return contact
				}
			})
		}
	}
})

// Export the action creators
export const { addContact, removeContact, updateContact } = contactSlice.actions

// Export the reducer
export default contactSlice.reducer
