import Country from './Country';

const CountryList = ({countries}) => {

    const CountryComponents = countries.map(country => {
        return(
            <Country country={country}/>
        )
    })

    return(
        <div className="country-list">
            {CountryComponents}
        </div>
    )

}

export default CountryList;