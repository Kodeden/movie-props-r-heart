import PropTypes from "prop-types";

export default function MoviePropListItem({ movieprop }) {
  return (
    <li className="py-2 ">
      {movieprop.id}. {movieprop.name} - {movieprop.createdAt}
    </li>
  );
}

MoviePropListItem.propTypes = {
  movieprop: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    createAt: PropTypes.string.isRequired,
  }).isRequired,
};
