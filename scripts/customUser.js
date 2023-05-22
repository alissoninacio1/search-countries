const userName = document.querySelector('#userInput'),
      // inputField = document.querySelector('#userInput'),
      btn = document.querySelector('#btn'),
      cp = document.querySelector('#customPage')

//the variable message will take the second argument of the sentence!
//Because the first one is undefined in the first time the compiler reads it. 
//(we don't have an item called userName) in the localStorage
//if the first one exists (after run once), then it will take the
//localStorage.getItem() value

let message = localStorage.getItem('userName') || ''

//display content function
const displayInputAndButton  = (value) => {
  btn.style.display = value
  userName.style.display = value
} 


//render the userName to the screen
const  renderUser = (name) => {
  cp.innerHTML = 
  `
    <p class='user-welcome'>Welcome ${name}!</p>
  `
  // btn.style.display = 'none'
  // inputField.style.display = 'none'
  displayInputAndButton('none')
}



//if there is a name stored, then the user is rendered and the input is not showed
if (message) {
  renderUser(message)
} 
//if not, the input is showed and the input will ask to add a userName
//the event will be available again
else {

  btn.addEventListener('click', () => {
    renderUser(userName.value)
    console.log('user name added')

    try {
      localStorage.setItem('userName', userName.value);
    }
    catch(err) {
      console.log('Enable your cookies')
    }
  })
  
}

//------change the userName feature ------

//targeting the button
const btnChange = document.querySelector('#btn-change')

//when the button is clicked, the  localStorage will be cleared.
//Then, the user will be able to add another name and
//the p element won't be displayed until a new name be added
//pass an event as argument in case of preventDefault()
btnChange.addEventListener('click', (e) => {

  //clear the localStorage to add a new name
  localStorage.clear()

  console.log('user elimininated')

  //display input and button again
  displayInputAndButton('inline')
  
  //remove the first child of the custom page div if it exists
  if (cp.firstElementChild) {
    cp.firstElementChild.remove()
  } 
  //if not, don't allow the event 
  else {
    e.preventDefault()

    alert('There is no user. Please, provide your name!')    
  }

  //restart the input values - assigning the value as undefined
  userName.value = ''  
  //test
  console.log(` test to see the message value: --${message} inside the event--.`)
})

//test
window.onload = () => {
  console.log(`the message is: --${message} --. outside the event`)
}

