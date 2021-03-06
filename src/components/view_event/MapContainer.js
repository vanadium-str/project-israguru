import React, {useContext, useEffect, useState} from 'react';
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api';
import {excursionData} from "../../json/excursionData";
import {MAP_KEY} from "../../utils/constants";
const containerStyle = {
    width: '100%',
    height: '250px'
};
const MapContainer = ({id}) => {
    const onLoad = marker => {
        console.log('marker: ', marker)
    };
    return (
        <LoadScript
            googleMapsApiKey={MAP_KEY}
        >
            <GoogleMap
                streetView={''}
                mapContainerStyle={containerStyle}
                center={{
                    lat: excursionData[id].latitude,
                    lng: excursionData[id].longitude
                }}
                zoom={15}
            >
                <Marker
                    onLoad={onLoad}
                    position={
                        {lat: excursionData[id].latitude,
                        lng: excursionData[id].longitude
                    }}
                />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapContainer;
