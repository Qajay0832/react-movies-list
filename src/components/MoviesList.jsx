import React from "react";
import './moviesList.css'

const MoviesList = ({ movies }) => {
  return (
    <div className="moviesListSection">
      <table border>
        <thead className="tableHead">
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((e, i) => (
            <tr key={i}>
              <td>{e.title}</td>
              <td>{e.genre}</td>
              <td>{e.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MoviesList;
