export { renderList, renderInfo, onClearList, onclearInfo };
const refs = {
  inputEl: document.querySelector('#search-box'),
  ulEl: document.querySelector('.country-list'),
  divEl: document.querySelector('.country-info'),
};

function renderList(countries) {
  const markupCountries = countries
    .map(
      ({ name, flags }) =>
        `<li class = 'country-item'>
        <img class = 'country-flag' src='${flags.svg}'
        alt='${name.official} flag'> 
        <p class = 'country-name'> ${name.official}</p> 
                     </li> `
    )
    .join(' ');
  refs.ulEl.innerHTML = markupCountries;
}
function renderInfo(countries) {
  const markupCountries = countries
    .map(
      ({ name, flags, capital, population, languages }) =>
        `<li class = 'country-item'><img class = 'country-flag' src='${flags.svg}'
        alt='${name.official} flag' width= '50px'> 
        <p class = 'country-name'><b> ${name.official}</b></p> </li>
        <ul class = country-info>
        <li ><p class = countri-info_item ><b>Capital: </b>${capital}</p></li>
        <li class = countri-info_item><p><b>Population:</b>${population}</p></li>
        <li class = countri-info_item><p><b>Languages:</b>${Object.values(
          languages
        )}</p></li>
        </ul>
                      `
    )
    .join(' ');
  refs.divEl.innerHTML = markupCountries;
}

function onClearList() {
  refs.ulEl.innerHTML = '';
}
function onclearInfo() {
  refs.divEl.innerHTML = '';
}
