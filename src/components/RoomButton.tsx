// import React from 'react'
import { Room } from '../types/types'
import { Button, Container } from 'reactstrap'

type Props = {
  room: Room,
  idx: number
}

const RoomButton = ({ room, idx }: Props) => {
  return (
    <Button className="mb-3">
      <Container className="d-inline-flex p-1 color-primary flex">
        <img
          alt="Sample"
          src="https://picsum.photos/100"
        />
        <div className="align-self-center">
          {room.nickname ? room.nickname : `Room #${idx}`}
        </div>
      </Container>
    </Button>
  )
}

export default RoomButton;

