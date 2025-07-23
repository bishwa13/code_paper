
Objectives:
- To analyze 40 years trend of climatic changes taking place in Kulekhani watershed (Indra-Sarowar) (temp, precipitation, water level, Generation, Discharge)
- To assess the effects of climate change on hydro energy in Kulekhani watershed (Indra-Sarowar).

Methodology

Precipitation and Temperature data for Kulekhani river basin (KRB) from 1998-2022 were obtained from Hydrology department of Nepal. 

for downscaling NCEP-NCAR_1961_2005 data were used in sdsm. with Kulekhani station data.

Future prediction for untill 2100 were done through SDSM downscaling CanESM2_rcp45_2006_2100


energy generation of Kulekhani hydropower is obtained from Nepal electricity board

Land Use data were obtained from ICIMOD for cn calculation

USGS raster data is used in hec-hms GROUP = FILE_HEADER
  LANDSAT_SCENE_ID = "LC81410412023270LGN00"
  SPACECRAFT_ID = "LANDSAT_8"
  NUMBER_OF_BANDS = 11
  BAND_LIST = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)
END_GROUP = FILE_HEADER
GROUP = PROJECTION
  ELLIPSOID_AXES = (6378137.000000, 6356752.314200)
  MAP_PROJECTION = "UTM"
  PROJECTION_UNITS = "METERS"
  DATUM = "WGS84"
  ELLIPSOID = "WGS84"
  UTM_ZONE = 4
  year 2023



------
CHAPTER III: MATERIAL AND METHODS
Study Area
The Kulekhani watershed, located in central Nepal, is the focus of this study (Fig. 3.1). It is a critical region for hydro energy production, encompassing the Kulekhani hydropower complex and the Indra-Sarowar reservoir. Spanning approximately 1,200 square kilometers, the watershed features diverse topography with elevations ranging from 497 meters at Manthali to over 2,500 meters in higher regions. The climate is subtropical with distinct wet and dry seasons, heavily influenced by the monsoon, making it an ideal case study for investigating climate change impacts on hydrological systems and energy generation. The watershed’s significance to Nepal’s energy sector underscores the need to understand how climatic changes affect its hydropower potential.
Fig. 3.1: Location Map of Kulekhani Watershed
Topography: The Kulekhani watershed includes rugged terrain with steep slopes and flat valleys, contributing to its hydrological complexity. The Indra-Sarowar reservoir is a key feature, storing water for hydropower generation.
Climate: The region experiences a subtropical climate with significant seasonal variation. Monsoon rains drive high precipitation from June to September, while dry seasons see reduced water availability, impacting hydropower operations.
Hydropower Significance: The Kulekhani hydropower complex is one of Nepal’s major energy sources, making the watershed critical for national energy security. Climate-induced changes in water availability could significantly affect energy production.
Environmental Challenges: The watershed faces risks from landslides, sedimentation, and variable precipitation patterns, exacerbated by climate change. These factors necessitate a detailed study of climatic trends and their impacts on hydro energy.
Data Collection
To achieve the objectives of analyzing 40-year climatic trends and assessing climate change impacts on hydro energy, a comprehensive dataset was compiled from multiple sources:

Climatic Data: Daily precipitation and temperature data for the Kulekhani river basin (KRB) from 1998 to 2022 were obtained from the Department of Hydrology and Meteorology (DHM), Nepal (http://www.dhm.gov.np/). To extend the analysis to a 40-year period, historical climate data for 1961–2005 were reconstructed using statistical downscaling with the National Centers for Environmental Prediction - National Center for Atmospheric Research (NCEP-NCAR) reanalysis dataset (https://psl.noaa.gov/data/gridded/data.ncep.reanalysis.html).
Hydrological and Energy Data: Historical data on water levels, discharge, and energy generation for the Kulekhani hydropower plant (1998–2022) were sourced from the Nepal Electricity Authority (NEA) (https://www.nea.org.np/).
Land Use Data: Land use maps were acquired from the International Centre for Integrated Mountain Development (ICIMOD) (https://www.icimod.org/) to calculate the Curve Number (CN) for hydrological modeling.
Topographic Data: Raster data, including digital elevation models (DEMs) and Landsat 8 imagery (scene ID: LC81410412023270LGN00, dated 2023), were obtained from the United States Geological Survey (USGS) (https://earthexplorer.usgs.gov/).

Table 3.1: Data Sources and Periods



Data Type
Source
Period
Purpose



Temperature
DHM, NCEP-NCAR (downscaled)
1961–2022
Trend analysis


Precipitation
DHM, NCEP-NCAR (downscaled)
1961–2022
Trend analysis


Water Level
NEA
1998–2022
Trend analysis, hydrological modeling


Discharge
NEA
1998–2022
Trend analysis, hydrological modeling


Energy Generation
NEA
1998–2022
Trend analysis, impact assessment


Land Use
ICIMOD
Latest available
Hydrological modeling (CN calculation)


Topographic (DEMs, Landsat)
USGS
2023
Hydrological modeling


Preparation of Climate Data

Historical Data Processing: Daily temperature data were used to calculate daily averages from maximum and minimum values, which were then aggregated to monthly and annual averages for trend analysis. Daily precipitation data were summed to monthly and annual totals to assess trends in water availability.

Downscaled Data: The Statistical DownScaling Model (SDSM)  was employed to generate high-resolution climate data. Historical data (1961–2005) were reconstructed using NCEP-NCAR reanalysis predictors, calibrated with observed Kulekhani station data (1998–2022). Future projections (2006–2100) were generated using the Canadian Earth System Model 2 (CanESM2) under the Representative Concentration Pathway 4.5 (RCP4.5) scenario. Downscaled data were processed to monthly and annual scales for consistency with historical data. 

Hydrological Data: The observed precipitation and temperature data for the baseline period and downscaled GCM data for baseline and future periods were used as the input for the hydrological model HEC-HMS ver. 3.5 in order to estimate river discharge. The simulated river discharge time series were then used for other analysis.

Data Preparation

Outliers and Missing Data: Outliers in climatic, hydrological, and energy datasets were identified and removed using the interquartile range method. Missing data were imputed using linear regression with data from nearby meteorological or hydrological stations to ensure dataset completeness.

Type of Data Analysis and Statistical Tools

Trend Analysis:

Mann-Kendall Test: A non-parametric test was used to detect monotonic trends in time series data for temperature, precipitation, water level, discharge, and energy generation. This test is robust for non-normal distributions, making it suitable for environmental data (Aditya et al., 2021).
Sen’s Slope Estimator: This method quantified the magnitude of detected trends, providing a measure of change per unit time.
Implementation: The pymannkendall package in Python was used for these analyses (Shourov and Mahmud, 2019).


Hydrological Modeling:

The Hydrologic Engineering Center’s Hydrologic Modeling System (HEC-HMS) (https://www.hec.usace.army.mil/software/hec-hms/) was used to simulate the Kulekhani watershed’s hydrological response. The model incorporated:
Meteorological Data: Historical (1998–2022) and downscaled future (2006–2100) climate data.
Basin Characteristics: Derived from USGS DEMs and ICIMOD land use maps, using the Soil Conservation Service Curve Number (SCS-CN) loss method and SCS Unit Hydrograph transform method.
Calibration and Validation: The model was calibrated with historical discharge data and validated with independent datasets to ensure accuracy.




Climate Downscaling:

The Statistical DownScaling Model (SDSM) was used to generate high-resolution climate data. Calibration involved NCEP-NCAR predictors and observed Kulekhani station data, ensuring accurate reproduction of local climate patterns. Future projections used CanESM2 under RCP4.5.


Climate Change Impact Assessment:

HEC-HMS was run under historical (1998–2022) and future (2006–2100) climate scenarios, keeping other parameters (e.g., land use) constant to isolate climate change effects. Changes in hydrological outputs (e.g., discharge, water availability) were correlated with impacts on energy generation using NEA data.



Landcover Analysis

Land use data from ICIMOD were processed to calculate the Curve Number (CN) for hydrological modeling. Landsat 8 imagery (2023) from USGS was used to update land use information, reflecting recent changes in the watershed. Python libraries such as Geopandas, Rasterio, and Fiona were used to clip and process raster data into vector representations for HEC-HMS input.

Study Design
The study design integrates historical data analysis, climate downscaling, hydrological modeling, and trend analysis to achieve the research objectives. The workflow is outlined as follows (Fig. 3.2):

Data Collection and Preparation: Compilation and processing of climatic, hydrological, and energy data from DHM, NEA, ICIMOD, and USGS.
Climate Downscaling: Reconstruction of historical climate data (1961–2005) and projection of future scenarios (2006–2100) using SDSM.
Hydrological Modeling: Simulation of watershed response under historical and future climate scenarios using HEC-HMS.
Trend Analysis: Application of Mann-Kendall test and Sen’s Slope to detect and quantify trends in key variables.
Impact Assessment: Comparison of hydrological outputs to evaluate climate change impacts on hydro energy.
Interpretation: Contextualization of results within existing literature, with implications for Nepal’s energy sector.

Fig. 3.2: Flow Diagram of Study Design
Table 3.2: Statistical Tools and Their Applications



Tool
Purpose
Software/Package



Mann-Kendall Test
Detect monotonic trends
pymannkendall (Python)


Sen’s Slope Estimator
Quantify trend magnitude
pymannkendall (Python)


HEC-HMS
Hydrological modeling
HEC-HMS software


SDSM
Climate data downscaling
SDSM software


Limitations and Assumptions

Data Limitations: Observed climatic data were limited to 1998–2022, necessitating downscaled data for 1961–2005, which introduces some uncertainty.
Single Scenario: The study uses CanESM2 under RCP4.5 for future projections. Multiple models or scenarios could enhance robustness but were beyond the study’s scope.
Static Land Use: Land use was assumed static based on ICIMOD data and 2023 Landsat imagery, potentially overlooking dynamic changes.

Ethical Considerations
No human subjects or sensitive data were involved. All data were sourced from publicly available or formally agreed-upon datasets from DHM, NEA, ICIMOD, and USGS, with proper acknowledgments provided.