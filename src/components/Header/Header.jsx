import { NavLink, Outlet } from 'react-router-dom'
// import css from './Header.module.css'

const Header = () => {
	return (
		<>
			<header className="bg-gray-800 text-white p-4 font-medium text-36px">
				<nav className="container mx-auto flex justify-between items-center">
					<ul className="flex space-x-12">
						<li className="hover:text-gray-400">
							<NavLink className="hover:text-gray-400" to='/'>Home</NavLink>
						</li>
						<li className="hover:text-gray-400">
							<NavLink className="hover:text-gray-400" to='/movies'>Movies</NavLink>
						</li>
					</ul>
				</nav>
			</header>
			<Outlet />
		</>
	)
}

export default Header