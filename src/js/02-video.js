import Throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_KEY = 'videoplayer-current-time';

player.on('timeupdate', Throttle(onPlay, 1000));

function onPlay(e) {
  localStorage.setItem(LOCAL_KEY, e.seconds);
}

setCurrentTime();

function setCurrentTime() {
  const savedTime = localStorage.getItem(LOCAL_KEY);
  console.log(savedTime);
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
}
