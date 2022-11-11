export default class NewFetchCountries {
  constructor() {
    this.name = '';
  }
  fetchCountries() {
    // console.log(this);
    //  const ulr = `https://restcountries.com/v3.1/name/{name}`;

    return fetch(
      `https://restcountries.com/v3.1/name/${this.name}?fields=name,capital,population,flags,languages`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      });
    
      
  };
  get query() {
    return this.name;
  }
  set query(newQuery) {
    this.name = newQuery;
  }
}
// посмотреть у репети за this 
