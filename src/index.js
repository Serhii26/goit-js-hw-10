import './css/styles.css';
import NewFetchCountries from './fetchCountries';
let debounce = require('lodash.debounce');
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { renderList, renderInfo, onClearList, onclearInfo } from './render';

const DEBOUNCE_DELAY = 300;
const refs = {
  inputEl: document.querySelector('#search-box'),
  ulEl: document.querySelector('.country-list'),
  divEl: document.querySelector('.country-info'),
};

const newFetchCountries = new NewFetchCountries();
refs.inputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  e.preventDefault();
  newFetchCountries.query = e.target.value;
  verificationText();

  newFetchCountries.fetchCountries().then();
}

function verificationText() {
  if (newFetchCountries.query.trim() !== '') {
    newFetchCountries.fetchCountries().then(countries => {
      if (countries.length > 10) {
        // console.log(countries.length);
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        return;
      } else if (countries.length > 2 && countries.length < 10) {

        onclearInfo();
        renderList(countries);
      } else if (countries.length === 1) {
        
        onClearList();
        renderInfo(countries);
      }
    }).catch(error => { Notify.failure("Oops, there is no country with that name") });
  }
}

// function textMarkup() {
//     refs.divEl.insertAdjacentHTML('beforeend');
// }

// function fetchCountries(name) {
//     // const ulr = 'https://restcountries.com/v3.1/name/{name}';

//     return fetch(`https://restcountries.com/v3.1/name/${name}`)
//         .then(response => response.json())
//         .then((data) => {
//             console.log(data);
//             return data;
//         }
//         );

// }

// отрисовать елементы
// отобрать нужные елементы capital, population, ...
// trim убирает пробелы
