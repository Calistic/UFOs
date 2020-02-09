// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// function that runs when filter button is clicked
function updateFilters() {

  // create empty filter list
  let filters = [];

  // Save the element, value, and id of the filter that was changed
  let date = d3.select("#datetime").property("value");
  let city = d3.select("#locCity").property("value");
  let state = d3.select("#locState").property("value");
  let country = d3.select("#locCountry").property("value");
  let shape = d3.select("#ufoShape").property("value");

  // If a filter value was entered then add that filterId and value to the filters list. Otherwise, don't add to the list
  // if date exists, push object, otherwise null
  date ? filters.push({id:"datetime", value: date}) : null
  city ? filters.push({id:"city", value: city}) : null
  state ? filters.push({id:"state", value: state}) : null
  country ? filters.push({id:"country", value: country}) : null
  shape ? filters.push({id:"shape", value: shape}) : null

  // console.log(filters);
  // console.log(city);
  // console.log(date);

  // Call function to apply all filters and rebuild the table
  filterTable(filters);
}

// function that applys filters and rebuids table
function filterTable(filters) {

  // Set the filteredData to the tableData
  let filteredData = tableData

  // Loop through every filter and keep any data that matches the filter values
  for (i = 0; i < filters.length; i++) {
    filteredData = filteredData.filter(row => {
      // console.log(row);
      return row[filters[i].id] === filters[i].value.toString()});
    // filteredData = filteredData.filter(row => row[filters[i].id] === filters[i].value.toString());
  };

  // Rebuild the table using the filtered Data
  buildTable(filteredData);
};

// Attach an event to listen for changes to each filter
d3.selectAll("#filter-btn").on("click", updateFilters);

// Build the table when the page loads
buildTable(tableData);