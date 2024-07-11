import { useState } from "react";

const StarshipSearch = (props) => {
  const [starship, setStarship] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchData(starship);
    setStarship("");
  };

  return (
    <section className="search-bar">
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="starship">Enter a starship:</label>
        <input
          id="starship"
          type="text"
          value={starship}
          onChange={(e) => setStarship(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default StarshipSearch;
