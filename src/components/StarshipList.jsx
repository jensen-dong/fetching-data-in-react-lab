import StarshipCard from "./StarshipCard";

const StarshipList = ({ starships }) => {
  if (!Array.isArray(starships) || starships.length === 0) {
    return <div>No starships found.</div>;
  }

  return (
    <div>
      <h4 className="ship-count">There are {starships.length} matching starships</h4>
      <div className="card-container">
        {starships.map((starship, index) => (
          <StarshipCard
            key={index}
            name={starship.name}
            starship_class={starship.starship_class}
            manufacturer={starship.manufacturer}
            model={starship.model}
          />
        ))}
      </div>
    </div>
  );
};
export default StarshipList;
