import React, {Component} from 'react';
import {render} from 'react-dom';
import MapGL, {Marker, Popup, NavigationControl } from 'react-map-gl';
import InfoContent from './InfoContent'
import Pin from './Pin'
import ControlPanel from './ControlPanel';
import './Map.css';
//import 'mapbox-gl/dist/mapbox-gl.css';
const TOKEN = 'pk.eyJ1IjoicGFyaXNueSIsImEiOiJjazBsY2o2NWMwYzB4M2RwbXA2djMxajhvIn0.aZA45UapwyeCfUBOA-N9Vw';

const navStyle = {
  position: 'absolute',
  top: 36,
  left: 0,
  padding: '10px'
};


class Map extends Component {
  constructor(props){
    super(props)

  this.state = {
    users: this.props.users,
    viewport: {
      latitude: 40.753345,
      longitude: -73.9841719,
      showPopup: true,
      zoom:14,
      minZoom: 10,
      maxZoom: 20,
      bearing: 0,
      pitch: 0
    },

    popupInfo: null
  };
}

updateViewport=(viewport)=>{
  this.setState({viewport})
}
//

// _renderUserMarker = (user, index) => {
//   return (
//     <Marker key={`${user.username}`} longitude={user.long} latitude={user.lat}>
//       <UserPin size={20} onClick={() => this.setState({popupInfo: users})} />
//     </Marker>
//   );
// };

_renderPopup() {
    const {popupInfo} = this.state;
    console.log('renderPopup props', this.props)
    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.long}
          latitude={popupInfo.lat}
          closeOnClick={false}
          onClose={() => this.setState({popupInfo: null})}
        >
          <InfoContent info={popupInfo} />
        </Popup>
      )
    );
  }

  render() {
    console.log("props users from Map.js render", this.props.users)
    const {viewport} = this.state;
    return (
      <div >
          <MapGL
            {...this.state.viewport}
            width= "100%"
            height= "50vh"
            mapStyle="mapbox://styles/parisny/ck0lefyty5kux1cte8t6fukb6"
            mapboxApiAccessToken={TOKEN}
            onClick = {this.props.mapClick}
            onViewportChange={viewport => this.setState({viewport})}
            >

            {this.props.users.map(user=> (
               <Marker
                 key = {user.email}
                 latitude = {user.lat}
                 longitude = {user.long}
                 offsetLeft={-20}
                 offsetTop={-10}
                >
                <div> {user.username} </div>
                <Pin size={24} onClick={() =>this.setState({popupInfo:user})} />
              </Marker>

            ))}

          {this._renderPopup()}

        <div style={{position: 'absolute', right: 0}}>
          <NavigationControl />
        </div>


        <ControlPanel
          containerComponent={this.props.containerComponent} />

        </MapGL >
      </div>
    );
  }
}

export default Map;

  //
  // _renderCityMarker = (artist, index) => {
  //     return (
  //       <Marker key={`marker-${index}`} longitude={artist.long} latitude={artist.lat}>
  //         <CityPin size={20} onClick={() => this.setState({popupInfo: artist})} />
  //       </Marker>
  //     );
  //   };

//onViewportChange={this._updateViewport}

//        <div className="nav" style={navStyle}>
        //   <NavigationControl />
        // </div>

//
//   {this.props.users.map(user=> (
//
//      <Marker
//        key = {user.username}
//        latitude = {user.lat}
//        longitude = {user.long}
//        offsetLeft={-20}
//        offsetTop={-10}
//       >
//       <div> {user.username} </div>
//       <Pin size={12} onClick={() =>this.setState({popupInfo:user})} />
//     </Marker>
//
// ))}
//
// <MapGL
//   {...this.state.viewport}
//   mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX_TOKEN}
//   mapStyle = 'mapbox://styles/parisny/ck0lefyty5kux1cte8t6fukb6'
//   onViewportChange = {(viewport) => this.updateViewport(viewport)}
//   onClick = {this.props.mapClick}
// >
