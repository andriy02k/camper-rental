import React, { useEffect, useState } from 'react'
import { useSearchParams, } from 'react-router-dom'
import {getSearchMovie} from '../../api/getItem'
import MovieList from 'components/MovieList/MovieList';
import Form from 'components/Form/Form';

const Movies = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    
    useEffect(() => {
        const query = searchParams.get('query');
        if (!query) return;
        setSearchQuery(query);
        getSearchMovie(query)
            .then(resp => setMovies(resp))
            .catch (error => console.log(error)) 
    }, [searchParams]);

    const handleChange = ({ target: { value } }) => {
        setSearchQuery(value);
    }; 

    const handleSubmit = e => { 
        e.preventDefault();
        setSearchParams({ query: searchQuery });
    }

    return (
        <>
            {/* <Outlet /> */}
            <Form
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                searchQuery={searchQuery}
            />
            <MovieList movies={movies} />
        </>
    )
}

export default Movies