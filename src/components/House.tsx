// import React from 'react'
import { User, Room } from '../types/types'
import { Button, Alert } from 'reactstrap'
import RoomButton from './RoomButton'

type Props = {
  user: User
  houseType: number
}

const House = ({ user, houseType }: Props) => {

  const { houses } = user;

  const house = houses[houseType]
  const { isAirbnb, isMainResidence, address, name, rooms } = house


  const displayRooms = (rooms: Room[]) => {
    return rooms.map((room, idx) => {
      return (
        <RoomButton room={room} idx={idx} />
      )
    })
  }

  const heroImage = (house: any) => {
    return (
      <>
        <div className="p-5 text-center bg-image rounded-3" style={{
          backgroundImage: "url('https://picsum.photos/100/200')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100%",
          height: '400px',
        }}>
          <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">{house.name}</h1>
              </div>
            </div>
          </div>
        </div>
      </>
    )

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
      {heroImage(house)}
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
      <div className="d-flex flex-column">
        {displayRooms(rooms)}
      </div>
      <Button className="mt-5" color="secondary" tag="a" href="/">{"< "}ALL HOUSES</Button>
    </div>
  )
}

export default House;
