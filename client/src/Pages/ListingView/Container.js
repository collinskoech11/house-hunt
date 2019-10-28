import React from 'react'
import PropTypes from 'prop-types'

// Components
import NavSearch from './SearchBar/Container'
import Slideshow from './Slideshow'
import Features from './Features'
import Commute from './Commute'
import Neighborhood from './Neighborhood'
import ElecAnalytics from './ElectricityAnalytics'


function Container(props) {
    let listing = props.listing
    let location = listing.location || "Langata"
    let gallery = [listing.thumb]
    return (
        <div style={containerStyle}>
            <NavSearch />
            <Slideshow 
                gallery={gallery}
            />
            <br/>
            <Features 
                listing={listing}
            />
            <br/>
            {/* <Commute     
            /> */}
            <Neighborhood
                title="Neighborhood"
                shops={listing.places[0].shops}
            />
            {/* <Neighborhood
                title="Commute"
                shops={[]}
            /> */}
            
            <ElecAnalytics 
                location={location}
            />
        </div>
    )
}

const containerStyle = {
    margin:"auto 0",
    textAlign:"center",
}



Container.defaultProps = {
    listing:{
            "_id": "5d92f3d1e29bfc0d40f07846",
            "title": "executive 2 bedroom apartment all ensuite to let",
            "price": 45000,
            "thumb": "https://media.jumiadeals.com/ke_live/ddf3008e525d868353183bc.desktop-gallery-large.jpg",
            "location": "langata",
            "url": "https://deals.jumia.co.ke/executive-2-bedroom-apartment-all-ensuite-to-let-pid4705907",
            "origin": "jumia",
            "beds": "2",
            "baths": "0",
            "places": [
                {
                    "shops": [
                        {
                            "name": "Galleria Mall",
                            "rating": 4.3,
                            "opened": false,
                            "coords": {
                                "lat": -1.3436978,
                                "lng": 36.7656044
                            }
                        },
                        {
                            "name": "Hardy Post Shopping Mall",
                            "rating": 4.2,
                            "opened": true,
                            "coords": {
                                "lat": -1.364976,
                                "lng": 36.7427638
                            }
                        },
                        {
                            "name": "The Waterfront Karen",
                            "rating": 4.1,
                            "opened": true,
                            "coords": {
                                "lat": -1.3297903,
                                "lng": 36.7146885
                            }
                        },
                        {
                            "name": "Langata Mall",
                            "rating": 3.7,
                            "opened": false,
                            "coords": {
                                "lat": -1.3242122,
                                "lng": 36.7830446
                            }
                        },
                        {
                            "name": "The Hub Karen",
                            "rating": 4.6,
                            "opened": true,
                            "coords": {
                                "lat": -1.3203671,
                                "lng": 36.704134
                            }
                        }
                    ]
                }
            ]
        }, 
}

export default Container

