Below is a detailed plan for the 3-hour lab session and 1.5-hour assignment as outlined for Week 1 of the 90-hour course on Water Resources Assessment Using Remote-Sensing Data. The lab focuses on installing and exploring QGIS and Python environments (Anaconda, Jupyter Notebook) and using Google Earth Engine (GEE) to explore a river basin case study (e.g., Nile or Mekong). The assignments include a reading on remote sensing principles and selecting a river basin for the final project. This plan ensures students gain practical skills and context for the course while aligning with the provided resources.
Lab Session: Install and Explore QGIS, Python, and Google Earth Engine (3 Hours)
Duration: 3 hours
Objective:  
Install and configure QGIS and Python environments (Anaconda, Jupyter Notebook) for geospatial analysis.  
Explore Google Earth Engine (GEE) to visualize and analyze remote sensing data for a river basin case study (e.g., Nile or Mekong).  
Familiarize students with tools and datasets used in water resources assessment.
Target Audience: Students, early-career professionals, or researchers with basic computer skills and introductory knowledge of hydrology or GIS (preferred but not mandatory).
Delivery Mode: In-person or virtual lab with instructor-led demonstrations, hands-on exercises, and troubleshooting support.  
Prerequisites:  
A computer with internet access and sufficient storage (at least 10 GB free).  
Basic familiarity with file management and software installation.
Materials:  
Computers with Windows, macOS, or Linux.  
Installation guides for QGIS, Anaconda, and Jupyter Notebook (provided as PDFs or links).  
Google Earth Engine account (students will sign up during the lab).  
Sample GEE scripts for the river basin case study.  
Handout with step-by-step instructions and troubleshooting tips.
Lab Structure
Total Time: 180 minutes (3 hours)  
Part 1: Install and Explore QGIS (60 minutes)  
Part 2: Install and Explore Python (Anaconda, Jupyter Notebook) (60 minutes)  
Part 3: Explore a River Basin Case Study in Google Earth Engine (60 minutes)
Lab Setup:  
Lab room with computers or students’ laptops.  
Instructor screen-sharing for virtual delivery.  
Access to course platform (e.g., Canvas, Moodle) for sharing guides and scripts.
Detailed Lab Plan
Part 1: Install and Explore QGIS (60 minutes)
Objective: Install QGIS, familiarize students with its interface, and perform basic operations relevant to water resources assessment.  
Activities:  
Installation (15 minutes):  
Instructions:  
Download QGIS (latest stable version, e.g., 3.34) from qgis.org.  
Choose the appropriate installer for the operating system (Windows, macOS, Linux).  
Follow the installation wizard (default settings recommended).
Instructor Role:  
Share a step-by-step PDF guide (pre-prepared).  
Demonstrate installation on Windows/macOS via screen-share.  
Troubleshoot common issues (e.g., missing dependencies, admin permissions).
Student Task: Complete installation and launch QGIS.
Interface Exploration (20 minutes):  
Instructions:  
Open QGIS and explore key components:  
Map Canvas: Where spatial data is visualized.  
Layer Panel: Lists loaded datasets (e.g., raster, vector).  
Toolbar: Tools for zooming, panning, and adding data.  
Browser Panel: Access local or online data (e.g., OpenStreetMap).
Load a sample dataset: Download a digital elevation model (DEM) of the Nile Basin (e.g., SRTM from USGS Earth Explorer, provided as a pre-downloaded file).  
Add the DEM to QGIS (File → Add Raster Layer).  
Zoom to the Nile Basin and adjust styling (e.g., color ramp for elevation).
Instructor Role:  
Demonstrate loading and styling the DEM.  
Explain raster vs. vector data and their relevance to hydrology (e.g., DEM for watershed delineation).  
Guide students through basic navigation (zoom, pan).
Student Task: Load the DEM, adjust styling, and explore the Nile Basin.
Basic Operation (25 minutes):  
Instructions:  
Add a basemap (e.g., OpenStreetMap) via QGIS QuickMapServices plugin (pre-installed or guided installation).  
Overlay the DEM and adjust transparency to visualize terrain with context.  
Save the project (File → Save As) as a .qgz file.
Instructor Role:  
Show how to add a basemap and adjust layer properties.  
Explain how QGIS will be used in later labs (e.g., mapping water bodies, analyzing precipitation).  
Assist with errors (e.g., plugin installation issues).
Student Task: Create a simple map with the DEM and basemap, save the project.
Deliverables:  
Installed QGIS.  
A saved QGIS project with a styled DEM and basemap.
Troubleshooting:  
Common issues: Slow downloads, compatibility errors, missing plugins.  
Solutions: Provide offline installers, check system requirements, use instructor’s pre-configured QGIS setup.
Part 2: Install and Explore Python (Anaconda, Jupyter Notebook) (60 minutes)
Objective: Install Anaconda, set up a Python environment, and explore Jupyter Notebook for geospatial analysis.  
Activities:  
Installation (20 minutes):  
Instructions:  
Download Anaconda (individual edition, Python 3.x) from anaconda.com.  
Choose the appropriate installer (Windows, macOS, Linux).  
Follow the installation wizard (default settings, but uncheck “Add to PATH” on Windows to avoid issues).  
Open Anaconda Navigator and launch Jupyter Notebook to confirm setup.
Instructor Role:  
Share a step-by-step PDF guide.  
Demonstrate installation on Windows/macOS.  
Highlight the importance of Anaconda for managing geospatial libraries (e.g., geopandas, rasterio).  
Troubleshoot issues (e.g., disk space, permission errors).
Student Task: Install Anaconda and launch Jupyter Notebook.
Environment Setup (15 minutes):  
Instructions:  
Open Anaconda Prompt (or terminal) and create a new environment:  
bash
conda create -n geo_env python=3.9
Activate the environment:  
bash
conda activate geo_env
Install key libraries:  
bash
conda install pandas geopandas matplotlib rasterio jupyter
Launch Jupyter Notebook:  
bash
jupyter notebook
Instructor Role:  
Demonstrate commands via screen-share.  
Explain why a separate environment avoids library conflicts.  
Provide a .yml file for quick environment setup (optional).
Student Task: Create and activate the environment, install libraries.
Jupyter Notebook Exploration (25 minutes):  
Instructions:  
Open Jupyter Notebook in a browser and create a new notebook.  
Run a sample script (provided by instructor) to:  
Import libraries (pandas, matplotlib).  
Load a sample dataset (e.g., CSV of Nile Basin precipitation from GPM, provided as a file).  
Plot a simple time-series graph (e.g., monthly rainfall).
Example code:  
python
import pandas as pd
import matplotlib.pyplot as plt
data = pd.read_csv('nile_precipitation.csv')
plt.plot(data['date'], data['precipitation'])
plt.title('Nile Basin Precipitation')
plt.xlabel('Date')
plt.ylabel('Precipitation (mm)')
plt.show()
Instructor Role:  
Share the sample script and dataset via course platform.  
Demonstrate running the script and interpreting the plot.  
Explain how Python will be used in later labs (e.g., NDWI calculation, time-series analysis).  
Assist with errors (e.g., missing libraries, file paths).
Student Task: Run the script, generate the plot, and save the notebook.
Deliverables:  
Installed Anaconda and Jupyter Notebook.  
A working Python environment with geospatial libraries.  
A saved Jupyter Notebook with a precipitation plot.
Troubleshooting:  
Common issues: Conda command errors, slow installs, Jupyter not launching.  
Solutions: Use instructor’s pre-configured environment, check internet, restart Anaconda Navigator.
Part 3: Explore a River Basin Case Study in Google Earth Engine (60 minutes)
Objective: Introduce Google Earth Engine (GEE) and use it to visualize remote sensing data for a river basin case study (Nile or Mekong).  
Activities:  
GEE Setup (15 minutes):  
Instructions:  
Sign up for a GEE account at code.earthengine.google.com (requires Google account).  
Follow the approval process (instant or up to 24 hours; instructor provides temporary shared access if needed).  
Open the GEE JavaScript Code Editor and explore the interface:  
Map Panel: Displays visualizations.  
Script Editor: For writing JavaScript code.  
Assets/Catalog: Access datasets (e.g., Sentinel-2, GPM).
Instructor Role:  
Demonstrate account signup and interface navigation.  
Share a backup GEE script for students with pending approvals.  
Explain GEE’s cloud-based advantage for handling large RS datasets.
Student Task: Sign up for GEE and access the Code Editor.
Case Study Exploration – Nile or Mekong Basin (45 minutes):  
Instructions:  
Dataset: Use Sentinel-2 imagery to map water bodies in the Nile Basin (or Mekong, depending on instructor choice).  
Task: Run a provided GEE script to:  
Load Sentinel-2 imagery (e.g., 2023 data, cloud-free).  
Calculate NDWI (Normalized Difference Water Index) to highlight water bodies.  
Clip to the Nile Basin boundary (pre-defined shapefile in GEE).  
Visualize the result on the map.
Example GEE script (JavaScript):  
javascript
// Load Sentinel-2 image collection
var s2 = ee.ImageCollection('COPERNICUS/S2')
         .filterDate('2023-01-01', '2023-12-31')
         .filterBounds(nileBasin)
         .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
         .median();
// Calculate NDWI
var ndwi = s2.normalizedDifference(['B3', 'B8']).rename('NDWI');
// Visualize
var ndwiParams = {min: -1, max: 1, palette: ['blue', 'white', 'green']};
Map.addLayer(ndwi.clip(nileBasin), ndwiParams, 'NDWI');
Map.centerObject(nileBasin, 6);
Steps:  
Copy/paste the script into the GEE Code Editor.  
Run the script and explore the NDWI map (zoom, pan).  
Adjust parameters (e.g., date range, cloud threshold) to see changes.
Interpretation:  
NDWI highlights water (high values) vs. land (low values).  
Discuss how this map could inform water resources assessment (e.g., lake extent, flood monitoring).
Instructor Role:  
Share the script via course platform or live demo.  
Explain NDWI calculation and its hydrological relevance.  
Demonstrate script execution and map interaction.  
Guide students to interpret the map (e.g., identify major rivers/lakes).  
Assist with errors (e.g., script syntax, GEE access issues).
Student Task: Run the script, explore the NDWI map, and note observations (e.g., water body locations).
Deliverables:  
Active GEE account.  
A visualized NDWI map of the Nile/Mekong Basin in GEE.  
Brief notes on map observations (e.g., major water bodies identified).
Troubleshooting:  
Common issues: GEE account delays, script errors, slow rendering.  
Solutions: Use instructor’s shared script, simplify script (e.g., smaller area), check browser compatibility.
Lab Deliverables Summary
QGIS: Installed software, saved project with Nile Basin DEM and basemap.  
Python: Installed Anaconda, configured geo_env, saved Jupyter Notebook with precipitation plot.  
GEE: Active account, NDWI map of Nile/Mekong Basin, and observation notes.
Assignment (1.5 Hours)
Duration: 1.5 hours (self-paced, to be completed outside lab)
Objective:  
Reinforce remote sensing principles through reading.  
Prepare for the final project by selecting a river basin.
Tasks:  
Reading: Principles of Remote Sensing (45 minutes):  
Resource: Lillesand et al., Remote Sensing and Image Interpretation, Chapter 1 (provided as PDF or library access).  
Instructions:  
Read Chapter 1, focusing on:  
Definition and history of remote sensing.  
Electromagnetic spectrum and its role in RS.  
Active vs. passive sensors.  
Resolution types (spatial, temporal, spectral).
Take notes on key concepts (1–2 pages) to prepare for Week 2’s lecture on RS data sources.  
Optional: Supplement with NASA ARSET training module “Fundamentals of Remote Sensing” (Session 1, ~30 minutes, available at appliedsciences.nasa.gov).
Deliverable: Submit notes (PDF or text) via course platform.  
Purpose: Builds theoretical foundation for understanding RS datasets and tools.
Identify a River Basin for the Final Project (45 minutes):  
Instructions:  
Select a river basin for the final project (a water resources fact-sheet).  
Consider:  
Accessibility of RS data (e.g., Sentinel-2, GPM available via USGS/ESA).  
Hydrological significance (e.g., flood-prone, drought-affected, transboundary).  
Personal interest or regional relevance (e.g., local basin or globally significant like Nile, Mekong, Amazon).
Research the basin using online resources (e.g., Wikipedia, FAO Aquastat, USGS).  
Write a brief proposal (1 paragraph) including:  
Basin name and location.  
Why you chose it (e.g., data availability, hydrological issues).  
Potential focus for the fact-sheet (e.g., flood mapping, water availability).
Examples:  
Nile Basin (transboundary, flood and drought issues).  
Mekong Basin (wetland dynamics, hydropower).  
Mississippi Basin (flood mapping, agriculture).
Resources:  
FAO Aquastat fao.org/aquastat for basin profiles.  
USGS Water Resources water.usgs.gov for basin data.  
GEE Data Catalog developers.google.com/earth-engine/datasets to check data availability.
Deliverable: Submit proposal (PDF or text) via course platform.  
Purpose: Ensures students commit to a feasible project early and begin contextual research.
Submission Deadline: End of Week 1 (e.g., Sunday 11:59 PM).
Grading:  
Reading notes: 50% (clarity, coverage of key concepts).  
Basin proposal: 50% (feasibility, rationale, specificity).
Resources
Textbook:  
Lillesand et al., Remote Sensing and Image Interpretation, Chapter 1 (library or PDF provided).
Online:  
NASA ARSET Training Modules: “Fundamentals of Remote Sensing” appliedsciences.nasa.gov.  
QGIS Download and Tutorials: qgis.org.  
Anaconda Download: anaconda.com.  
Google Earth Engine: code.earthengine.google.com.  
USGS Earth Explorer: earthexplorer.usgs.gov.  
ESA Copernicus Hub: scihub.copernicus.eu.
Support and Troubleshooting
Lab Support:  
Instructor and teaching assistants available during lab for real-time help.  
Pre-prepared guides and sample files minimize setup issues.  
Virtual breakout rooms for troubleshooting in online sessions.
Assignment Support:  
Office hours (e.g., 1 hour post-lab) for questions on reading or basin selection.  
Discussion forum on course platform for peer and instructor feedback.
Common Issues and Solutions:  
QGIS: Slow installation (use offline installer), plugin errors (reinstall plugin).  
Python: Conda errors (check internet, use .yml file), Jupyter not launching (restart Navigator).  
GEE: Account delays (use instructor’s script), script errors (simplify code).  
Basin Selection: Data unavailability (consult instructor for alternative basins).
Key Takeaways
QGIS: Installed and ready for geospatial visualization and analysis.  
Python: Configured with Anaconda and Jupyter Notebook for data processing and plotting.  
Google Earth Engine: Introduced as a powerful tool for cloud-based RS analysis, with hands-on NDWI mapping.  
Assignments: Reading builds RS theory, and basin selection sets the stage for the final project.
This lab and assignment plan ensures students gain practical experience with essential tools and begin contextualizing their learning through a real-world river basin case study. Let me know if you’d like to modify the case study (e.g., specific basin), add more detailed instructions, or adjust the assignment scope!

