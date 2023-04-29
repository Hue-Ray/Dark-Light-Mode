import './style.css'

const themeToggle = document.querySelector('.toggle-btn');
const yellowText = document.querySelector('.yellow-text');
const redText = document.querySelector('.red-text');
const greenText = document.querySelector('.green-text');

const theme = localStorage.getItem('theme');
if(theme) {
  document.body.classList.add(theme);
}

  themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if(document.body.classList.contains('dark-mode')){
    localStorage.setItem('theme', 'dark-mode');
  } else {
    localStorage.removeItem('theme');
  }
})

yellowText.addEventListener('click', () =>{
  document.body.classList.toggle('yellow-text')
})
redText.addEventListener('click', () => {
  document.body.classList.toggle('red-text')
})
greenText.addEventListener('click', () => {
  document.body.classList.toggle('green-text')
})