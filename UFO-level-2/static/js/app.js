// from data.js
var tableData = data;

// access the body of the table 
var tbody = d3.select("tbody");

// get first and last dates on the data array
var fdate = data[0].datetime;
var ldate = data.slice(-1)[0].datetime

// then feed that to placeholder of input
d3.select("#datetime").attr("placeholder", `${fdate} to ${ldate}`)

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

function cap_all(str) {
    return str.toUpperCase();
};

data.forEach(obj => {
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
        cell.text(value)
        });
});


// var datetime = ;
// var city;
// var state;
// var country;
// var shape;
// var durationMinutes;
// var comments;