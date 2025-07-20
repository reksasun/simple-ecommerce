import PropTypes from 'prop-types';

function ProductCard({ product }) {
  /* ... */
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id:          PropTypes.string.isRequired,
    name:        PropTypes.string.isRequired,
    price:       PropTypes.number.isRequired,
    image:       PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
