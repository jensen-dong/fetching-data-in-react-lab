import { Card, CardTitle, ListGroup } from "react-bootstrap";

const StarshipCard = (props) => {
  console.log("StarshipCard props:", props);
  return (
    <Card style={{ width: "18rem", textAlign: "center", color: "white", backgroundColor: "#1a1a1a"}}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item className="list-group-item">Class: {props.starship_class}</ListGroup.Item>
          <ListGroup.Item className="list-group-item">Manufacturer: {props.manufacturer}</ListGroup.Item>
          <ListGroup.Item className="list-group-item">Model: {props.model}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};
export default StarshipCard;
