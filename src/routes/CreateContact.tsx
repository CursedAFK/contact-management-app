import { useState } from 'react'
import { addContact } from '../features/contact/contactSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CreateContact = () => {
	// State to store form data
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		status: 'Active'
	})

	const dispatch = useDispatch()

	const navigate = useNavigate()

	// Function to handle input changes
	const handleChange = (e: React.ChangeEvent) => {
		const target = e.target as HTMLInputElement
		setFormData({
			...formData,
			[target.name]: target.value
		})
	}

	// Function to handle form submission
	const handleSubmiit = (e: React.FormEvent) => {
		e.preventDefault()
		const newContact = {
			...formData,
			id: crypto.randomUUID() // Generate a unique ID for the contact
		}
		dispatch(addContact(newContact)) // Dispatch the action to add the contact
		setFormData({
			firstName: '',
			lastName: '',
			status: 'Active'
		})
		navigate('/') // Navigate back to the home page
	}

	return (
		<>
			<h3 className='my-4 pt-4 text-lg font-semibold md:mb-6 md:mt-10 md:pt-0 md:text-2xl'>
				Add new contact
			</h3>

			<form
				onSubmit={handleSubmiit}
				className='mt-4 w-[85%] text-center md:mt-8 md:max-w-[600px]'
			>
				<div className='space-y-4 rounded-md border border-gray-300 bg-white px-4 py-2 md:space-y-8 md:px-6 md:py-4'>
					<div className='flex items-center'>
						<label htmlFor='firstName' className='font-semibold md:text-lg'>
							First Name:
						</label>
						<input
							type='text'
							id='firstName'
							name='firstName'
							placeholder='Enter first name'
							required
							value={formData.firstName}
							onChange={handleChange}
							className='ml-auto w-[70%] rounded-md border border-gray-300 px-2 py-1 outline-none transition placeholder:text-sm focus:border-blue-400 md:w-[80%] md:px-4 md:py-2 md:font-medium md:placeholder:text-base'
						/>
					</div>
					<div className='flex items-center'>
						<label htmlFor='lastName' className='font-semibold md:text-lg'>
							Last Name:
						</label>
						<input
							type='text'
							id='lastName'
							name='lastName'
							placeholder='Enter last name'
							required
							value={formData.lastName}
							onChange={handleChange}
							className='ml-auto w-[70%] rounded-md border border-gray-300 px-2 py-1 outline-none transition placeholder:text-sm focus:border-blue-400 md:w-[80%] md:px-4 md:py-2 md:font-medium md:placeholder:text-base'
						/>
					</div>
					<div className='flex items-center text-left'>
						<p className='font-semibold md:text-lg'>Status:</p>
						<div className='ml-auto w-[70%] space-y-1 md:w-[80%] md:space-y-2'>
							<div>
								<input
									type='radio'
									name='status'
									id='active'
									value='Active'
									onChange={handleChange}
									defaultChecked={formData.status === 'Active'}
									className='cursor-pointer'
								/>
								<label
									htmlFor='active'
									className={`${
										formData.status === 'Active' && 'font-semibold'
									} ml-1 cursor-pointer md:ml-2`}
								>
									Active
								</label>
							</div>
							<div>
								<input
									type='radio'
									name='status'
									id='inactive'
									value='Inactive'
									onChange={handleChange}
									className='cursor-pointer'
								/>
								<label
									htmlFor='inactive'
									className={`${
										formData.status === 'Inactive' && 'font-semibold'
									} ml-1 cursor-pointer md:ml-2`}
								>
									Inactive
								</label>
							</div>
						</div>
					</div>
				</div>

				<button
					type='submit'
					className='mt-12 rounded-md border border-gray-300 px-4 py-2 text-lg font-medium transition hover:bg-gray-300 active:scale-90 active:bg-gray-300 md:mt-16 md:px-8 md:py-4 md:text-xl md:font-semibold'
				>
					Save Contact
				</button>
			</form>
		</>
	)
}

export default CreateContact
