PLAY = '▶';
PAUSE = '▌▌';
var yt_video_play_pause = document.getElementsByClassName('ytp-play-button')[0];
if (yt_video_play_pause && !document.getElementsByClassName('js-hoge-splash')[0]) {
  var splash_element = document.createElement('div');
  splash_element.style = [
    'position: fixed',
    'top: 0',
    'left: 0',
    'width: 100%',
    'height: 100%',
    'background: #FFFFFF',
    'z-index: 9999',
  ].join(';');
  splash_element.className = 'js-hoge-splash';

  var play_pause = document.createElement('button');
  play_pause.style = [
    'position: fixed',
    'top: 45%',
    'left: 45%',
    'width: 180px',
    'height: 100px',
    'font-size: 20px',
  ].join(';');
  play_pause.is_playing = (yt_video_play_pause.getAttribute('aria-label') === 'Pause');
  play_pause.textContent = play_pause.is_playing ? PAUSE : PLAY;

  play_pause.onclick = function () {
    yt_video_play_pause.click();
    play_pause.is_playing = !play_pause.is_playing;
    if (play_pause.is_playing) {
      this.textContent = PAUSE;
    } else { /* aria-label === 'Pause' */
      this.textContent = PLAY;
    }
  };

  var close_button = document.createElement('button');
  close_button.style = [
    'position: fixed',
    'top: 5%',
    'left: 5%',
    'width: 40px',
    'height: 30px',
  ].join(';');
  close_button.textContent = '✕';
  close_button.onclick = function () {
      document.getElementsByTagName('body')[0].removeChild(splash_element);
  };

  splash_element.appendChild(play_pause);
  splash_element.appendChild(close_button);
  document.getElementsByTagName('body')[0].appendChild(splash_element);
}