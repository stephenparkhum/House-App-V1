// import React from 'react';
import { House, User } from './types/types'

import HouseCard from './components/HouseCard'

type Props = {
  user: User
}

function App({ user }: Props) {
  const { houses } = user;


  const displayHouseSections = (houses: House[]) => {
    return houses.map(house => {
      const status = (): number => {
        let num = 0;

        if (house.isAirbnb) {
          num = 1;
        }
        return num;
      }

      const label = status() == 0 ? 'Your Home' : 'Airbnb'

      return (
        <section>
          <h2>{label}</h2>
          {displayHouses(house)}
        </section>
      )
    })
  }

  const displayHouses = (house: House) => {
    return <HouseCard name={house.name} address={house.address} />
  }

  return (
    <main>
      <h1 className="text-center">YOUR PROPERTIES</h1>
      {displayHouseSections(houses)}
    </main>
  );
}

export default App;
