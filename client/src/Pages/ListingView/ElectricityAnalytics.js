import React,{ Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import Axios from 'axios'
import { analyticsBaseAPI } from '../../config'

// Components
import Loading from './Loading'

class ElectricityAnalyrics extends Component{

    state = {
        data:{},
        location:this.props.location,
        loading:true
    }

    async componentDidMount(){
        let res = await Axios.get(`${analyticsBaseAPI}/tweets/analytics`);
        let activeRes = await Axios.get(`${analyticsBaseAPI}/tweets/analytics/${this.state.location}`)
        console.log(activeRes.data)
        let areas = res.data.areas
        let labels = areas.map((k,v)=>{
            return Object.keys(k)[0]
        })
        let hits = areas.map((k,v)=>{
            return Object.values(k)[0]
        })
        labels = labels.splice(0,5)
        hits = hits.splice(0,5)
        console.log(labels)
        console.log(hits)
        const data = {
            labels: [
                this.state.location,
                ...labels
            ],

            datasets: [{
                data: hits,
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }]
        };
        this.setState({
            data,
            loading:!this.state.loading
        })
    }

    render(){
        return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Power Outage Analysis</h1>
            {this.state.loading ? 
                <Loading/>
            :
                <React.Fragment>  
                    <Doughnut data={this.state.data} />
                    <p style={infoStyle}>Number of power outage reports via Twitter from 1/1/19 to 26/10/19</p>
                </React.Fragment>  
            }
        </div>
        );
    }
}

const containerStyle = {
    margin:"20px",
    width:"80%",
    maxWidth:"400px",
    minHeight:"241px",
    display:"inline-block",
    verticalAlign:"top",
    padding:"5px",
    borderRadius:"5px",
    boxShadow:"0px 5px 5px rgba(0,0,0,0.3)",
}

const titleStyle = {
    fontSize:"1.2em"
}

const infoStyle = {
    fontSize:"0.7em",
    margin:"10px auto",
    color:"rgba(0,0,0,0.5)"
}

export default ElectricityAnalyrics