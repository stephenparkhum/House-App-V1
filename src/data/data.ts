import { Room, House, User } from '../types/types'

const testRooms: Room[] = [{
  id: '7D9B75B3-4384-47DB-8E81-B9D6AE0C5676',
  whoLivesInHere: ['Stephen', 'Sarah'],
  isOffice: false,
  isGuestRoom: false,
  nickname: 'Master bedroom'
},
{
  id: '417F9DE0-7EA6-4A3D-B4EA-10C52023AD47',
  whoLivesInHere: ['Trevor'],
  isOffice: false,
  isGuestRoom: false,
  nickname: 'Attic Bedroom'
},
{
  id: 'C51C41C7-EF3F-4FC4-B62B-3AD12E6F6560',
  whoLivesInHere: ['Trevor'],
  isOffice: false,
  isGuestRoom: false,
  nickname: 'Other bedroom'
},
{
  id: '05AF3D3E-AA31-4CD0-B397-F8D40CE01F71',
  whoLivesInHere: [''],
  isOffice: true,
  nickname: 'Office',
  isGuestRoom: true,
}]

const testAirbnbRooms: Room[] = [{
  id: '7D9B75B3-4384-47DB-8E81-B9D6AE0C5676',
  nickname: 'Room 1',
  whoLivesInHere: ['NA'],
  isOffice: false,
  isGuestRoom: false,
},
{
  id: '417F9DE0-7EA6-4A3D-B4EA-10C52023AD47',
  nickname: 'Master Bedroom',
  whoLivesInHere: [''],
  isOffice: false,
  isGuestRoom: false,
},
{
  id: 'C51C41C7-EF3F-4FC4-B62B-3AD12E6F6560',
  whoLivesInHere: [''],
  isOffice: true,
  isGuestRoom: true,
}]

const testHouse: House = {
  id: 'FD5918BE-FA28-4FCE-ACFA-C8DB07180FC9',
  name: 'Le Chateau Hante',
  floors: 2,
  basement: true,
  attic: true,
  isAtticFurnished: true,
  rooms: testRooms,
  isAirbnb: false,
  isMainResidence: true,
  address: {
    street1: '123 Main St',
    state: 'Oregon',
    city: 'Portland',
    zipcode: '97222',
    country: 'USA'
  }
}

const testAirbnb: House = {
  id: '19AF1EA4-4535-4E71-B4F1-2C44331426BA',
  name: 'Eugene House',
  floors: 3,
  basement: false,
  attic: false,
  rooms: testAirbnbRooms,
  isAirbnb: true,
  isMainResidence: false,
  address: {
    street1: '666 Eugene Street',
    state: 'Oregon',
    city: 'Eugene',
    zipcode: '97402',
    country: 'USA'
  }
}

const testUser: User = {
  id: '10EF343B-F305-44FA-9E41-6179D017284F',
  name: 'Stephen',
  houses: [testHouse, testAirbnb]
}

export default testUser


