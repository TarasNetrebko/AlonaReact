import PropTypes from "prop-types";

export default function FeaturesList({ features }) {
  return (
    <ul>
      {features.map(({ id, title, text }) => (
        <li key={id}>
          <h3>{title}</h3>
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
}

FeaturesList.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};
