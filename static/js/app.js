// import the data from data.js
const tableData = data;

// Reference the HTML table usind d3
var tbody = d3.select('tbody');

function buildTable(data){
    // Clear out any existing data
    tbody.html("");
    
    // loop thru each obj in the data
    data.forEach((dataRow) =>{
        // append a row to the table body
        let row = tbody.append("tr");
        // loop thru each field in the row and 
        // add each value as a table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        })
    });
}

function handleClick(){
    // select the first element that matches datetime format
    // from the filter, then grab the value
    let date = d3.select("#datetime").property("value");
   
    // set the filteredData to the entire data table 
    let filteredData = tableData;
    
    if(date) {
        //go into data and find an exact match to the filter
        filteredData = filteredData.filter(row => row.datetime === date);
     };
    
     // build the table using just the filtered data
     // Because we set filteredData to the entire table data, 
     // if no filter is found, the entire table will be returned
     buildTable(filteredData);
}
// using the id tag for filter-btn, perform handleClick when clicked
d3.selectAll("#filter-btn").on("click", handleClick);

// build the table when the page loads
buildTable(tableData);