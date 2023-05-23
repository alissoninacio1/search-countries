const list = document.querySelector('#list')
//original link
// const url = 'https://restcountries.com/v3.1/all'
//
const url = 'https://raw.githubusercontent.com/alissoninacio1/countries-api-project/main/restcountries.json'



fetch(url)
   .then(response => response.json())
   .then(data => { 

        //------------------DISPLAY A LIST OF COUNTRIES---------------------

        //it returns an array containing the given object's own enumerable string-keyed property values
        const countries = Object.values(data)

        //array that will contain the countries names
        let countriesArray = []

        countries.forEach(e => {
        //each value got from the object is added to the array
        //this is for separate the countries names of the JSON
            countriesArray.push(e.name.common)
            // console.log('contagem')
            // console.log(countries)
        })

        //sort the the countries names
        countriesArray.sort()

        //display the elements dynamically
        countriesArray.forEach(el => {
            //this '+' is for adding the elements one after another
            list.innerHTML += `
                <li class='countries-list'>
                    <a href='#' id='${el.toLowerCase()}'>
                        ${el}
                    </a>               
                </li>    
            `
        })


        //------------------DISPLAY COUNTRIES DETAILS--------------------

        const links = document.querySelectorAll('.countries-list') 
        console.log(links)

        // 'a' is the the country
        links.forEach( a => {
            a.addEventListener('click', () => {

                //select where to include the country details
                const details = document.querySelector('#country-details')

                //assign the value of each innerText to a variable
                                //The innerText property of the HTMLElement interface represents the "rendered" 
                //text content of a  node and its descendants.
                let countryName = a.innerText
                //then, use the findIndex that match the value describe in the innerText
                // The findIndex() method returns the index of the first element in an array 
                //that satisfies the provided testing function.
                //test - find the index of the objetc whose 'el.name.common' (this piece is taken from the object) 
                //is equal to the innerText inside the a links. 
                let countryMatch = countries.findIndex(el => el.name.common == countryName)
                const selection = countries[countryMatch]

                // console.log(countryMatch)
                // console.log(`${selection.name.common}  and ${selection.name.official}`)


                //this '+' won't be added to this piece of code, since it adds the elements one after another
                //and we want to display 
                details.innerHTML = 
                

                    `
                    <p>
                        ${selection.name.common}
                    </p>
                
                    <p>
                        ${selection.name.official}
                    </p>

                    <img src=${selection.flags.png} alt=${selection.flags.alt}>
                    
                    `
                    //flag.svg or flag.png or flag.alt
                    //svg can get an error in case of using ad blocks or vpn - Getting "net::ERR_BLOCKED_BY_CLIENT" 

                alert(`Voce clicou em ${countryName}`)


            })

        })
           

    })
    .catch(err => console.log('Fetch Error :', err));



