/**
 * RECOMMENDATION
 *
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 *
 * The Developer Tools in Chrome are available under the "..." menu,
 * futher hidden under the option "More Tools." In Firefox, they are
 * under the hamburger (three horizontal lines), also hidden under "More Tools."
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for.
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and
     * return the appropriate object here. */

     /*
     1. Loop through each of the contents of each book.
     2. Once that is accessed, we can search the string for the searchTerm
     3. Return the isbn, line and page of the correct term
     */


     // adding all the objects that matches the search word here
     var list = [];


    //Looping through and retiving the text for each book
   for(var i = 0 ; i< scannedTextObj.length; i++){
      for(var j = 0; j< scannedTextObj[i].Content.length; j++){

        var currLine = scannedTextObj[i].Content[j].Text;

        //If the text is found in the book add where it was found to the list
      if(currLine.split(" ").includes(searchTerm)){
          list.push( {"ISBN": scannedTextObj[i].ISBN, "Page":scannedTextObj[i].Content[j].Page, "Line": scannedTextObj[i].Content[j].Line} );




        }



      }

    }



    var result = {
        "SearchTerm": searchTerm,
        "Results": list
    };

    return result;
}




/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            }
        ]
    },
//Added a second book for testing purposes
    {
        "Title": "New Day",
        "ISBN": "9780000974294",
        "Content": [
            {
                "Page": 1,
                "Line": 3,
                "Text": "Hello World"
            },
            {
                "Page": 2,
                "Line": 4,
                "Text": "beatuiful blue skies."
            },
            {
                "Page": 3,
                "Line": 10,
                "Text": "I was meant to be here."
            }
        ]
    }
]

/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}
//Sample output for term "and"
const twentyLeaguesOut2 = {
    "SearchTerm": "and",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 10
        }


    ]
}

//Sample output to find term "hello"
const twentyLeaguesOut3 = {
    "SearchTerm": "hello",
    "Results": [


    ]
}
//Sample output for term not found in book
const twentyLeaguesOut4 = {
    "SearchTerm": "unicorn",
    "Results": [


    ]
}



/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___|
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/

 */

/* We have provided two unit tests. They're really just `if` statements that
 * output to the console. We've provided two tests as examples, and
 * they should pass with a correct implementation of `findSearchTermInBooks`.
 *
 * Please add your unit tests below.
 * */

 //My unit tests
// Check if the term and was found, given an input.
const myTest1 = findSearchTermInBooks("and",twentyLeaguesIn);
if(JSON.stringify(twentyLeaguesOut2) === JSON.stringify(myTest1)){
  console.log("PASS: Test 3");
}else {
    console.log("FAIL: Test 3");
    console.log("Expected:", twentyLeaguesOut2);
    console.log("Received:", myTest1);
}
// Check if the term hello was found. (Case-sensitive test)
const myTest4 = findSearchTermInBooks("hello", twentyLeaguesIn);
if(JSON.stringify(twentyLeaguesOut3) === JSON.stringify(myTest4)){
  console.log("PASS: Test 4");
} else {
  console.log("FAIL: Test 4");
  console.log("Expected:", twentyLeaguesOut3);
  console.log("Received:", myTest4);
}

//If an entry is not found it should return an empty array.
const myTest5 = findSearchTermInBooks("unicorn", twentyLeaguesIn);
if(JSON.stringify(twentyLeaguesOut4) === JSON.stringify(myTest5)){
  console.log("PASS: Test 5");
} else {
  console.log("FAIL: Test 5");
  console.log("Expected:", twentyLeaguesOut4);
  console.log("Received:", myTest5);
}






/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */

const test2result = findSearchTermInBooks("the", twentyLeaguesIn);
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}
