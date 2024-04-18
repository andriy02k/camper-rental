import {api} from './api'

export const trendMoviesFetch = async () => {
    const {data} = await api.get('trending/all/day');
    return data.results;
};

export const fetchMovie = async id => {
    const { data } = await api.get(`/movie/${id}`);
    return data;
};

export const getMovieCredits = async id => {
    const { data } = await api.get(`/movie/${id}/credits`);
    return data;
}

export const getMovieReview = async id => {
    const { data } = await api.get(`/movie/${id}/reviews`);
    return data;
}

export const getSearchMovie = async query => {
    const {data} = await api.get('/search/movie', {
    params: { query, },
  });
    return data.results;
}
