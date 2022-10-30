import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

interface Props {
  name: string,
  address?: any;
  houseType: number;
}

const HouseCard = ({ name, address, houseType }: Props) => {
  const { street1, state, city, zipcode, country } = address;

  const houseTypes = [
    'house',
    'airbnb'
  ]

  const buttonLabels = [
    'View House',
    'View Airbnb'
  ]

  return (
    <Card
      style={{
        width: '18rem'
      }}
    >
      <img
        alt="Sample"
        src="https://picsum.photos/300/200"
      />
      <CardBody>
        <CardTitle tag="h5">
          {name}
        </CardTitle>
        <CardText>
          {`${street1}, ${city}, ${state} ${zipcode}`}
          {" "}
          {`${country}`}
        </CardText>
        <Button color={houseType === 0 ? "primary" : "warning"} tag="a" href={`/${houseType ? houseTypes[houseType] : 'house'}`}>
          {buttonLabels[houseType]}
        </Button>
      </CardBody>
    </Card >
  )
}

export default HouseCard;



