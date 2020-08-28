import React from 'react';
import { Link } from 'react-router-dom';
import defaultImage from '../images/room-1.jpeg';
import PropTypes from 'prop-types';

export default function Room({ room }) {
  const { name, slug, images, price } = room;
  return (
    <article className="room">
      <div className="room-price">
        <p><b>${price}</b></p>
        <p>per night</p>
      </div>
      <Link to={`/rooms/${slug}`}>
        <img src={images[0] || defaultImage} alt={name} />
      </Link>
      <div className="room-name">{name}</div>
    </article>
  );
}

Room.propTypes = {
  room:PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
}
