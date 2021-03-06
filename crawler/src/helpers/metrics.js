const Axios = require("axios");

const getMetrics = async(listing,refference)=>{
    const API_KEY = process.env.API_KEY;
    
    let url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${refference},kenya&destinations=${listing},kenya&key=${API_KEY}`;

    let res;
    try {
      res = await Axios.get(url);
      let metrics = {
        distance:res.data.rows[0].elements[0].distance.text,
        duration:res.data.rows[0].elements[0].duration.text,
      }
      return metrics;
    } catch (err) {
      console.log(err)
      return {
        distance:'',
        duration:''
      }
    } 
}

module.exports = getMetrics;