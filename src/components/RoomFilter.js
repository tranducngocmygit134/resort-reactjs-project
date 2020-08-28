import React, { useContext } from 'react';
import { RoomContext } from '../context';
import Title from './Title';

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
export default function RoomFilter(props) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
  } = context;
  // get unique types
  let types = getUnique(props.rooms, 'type');
  // add all
  types = ['all', ...types];
  // map to jsx
  types = types.map((type, index) => {
    return (
      <option value={type} key={index}>
        {type}
      </option>
    );
  });

  // get unique types
  let people = getUnique(props.rooms, 'capacity');
  // map to jsx
  people = people.map((cap, index) => {
    return (
      <option value={cap} key={index}>
        {cap}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            id="type"
            name="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            id="capacity"
            name="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="price">room price: ${price}</label>
          <input
            type="range"
            id="price"
            name="price"
            value={price}
            min={minPrice}
            max={maxPrice}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </form>
    </section>
  );
}
