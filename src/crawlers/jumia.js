const Axios = require('axios');
const cheerio = require("cheerio");

const jumia = async(query,town,pages) =>{
  let results = [];
  for(let pageCount = 0; pageCount < pages;pageCount++){
    const JUMIA_URL = `https://deals.jumia.co.ke/${town}/real-estate?search-keyword=${query}&page=${pageCount}`;
    let dom;
    

    try {
      dom = await Axios.get(JUMIA_URL);
    } catch (err) {
      console.log(err);
      return;
    }
    let $ = cheerio.load(dom.data);

    $('div#tab1').map((i,el)=>{
      let data = $(el).find('div#search-results').attr('data-catalog-event');
      data = JSON.parse(data);
      results.push(...data.impressions);
    });
  }

  return results;
}

module.exports = jumia;
