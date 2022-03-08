const keyEls = document.querySelectorAll('.key');

function playSound(e) {
  const div = document.querySelector(`div[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (div === null || audio === null) return;
  div.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

function removeEffect(e) {
  const div = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (div === null) return;
  div.classList.remove('playing');
}
document.addEventListener('keydown', playSound);
document.addEventListener('keyup', removeEffect);
