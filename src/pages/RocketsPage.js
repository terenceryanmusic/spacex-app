import { React, useState, useEffect } from 'react';
import axios from 'axios';

const Rockets = () => {
	const [rockets, setRockets] = useState([]);

	//get rockets
	const getRockets = async () => {
		const response = await axios('https://api.spacexdata.com/v4/rockets');
		setRockets(response.data);
	};

	useEffect(() => {
		getRockets();
	}, []);

	const rocket = rockets.map((rocket) => {
		// get images
		const images = rocket.flickr_images;

		return (
			<article className='bg-slate-700 p-4 rounded' key={rocket.id}>
				<p className='text-3xl underline underline-offset-2 mb-2'>{rocket.name}</p>
				<p>{'First flight: ' + rocket.first_flight}</p>
				<p>{`Country: ${rocket.country}`}</p>
				<details className='pb-2'>{'Description: ' + rocket.description}</details>
				<img className='rounded w-full h-64 lg:h-96' src={images[1]} alt='rocket' />
			</article>
		);
	});

	return (
		<main className='p-4'>
			<h1 className='text-4xl md:text-5xl text-center pb-8'>Rockets</h1>
			<section className='grid gap-5 grid-cols-1 md:grid-cols-2 '>{rocket}</section>
		</main>
	);
};

export default Rockets;
