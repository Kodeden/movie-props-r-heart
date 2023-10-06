import PropTypes from "prop-types";

export default function MoviePropListItem({ movieProp }) {
  return (
    <li className="py-2 ">
      {movieProp.id}. {movieProp.name} - {movieProp.createdAt}
    </li>
  );
}

MoviePropListItem.propTypes = {
  movieProp: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};
