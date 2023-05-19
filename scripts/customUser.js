const userName = document.querySelector('#userInput'),
      inputField = document.querySelector('#userInput'),
      btn = document.querySelector('#btn'),
      cp = document.querySelector('#customPage')

btn.addEventListener('click', () => {

  cp.innerHTML = 
  `
    <p class='user-welcome'>Welcome ${userName.value}!</p>
  `
  btn.style.display = 'none'
  inputField.style.display = 'none'

  // try {
  //   localStorage.setItem('userName', userName.value);
  // }
  // catch(err) {
  //   console.log('Enable you cookies')
  // }
})