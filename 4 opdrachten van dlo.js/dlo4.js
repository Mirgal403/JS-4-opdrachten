let btnOpen = document.getElementById('open');
let btnClose = document.getElementById('close');
let container = document.querySelector('.container');

btnClose.onclick = function () {
  container.classList.add('hide'); // Verberg de container
  btnClose.classList.add('hide'); // Verberg de sluitknop
  btnOpen.classList.remove('hide'); // Toon de openknop
};

btnOpen.onclick = function () {
  container.classList.remove('hide'); // Toon de container
  btnOpen.classList.add('hide'); // Verberg de openknop
  btnClose.classList.remove('hide'); // Toon de sluitknop
};