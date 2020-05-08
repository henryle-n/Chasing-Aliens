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

// event handler (D3.js script) for all filters
filButton.on("click", exeMultiFilter); // filter button is clicked 
inpForm.on("submit", exeMultiFilter); // when "enter" key is hit

// event handler (pure HTML) to change background color of status box
document.getElementById("filter-btn").onclick = function(){
    document.getElementById("sitRep").style.color = 'white';
    document.getElementById("sitRep").style.backgroundColor = 'black';
}

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
        // console.log("making table...", obj); 
        
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

// id array of all input boxes
var idArr = {
    datetime : "#datetime",
    city : "#city",
    state : "#state",
    country : "#country",
    shape : "#shape"
};

// loop and get a object of filtering parameters input by user
var inpVal;  // each input from the form
var inpValArr = {};  // create an object to hold the key-value pairs
// ---------------------------- //
function getAllInpt(){
    inpValArr = {};
    Object.entries(idArr).forEach(([key, value]) => {
        console.log(value);
        // get the user input value from the UI form 
        inpVal = d3.select(value).property("value"); //getInput(value);
        console.log(`getting input val for ${key, value}:${inpVal}`);

        if (inpVal != ""){
            console.log(`valid input val is ${key, inpVal}`);
            // push the key with value into object
            inpValArr[key] = inpVal.toLowerCase() 
            console.log("to lower case", inpValArr[key]);
        }
        else
            inpValArr = inpValArr;      
    });
}


function filterData(event) {
   return Object.keys(this).every(key => event[key] == this[key]);
};

var curDate = new Date()

var ftrD;
function exeMultiFilter () {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // clear old table
    tbody.html("");
    
    // retrieve new filtering condtitions from user input
    getAllInpt();

    // filter out data and make data table
    if (Object.keys(inpValArr).length != 0) { 
        // filter all conditions and return the final data
        ftrD = events.filter(filterData, inpValArr);
        }
    else
        ftrD = events;
    
    // make table from retrieved data
    makeTable(ftrD);
    
    // check how many records retrieved
    var ftrDLen = Object.keys(ftrD).length
    
    // let user know when data retrieval & table are finished
    var status = d3.select("#sitRep").text("STATUS:")
        .append("p").attr("id", "user-notif")
        .text("Finished Retrieving : " + ftrDLen + " Records")
        .append("p").attr("id", "usNoteDate")
        .text(new Date());
    
    // if filter is not in table's data, tell user to check input
    if (Object.keys(inpValArr).length != 0 && ftrDLen == 0) {
            status.append("p").attr("id", "noData")
            .text("No data found, please check filters and try again..."); 
    }

    // if filter is not input, notify user
    else if (Object.keys(inpValArr).length == 0 && ftrDLen != 0) {
                status.append("p").attr("id", "noData")
                .text("WARNING: No filter applied, please input at least one & try again ..."); 
    }
}

