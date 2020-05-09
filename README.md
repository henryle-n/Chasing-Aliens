# ::: Area 51: Home of Flying Saucers? Where else? :::
## Background
In this project, a JavaScript array of **111** objects were used to construct a web-based app to help users quickly query the data based on different input conditions. 

There are two different websites built for this project.  
* Lev-1 consists of a simple "*Date*" filter input. <a href="https://henryle-n.github.io/JavaScript-Challenge/UFO-level-1/">**Click here**</a> for UFO webpage level-1 <br>

* Lev-2 consists of multiple filtering inputs, such as: "*Date*", "*City*", "*State*", "*Country*", "*Shape*" that allows user to further "tune-up" the query. <a href="https://henryle-n.github.io/JavaScript-Challenge/UFO-level-2/">**Click here**</a> for UFO webpage level-2 



<link rel="stylesheet" type="text/css" media="all" href="UFO-level-1/static/css/readmecss.css" />

---
<div align="center">
<img src="UFO-level-1/static/images/UFO.gif" atl="Aliens on their way" width="800" height="400" />
</div>  

---
## Tools/ Techniques/ Technologies
* HTML-5 | CSS-3 | JavaScript/ ECMAScript-5 | D3.js | Bootstrap-4 | DOM | Markdown
* Visual Studio Code Insiders | Live Server (*by R. Dey*) | Instant Markdown (*by D. Bankier*) | Google Chrome ver. 84x
* MacOS Mojave | Windows 10 Pro, ver. 1909 OS Build 18363.778

## Table of Contents
The main directory consists of 3 folders:
* **InDev** :: files for future development
* **UFO-level-1** :: contains apps and scripts of single filter
* **UFO-level-1** :: contains apps and scripts of multiple filters

Both Level-1 and Level-2 parts consists of same folders & files, as the following:  
* **static** 
    * **css** :: style sheet for webpage formating 
    * **images** :: images shown on webpage and `README.md`
    * **js** :: JavaScript to drive filters and make table from filtered array, & the original array of 111 objects
*  **index.html** :: webpage construction HTML codes 

## General Workflow
Both levels consists of the same workflow: 
* Retrieve user input(s) from front-end HTML by using D3 / HTML DOM
* Pass condition(s) into back-end JS functions and processes
* Filter out data and build table of filtered objects

**NOTE:** unlike level-1, level-2 has more sophisticated back-end program to dynamically build an object of filtering conditions and pass them into the second argument of the `Array.filter(callback, contextObject)` function everytime user submits new inputs. This will ensure data is retrieved effectively without refreshing the webpage

<a href="https://www.javascripttutorial.net/javascript-array-filter/">**Click here**</a> for detailed explaination of `filter` and `callback` functions 

## Other features
Besides multi-filters, there are also other features that increase user convenience:
* "**HINT**" box when hovering mouse over the input box to show user how to input data



<div class="row">
  <div class="column">
    <img src="UFO-level-1/static/images/hintBox0.png" alt="hintBox0" style="width:100%">
  </div>
  <div class="column">
    <img src="UFO-level-1/static/images/hintBox1.png" alt="Forest" style="width:100%">
  </div>
</div>




* Data Retrieval `STATUS` Box to inform user:
    * If data was found, or not found, or needs user input
    * Show how many records match user's query conditions
    * What time the data was retrieved

I'm very excited upon finishing up both of the levels as each of them gave me a different approach dealing with the level of complication. For the lev-1, I made it very simple for just getting the date and filtering it directly inside the on-click function. Lev-2 in another hand, is a complete different way of filtering the data. I learned about more or less "advanced" filter function where the 2nd argument can be passed in the filter to create more dynamic filtering based on user inputs. The filter conditions is an object that its length and content are changed based on how many and what conditions are fed into the input boxes from user. It took me two days with different ideas and trials and errors to finally found what works. The "this" keyword worked very well in for this model of filtering.
