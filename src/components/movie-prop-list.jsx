import PropTypes from "prop-types";
import MoviePropListItem from "./movie-prop-list-item";

export default function MoviePropList({ movieprops }) {
  return (
    <ul className="container mx-auto mt-8 flex flex-col items-center justify-center">
      {movieprops.map((movieprop) => (
        <MoviePropListItem key={movieprop.id} movieprop={movieprop} />
      ))}
    </ul>
  );
}

MoviePropList.propTypes = {
  movieprops: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ).isRequired,
};
