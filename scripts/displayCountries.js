const list = document.querySelector('#list')
export const url = 'https://raw.githubusercontent.com/alissoninacio1/countries-api-project/main/restcountries.json'



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
                    <a href="#">
                        ${el}
                    </a>               
                </li>    
            `
        })

    })
    .catch(err => console.log('Fetch Error :', err));



