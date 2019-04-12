const getCountryEndpoint = 'https://restcountries.eu/rest/v2/alpha/';

const getCountrySuccess = function(response) {
    const container = document.getElementById('container-2');
    const loaderToRemove = document.getElementsByClassName('lds-spinner')[0];
    const countryName = JSON.parse(response).name;
    const countryCapital = JSON.parse(response).capital;
    const countryBorders = JSON.parse(response).borders.length ? "And its bordering countries are " + JSON.parse(response).borders.join().toLowerCase() : "And he don't have any bordering countries.";
    const countryDescription = "The selected country (" + countryName + ") has capital " + countryCapital + ". " + countryBorders;
    const countryCard = createCountryCard(JSON.parse(response).flag, countryDescription);
    container.removeChild(loaderToRemove);
    container.appendChild(countryCard);
}
const getCountryLoading = function() {
    const container = document.getElementById('container-2');
    const previousCard = document.getElementById("countryCard");
    const loader = createLoader();
    if(previousCard) {
        container.removeChild(previousCard);
    } 
    container.appendChild(loader);
}
const getCountryError = function(error) {
    const loaderToRemove = document.getElementsByClassName('lds-spinner')[0]
    const container = document.getElementById('container-2');
    const alert = createAlert("danger", "An error was occured!", error.status);
    container.removeChild(loaderToRemove);
    container.appendChild(alert);
    console.error(error);
}

const getCountry = function(alpha2) {
  return get(getCountryEndpoint + alpha2, getCountrySuccess, getCountryLoading, getCountryError);
}
