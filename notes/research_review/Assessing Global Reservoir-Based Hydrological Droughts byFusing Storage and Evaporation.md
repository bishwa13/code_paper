# [Assessing Global Reservoir-Based Hydrological Droughts byFusing Storage and Evaporation](https://agupubs.onlinelibrary.wiley.com/doi/epdf/10.1029/2023GL106159)


#Not_READ #Reading

This paper developed an new method to calculate/identify/detect/characterize drought called Integrated drought Index (IRDI).

Reservoir-based Drought (RBD) is crusial to understand for water resosurce management. 


- Why this method is needed?
    - There were non outlook available targeting RBD.
    - there are some application and they typically use precipitation, soil moisture and streamflow/runoff information.
    - Goal is to better understand of propagation of meteorological to hydrological drought.
    - Comprehensive quantification (storage and evaporation) of RBD can provide valuable insights for water governance.


- What is copula function?
    - whatever the copula function is, it is ideal for modeling such multivariate idicators and has been widely used to develop integrated drought indices. 

- Exactly, why IRDI?
    - While several integrated/multivariate indicators have been devel-oped using a combination of precipitation, soil moisture, evaporation, runoff, and groundwater, the developmentof a reservoir-based integrated drought index that explicitly integrates reservoir storage and evaporation, is stilllacking. Hence, here, we introduce the Integrated Reservoir Drought Index (IRDI), which fuses reservoir storageand evaporation rates to evaluate RBD.

## DATA

- Monthly reservoir storage and evaporation ([MODIS, GWR](https://lpdaac.usgs.gov/products/mod28c3v061/)).
- Global REservoir and Dam (GRanD) Database
- HydroSHEDS river network data - To estimate the upstream contributiing area.

<!--

- Estmate monthly standardized storage anomalies (SSA) and Standardized evaporation rate anomalies (SEA) by removing seasonality from monthly storage and evaporation rate observations. 
- used the negative of the standard deviation to standardize evaporation anomalies, such that the negative values ofSEA could represent droughts (high evaporation anomalies). This way the physical representations of SEA,SSA, and IRDI can be consistent. Moreover, to evaluate the uncertainties in the GWR product, we compared the MODIS-based SSA against the in situ SSA 
- We find GWR product satisfactorily captures the in situ storage dynamics, with average R^2 (: A statistical measure of how well two datasets correlate (0 = no correlation, 1 = perfect correlation)) and Normalized Root Mean Square Error (NRMSE: Error metric normalized by the data range, showing prediction accuracy as a percentage.) values of 0.68 and 11.47%, respectively.
- To ensure consistency with the meteorological data used in the GWR product—and to evaluate the dominantd river (climate vs. human activities) of RBD—we obtained total monthly runoff (baseflow + surface runoff) data at a 0.25° from the Global Land Data Assimilation System (Phase 2.1) Noah Land Surface Model (GLDASNOAH)
- Subsequently, we aggregated the runoff in their respective contributing areas (Figure S2 in Supporting Information S1), removed the seasonality, and estimated the Standardized Runoff Anomalies (SRA) for eachreservoir

-->

This study aims to monitor and unserstand reservoir water dynamics (RBD) using standarized anomalies (Standardized Storage Anomalies (SSA), Standardized Evaporation Rate Anomalies (SEA), SRA). Anomalise are unusual change in Datasets, And Seasonality is removed to focus on abnormal changes and it can be done by subtracting expected monthly average to highlight deviation(anomalies). Standardization is conversion to a common scale often z-scores $ \frac{(value - mean)}{\text{Standard Deviation}} $. 

To understand what drives RBD, is it climate or human activities. total monthly runoff (base flow + surface run off) from GLDAS Noah Land surface Model at a 0.25 degree resolution is used. After that Cummulative runoff is calculated of reservoir watersheds, just like SSA and SEA, seasonal patterns are removed from runoff data and Standardized Runoff Anomalies (SRA) to measure deviation in runoff (usually low runoff = drought risk)

---
Simplified Analogy
Imagine you’re tracking a bank account (reservoir) with deposits (runoff), withdrawals (evaporation), and balance (storage). To spot unusual activity:
You remove regular monthly patterns (e.g., rent payments = seasonality).

You standardize deposits, withdrawals, and balance to compare them fairly (SSA, SEA, SRA).

You flip withdrawals to negative numbers so big withdrawals (high evaporation) signal trouble (drought), matching low balance or deposits.

You check your bank app (GWR) against actual bank statements (in situ) to ensure it’s accurate.

You use a consistent tracking system (GLDAS) to see if low deposits come from bad luck (climate) or overspending (human actions).

---

## Methods

Copula method is used to construct and IRDI based reservoir storage and evaporation rate.
Copula is powerful tool to used for deriving joint distribution of multiple variables, irrespective of their marginal distributions.

        - What is joint distribution?
        - what is marginal distribution?
