import { useState } from 'react';
import './Country.css';

const Country = ({ country, onWantToVisitClick, onVisitedClick }) => {

    // const [wantToVisit, setVisit] = useState();
    // const [visited, setVisited] = useState(false);

    const buttonClassNameLogic = () => {
        if (country.wantToVisit) {
            if (country.visited) {
                return "countryCard-visited"
            } else {
                return "countryCard-wantToVisit"
            }
        } else if (country.visited) {
            return "countryCard-visited"
        } else {
            return "countryCard"
        }
    }
    const updateWantToVisit = () => {
        onWantToVisitClick(country.cca3);
    }

    const updateVisited = () => {
        onVisitedClick(country.cca3);
    }

    return (
        <div className={buttonClassNameLogic()}>


            <h2 className="name">Name: {country.name.common}</h2>
            <h2 className="capital">Capital: {country.capital}</h2>
            {/* <h2>Currency: {country.currencies}</h2> */}
            <img src={country.flags.png} alt={country.name} className="flag"/>
            <hr/>
            <div id="buttons">
                <button onClick={() => updateWantToVisit()}>Want to visit!</button>
                <button onClick={() => updateVisited()}>Visited!</button>
            </div>

            
        </div>
    )

}

export default Country;