
# CafeCoven  

## an app to help women cowork and network!

You are a freelancer, a writer, or just a coffee lover. By choice or necessity, you frequently do your work in cafes and other public places, but there are drawbacks: you have to constantly keep an eye on your belongings, and sometimes you struggle to find and keep your focus. How about finding an accountability partner? Imagine combining the functionality of Meetup with the ease of Yelp -- sign up, click on your location and availability, and see who else is looking for a coworking partner! 

### Project Links
- github: [https://github.com/mfhan/cafecoven](https://github.com/mfhan/cafecoven)
- [deployment]()

## Wireframes

###  ERD:  
<img src="https://docs.google.com/drawings/d/e/2PACX-1vTqIfVkO0_zoa4RCK6lUvvAeBcZ7-DNiPvSBCDwtK7h_CmYCUJV4b0x4sTgvoT9_4yI6PGSRp0BPl-v/pub?w=960&amp;h=720">

### App Home:  
 <img src="https://docs.google.com/drawings/d/e/2PACX-1vSKruZ0yIwUlwq-N6ehmdvsPyDMxYUsDaHLUZzzDtzQmU09BpqWUa1Z1RK3YUMk2o2PO3_MV2TU01TO/pub?w=2193&amp;h=1072">

### Log-In/Register Page:   

<img src="https://docs.google.com/drawings/d/e/2PACX-1vRN46Fym2QuLqUSDUl5KcGAjjPZ2HP7uil3a-6Zxu5TLPwqqyKvUwXRx_la-mL8ijjMtgNtjQQHSvNo/pub?w=2193&amp;h=1072">

### Post-Log-In View  
<img src="https://docs.google.com/drawings/d/e/2PACX-1vS4IUNfx6VdjW4nViof93nUePWAuSLVaJoxAD6gYfjd6uIVc2USXoMqLLFMsE9zZb8CCb1lrr7hrKeD/pub?w=2193&amp;h=1072">

## User Stories  

-- Amy is a freelance book reviewer who does her best work in public places: Whole Foods cafeteria, independent coffee shops, hotel lobbies. But she dreads the moment she'll have to ask a stranger to watch her computer while she's in the bathroom. She would love to have another woman help her keep her territory!

-- Liz works remotely and would like to connect with other women in the same industry. She's been going to Meetups but those formats are more conducive to tech talks and company pitches. She would like to network on a more individual basis.

-- Kate is a novelist who likes the idea of writing in a coffee shop -- but more often than not she ends up reading BuzzFeed for 4 hours straight! She needs an accountability partner who will keep her productive.


## API

-- Mapbox API + Uber's ReactMapGL public repo for functionalities

-- Code sample:
```js
<ReactMapGL
            {...this.state.viewport}
            mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle = 'mapbox://styles/parisny/ck0lefyty5kux1cte8t6fukb6'
            onViewportChange = {(viewport) => this.updateViewport(viewport)}
            onClick = {this.props.mapClick}
          >
            ///MAP will pass other users' locations with a pin, a marker, a radius circle, and a pop-up infowindow
        </ ReactMapGL>
```


### MVP/PostMVP - 5min

#### MVP:
-- Allow user to sign up and click on her location
-- Render all users' location data on map
-- Allow user to change her location
--  Allow user to see other users' details on their pop-up infowindow

#### PostMVP:

-- Allow user to select a DAY and TIME SLOT for her availability
-- Allow user to SELECT potential coworking matches via filter  
--  Use YELP or FOURSQUARE APIs to render cafes on map


## React Component Hierarchy



## Components


Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component | Description |
| --- | :---: |  
| App | This will make the initial data pull and include React Router|
| PersonalDataForm | Will allow user to create/update her account and click on her desired coworking locations |
| MatchList (FILTER)| Will render possible coworking matches in list form |  
| Map | Will render a populated map|  
| Header | This will render the header which houses the log-in functionality |
| Footer | This will render the footer |

## Time Frame  

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Working with REACT MAP GL API | H | 8hrs| -- | -- |
| Adding radius logic to MAP  | HH | 4hrs| -- | -- |
| Working with date filter logic  | H | 4hrs| -- | -- |
| Header with log-in | M | 6hrs | --   | --  | -- |
| Home page styling | H  | 6hrs | --   | --  | -- |
| Total | H | -- | -- | -- |

## Additional Libraries

 -- JWT for auth
 -- React Hooks
 -- Rails
 -- PostgresQL
 -- Calendly API
 --(possibly) Yelp or Foursquare API (I already have api keys)

## Code Snippet

TBD

## Issues and Resolutions
 TBD
