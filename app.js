function countries(){
  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => displayCountry(data))
}


const  displayCountry = countries =>{
  //get the element
  const countryElement = document.getElementById("id-container")
  countries.forEach(country => {
    console.log(country)
    const counrtyDiv = document.createElement("div");
    counrtyDiv.classList.add("country")
    counrtyDiv.innerHTML =`
      <h1> Name:${country.name.common}</h1>
      <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
      <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
    `
    countryElement.appendChild(counrtyDiv)
  });
  }

  const loadCountryDetails = code =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetail(data[0]))
  }
 
  const showCountryDetail  = country =>{
    console.log(country)
    const detailsContainer = document.getElementById("count-details")
    detailsContainer.innerHTML = `
      <h3>Name: ${country.name.common}</h3>
      <img src="${country.flags.svg}" /> 
    `
  }

  countries()