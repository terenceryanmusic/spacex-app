import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<nav className='text-gray-300 mt-2 text-sm md:text-base lg:text-lg'>
			<ul className='flex items-center justify-between'>
				<Link to='/' className={'px-2 mr-2 hover:text-sky-700 hover:underline underline-offset-4'}>
					<li>Home</li>
				</Link>
				<Link to='/launches'>
					<li className='px-2 mr-2 hover:text-sky-700 hover:underline underline-offset-4'>Launches</li>
				</Link>
				<Link to='/rockets'>
					<li className='px-2 hover:text-sky-700 hover:underline underline-offset-4'>Rockets</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Nav;
