import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";
import MyMap from "../components/MyMap";
import Country from "../components/Country";
import './CountryContainer.css';

const CountryContainer = () => {

   const [countries, setCountries] = useState([]);
   const [country, setCountry] = useState(null);
   const [countryISO, setCountryISO] = useState("");

   const getCountriesData = () => {
       fetch('https://restcountries.com/v3.1/all')
       .then(response => response.json())
       .then(data => {
           const modified_data = data.map(country => {
               country.wantToVisit = false;
               country.visited = false;
               return(
                   country
               )
           })
           setCountries(modified_data);
        });
   }

   useEffect(() => {
       getCountriesData();
   }, []);

//    const changeCountryISO = (countryISO) => {
//        setCountryISO(countryISO);
//    }
   const cardAppears = (countryISO) => {
       setCountry(countries.find(country => country.cca3 === countryISO));
   }

   const onWantToVisitClick = (cca3) => {
        const countryToModifyIndex = countries.indexOf(countries.find(country => country.cca3 === cca3));
        const countriesToModify = [...countries];
        countriesToModify[countryToModifyIndex].wantToVisit = !countriesToModify[countryToModifyIndex].wantToVisit;
        setCountries(countriesToModify);
   }
   const onVisitedClick = (cca3) => {
    const countryToModifyIndex = countries.indexOf(countries.find(country => country.cca3 ===cca3));
    const countriesToModify = [...countries];
    countriesToModify[countryToModifyIndex].visited = !countriesToModify[countryToModifyIndex].visited;
    setCountries(countriesToModify);
}

//    const updateWantToVisit = (id) => {
//         const countryToUpdate = countries.find(country => country.id === id);
//         countryToUpdate.wantToVisit = true;
//    }

//    const updateVisited = (id) => {
//     const countryToUpdate = countries.find(country => country.id === id);
//     countryToUpdate.visited = true;
// }
   
   return (
       countries.length > 0 ?
       <div>

            <h1>Bucket List!</h1>
           <div id="mapAndCountry">
               <MyMap className="MyMap" cardAppears={cardAppears} countries={countries}/>

                    {country ? <Country id="block" country={country} onWantToVisitClick={onWantToVisitClick} onVisitedClick={onVisitedClick}/> : <p className="placeHolder">Please click country on map!</p>}
           
                </div>
           
           <CountryList countries={countries} onWantToVisitClick={onWantToVisitClick} onVisitedClick={onVisitedClick}/>
       </div>
       :
       <p>loading...</p>
   )

}

export default CountryContainer;