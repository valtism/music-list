// This is a hack to get Safari on iOS to load audio immediately.
// Without this, there is a delay in playing sounds.
export function initIosAudio() {
  const AudioContext = window.AudioContext;
  new AudioContext();
}
