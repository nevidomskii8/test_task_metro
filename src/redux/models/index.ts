export interface MovieItem {
    adult: boolean;
    backdrop_path: string;
    genre_ids: [number];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface PopularMoviesModel {
    page: number;
    results: [];
    total_pages: number;
    total_results: number;
}

export interface Genres {
    id: number;
    name: string;
}
export interface ProductionCompanies {
    id: number;
    name: string;
    logo_path: string;
    origin_country: string;
}
export interface ProductionCountries {
    iso_3166_1: string;
    name: string;
}

export interface SpokenLanguages {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export interface MovieDetailModel {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: any;
    budget: number;
    genres: [Genres];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: [ProductionCompanies];
    production_countries: [ProductionCountries];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: [SpokenLanguages];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MoviesState {
    moviesList: PopularMoviesModel;
    movieItem: MovieDetailModel;
}
