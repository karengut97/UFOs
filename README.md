# UFOs

## Overview
This project focuses on building a website page to display information about UFOs. This information includes:

1. A written summary of UFO sightings from Ufologists
2. The following UFO sightings data:
    - Date
    - City
    - State
    - Country
    - Shape
  
3. A filter capability on the data to allow the user to query and display sighting information

The rendered website utilizes features from Bootstrap and CSS style sheets for an aethetically pleasant display.

## Results

When the user accesses the website, the top portion provides the overview.

   <img src="/static/images/UFO_Webpage.png" width="400" height="150"/>  

Scrolling down the page, the user sees the filter capability on the left and data table on the right.

   <img src="/static/images/UFO_Filter_Table.png"/>  

### EXAMPLE:
Let's assume a user is interested in seeing UFO data collected in California on Jan 10, 2010.

The user will enter the following:

  - "1/10/2010" in the "Enter Date" field
  - "ca" in the "Enter a State" field

The filter result will look like this:
  <img src="/static/images/UFO_Filter_Result.png"/>

        
## Summary

While this site does look good and functions well with the data provided, there are a few items which could be addressed with an update.

### Drawback of Current Page
Removing the "Filter Table" button is now a drawback. It is not known how the filter happens until you actually use it. There are two types of actions which will activate the table to filter:
1. Hit the enter key on the keyboard after typing in the filter in a cell.
2. Enter the filtering data in a cell then click in a new filter cell.

### Recommendations
1. Bring back the Filter Table button and only activate the table to filter once it is selected.
2. Provide a count of results based on filter(s).
3. Allow the user to enter a date range instead of just a specific date.
4. Allow the user to export the results for further analysis. 
