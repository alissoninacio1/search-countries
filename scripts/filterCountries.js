const search = document.querySelector('#search')

//add the event to the search bar to filter the elements
//keyup- the event will be fired when the user releases a key  - Keyboard events
search.addEventListener('keyup', () => {

    //select by class all elements displayed
    //this will allow us to use the classList methods after.
    //it returns a node list with all 'a' elements
    let locations  = document.querySelectorAll('.countries-list')

    let input = document.querySelector('#search').value
    
    for (let names of locations) {
        //boolean variable to filter data
        let filter = names.textContent.toLowerCase().
                       includes(input.toLowerCase())
                       
        //using a ternary operator instead of if/else structure
        filter ? 
            names.classList.remove('location-hidden')                
            : names.classList.add('location-hidden')                      
     }

    //this code can do the same

    // for (let names of places) {
    //     // console.log(names.textContent)
    //     if(names.textContent.toLowerCase()
    //         .includes(input.toLowerCase())) {
    //             names.classList.remove('location-hidden')                
    //         }
    //         else {
    //             names.classList.add('location-hidden')               
    //         }
    //  }
})