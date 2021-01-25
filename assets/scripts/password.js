const PASSWORD = 'password'
const TEXT = 'text'

const passwordIcon = document.querySelector('.preview_icon')
const passwordField = document.querySelector('.password_input')
const eyeIcon = document.querySelector('.fas')

eyeIcon.classList.add('fa-eye')

function togglePassword () {
  if (passwordField.type === PASSWORD) {
    passwordField.type = TEXT

    eyeIcon.classList.remove('fa-eye')
    eyeIcon.classList.add('fa-eye-slash')
  } else {
    passwordField.type = PASSWORD

    eyeIcon.classList.add('fa-eye')
    eyeIcon.classList.remove('fa-eye-slash')
  } 
}

passwordIcon.addEventListener('click', togglePassword);