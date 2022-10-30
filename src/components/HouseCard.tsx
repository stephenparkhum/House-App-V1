import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

interface Props {
  name: string,
  address?: any;
}

const HouseCard = ({ name, address }: Props) => {
  const { street1, state, city, zipcode, country } = address;

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
        <Button color="primary" tag="a" href="/house">
          View Property
        </Button>
      </CardBody>
    </Card>
  )
}

export default HouseCard;



