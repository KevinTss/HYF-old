const getCountriesEndpoint = 'https://restcountries.eu/rest/v2/all?fields=name;alpha2Code';

const getCountriesSuccess = function(response) {
    const button = document.getElementById("btn-1");
    const loaderToRemove = document.getElementsByClassName('lds-spinner')[0];
    const container = document.getElementById('container-1');
    const select = createSelect("countries");
    const countries = JSON.parse(response);
    button.setAttribute("disabled", "");
    container.removeChild(loaderToRemove);
    countries.forEach(function(country) {
        const option = createOption(country.alpha2Code, country.name);
        select.appendChild(option);
    })
    container.appendChild(select);
    select.addEventListener('change', function(){
        const alpha2 = select.options[select.selectedIndex].value.toLowerCase();
        getCountry(alpha2); 
    })
}
const getCountriesLoading = function() {
    const loader = createLoader();
    const container = document.getElementById('container-1');
    container.appendChild(loader);
}
const getCountriesError = function(error) {
    const loaderToRemove = document.getElementsByClassName('lds-spinner')[0];
    const container = document.getElementById('container-1');
    const alert = createAlert("danger", "An error was occured!", error.status);
    container.removeChild(loaderToRemove);
    container.appendChild(alert);
    console.error(error);
}

const getCountries = function() {
    return get(getCountriesEndpoint, getCountriesLoading)
        .then(function(response) {
            getCountriesSuccess(response);
        })
        .catch(function(err) {
            getCountriesError(err);
        });
}