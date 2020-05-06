// ================= DECLARE SOME VARS =====================
// from data.js
var events = data;

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

// event handlers for only datetime filter
//filButton.on("click", exeFilter); // filter button is clicked 
//inpForm.on("submit", exeFilter); // when "enter" key is hit

// event handler for all filters
filButton.on("click", exeMultiFilter); // filter button is clicked 
inpForm.on("submit", exeMultiFilter); // when "enter" key is hit

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

// make table from array of objects
function makeTable (tblData) {
    tblData.forEach(obj => {
        // print out the retrieve object
        console.log("making table...", obj); 
        
        // add row for each object in the array
        var row = tbody.append("tr");

        //within each object, get the key-value pairs to fill each cell
        // of the same row
        Object.entries(obj).forEach(([key, value]) => {
        
            // if it is city, state, country : capitalize all letters
            if (key == "state" || key == "country"){
                value = value.toUpperCase();
            }

            // if it is city or shape, only cap initials 
            else if (key == "city"  || key == "shape"){
                value = init_cap(value);
            }

            // others left alone
            else
            value = value;

            // add tag td for data 
            var cell = row.append("td");

            // add data 
            cell.text(value);
            });
    });
};   // ============== END DECLARING FUNCTIONS ===============


// upon page loading, display all table data
makeTable(events)

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


var keyList = Object.keys(data[0]);
console.log(keyList);


// id of all input boxes
// var idArr = ["#datetime", "#city", "#state", "#country", "#shape"];
var idArr = {
    datetime : "#datetime",
    city : "#city",
    state : "#state",
    country : "#country",
    shape : "#shape"
};

// create function to get value from the input box
function getInput (id) {
    outVal = d3.select(id).property("value");
    return outVal; 
};

// loop and get a object of filtering parameters input by user
var inpVal;  // each input from the form
var inpValArr = {};  // create an object to hold the key-value pairs
// ---------------------------- //
Object.entries(idArr).forEach(([key, value]) => {
    console.log(value);
    // get the user input value from the UI form 
    inpVal = getInput(value);
    console.log(`getting input val for ${key, value}:${inpVal}`);
    if (inpVal != ""){
        console.log(`valid input val is ${key, inpVal}`);
        inpVal = inpVal;
    }

    inpValArr[key] = inpVal; // push the key with value into object
});

console.log("inpValArr is : ", inpValArr);

// for (eK; eK <= keyList.length, eK++) {
//     var filterData = events.filter(event => event.datetime == dateInput);
//     console.log(filterData);
// };


function exeFilter() {
   
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // clear old table
    tbody.html("");

    // get the datetime from the user input 
    var dateInput = dtForm.property("value");
    console.log(dateInput);

    if (dateInput != "") {
       
        // filter out datetime data based on input
        var ftrData = events.filter(event => event.datetime == dateInput);
        console.log(ftrData);

        // create tabe post-filtered 
        makeTable(ftrData);
    }
    
    else
        makeTable(events);
};

// Array.prototype.every()
// use method ".every()" to test every single value
// return BOOLENS of  true/false 
function filterData(event) {
   return Object.keys(this).every(key => event[key] == this[key]);
};

function exeMultiFilter () {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // clear old table
    tbody.html("");
    
    // filter all conditions and return the final data
    var ftrD = events.filter(filterData, inpValArr);
}
