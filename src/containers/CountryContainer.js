import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";

const CountryContainer = () => {

   const [countries, setCountries] = useState([]);

   const getCountriesData = () => {
       fetch('https://restcountries.com/v3.1/all')
       .then(response => response.json())
       .then(data => setCountries(data));
   }

   useEffect(() => {
       getCountriesData();
   }, []);

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
           <CountryList countries={countries}/>
       </div>
       :
       <p>loading...</p>
   )

}

export default CountryContainer;