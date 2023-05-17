import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../context/store'
import { IoIosArrowDropleft } from 'react-icons/io'

const ContactDetails = () => {
	const { id } = useParams()

	const contact = useSelector((state: RootState) =>
		state.contact.contacts.find(contact => contact.id === id)
	)

	return (
		<>
			<h2 className='mt-10 text-xl font-semibold md:mt-12 md:text-2xl'>
				Viewing {contact?.firstName}'s Contact Details
			</h2>

			<div className='mt-8 flex w-[80%] max-w-[500px] items-center gap-2 border-b border-gray-300 py-2 md:mt-12 md:gap-4 md:py-4'>
				<h3 className='italic md:text-lg md:font-medium'>First Name:</h3>
				<p className='ml-auto w-[70%] text-lg font-semibold md:w-[75%] md:text-xl md:font-bold'>
					{contact?.firstName}
				</p>
			</div>

			<div className='flex w-[80%] max-w-[500px] items-center gap-2 border-b border-gray-300 py-2 md:gap-4 md:py-4'>
				<h3 className='italic md:text-lg md:font-medium'>Last Name:</h3>
				<p className='ml-auto w-[70%] text-lg font-semibold md:w-[75%] md:text-xl md:font-bold'>
					{contact?.lastName}
				</p>
			</div>

			<div className='flex w-[80%] max-w-[500px] items-center gap-2 border-b border-gray-300 py-2 md:gap-4 md:py-4'>
				<h3 className='italic md:text-lg md:font-medium'>Status:</h3>
				<p
					className={`${
						contact?.status === 'Active' ? 'text-green-500' : 'text-red-500'
					} ml-auto w-[70%] text-lg font-semibold md:w-[75%] md:text-xl md:font-bold`}
				>
					{contact?.status}
				</p>
			</div>

			<Link
				to='/'
				className='mt-12 flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-lg font-medium transition hover:bg-gray-300 active:scale-90 active:bg-gray-300 md:mt-16 md:gap-3 md:px-8 md:py-4 md:text-xl md:font-semibold'
			>
				<IoIosArrowDropleft /> Go Back
			</Link>
		</>
	)
}

export default ContactDetails
