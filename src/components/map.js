import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { ReactLeafletSearch } from 'react-leaflet-search';
import "react-leaflet-search/lib/react-leaflet-search.css";

import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});



class MapLeaflet extends Component {

    state = {
        lat: 60.192059, 
        lng: 24.945831,
        zoom: 13,
    };

    myIcon = L.icon({
        iconUrl: 'marker-icon.png',
        iconRetinaUrl: 'marker-icon-2x.png',
        shadowUrl: 'marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
    });

    searchComponent = props => (
        <ReactLeafletSearch position="bottomleft"  provider="OpenStreetMap"/>
    )

    render() {
        const position = [this.state.lat, this.state.lng];
        //const wrappedZoomIndicator = withLeaflet(ReactLeafletZoomIndicator);
        return (
            <Map center={position} zoom={this.state.zoom} style={{
                marginLeft: this.props.expanded ? 240 : 64,
                padding: '15px 25px 0 20px',
                position: 'absolute',
                height: '97%',
                width: this.props.expanded?'77%':'91%'
            }}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        <span>A pretty CSS3 popup. <br /> Easily customizable.</span>
                    </Popup>
                </Marker>
            </Map>
        );
    };

}

export default MapLeaflet;