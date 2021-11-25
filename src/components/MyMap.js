// import React, { Component } from 'react'
import { useState } from 'react';
import mapData from '../data/countries.json'
import { MapContainer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MyMap.css';

const MyMap = ({cardAppears, countries}) =>  {
    //This isn't working but should let you choose the colour of the countries when you click on it
    const [color, setColor] = useState("#00ff59");
    

    const printMessageToConsole = (event) => {
        console.log("clicked")
    }

    const changeCountryColor = (event) => {
        // event.target.setStyle({
        //     color: "red",
        //     fillColor: color,
        //     fillOpacity: 1,
        // })
        cardAppears(event.target.feature.properties.ISO_A3);
        
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
        const countryToModifyIndex = countries.indexOf(countries.find(country => country.cca3 == countryISO));
        console.log(countryName)
        console.log(countryToModifyIndex);
        if (countryToModifyIndex==-1) {

        } else if (countries[countryToModifyIndex].visited) {
            layer.setStyle({
                fillColor: "lightgreen",
            })
        } else if (countries[countryToModifyIndex].wantToVisit) {
            layer.setStyle({
                fillColor: "pink",
            })
        }

        layer.on({
            click: changeCountryColor,
            // click: cardAppears(countryISO),
            // mouseover: this.changeCountryColor
        })
    }
    
    const countryStyle = () => {
        return{
            fillColor: color,
            color: "black",
            weight: 2,
        }
            
       
    }

    const mapStyle = {
        height: "80vh",
        width: "80%",
    }

    const colorChange = (event) => {
        setColor(event.target.value);
    }

    return (
        <div>
            <h1>Bucket List!</h1>
            <MapContainer style={mapStyle} zoom={2} center={[20,21]}>
                <GeoJSON style={countryStyle} data={mapData.features} onEachFeature={onEachCountry}/>
            </MapContainer>
            <input type="color" value={color} onChange={colorChange}/>
        </div>
        
    )
}

export default MyMap;