import * as starshipService from "./services/starshipService"

const App = () => {
  const fetchData = async () => {
    const data = await starshipService.list()
    console.log('Data: ', data)
  }
  
  return (
    <main>
      <h1>Starship Search</h1>
      <button onClick={fetchData}>Populate Ships</button>
    </main>
  )
}
export default App