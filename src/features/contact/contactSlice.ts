import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Contact {
	id: string
	firstName: string
	lastName: string
	status: string
}

export interface ContactState {
	contacts: Array<Contact>
}

const initialState: ContactState = {
	contacts: []
}

export const contactSlice = createSlice({
	name: 'contact',
	initialState,
	reducers: {
		addContact: (state, action: PayloadAction<Contact>) => {
			state.contacts.push(action.payload)
		},
		removeContact: (state, action: PayloadAction<Contact>) => {
			state.contacts = state.contacts.filter(
				contact => contact.id !== action.payload.id
			)
		},
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

export const { addContact, removeContact, updateContact } = contactSlice.actions

export default contactSlice.reducer
