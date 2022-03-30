
/*
    Task: Capture the user's search query
    1. Add an event listener for 'keyup'
    2. Capture the event in a 'let' called 'searchQuery' - storing the value
    3. Make sure the captured value is lowercase
    4. Log to the console to demonstrate it works



let username = document.getElementById('usernameInput')
        username.addEventListener('keyup', function(event) {
    let username = event.target.value.toLowerCase();
    console.log(username);
})

/*
    Task: Get all the name elements from the DOM
    1. Create a new 'let' called 'allNamesDOMCollection'
    2. Store all the elements of classname 'name' in 'allNamesDOMCollection'
    3. Log to the console 'allNamesDOMCollection' to demonstrate that an HTMLCollection exists
    4. Log out the first index of allNamesDOMCollection and add 'textContent' to view a name


document.getElementById("searchInput").addEventListener("keyup", function(event) {
    let searchQuery = event.target.value.toLowerCase();
    let allNamesDOMCollection = document.getElementsByClassName('name');
    console.log(allNamesDOMCollection[1].textContent);
});


/*
    Task: Loop over all our names
    1. Create a new for loop with a incremental counter, called 'counter'
    2. Make sure the counter is less than the allNamesDOMCollection.length in the loop conditional
    3. Declare a const called 'currentName' and store the textContext
    4. Make sure the 'currentName' is lowercase
    5. Log out the 'currentName' so we can see all the names from the loop!



document.getElementById("searchInput").addEventListener("keyup", function(event) {
    let searchQuery = event.target.value.toLowerCase();
    let allNamesDOMCollection = document.getElementsByClassName('name');

    for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
        const currentName = allNamesDOMCollection[counter].textContent.toLowerCase();
        console.log(currentName);
    }
});


Task: Comparing the search query vs. the DOM names
1. Create a conditional that checks if currentName is equal to the user's search query!
2. If our conditional returns true, set the display style on 'allNamesDOMCollection[counter]' to be a block element
3. If our conditional falls into the else, we have no match! So set the display style to 'none'

Helpers: use the methods 'includes' for objective 1
- The includes() method determines whether one string may be found within another string, returning true or false as appropriate.
*/

document.getElementById("searchInput").addEventListener("keyup", function(event) {
    let searchQuery = event.target.value.toLowerCase();
    let allNamesDOMCollection = document.getElementsByClassName('name');
    console.log(allNamesDOMCollection);

    for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
        const currentName = allNamesDOMCollection[counter].textContent.toLowerCase();
        if(currentName.includes(searchQuery))
        {
          allNamesDOMCollection[counter].style.display = "block"

        }

        else
        {
            allNamesDOMCollection[counter].style.display = "none";

        }


        // console.log(currentName);
    }

})

