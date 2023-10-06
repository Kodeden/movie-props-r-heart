import PropTypes from "prop-types";
import MoviePropListItem from "./movie-prop-list-item";

export default function MoviePropList({ movieProps }) {
  return (
    <ul className="container mx-auto mt-8 flex flex-col items-center justify-center">
      {movieProps.map((movieProp) => (
        <MoviePropListItem key={movieProp.id} movieProp={movieProp} />
      ))}
    </ul>
  );
}

MoviePropList.propTypes = {
  movieProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ).isRequired,
};
