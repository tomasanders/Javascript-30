// pulling from a cities.json file from GitHub
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

// tell the browser to fetch the endpoint - returns a promise
// .then tells it to do something with that promise
// use blob because it's a blob of data
// need to convert the blob from raw data to json
// we then push the data to the cities array using a spread
// cities.push(...data) tells it to push each city individually
//  into the array
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // here we need to figure out if the city or state matches what was searched using regex
    // g for global, i for insensitive
    const regex = new RegExp(wordToMatch, 'gi');
    // this will return the city or state
    return place.city.match(regex) || place.state.match(regex);
  });
};

// this function puts commas into the numbers at the appropriate places
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

function displayMatches() {
  // this creates an array each time a character is entered into the search box where based on that character it'll call findMatches to update the array
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    // create a regex to match the search term to highlight the search words
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
    // put the results into html
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
    // .join to change from an array into one big string
  }).join('');
  // this adds the html we created above into the suggestions
  suggestions.innerHTML = html;
};

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
// whenever the search term changes, run findMatches again to auto-update the results based on what was typed in
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
