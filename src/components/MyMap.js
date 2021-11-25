// import React, { Component } from 'react'
import { useState } from 'react';
import mapData from '../data/countries.json'
import { MapContainer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MyMap.css';

const MyMap = ({cardAppears, countries}) =>  {
    //This isn't working but should let you choose the colour of the countries when you click on it
    const [color, setColor] = useState("#8000ff")
    const fillPinkOption = { fillColor: "pink" };
    const fillGreenOption = { fillColor: "green" };
    const fillBlackOption = { fillColor: "#222", color: "white", weight: 1.5, };

    const printMessageToConsole = (event) => {
        console.log("clicked")
    }

    const cardAppearsClick = (event) => {
        // event.target.setStyle({
        //     color: "red",
        //     fillColor: color,
        //     fillOpacity: 1,
        // })
        cardAppears(event.target.feature.properties.ISO_A3);
        
    }
    const changeCountryColor =(event) => {
        event.target.setStyle({
            color: "white",
            fillColor: color,
            fillOpacity: 0.3,
        })
    }
    const removeColor = (event) => {
        event.target.setStyle(fillBlackOption)
    }

    // const changeCountryISO = (countryISO) => {
    //     setCountryISO(countryISO);
    //     console.log(countryISO);
    // }

    const onEachCountry = (country, layer) => {
        const countryName = country.properties.ADMIN;
        const countryISO = country.properties.ISO_A3;
        // console.log(country);
        // console.log(countryISO)
        layer.bindPopup(countryName);
        countryStyle(country);

        layer.on({
            click: cardAppearsClick,
            // click: cardAppears(countryISO),
            mouseover: changeCountryColor
        })
        // layer.off({
        //     mouseover: removeColor,
        // })
    }
    
    const countryStyle = (country) => {

        const countryISO = country.properties.ISO_A3;
        const countryToModifyIndex = countries.indexOf(countries.find(country => country.cca3 === countryISO));
        if (countryToModifyIndex==-1) {
            return fillBlackOption;

        } else if (countries[countryToModifyIndex].visited) {
            console.log(2);
            return fillGreenOption;
        } else if (countries[countryToModifyIndex].wantToVisit) {
            console.log(3);
            return fillPinkOption;
        } else{
            return fillBlackOption;

        }
        
       
    }

    const mapStyle = {
        height: "80vh",
        width: "100%",
    }

    const colorChange = (event) => {
        setColor(event.target.value);
    }

    return (
        <div>
            <div className="mapBorder">
                <MapContainer style={mapStyle} zoom={2} center={[20,21]}>
                    <GeoJSON style={fillBlackOption} data={mapData.features} onEachFeature={onEachCountry}/>
                </MapContainer>
            </div>
            
            <input type="color" value={color} onChange={colorChange}/>
        </div>
        
    )
}

export default MyMap;