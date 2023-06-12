const themeSwitch = document.getElementById('theme-switch');

themeSwitch.addEventListener('change', function() {
  if (this.checked) {
    document.documentElement.style.setProperty('--background-color', '#fff');
    document.documentElement.style.setProperty('--text-color', '#000');
    console.log('throwing a flashbang')
  } else {
    document.documentElement.style.setProperty('--background-color', '#000');
    document.documentElement.style.setProperty('--text-color', '#fff');
  }
});