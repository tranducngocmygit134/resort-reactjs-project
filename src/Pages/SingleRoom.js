import React, { Component } from 'react';
import defaultBg from '../images/room-1.jpeg';
import { Link } from 'react-router-dom';

import { RoomContext } from '../context';

import Banner from '../components/Banner';
import { StyledHero } from '../components/StyledHero';
import Footer from '../components/Footer';

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBg,
    };
  }
  // consumer
  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="room-error">
          <h3>no such room could be found... </h3>
          <Link to="/" className="btn-primary">
            Go to home page
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    const [mainImg, ...defaultImg] = images;
    return (
      <React.Fragment>
        <StyledHero img={mainImg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((img, index) => (
              <img src={img} alt="rooms of beach resort" key={index} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size: {size} SQFT</h6>
              <h6>Max capacity: {capacity} people</h6>
              <h6>{pets ? 'pets allowed' : 'no pets allowed'} </h6>
              <h6>{breakfast && 'free breakfast included'}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>-  {item}</li>;
            })}
          </ul>
        </section>
      <Footer/>
      </React.Fragment>
    );
  }
}

export default SingleRoom;
