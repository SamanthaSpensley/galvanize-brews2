var knex = require('./database/knex')

function getBeers(){
    // Get beers and brewery data
    // Alias the beer name to beer_name and the brewery name to brewery_name
    return knex('beers').select('beers.brewery AS brewery_name', 'beers.name AS beer_name', 'beers.abv').innerJoin('breweries', 'beers.brewery', 'breweries.name')
};

module.exports = {
    getBeers: getBeers,
    getBreweries: function(){
        // Get all breweries
        return knex('breweries')
    },
    getBrewery: function(id){
        // Get one brewery that matches the id
        return knex('breweies').where('id', id)
    },
    getBeersByBrewery: function(brewery_id){
        // Get beers and brewery data for a single brewery
        // Alias the beer name to beer_name and the brewery name to brewery_name
        return getBeers().where('breweries.id', brewery_id)
    }
};
