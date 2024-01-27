import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import IsUserAuthenticated from './hooks/IsUserAuthenticated';
import Layout from './pages/Layout';
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
	const { isAuthenticated } = IsUserAuthenticated();

	console.log('isAuthenticated: ', isAuthenticated);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>

					<Route index element={<Home /> } />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />

				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
