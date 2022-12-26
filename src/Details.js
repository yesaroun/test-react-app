import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const Details = () => {
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    console.log(id);

    const URL = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
    useEffect(() => {
      fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          console.log(data.data.movie);

          setImg(data.data.movie.medium_cover_image);
          setTitle(data.data.movie.title);
        });
    }, []);

    return (
      <div>
        <h1>{title}</h1>
        <img src={img} alt=""/>
      </div>
    );
  }
;

export default Details;