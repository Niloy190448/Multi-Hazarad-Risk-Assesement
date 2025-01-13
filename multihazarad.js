// Multi-Hazard Risk Assessment for Bangladesh

// Define the area of interest: Bangladesh
var bangladesh = ee.FeatureCollection('FAO/GAUL/2015/level0')
                   .filter(ee.Filter.eq('ADM0_NAME', 'Bangladesh'));

// Center the map on Bangladesh
Map.centerObject(bangladesh, 7);

// Add Bangladesh boundary to the map
Map.addLayer(bangladesh, {color: 'black'}, 'Bangladesh Boundary');

// Load and visualize flood hazard data
var floodHazard = ee.ImageCollection('JRC/GSW1_3/GlobalSurfaceWater')
                    .filterDate('2000-01-01', '2018-12-31')
                    .select('occurrence')
                    .mean()
                    .clip(bangladesh);
Map.addLayer(floodHazard, {min: 0, max: 100, palette: ['white', 'blue']}, 'Flood Hazard');

// Load and visualize cyclone hazard data
var cycloneTracks = ee.FeatureCollection('NOAA/NHC/HURDAT2')
                       .filterBounds(bangladesh)
                       .filter(ee.Filter.date('1968-01-01', '2019-12-31'));
Map.addLayer(cycloneTracks, {color: 'red'}, 'Cyclone Tracks');

// Load and visualize landslide hazard data
var srtm = ee.Image('USGS/SRTMGL1_003');
var slope = ee.Terrain.slope(srtm);
var landslideHazard = slope.gt(15).clip(bangladesh);
Map.addLayer(landslideHazard, {min: 0, max: 1, palette: ['white', 'brown']}, 'Landslide Hazard');

// Combine hazards to create a multi-hazard risk map
var multiHazard = floodHazard.addBands(landslideHazard).reduce(ee.Reducer.sum());
Map.addLayer(multiHazard, {min: 0, max: 2, palette: ['white', 'yellow', 'orange', 'red']}, 'Multi-Hazard Risk');

// Export the multi-hazard risk map
Export.image.toDrive({
  image: multiHazard,
  description: 'Bangladesh_Multi_Hazard_Risk',
  scale: 1000,
  region: bangladesh.geometry(),
  fileFormat: 'GeoTIFF'
});
