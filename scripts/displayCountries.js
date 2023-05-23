const list = document.querySelector('#list')
const url = 'https://raw.githubusercontent.com/alissoninacio1/countries-api-project/main/restcountries.json'



fetch(url)
   .then(response => response.json())
   .then(data => { 

        //it returns an array containing the given object's own enumerable string-keyed property values
        const countries = Object.values(data)

        //array that will contain the countries names
        let countriesArray = []

        countries.forEach(e => {
        //each value got from the object is added to the array
        //this is for separate the countries names of the JSON
            countriesArray.push(e.name.common)

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


        const links = document.querySelectorAll('a[href]') 
        console.log(links)
        //use the event to onclick to match the href attribute
        //after click, if the country match the href selected, then add a class that display on index z=2 and display an html
        // for exhibits the data from the countries
           

    })
    .catch(err => console.log('Fetch Error :', err));



