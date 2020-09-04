export function searchBreweriesFromApi(text) {
    const url='https://api.openbrewerydb.org/breweries/search?query=' + text;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log("There are no breweries matching your research."))
}

export function getSelectedBrewery(id) {
    const url='https://api.openbrewerydb.org/breweries/' + id;
    return fetch(url)
        .then((response) => {
            // console.log(response)
            return response.json()
        } )
        .catch((error) => console.log("Something happened, please try again."))
}