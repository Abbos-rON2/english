export default function cardAudio(element) {
  const audio = document.createElement('audio');
  audio.src = `./data/${element.audioSrc}`;
  audio.play();
}
