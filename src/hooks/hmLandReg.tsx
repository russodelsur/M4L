// prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
// prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
// prefix owl: <http://www.w3.org/2002/07/owl#>
// prefix xsd: <http://www.w3.org/2001/XMLSchema#>
// prefix sr: <http://data.ordnancesurvey.co.uk/ontology/spatialrelations/>
// prefix ukhpi: <http://landregistry.data.gov.uk/def/ukhpi/>
// prefix lrppi: <http://landregistry.data.gov.uk/def/ppi/>
// prefix skos: <http://www.w3.org/2004/02/skos/core#>
// prefix lrcommon: <http://landregistry.data.gov.uk/def/common/>

// # Returns house price index and sales volume for a particular local authority (Newport) for a given date (October 2013)

// SELECT DISTINCT
//   ?regionName ?date ?ukhpi ?volume
// WHERE
// {
//   values ?newport {<http://landregistry.data.gov.uk/data/ukhpi/region/newport/month/2013-10>}

//   ?newport
//     ukhpi:refRegion ?region;
//     ukhpi:refMonth ?date;
//     ukhpi:housePriceIndex ?ukhpi.
    
//   OPTIONAL { 
//     ?newport ukhpi:salesVolume ?volume 
//   }
 
//   ?region rdfs:label ?regionName .
//   FILTER (langMatches( lang(?regionName), "EN") )
// }
