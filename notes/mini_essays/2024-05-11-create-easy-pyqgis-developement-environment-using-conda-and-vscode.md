[Source](https://aneto.pt/posts/tutorials/2024-05-11-create-easy-pyqgis-developement-environment-using-conda-and-vscode/#)
# PyQGIS Development Environment Using Conda and VScode


---

- Install Conda
- Create a Conda environment with QGIS

  - Creation of new conda environment, where qgis and any other packages as requirement. So that it won't mess with your main installation of QGIS or python.
    - > conda create -n qgis_dev qgis -c conda-forge
  - Check the qgis is working or not
    - > from qgis.core import QGS


