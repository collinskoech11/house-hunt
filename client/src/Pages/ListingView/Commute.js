/*global google*/
import React, { Component } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";

class Map extends Component {
  state = {
    directions: null
  };

  componentDidMount() {
    const directionsService = new window.google.maps.DirectionsService();

    const origin = this.props.listingCoords;
    const destination = this.props.reffPoint;
    console.log(origin)
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
          console.error(`sucess fetching directions ${result}`);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }

  render() {
    const GoogleMapExample = withGoogleMap(props => (
        <React.Fragment>
        <GoogleMap
            defaultCenter={this.props.listingCoords}
            defaultZoom={13}
        >
            <DirectionsRenderer
            directions={this.state.directions}
            />
        </GoogleMap>
        {this.state.directions ?
            <React.Fragment>
                <p>{this.state.directions.routes[0].legs[0].distance.text}</p>
                <p>{this.state.directions.routes[0].legs[0].duration.text}</p>
            </React.Fragment>
        :
            <p>Calculating commute...</p>
        }
      </React.Fragment>
    ));

    return (
      <div>
        <h1 style={titleStyle}>Commute</h1>
        <GoogleMapExample
          containerElement={<div style={mapContainerStyle} />}
          mapElement={<div style={{ height: "400px" }} />}
        />
      </div>
    );
  }
}


const mapContainerStyle = {
    width:"90%",
    maxWidth:"400px",
    height:"500px",
    display:"inline-block",
    borderRadius:"10px",
    padding:"10px",
    boxShadow:"0px 5px 5px rgba(0,0,0,0.3)",
}


const titleStyle = {
    fontSize:"1em"
}


export default Map;

