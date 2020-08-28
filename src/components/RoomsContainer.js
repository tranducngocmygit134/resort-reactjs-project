import React , {useContext} from 'react';

import RoomsFilter from './RoomFilter';
import RoomsList from './RoomList';
import Loading from './Loading';
import { RoomContext } from '../context';
//import { withRoomConsumer } from '../context';

function RoomsContainer() {
  const context = useContext(RoomContext);
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomsFilter  rooms={rooms}/>
      <RoomsList rooms={sortedRooms}/>
    </div>
  );
}

//export default withRoomConsumer(RoomsContainer);
export default RoomsContainer;

