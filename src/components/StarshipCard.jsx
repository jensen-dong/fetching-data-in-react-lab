const StarshipCard = (props) => {
  console.log("StarshipCard props:", props);
  return (
    <div className="card">
      <h2>Starship Details</h2>
      <p>Name: {props.name}</p>
      <p>Class: {props.starship_class}</p>
      <p>Manufacturer: {props.manufacturer}</p>
      <p>Model: {props.model}</p>
    </div>
  );
};
export default StarshipCard;
