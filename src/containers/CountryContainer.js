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