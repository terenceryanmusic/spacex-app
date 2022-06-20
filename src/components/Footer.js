import React from 'react';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='w-full py-4 bg-black text-gray-600 text-center text-sm '>
			<p>This is a test app and is not associated with the SpaceX site.</p>
			<p>SpaceX App - &copy; {currentYear}</p>
		</footer>
	);
};

export default Footer;
