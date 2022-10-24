function notify(message) {
  let divNotif = document.getElementById('notification');
  divNotif.textContent = message;
  divNotif.style.display = 'block';
  divNotif.addEventListener('click', hideDiv);
  function hideDiv() {
    divNotif.style.display = 'none';
  }
}