import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LaunchesPage from './pages/LaunchesPage';
import RocketsPage from './pages/RocketsPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<div className='min-h-screen bg-gradient-to-br from-slate-900 to-black text-gray-200 font-poppins'>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/launches' element={<LaunchesPage />} />
					<Route path='/rockets' element={<RocketsPage />} />

					<Route
						path='*'
						element={
							<h1 className='h-auto p-72 flex flex-grow justify-center items-center text-center text-6xl font-bold text-gray-100'>
								404 - Not Found
							</h1>
						}
					/>
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
