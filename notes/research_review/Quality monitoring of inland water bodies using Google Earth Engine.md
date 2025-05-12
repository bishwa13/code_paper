---
meta search: Journal of Hydroinformatics Vol 25 No 2, 432 doi: 10.2166/hydro.2023.137


---



### Importance of Water Bodies

Regular monitoring of inland water bodies is necessary for the identification of the areas of deteriorating water quality so that corrective measures can be adopted before the impairment becomes irreversible. There are various parameters based on which quality of a water body is assessed, namely, dissolved oxygen, salinity, pH, temperature, turbidity, Total Nitrogen (TN), Total Phosphorus (TP) and chlorophyll-a (Chl-a). Water quality indices are simple indices used for classifying the quality of a water body based on these parameters. Trophic State Index (TSI),  is a widely used water quality index for classifying water quality status. It is computed from log-transformed values of Secchi depth (SD), TN, TP and/or Chl-a.








# AI Read
## Abstract
Describes the use of Google Earth Engine (GEE) for monitoring Trophic State Index (TSI).
Mentions the SIAC algorithm and its ability to retrieve bottom-of-atmosphere (BOA) reflectance for specific Sentinel 2 bands.
Highlights the use of Normalized Difference of B3 and B4 bands (ND34) for TSI mapping.
Briefly notes the application of GEE to Vembanad Lake for demonstrating temporal and spatial water quality variations.

## Introduction
Discusses the importance of regular inland water body monitoring for assessing water quality.
Introduces the concept of Trophic State Index (TSI) as a water quality indicator.
Describes the role of remote sensing in water quality assessment, mentioning the limitations of existing algorithms for land monitoring satellites.
Presents the advantages of cloud computing platforms like Google Earth Engine (GEE) for large-scale geospatial analysis.
Mentions the limitations of the SIAC atmospheric correction algorithm available in GEE for water quality monitoring.
Materials and Methods
Presents three study areas: Vembanad Lake (India), Milford Lake (USA) and Conroe Lake (USA).
Describes the data sources used: Sentinel 2 satellite imagery, USGS National Water Information System and in situ measurements from Kochi Kayal.
Introduces the methods used, including atmospheric correction processors (C2RCC and SIAC), TSI calculation, and the GEE platform.
Results and Discussions
Discusses the accuracy of the SIAC algorithm in retrieving BOA reflectance spectra, noting its limitations for certain Sentinel 2 bands.
Presents the models used for TSI estimation (ND34, QAA-S2) and evaluates their feasibility with SIAC-corrected data.
Presents the results of TSI estimation using the ND34 index model on GEE, comparing it to in situ measurements and C2RCC-corrected data.
Demonstrates the capability of GEE for analyzing temporal and spatial variations of TSI in Vembanad Lake using the ND34 index model.
Conclusion
Summarizes the key findings of the study, including the identification of a feasible TSI estimation model for GEE (ND34).
Highlights the potential of GEE for efficient and rapid water quality monitoring.
Briefly mentions the limitations of the study and suggests future research directions, like incorporating the C2RCC algorithm into GEE.