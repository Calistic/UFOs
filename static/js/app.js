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







