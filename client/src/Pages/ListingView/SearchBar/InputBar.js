import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

function InputBar(props) {
    return (
        <div style={containerStyle}>
            <div style={iconGroup}>
                <NavLink to="/search">
                    <i class="fas fa-chevron-left"></i>
                </NavLink>
            </div>
            <div style={locationStyle}>
                <input style={inputStyle} type="text" name="location" placeholder="Location" value={props.location} onChange={props.updateSearchParams}/>
            </div>
            <div style={inputGroupStyle}>
                <input style={inputStyle} type="number" name="beds" placeholder="Beds" value={props.beds} onChange={props.updateSearchParams}/>
            </div>
            <div style={locationStyle}>
                <input style={inputStyle} type="number" name="budget" placeholder="Budget" value={props.budget} onChange={props.updateSearchParams}/>
            </div>
            <div style={iconGroup}>
                <NavLink to="/search">
                    <i class="fas fa-search"></i>
                </NavLink>
            </div>
        </div>
    )
}

const containerStyle = {
    textAlign:"center",
    padding:"10px 5px",
    background:"#D3424E",
}

const inputGroupStyle = {
    textAlign:"center",
    width:"15%",
    margin:"5px",
    display:"inline-block"
}

const inputStyle = {
    textAlign:"center",
    fontSize:"1em",
    padding:"0px",
    marding:"5px",
    width:"100%",
    textTransform:"capitalize",
}

const locationStyle = {
    ...inputGroupStyle,
    width:"25%",
}

const iconGroup = {
    ...inputGroupStyle,
    color:"#fff",
    width:"10%",
    fontSize:"1.2em",
    marginRight:"2.5px"
    
}

InputBar.propTypes = {

}

export default InputBar

