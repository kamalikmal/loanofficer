/* AUDIO SYSTEM THE APPROVAL */
let isBgmEnabled = true;
let isSfxEnabled = true;

const BGM_TARGET_VOL = 0.25;
let currentBgmKey = null;
let fadeInterval = null;
let activeEndingAudio = null;

const bgmTracks = {
  home: new Audio('bgm_home.mp3'),
  day: new Audio('bgm_day.mp3'),
  night: new Audio('bgm_night.mp3')
};

Object.values(bgmTracks).forEach(audio => {
  audio.loop = true;
  audio.volume = 0;
});

const sfxFiles = {
  pageturn: new Audio('pageturn.mp3'),
  stamp: new Audio('stamp.mp3'),
  coin: new Audio('coin.mp3'),
  winning: new Audio('winning.mp3'),
  lose: new Audio('lose.mp3')
};

function playBgm(key) {
  if (!key) key = 'home';
  if (!bgmTracks[key]) return;

  // Jika lagu yang diminta sedang berputar, jangan di-restart
  if (currentBgmKey === key &&!bgmTracks[key].paused) {
    return;
  }

  currentBgmKey = key;

  if (fadeInterval) {
    clearInterval(fadeInterval);
    fadeInterval = null;
  }

  // Matikan track musik lainnya
  Object.keys(bgmTracks).forEach(k => {
    if (k!== key) {
      bgmTracks[k].pause();
      bgmTracks[k].currentTime = 0;
      bgmTracks[k].volume = 0;
    }
  });

  if (!isBgmEnabled) return;

  const targetTrack = bgmTracks[key];
  targetTrack.volume = 0;

  const playPromise = targetTrack.play();
  if (playPromise!== undefined) {
    playPromise.then(() => {
      let vol = 0;
      fadeInterval = setInterval(() => {
        vol = Math.min(BGM_TARGET_VOL, vol + 0.025);
        targetTrack.volume = vol;
        if (vol >= BGM_TARGET_VOL) {
          clearInterval(fadeInterval);
          fadeInterval = null;
        }
      }, 35);
    }).catch(err => {
      // Autoplay dicegah browser, tunggu interaksi pertama pemain
      const unlockAudio = () => {
        if (currentBgmKey === key && isBgmEnabled) {
          targetTrack.volume = BGM_TARGET_VOL;
          targetTrack.play().catch(() => {});
        }
        window.removeEventListener('click', unlockAudio);
        window.removeEventListener('keydown', unlockAudio);
      };
      window.addEventListener('click', unlockAudio);
      window.addEventListener('keydown', unlockAudio);
    });
  }
}

function stopBgm() {
  currentBgmKey = null;
  if (fadeInterval) {
    clearInterval(fadeInterval);
    fadeInterval = null;
  }
  Object.values(bgmTracks).forEach(track => {
    track.pause();
    track.currentTime = 0;
    track.volume = 0;
  });
}

function toggleBgm() {
  isBgmEnabled =!isBgmEnabled;
  const btn = document.getElementById("btn-toggle-bgm");
  if (btn) {
    btn.textContent = isBgmEnabled? "ON": "OFF";
    btn.style.backgroundColor = isBgmEnabled? "#2e7d32": "#c62828";
  }
  if (!isBgmEnabled) {
    if (currentBgmKey && bgmTracks[currentBgmKey]) {
      bgmTracks[currentBgmKey].pause();
    }
  } else {
    const trackToResume = currentBgmKey || 'day';
    currentBgmKey = null;
    playBgm(trackToResume);
  }
}

function playSfx(name) {
  if (!isSfxEnabled ||!sfxFiles[name]) return;

  // Tangani sfx ending agar instance audio yang berputar tersimpan di memori
  if (name === 'winning' || name === 'lose') {
    stopEndingSfx();
    activeEndingAudio = sfxFiles[name].cloneNode();
    activeEndingAudio.volume = 0.6;
    activeEndingAudio.play().catch(() => {});
    return;
  }

  // SFX singkat biasa
  const sfx = sfxFiles[name].cloneNode();
  sfx.volume = 0.6;
  sfx.play().catch(() => {});
}

function toggleSfx() {
  isSfxEnabled =!isSfxEnabled;
  const btn = document.getElementById("btn-toggle-sfx");
  if (btn) {
    btn.textContent = isSfxEnabled? "ON": "OFF";
    btn.style.backgroundColor = isSfxEnabled? "#2e7d32": "#c62828";
  }
}

function stopEndingSfx() {
  // Hentikan instance audio clone yang sedang menyala
  if (activeEndingAudio) {
    activeEndingAudio.pause();
    activeEndingAudio.currentTime = 0;
    activeEndingAudio = null;
  }
  // Reset audio bawaan
  if (sfxFiles.winning) {
    sfxFiles.winning.pause();
    sfxFiles.winning.currentTime = 0;
  }
  if (sfxFiles.lose) {
    sfxFiles.lose.pause();
    sfxFiles.lose.currentTime = 0;
  }
}