events = data

// ============= DECLARE SOME FUNCTIONS ==============
// capitalize only initials
function init_cap(str) {
    // split the string by space into multiple words and push to array
    str = str.split(" ");

    // loop thru each separated word in the array, access & cap first character
    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1); // 
    };
    // join all words in the array back into one string
    return str.join(" ");
};

// capitalize all letters of that str
function cap_all(str) {
    return str.toUpperCase();
};

// ============== END DECLARING FUNCTIONS ===============

// ================= D3 SECTION =====================
// from data.js
var tableData = data;

// access the body of the table 
var tbody = d3.select("tbody");

// get first and last dates on the data array
var fdate = data[0].datetime;
var ldate = data.slice(-1)[0].datetime;

// then feed that to placeholder of input
d3.select("#datetime").attr("placeholder", `${fdate} to ${ldate}`);

// Select the button & form container
var filButton = d3.select("#filter-btn");
var inpForm = d3.select("#input-form");

// =============== GET FORM INPUT ======================

// Select the date time input form
var dtForm = d3.select("#datetime");

// Select the city input form
var ctForm = d3.select("#city");

// Select the state input form
var stForm = d3.select("#state");

// Select the country input form
var ctrForm = d3.select("#country");

// Select the shape input form
var shpForm = d3.select("#shape");


// Create event handlers 
filButton.on("click", exeFilter); // filter button is clicked 
inpForm.on("submit", exeFilter); // when "enter" key is hit



function exeFilter() {
   
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // clear old table
    tbody.html("");

    // get the datetime from the user input 
    var dateInput = dtForm.property("value");
    console.log(dateInput);

    // filter out datetime data based on input
    var filterData = events.filter(event => event.datetime == dateInput);
    console.log(filterData);
    
        
    filterData.forEach(obj => {
        // print out the retrieve object
        console.log(obj); 
        
        // add row
        var row = tbody.append("tr");
        Object.entries(obj).forEach(([key, value]) => {
        
            // if it is city, state, country : capitalize all letters
            if (key == "state" || key == "country"){
                value = cap_all(value);
            }

            // if it is city or shape, only cap initials 
            else if (key == "city"  || key == "shape"){
                value = init_cap(value);
            }
            else
            value = value;

            // add data into the row

            var cell = row.append("td");

            // add data 
            cell.text(value);
            });
    });
};

// var datetime = ;
// var city;
// var state;
// var country;
// var shape;
// var durationMinutes;
// var comments;