const API_TOKEN = ""

export function searchBreweriesFromApi(text) {
    const url='https://api.openbrewerydb.org/breweries/search?query=' + text;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log("There are no breweries matching your research."))
}