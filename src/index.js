const census = require("citysdk");

//get data on population in manufacturing using the comparison profile 
census({
    "vintage" : "2017",   // required
    "geoHierarchy" : {    // required
      "state" : "*"      // <- syntax = "<descendant>" : "*"
    },
    "sourcePath" : ["acs", "acs1","cprofile"],
    "values" : ["CP03_2016_035E","CP03_2017_035E"] 
  }, 
  (err, res) => console.log(res)
)