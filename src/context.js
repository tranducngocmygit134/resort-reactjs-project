import React, { Component } from 'react';
import items from './data';

// create Context object, when react render component (subscribes to Context)
const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };
  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((room) => room.price));
    let maxSize = Math.max(...rooms.map((room) => room.size));

    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      maxSize,
      maxPrice,
      price: maxPrice,
    });
  }
  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }
  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const roomMatch = tempRooms.find((room) => room.slug === slug);
    return roomMatch;
  };
  handleChange = (event) => {
    const target = event.target;
    const value = event.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
    } = this.state;
    let tempRooms = [...rooms];
    if(type !== 'all'){
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    capacity *= 1;
    if(capacity !== 1){
      tempRooms = tempRooms.filter(room => room.capacity === capacity);
    }
    if(price !== 0){
      tempRooms = tempRooms.filter(room => room.price <= price)
    }
    this.setState({
      sortedRooms: tempRooms
    })
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  // nhan vao 1 component
  return function ComsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomContext, RoomConsumer };
