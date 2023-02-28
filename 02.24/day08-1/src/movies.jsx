import React from "react";
import PropTypes from 'prop-types';
//yarn add prop-types : props를 이용한 데이터 타입체크

function Movie({ id, year, title, summary, poster }) {
    return(
        <div className="movie">
            <img src={poster} alt={title} />
            <div>
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <p className="movie_summary">{summary}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.number.isRequired,
    summary: PropTypes.number.isRequired,
    poster :PropTypes.number.isRequired
}

export default Movie;