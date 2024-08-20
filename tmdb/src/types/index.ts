export interface trendingMovieDataType{
    "backdrop_path": string,
    "id": number|null,
    "title": string,
    "original_title": string,
    "overview": string,
    "poster_path": string,
    "media_type": string,
    "adult": boolean,
    "original_language": string,
    "genre_ids": number[]|null,
    "popularity": number|null,
    "release_date": string,
    "video": boolean,
    "vote_average": number|null,
    "vote_count": number|null,
    "favourite": boolean
}

export interface trendingMovieDetailType{
    "backdrop_path": string,
    "id": number|null,
    "title": string,
    "original_title": string,
    "overview": string,
    "poster_path": string,
    "vote_average": number|null,
    "vote_count": number|null,
    "favourite":boolean
}