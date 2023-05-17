import { Link } from 'react-router-dom'
import { BsPersonAdd } from 'react-icons/bs'
import { FaRegTimesCircle, FaUserEdit } from 'react-icons/fa'
import { AiOutlineEye } from 'react-icons/ai'
import { IoCheckmarkDoneOutline } from 'react-icons/io5'
import { MdOutlineDeleteSweep } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { Contact, removeContact } from '../features/contact/contactSlice'
import { RootState } from '../context/store'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

const ContactCard = ({ contact }: { contact: Contact }) => {
	const [hover, setHover] = useState(false)
	const [isDeleting, setIsDeleting] = useState(false)

	const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

	const dispatch = useDispatch()

	useEffect(() => {
		isMobile ? setHover(true) : setHover(false)
		return () => setHover(false)
	}, [isMobile])

	return (
		<>
			<li className='w-32 divide-y-2 rounded-md border border-gray-300 sm:w-36 md:w-40 lg:w-48'>
				<div
					onMouseEnter={() => {
						if (isMobile) return
						setHover(true)
					}}
					onMouseLeave={() => {
						if (isMobile) return
						setHover(false)
					}}
					className='relative cursor-pointer py-10 text-center md:py-14'
					style={{
						backgroundColor: `rgba(${Math.floor(
							Math.random() * 256
						)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
							Math.random() * 256
						)}, .1)`
					}}
				>
					<p className='text-lg font-semibold md:text-xl'>
						{contact.firstName}
					</p>
					{hover && (
						<Link
							to={`/contact/${contact.id}`}
							className='absolute bottom-0 flex h-[20%] w-full items-center justify-center gap-2 bg-slate-500/40 text-xs md:h-[25%] md:gap-3 md:text-base'
						>
							<AiOutlineEye /> View Details
						</Link>
					)}
				</div>
				<div className='flex items-center divide-x-2'>
					<Link
						to={`/contact/${contact.id}/edit`}
						className='flex flex-1 cursor-pointer items-center justify-center gap-1 py-1 text-sm transition hover:bg-yellow-300 active:bg-yellow-300 md:py-2 md:text-base'
					>
						<FaUserEdit /> Edit
					</Link>
					<button
						onClick={() => setIsDeleting(true)}
						className='flex flex-1 cursor-pointer items-center justify-center gap-1 py-1 text-sm transition hover:bg-red-300 active:bg-red-300 md:py-2 md:text-base'
					>
						<MdOutlineDeleteSweep /> Delete
					</button>
				</div>
			</li>

			{isDeleting && (
				<div className='fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/50'>
					<div className='w-[80%] max-w-[500px] divide-y-2 rounded-md bg-white text-center'>
						<p className='p-3 text-lg font-medium md:p-6 md:text-xl md:font-semibold'>
							Are you sure you want to delete this contact?
						</p>
						<div className='flex items-center divide-x-2'>
							<button
								onClick={() => setIsDeleting(false)}
								className='flex flex-1 cursor-pointer items-center justify-center gap-1 py-2 font-medium transition hover:bg-red-300 active:bg-red-300 md:gap-2 md:py-3 md:text-lg md:font-semibold'
							>
								<FaRegTimesCircle /> No
							</button>
							<button
								onClick={() => dispatch(removeContact(contact))}
								className='md:2ap-3 flex flex-1 cursor-pointer items-center justify-center gap-1 py-2 font-medium transition hover:bg-green-300 active:bg-green-300 md:py-3 md:text-lg md:font-semibold'
							>
								<IoCheckmarkDoneOutline /> Yes
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

const Home = () => {
	const contacts = useSelector((state: RootState) => state.contact.contacts)

	return (
		<>
			<button className='mt-16 flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-lg font-medium transition hover:bg-gray-300 active:scale-90 active:bg-gray-300 md:mt-28 md:gap-3 md:px-8 md:py-4 md:text-xl md:font-semibold'>
				<BsPersonAdd />
				<Link to='/contact/create'>Create Contact</Link>
			</button>

			{contacts.length > 0 ? (
				<ul className='mt-16 grid max-w-[80%] grid-cols-2 gap-4 sm:grid-cols-3 md:mt-24 md:max-w-[800px] md:gap-8 lg:grid-cols-4'>
					{contacts.map(contact => (
						<ContactCard contact={contact} key={contact.id} />
					))}
				</ul>
			) : (
				<section className='mt-28 flex max-w-[80%] items-center gap-3 rounded-md border border-gray-300 p-4 text-lg font-medium md:mt-36 md:max-w-[800px] md:gap-4 md:p-6 md:text-xl'>
					<FaRegTimesCircle className='text-5xl text-red-500 md:text-3xl' />
					<p>
						No Contacts Found, Please add contact from the Create Contact Button
					</p>
				</section>
			)}
		</>
	)
}

export default Home
