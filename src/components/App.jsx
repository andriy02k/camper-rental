import React, {Suspense, lazy} from "react"
import { Routes, Route } from "react-router-dom"

const Home = lazy(() => import('../Pages/Home/Home'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const Header = lazy(() => import("./Header/Header"));
const Movies = lazy(() => import("../Pages/Movies/Movies"));

const App = () => {
	return (
		<Suspense fallback={<>Loading...</>}>
			<Routes>
				<Route path="/" element={<Header />}>
					<Route index element={<Home />} />
					<Route path="/movies/:moviesId" element={<MovieDetails />}>
						<Route path="cast" element={<Cast />} />
						<Route path="reviews" element={<Reviews />} />
					</Route>
					<Route path="/movies" element={<Movies />} />
				</Route>  
				<Route path='*' element={<h1>404</h1>} />
      		</Routes>
		</Suspense>
  	);
};

export default App
