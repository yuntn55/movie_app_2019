import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";

function Movies({id, year, title, summary, poster}) {
    return (
        <div class="movies">
            <img src={poster} alt={title} title={title}></img>
            <div class="movie_data">
                <h5>{year}</h5>
                <h2>{title}</h2>
                <p>{summary}</p>
            </div>
        </div>
    );
}

Movies.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
}

export default Movies;