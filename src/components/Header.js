import React from 'react';
import Logo from '../img/spacex-logo.svg';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
	return (
		<header className='flex items-center justify-between p-4'>
			<Link to='/'>
				<img className='' src={Logo} alt='space x logo'></img>
			</Link>
			<Nav />
		</header>
	);
};

export default Header;
