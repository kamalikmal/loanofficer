/* AUDIO SYSTEM & CONTROLS */
const audioSettings = {
  bgmEnabled: true,
  sfxEnabled: true
};

const audioTracks = {
  bgm: new Audio("bgmusic.mp3"),
  pageturn: new Audio("pageturn.mp3"),
  stamp: new Audio("stamp.mp3"),
  coin: new Audio("coin.mp3"),
  winning: new Audio("winning.mp3"),
  lose: new Audio("lose.mp3")
};

audioTracks.bgm.loop = true;
audioTracks.bgm.volume = 0.25;

function playBgm() {
  if (!audioSettings.bgmEnabled) return;
  audioTracks.bgm.play().catch(() => {});
}

function stopBgm() {
  audioTracks.bgm.pause();
  audioTracks.bgm.currentTime = 0;
}

function playSfx(trackName) {
  if (!audioSettings.sfxEnabled) return;
  const sfx = audioTracks[trackName];
  if (sfx) {
    sfx.currentTime = 0;
    sfx.volume = 0.7;
    sfx.play().catch(() => {});
  }
}

function stopEndingSfx() {
  audioTracks.winning.pause();
  audioTracks.winning.currentTime = 0;
  audioTracks.lose.pause();
  audioTracks.lose.currentTime = 0;
}

function toggleBgm() {
  audioSettings.bgmEnabled =!audioSettings.bgmEnabled;
  const btn = document.getElementById("btn-toggle-bgm");
  if (!btn) return;

  if (audioSettings.bgmEnabled) {
    btn.textContent = "ON";
    btn.style.backgroundColor = "#2e7d32";
    audioTracks.bgm.play().catch(() => {});
  } else {
    btn.textContent = "OFF";
    btn.style.backgroundColor = "#c62828";
    audioTracks.bgm.pause();
  }
}

function toggleSfx() {
  audioSettings.sfxEnabled =!audioSettings.sfxEnabled;
  const btn = document.getElementById("btn-toggle-sfx");
  if (!btn) return;

  if (audioSettings.sfxEnabled) {
    btn.textContent = "ON";
    btn.style.backgroundColor = "#2e7d32";
    playSfx("pageturn");
  } else {
    btn.textContent = "OFF";
    btn.style.backgroundColor = "#c62828";
  }
}