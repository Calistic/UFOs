// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
// Use d3.select to tell JavaScript to look for the <tbody> tags in the HTML
var tbody = d3.select("tbody");


function buildTable(data) {
    // Create table: 1st clear contents of table
    // tbody.html references the table, pointing JavaScript directly to the table in the HTML page we’re going to build.
    // The parentheses with empty quotes (("");) is an empty string
    tbody.html("");
    data.forEach((dataRow) => {
        // Find <tbody> and add a table row ("tr")
        let row = tbody.append("tr");
        // Loop through each field in the dataRow and add each value as a table cell (td)
            //  object.values: reference one object from the array of UFO sightings
            //  (datatRow):  values to go into the dataRow
            //  forEach((val): represents each item in the object
        Object.values(dataRow).forEach((val) => {
            // Find row and add a table data ("td")
            let cell = row.append("td");
            // Extract text from the value
            cell.text(val);
            }
        );
    });
}

function handleClick() {
    // .select: select the very first element that matches #datetime
    // d3.select: tells D3 to look for #datetime id in HTML tags
    // what is .property("value"); doing?
    let date = d3.select("#datetime").property("value");

    // save original data as new variable that can be manipulated
    let filteredData = tableData;
    console.log(date)
    // If there is a date already set, then use that date as a filter. If not, then return the default data
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using the filtered data
    buildTable(filteredData);
};

// listen for click
// #filter-btn: html unique id
// .on("click", handleClick): tell d3 to execute handleClick()
    // when the button with an id of filter-btn is clicked
d3.select("#filter-btn").on("click", handleClick);

// Show users original data when the page loads
buildTable(tableData);