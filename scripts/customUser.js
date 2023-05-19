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

  // work in this feature, check if there is a local storage, if not, don't dislpay the fields for input

  try {
    localStorage.setItem('userName', userName.value);
  }
  catch(err) {
    console.log('Enable you cookies')
  }
})