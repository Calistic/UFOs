# UFOs

## Purpose
The purpose of this project is to add more filters to Dana's UFO sighting webpage. We have added filters for City, State, Country, and Shape. 

## Technologies used
Scripts used:
- index.html: Webpage end user interacts with. Codes how site looks via CSS.
- style.css: How webpage is stylized. Utilizes Bootstrap Framework.
- app.js: Script that processes data, user clicks, and filters.
- data.js: Contains UFO Sightings data

app.js in Detail
1. buildTable function is ran with data.js
2. User enters filters and clicks "Filter Table"
3. updateFilters function is ran
	- creates list of user entered filters
4. filterTable function is ran
	- filters dataset using filter list
	- create new filtered dataset
5. buildTable function is ran with filtered dataset

## Further Development
The next steps for the project are to:
- Plot filtered cities onto a map
	- Provide information when a marker is clicked

- Plot filtered data onto bar charts
	- Show sightings by country
	- Show sightings by shape
	
- Plot sightings over time onto a line graph

- Provide statistical data on if sightings are increasing/decreasing
	- Determine if there is a correlation with the adoption of phone cameras
	
- We could look into adding a filter for the comment section, but first the usefullness of this feature should be assessed.