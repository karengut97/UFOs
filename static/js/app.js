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