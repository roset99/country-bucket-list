import { useState } from 'react';
import './Country.css';

const Country = ({ country }) => {

    const [wantToVisit, setVisit] = useState(false);
    const [visited, setVisited] = useState(false);

    const buttonClassNameLogic = () => {
        if (wantToVisit) {
            if (visited) {
                return "countryCard-visited"
            } else {
                return "countryCard-wantToVisit"
            }
        } else if (visited) {
            return "countryCard-visited"
        } else {
            return "countryCard"
        }
    }
    const updateWantToVisit = () => {
        setVisit(!wantToVisit);
    }

    const updateVisited = () => {
        setVisited(!visited);
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