# Multi-Hazard Risk Assessment for Bangladesh Using Google Earth Engine

This project utilizes Google Earth Engine (GEE) to perform a multi-hazard risk assessment for Bangladesh, focusing on flood, cyclone, and landslide hazards.

## Table of Contents

- [Introduction](#introduction)
- [Data Sources](#data-sources)
- [Methodology](#methodology)
- [Usage](#usage)
- [Results](#results)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Bangladesh is prone to multiple natural hazards, including floods, cyclones, and landslides. Assessing these hazards is crucial for disaster preparedness and mitigation. This project integrates various geospatial datasets in GEE to visualize and analyze these hazards.

## Data Sources

- **Flood Hazard:** Derived from the [Global Surface Water Dataset](https://developers.google.com/earth-engine/datasets/catalog/JRC_GSW1_3_GlobalSurfaceWater), which provides information on the occurrence of surface water from 2000 to 2018.

- **Cyclone Tracks:** Obtained from the [NOAA/NHC Hurricane Database (HURDAT2)](https://developers.google.com/earth-engine/datasets/catalog/NOAA_NHC_HURDAT2), containing historical cyclone track data from 1968 to 2019.

- **Landslide Hazard:** Estimated using slope data calculated from the [SRTM Digital Elevation Data](https://developers.google.com/earth-engine/datasets/catalog/USGS_SRTMGL1_003). Areas with slopes greater than 15 degrees are considered high-risk for landslides.

## Methodology

1. **Defining the Area of Interest:** The boundary of Bangladesh is obtained from the [FAO GAUL dataset](https://developers.google.com/earth-engine/datasets/catalog/FAO_GAUL_2015_level0).

2. **Flood Hazard Assessment:** The occurrence of surface water is averaged over the study period to identify flood-prone areas.

3. **Cyclone Hazard Assessment:** Historical cyclone tracks are visualized to understand the regions most affected by cyclones.

4. **Landslide Hazard Assessment:** Slope is calculated from elevation data, and areas with slopes greater than 15 degrees are identified as high-risk zones.

5. **Multi-Hazard Risk Mapping:** The individual hazard layers are combined to create a composite risk map, highlighting areas susceptible to multiple hazards.

## Usage

1. **Accessing the Script:**
   - Open the Google Earth Engine Code Editor: [https://code.earthengine.google.com/](https://code.earthengine.google.com/).
   - Create a new script and copy the provided JavaScript code into the editor.

2. **Running the Analysis:**
   - Click the "Run" button to execute the script.
   - The map will display the individual hazard layers and the combined multi-hazard risk map.

3. **Exporting the Results:**
   - The script includes an export function that saves the multi-hazard risk map as a GeoTIFF file to your Google Drive.
   - Ensure you have sufficient storage space in your Google Drive before exporting.

## Results

The analysis produces:

- **Flood Hazard Map:** Highlights areas with a high occurrence of surface water, indicating flood-prone regions.

- **Cyclone Tracks Map:** Displays historical cyclone paths affecting Bangladesh.

- **Landslide Hazard Map:** Identifies regions with steep slopes susceptible to landslides.

- **Multi-Hazard Risk Map:** Combines all hazard layers to show areas at risk from multiple hazards.


 
