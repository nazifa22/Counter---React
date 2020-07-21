import React from 'react'

const MovieForm = ({ match, history }) => {
    return (
        <div className="mt-4">
            <h1>Movies Form { match.params.id }</h1>
            <button className="btn btn-warning mt-3"
                onClick={() => history.push('/movies')}>
                Save
            </button>
        </div>
    )
}

export default MovieForm
