import { React, useState, useEffect } from 'react';
import axios from 'axios';

const Launches = () => {
	const [launches, setLaunches] = useState([]);

	// Get launches
	const getLaunches = async () => {
		const response = await axios('https://api.spacexdata.com/v4/launches');
		setLaunches(response.data);
	};

	useEffect(() => {
		getLaunches();
	}, []);

	const launch = launches.map((launch) => {
		return (
			<article className='bg-slate-700 p-4 rounded' key={launch.id}>
				<p className='text-3xl '>{launch.name}</p>
				<p>{'Flight number: ' + launch.flight_number}</p>
				{launch.details == null ? '' : <details>{'Details: ' + launch.details}</details>}
				<a
					className='text-sm break-words underline text-sky-400'
					href={launch.links.article}
					rel='noreferrer'
					target='_blank'>
					{launch.links.article}
				</a>
			</article>
		);
	});

	return (
		<main className='p-4'>
			<h1 className='text-4xl md:text-5xl text-center pb-8'>Launches</h1>
			<section className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>{launch}</section>
		</main>
	);
};

export default Launches;
