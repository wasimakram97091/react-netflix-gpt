import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addVideoTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (videoId) => {
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    try {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${videoId}/videos?language=en-US`, API_OPTIONS);

      if (!data.ok) {
        throw new Error(`Failed to fetch video data for movie ${videoId}`);
      }

      const json = await data.json();

      const filterData = json.results?.filter((video) => video.type === "Trailer");
      const trailer = filterData?.length ? filterData[0] : json?.results[0];

      dispatch(addVideoTrailer(trailer));
    } catch (error) {
      console.error("Error fetching movie video:", error.message);
    }
  };

  useEffect(() => {
    if (videoId) {
      getMovieVideo();
    }
  }, [videoId]);
};

export default useMovieTrailer;
