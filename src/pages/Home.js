import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
	const [latest, setLatest] = useState([]);

	//get latest launch
	const getLatestLaunch = async () => {
		const response = await axios('https://api.spacexdata.com/v4/launches/latest');
		setLatest(response.data);
	};

	useEffect(() => {
		getLatestLaunch();
	}, []);

	return (
		<main className=''>
			<section className="bg-[url('./img/spacex-hero.jpg')] bg-cover bg-top bg-no-repeat md:bg-center min-h-[30rem]">
				<div className='grid place-items-center bg-slate-800 bg-opacity-40 w-full min-h-[30rem]'>
					<div className='text-center md:bg-opacity-60 md:bg-slate-800 rounded-md '>
						<h1 className='text-5xl md:text-6xl lg:text-7xl text-gray-200 p-12 '>Welcome to SpaceX</h1>
						<h2 className='text-2xl md:text-3xl relative top-[-1.5rem]'>A test rest API application</h2>
					</div>
				</div>
			</section>
			<section className='grid place-items-center bg-slate-800 py-10'>
				<h3 className='text-2xl underline underline-offset-2 mb-4'>Latest Launch</h3>
				<p className='text-3xl'>{latest.name}</p>
				<p>{'Flight number: ' + latest.flight_number}</p>
			</section>
			<section className='grid place-items-center gap-5 grid-cols-1 md:grid-cols-2 w-full p-8'>
				<Link
					to='/launches'
					className="bg-[url('./img/spacex-launch.jpg')] bg-cover bg-right-top bg-opacity-50  grid place-items-center h-96 w-full rounded-md scale-95 hover:scale-100 hover:duration-700 ">
					<h3 className='text-xl md:text-2xl lg:text-4xl bg-slate-800 bg-opacity-75 p-4 rounded'>Launches</h3>
				</Link>
				<Link
					to='/rockets'
					className="bg-[url('./img/spacex-rocket.jpg')] bg-cover grid place-items-center h-96 w-full rounded-md scale-95 hover:scale-100 hover:duration-700">
					<h3 className='text-xl md:text-2xl lg:text-4xl bg-slate-700 bg-opacity-75 p-4 rounded'>Rockets</h3>
				</Link>
			</section>
		</main>
	);
};

export default Home;
