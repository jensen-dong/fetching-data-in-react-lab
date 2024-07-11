const BASE_URL = "https://swapi.dev/api/starships/"

const search = async (shipIndex) => {
    try {
        const queryString = shipIndex
        const res = await fetch(BASE_URL + queryString)
        const data = await res.json()
        console.log('Data: ', data)
        return data;
    } catch (err) {
        console.log(err)
    }
}

const list = async () => {
    try {
        const res = await fetch(BASE_URL)
        const data = await res.json()
        console.log('Data: ', data)
        return data
    } catch (err) {
        console.log(err)
    }
}

export { list }