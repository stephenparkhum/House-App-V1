// import React from 'react'
import { User, Room } from '../types/types'
import { Button, Alert } from 'reactstrap'

type Props = {
  user: User
}

const House = ({ user }: Props) => {

  const { houses } = user;

  const house = houses[0]
  const { isAirbnb, isMainResidence, address, name, rooms } = house


  const displayRooms = (rooms: Room[]) => {
    return rooms.map((room, idx) => {
      return (
        <li>{room.nickname ? room.nickname : `Room #${idx + 1}`}</li>
      )
    })
  }

  return (
    <div>
      {isAirbnb && (
        <Alert color="primary">
          This is an Airbnb property
        </Alert>
      )}
      {isMainResidence && (
        <Alert color="success">
          This is your main residence
        </Alert>
      )}
      <h2>Name</h2>
      <p>{name}</p>
      <h3>Address</h3>
      {!!address && (
        <ul>
          <li>{address?.street1} {address?.city}, {address?.state} {address?.zipcode}</li>
        </ul>

      )}
      {!address && (
        <ul>
          <li>please add an address by clicking the edit icon</li>
        </ul>
      )}
      <h3>Rooms</h3>
      <ul>
        {displayRooms(rooms)}
      </ul>
      <Button color="secondary" tag="a" href="/">All houses</Button>
    </div>
  )
}

export default House;
