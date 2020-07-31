# ::: Area 51: Home of Flying Saucers? Where else? :::
## 1. Background
Unidentified Flying Objects, or UFOs are one of the most controversial topics at all time. Folks that believe Aliens are real think UFOs are their spaceships; yet, folks that don't believe said it may be just a weird bird or an military secret airplane, or simply just something up in the sky that is too far away to recognize.

Interestingly enough, in this project, the dataset is a JavaScript array of **111** objects. The goal is to build a interative web application to help users (UFO Trackers) quickly query the data related to UFO sightings based on different input conditions and then quickly return a data table. The table size (rows x columns) is changed dynamically based on the amount of retrieved data.

There are two different "levels" built for this project:  
* Lev-1 consists of a simple "*Date*" filter input.  
     * <a href="https://henryle-n.github.io/JavaScript-Challenge/UFO-level-1/">**Click here**</a> for UFO webpage level-1 demo.   
      
* Lev-2 consists of multiple filtering inputs, such as: "*Date*", "*City*", "*State*", "*Country*", "*Shape*" that allows user to further "tune-up" the query.  
    * <a href="https://henryle-n.github.io/JavaScript-Challenge/UFO-level-2.A/">**Click here**</a> for UFO webpage level-2 demo.
    * **NOTE:** There are two "sub-branches" for level-2 labeled: "*2A*", "*2B*". The difference is that *2B* is an improved version with more efficient coding techniques/ workflow compare to *2A*. Everything else remains the same.
    * Both versions of this level 2 are purposely uploaded on GitHub to show fellow programmers that there are many ways to accomplish the same thing. However, one way could be more efficient than others.


<link rel="stylesheet" type="text/css" media="all" href="https://github.com/henryle-n/JavaScript-Challenge/blob/master/UFO-level-1/static/css/readmecss.css"/>

---
<div align="center">
<img src="UFO-level-1/static/images/UFO.gif" atl="Aliens on their way" width="750" height="350"/>
</div>  

---
## 2. Tools/ Techniques/ Technologies
* Lauguages:
  * HTML-5 | CSS-3 | JavaScript (ES-6) | Markdown
* Web Developement Libraries:
  * D3.js (DOM) | Bootstrap-4  
* Applications:
  * Visual Studio Code | Live Server (*by R. Dey*) | Instant Markdown (*by D. Bankier*) | Google Chrome ver. 84x
* Operating Systems:
  * Windows 10 Pro (ver. 1909) | MacOS Mojave

## 3. Table of Contents
The main directory consists of 3 folders:
* **UFO-level-1** :: contains apps and scripts of single filter (by '*Date*')
* **UFO-level-2.A** :: contains apps and scripts of multiple filters
* **UFO-level-2.B** :: improved version of JS, everything else is same as *2.A*

Both Level-1 and Level-2 parts consists of same folders & files, as the following:  
* **static** 
    * **css** :: style sheet for formating homepage. 
    * **images** :: images shown on webpage and `README.md`.
    * **js** :: 
      *  JS array of 111 objects
      * JS codes to drive filters and make table from the filtered data.
*  **index.html** :: homepage of this project.

## 3. General Workflow
Both levels consist of the same workflow: 
* Fetch user input(s) from front-end homepage by using D3.js DOM.
* Pass query condition(s) to JS functions and processes.
* Filter out relevant data and build table, using same D3.js DOM.

**NOTE:** unlike level-1, level-2 JS is a bit more sophisticated.
* First, JS dynamically builds an object of user input filters.
* Then, this input object is passed into the second argument of **`Array.filter(callback, contextObject)`** function everytime user submits new inputs. This will ensure data is retrieved effectively without the need of refreshing webpage.
* The key of lev-2 success is the `contextObject` of this filter function. <a href="https://www.javascripttutorial.net/javascript-array-filter/">**Click here**</a> for detailed explaination of **`filter`** and **`callback`** functions. 

## Summary
* D3, DOM & JavaScript introduce a whole new level of dynamic webpage and enhance interactive capability
* Thanks to these back-end drivers, data is filtered effectively based on user input(s). The summary table is then dynamically built and its size adapts to the updated amount of returned data upon every new user query request
* In Lev-2.A, by passing the 2<sup>nd</sup> argument into the **`Array.filter()`** function and using **`this`** keyword, the webpage now unlocks unlimited filtering scenarios/ results for user as the filters changed in real-time  based on user input
* In Lev-2.B, a more efficient loop is built to loop through each user input and filter out data. The loop will end when there is no more user input found. In other word, the data is filter at each condition as soon as it is created, different from Lev-2.A in the way that all of its filters were created first and then filter. Lev-2.B is more like a synchronous process that is more effient and eliminate the first loop when the filter was first built

## Other features
Besides multi-filters, there are also other features to enhance UX/UI:
* "**HINT**" box appears when user hovers mouse over the input box
* Input data is not case-sensitive, accepts all lower and/or uppper cases
* Either hit `Run Filter` button or hit `Enter` key, webpage filter function will run 

<div align="center">
<img src="UFO-level-1/static/images/hintBox.gif" alt="hintBox" width="80%" height="80%">
</div><br>

* Data Retrieval `STATUS` Box to inform user:
    * If data was found, or not found, or needs user input
    * Show how many records match user's query conditions
    * What time the data was retrieved
    * When webpage first loaded, status box shows different message to prompt user for input(s). Upon clicking filter button or hit enter key, the message text color and background will change

<div align="center" class="row3">
  <div class="column3">
    <img src="UFO-level-1/static/images/sitRep2.PNG" alt="sitRep2" width="80%" height="80%">
  </div>
</div>

<div align="center" class="row3">
  <div class="column3">
    <img src="UFO-level-1/static/images/sitRep0.PNG" alt="sitRep0" width="80%" height="80%">
  </div>
</div>

<div align="center" class="row3">
  <div class="column3">
    <img src="UFO-level-1/static/images/sitRep1.PNG" alt="sitRep1"  width="80%" height="80%">
  </div>
</div>


