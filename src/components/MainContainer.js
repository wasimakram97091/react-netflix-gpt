import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

function MainContainer() {
  const movies = useSelector((state) => state.movies?.nowPlayingMovie);
  if (movies === null) return;

  const mainMovie = movies[2];
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground videoId={id} />
    </div>
  );
}

export default MainContainer;
