import React, { Component } from 'react'
import PropTypes from 'prop-types'

class InterestBar extends Component {

    state = {

    }

    handleInputChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        })
        this.props.updateSearchParams(e)
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.listingSearch()
    }

    render(){
        return (
            <div style={containerStyle}>
                <p style={titleStyle}>
                    Areas Of interest
                    <i style={infoIconStyle} className="far fa-question-circle icon-hint" data-toggle="modal" data-target="#exampleModal"></i>
                </p>
                <div style={inputGrpContainer}>
                    <div style={inputGroupStyle}>
                        <input type="checkbox" name="shopping" checked={this.state.shopping} onChange={this.handleInputChange}/>
                        <label style={labelStyle}>Shopping Centers</label>
                    </div>
                    <div style={inputGroupStyle}>
                        <input type="checkbox" name="gyms" checked={this.state.gyms} onChange={this.handleInputChange} />
                        <label style={labelStyle}>Gyms</label>
                    </div>
                    <div style={inputGroupStyle}>
                        <input type="checkbox"name="medical" checked={this.state.medical} onChange={this.handleInputChange} />
                        <label style={labelStyle}>Medical Centers</label>
                    </div>
                    <div style={inputGroupStyle}>
                        <input type="checkbox" name="restaurants" checked={this.state.restaurants}onChange={this.handleInputChange} />
                        <label style={labelStyle}>Restaurants/Bars</label>
                    </div>
                </div>
                <button style={buttonStyle} onClick={this.handleSubmit}>Update Results</button>
            </div>
    )
    }
}

const containerStyle = {
    width:"97%",
    margin:"5px auto",
    padding:"5px"
}

const titleStyle = {
    textAlign:"center",
    fontSize:"0.9em",
    color:"#333",
    width:"100%",
    display:"inline-block",
    margin:"5px auto",
}

const inputGrpContainer = {
    width:"90%",
    maxwidth:"300px",
    margin:"10px auto",
}

const inputGroupStyle = {
    display:"inline-block",
    width:"50%",
    maxWidth:"200px"
}

const labelStyle = {
    fontSize:"0.9em",
    marginLeft:"8px",
    display:"inline-block",
}


const buttonStyle = {
    display:"block",
    padding:"5px",
    margin:"5px auto",
    border:"none",
    width:"50%",
    maxWidth:"300px",
    background:"#D3424E",
    color:"#fff"
}

const infoIconStyle = {
    color:"grey",
    marginLeft:"10px",
}

InterestBar.propTypes = {

}

export default InterestBar

