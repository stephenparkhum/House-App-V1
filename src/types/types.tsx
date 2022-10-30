export interface Room {
  id: string,
  nickname?: string,
  // Add 'household' type declaration here
  whoLivesInHere?: string[],
  isOffice: boolean,
  isGuestRoom: boolean,
}

export interface Address {
  street1: string,
  street2?: string,
  city: string,
  state?: string,
  country: string,
  zipcode: string
}

export interface House {
  id: string,
  name: string,
  floors: number,
  basement: boolean,
  attic: boolean,
  isAtticFurnished?: boolean,
  rooms: Room[],
  isMainResidence: boolean,
  isAirbnb?: boolean,
  address?: Address
}

export interface User {
  id: string,
  name: string,
  houses: House[],
}
