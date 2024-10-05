import React from "react";
import "./genreArray.css";

const GenreArray = ({ genreArray }) => {
  console.log(genreArray);
  return (
    <div className="genreArraySection">
      <nav>
        <h3>Filter By Genre</h3>
        <div className="genreButtons">
          {genreArray.map((e, i) => (
            <button
              className="buttons"
              key={i}
              onClick={() => {
                console.log('Filtering By',e);
              }}
            >
              {e}
            </button>
          ))}

          {/* <button className='buttons' >Crime</button>
          <button className='buttons' >Action</button>
          <button className='buttons' >Fantacy</button>
          <button className='buttons' >Western</button>
          <button className='buttons' >Science Fiction</button>
          <button className='buttons' >Thriller</button>
          <button className='buttons' >War</button>
          <button className='buttons' >Animation</button> */}
        </div>
      </nav>
    </div>
  );
};

export default GenreArray;
