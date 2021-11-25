import Country from './Country';

const CountryList = ({countries, onWantToVisitClick, onVisitedClick}) => {

    const CountryComponents = countries.map(country => {
        return(
            <Country country={country} onWantToVisitClick={onWantToVisitClick} onVisitedClick={onVisitedClick}/>
        )
    })

    return(
        <div className="country-list">
            {CountryComponents}
        </div>
    )

}

export default CountryList;