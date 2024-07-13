import { useState, useEffect } from "react";
import * as starshipService from "./services/starshipService";
import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const App = () => {
  const [starships, setStarships] = useState([]);

  const fetchData = async (starship) => {
    const data = await starshipService.search(starship);
    setStarships(data.results || []);
  };

  console.log("State: ", starships);

  useEffect(() => {
    const fetchDefaultData = async () => {
      const data = await starshipService.list();
      setStarships(data.results || []);
    };

    fetchDefaultData();
  }, []);

  return (
    <main>
      <h1 className="title">Starship Search</h1>
      <StarshipSearch fetchData={fetchData} />
      <StarshipList starships={starships} />
    </main>
  );
};
export default App;
