import React, {Component} from 'react';
import {render} from 'react-dom';
import MapGL, {Marker, Popup, NavigationControl } from 'react-map-gl';
//import InfoContent from './InfoContent'
import InfoContent from './Info'
import Pin from './Pin'
import UserPin from './UserPin'
import ControlPanel from './ControlPanel';
import '../App.css';
//import Filter from './Filter'
//import 'mapbox-gl/dist/mapbox-gl.css';
const TOKEN = 'pk.eyJ1IjoicGFyaXNueSIsImEiOiJjazBsY2o2NWMwYzB4M2RwbXA2djMxajhvIn0.aZA45UapwyeCfUBOA-N9Vw';

const navStyle = {
  position: 'absolute',
  top: 36,
  left: 0,
  padding: '10px'
};

// add usersOfDay: this.props.usersOfDay    to this.state = {
//

class Map extends Component {
  constructor(props){
    super(props)

  this.state = {
    users: this.props.users,
    usersOfDay: this.props.usersOfDay,
    currentUser: this.props.currentUser,
    viewport: {
      latitude: this.props.currentUser ? this.props.currentUser.lat : 40.753345,
      longitude: this.props.currentUser ? this.props.currentUser.long : -73.9841719,
      zoom:12,
      minZoom: 10,
      maxZoom: 20,
      bearing: 0,
      pitch: 0
    },
    popupInfo: null
  };
}


componentDidUpdate(prevProps) {
  if (prevProps.currentUser !== this.props.currentUser ) {
    this.setState(prevState => ({
      viewport: {
        ...prevState.viewport,
        latitude: this.props.currentUser.lat,
        longitude: this.props.currentUser.long,
      }
    }))
  }
  if (this.props.users.length !== 0 && this.props.currentUser !== null) {
    if (this.props.form !== prevProps.form){
      this.mapMarkers();
    }
  }
  if ((this.props.users.length !== prevProps.users.length) && (this.props.currentUser !== prevProps.currentUser)) {
      this.mapMarkers();
  }
}

updateViewport=(viewport)=>{
  this.setState({viewport})
}

_renderPopup() {
    const {popupInfo} = this.state;
    console.log('renderPopup props', this.props)
    return (
      popupInfo && (
        <Popup
          tipSize={10}
          anchor="top"
          longitude={popupInfo.long}
          latitude={popupInfo.lat}
          closeOnClick={true}
          closeOnDoubleClick={false}
          onClose={() => this.setState({popupInfo: null})}
        >
          <InfoContent info={popupInfo} />
        </Popup>
      )
    );
  }

  // _renderUserMarker = (user, index) => {
  //   return (
  //     <Marker key={`${user.username}`} longitude={user.long} latitude={user.lat}>
  //       <UserPin size={20} onClick={() => this.setState({popupInfo: users})} />
  //     </Marker>
  //   );
  // };
  // componentDidMount() {
  //
  //   this.mapMarkers();
  // }

//below: add const usersOfDayMarkers = this.props.usersOfDay.map(usersOfDay =>(
// <Marker
//    key = {usersOfDay.email}
//    latitude = {usersOfDay.lat}
//    longitude = {usersOfDay.long}
//    offsetLeft={-20}
//    offsetTop={-10}
//   >
//   <div> {usersOfDay.username} </div>
//   <Pin
//   onClick={() =>this.setState({popupInfo:usersOfDay})} />
// </Marker>
//))
//this.setState({
//  pins: [userMarkers, currentUserMarker, XXXXXX]
//})


  mapMarkers = () => {
    const userMarkers = this.props.users.filter(user=> user.id !== this.props.currentUser.id && user.lat && user.long).map(user=> (
       <Marker
         key = {user.email}
         latitude = {user.lat}
         longitude = {user.long}
         offsetLeft={-20}
         offsetTop={-10}
        >
        <div> {user.username} </div>
        <Pin
        onClick={() =>this.setState({popupInfo:user})} />
      </Marker>

    ))
    const currentUserMarker = this.props.users.filter(user=> user.id === this.props.currentUser.id).map(user=> (
       <Marker
         key = {user.email}
         latitude = {this.props.form.lat || user.lat}
         longitude = {this.props.form.long || user.long}
         offsetLeft={-20}
         offsetTop={-10}
        >
        <div> {user.username} </div>
        <UserPin
        onClick={() =>this.setState({popupInfo:user})} />
      </Marker>

    ))
    this.setState({
      pins: [userMarkers, currentUserMarker]
    })
  }

  render() {
    const {viewport} = this.state;
    const users = this.props.users;
    const currentUser= this.props.currentUser;

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
            {this.props.currentUser && this.state.pins}
            {this._renderPopup()}
        <div style={{position: 'absolute',right:0, bottom: 20, padding: "10px"}}>
          <NavigationControl
          />
        </div>

        </MapGL >
      </div>
    );
  }
}

export default Map;


// componentDidUpdate(prevProps) {
//   if (prevProps.currentUser !== this.props.currentUser ) {
//     this.setState(prevState => ({
//       viewport: {
//         ...prevState.viewport,
//         latitude: this.props.currentUser.lat,
//         longitude: this.props.currentUser.long,
//       }
//     }))
//   }
//   if (this.props.users.length !== 0 && this.props.currentUser !== null) {
//     if (this.props.form !== prevProps.form){
//       this.mapMarkers();
//     }
//   }
//   if ((this.props.users.length !== prevProps.users.length) && (this.props.currentUser !== prevProps.currentUser)) {
//       this.mapMarkers();
//   }
// }

  //<ControlPanel
  //button={this.props.containerComponent} />

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


           //
           //  <Marker
           //    key = {this.props.currentUser.id}
           //    latitude = {this.props.currentUser.lat}
           //    longitude = {this.props.currentUser.long}
           //    offsetLeft={-20}
           //    offsetTop={-10}
           //   >
           //   <div> {this.props.currentUser.username} </div>
           //   <Pin size={24} fill='#d00' onClick={() =>this.setState({popupInfo:this.props.currentUser})} />
           // </Marker>

           //
           // {this.props.users.filter(user=> user.id !== this.props.currentUser.id).map(user=> (
           //    <Marker
           //      key = {user.email}
           //      latitude = {user.lat}
           //      longitude = {user.long}
           //      offsetLeft={-20}
           //      offsetTop={-10}
           //     >
           //     <div> {user.username} </div>
           //     <Pin fill='#ffbf00' size={24} onClick={() =>this.setState({popupInfo:user})} />
           //   </Marker>
           //
           // ))}
           //
           // {this.props.users.filter(user=> user.id === this.props.currentUser.id).map(user=> (
           //    <Marker
           //      key = {user.email}
           //      latitude = {user.lat}
           //      longitude = {user.long}
           //      offsetLeft={-20}
           //      offsetTop={-10}
           //     >
           //     <div> {user.username} </div>
           //     <Pin fill='#d00' size={24}
           //     onClick={() =>this.setState({popupInfo:user})} />
           //   </Marker>
           //
           // ))}
