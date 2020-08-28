import React, { Component } from 'react';

import Title from './Title';
import Room from './Room';
import Loading from './Loading';
import { RoomContext } from '../context';

class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    // featuredRooms as rooms
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-room">
        <Title title="featured rooms" />
        <div className="rooms">{loading ? <Loading /> : rooms}</div>
      </section>
    );
  }
}

export default FeaturedRooms;
