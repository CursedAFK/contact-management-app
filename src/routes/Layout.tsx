import { Outlet, Link } from 'react-router-dom'
import { RiContactsBookLine } from 'react-icons/ri'
import { HiOutlineChartSquareBar } from 'react-icons/hi'

const Layout = () => {
	return (
		<div className='flex flex-col md:h-screen md:flex-row'>
			<nav className='bg-white shadow-sm md:w-48 md:shadow-md'>
				<ul className='flex divide-x-2 md:flex-col  md:divide-x-0 md:divide-y-2'>
					<li className='relative flex flex-1 cursor-pointer items-center px-9 py-4 md:py-4'>
						<RiContactsBookLine className='absolute left-0 top-1/2 w-9 -translate-y-1/2' />
						<Link to='/'>Contact</Link>
					</li>
					<li className='relative flex flex-1 cursor-pointer items-center px-9 py-4 md:py-4'>
						<HiOutlineChartSquareBar className='absolute left-0 top-1/2 w-9 -translate-y-1/2' />
						<Link to='/charts-and-maps'>Charts and Maps</Link>
					</li>
				</ul>
			</nav>

			<main className='flex flex-1 flex-col items-center pb-8 md:overflow-y-scroll md:pb-12'>
				<Outlet />
			</main>
		</div>
	)
}

export default Layout
