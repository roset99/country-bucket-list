const Country = ({country}) => {

    return (
        <div className="countryCard">
            <h2>Name: {country.name.common}</h2>
            <h2>Capital: {country.capital}</h2>
            {/* <h2>Currency: {country.currencies}</h2> */}
            <img src={country.flags.png} alt={country.name}/>
        </div>
    )

}

export default Country;