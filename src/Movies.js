import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";

function Movies({ id, year, title, summary, poster, genres }) {
    return (
        <div className="movies">
            <img src={poster} alt={title} title={title}></img>
            <div className="movie_data">
                <h2 className="movie__title">{title}</h2>
                <h5 className="movie__year">{year}</h5>

                <ul className="movie__genres">
                    {genres.map((genre, index) =>
                        <li key={index} className="genres__genre">{genre}</li>
                    )}
                </ul>
                <p className="movie__summary">{summary.slice(0, 140)}...</p>
            </div >
        </div >
    );
}

Movies.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movies;