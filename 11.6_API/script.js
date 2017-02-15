var url = 'https://restcountries.eu/rest/v1/name/',
    countriesList = $('#countries');

function showCountriesList(response) {
    console.log(response);
    countriesList.empty();
    response.forEach(function (country) {
        countriesList.append($('<li>').text(country.name + ' - ' + country.capital));
    });
}

function showError() {
    countriesList.empty();
    countriesList.append($('<li>').text('No country find'));
}

function searchCountries() {
    var countryName = $('#country-name').val();
    countryName = !countryName.length ? 'poland' : countryName;
    $.ajax({
        url: url + countryName,
        type: 'GET',
        data: 'json',
        success: showCountriesList,
        error: showError
    });
}

// EVENT LISTENERS
$('#search').click(searchCountries);