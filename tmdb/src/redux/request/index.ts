import { get } from "../../ApiService/Get";
import { GENRE_MOVIES_ENDPOINT, POPULAR_MOVIES_ENDPOINT, TRENDING_MOVIES_ENDPOINT } from "../../constants";

export function getTrendingMovies(){
    return get(TRENDING_MOVIES_ENDPOINT)
}

export function getPopularMovies(){
    return get(POPULAR_MOVIES_ENDPOINT)
}

export function getMovieDetails({id}:{id:string}){
    return get(`/movie/${id}?language=en-US `)
}

export function getGenreMovies(){
    return get(GENRE_MOVIES_ENDPOINT)
}