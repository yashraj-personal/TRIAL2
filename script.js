(function () {
  const state = {
    mode: 'encrypt',
  };

  const el = {
    modeEncrypt: document.getElementById('mode-encrypt'),
    modeDecrypt: document.getElementById('mode-decrypt'),
    shift: document.getElementById('shift'),
    random: document.getElementById('btn-random'),
    input: document.getElementById('input-text'),
    output: document.getElementById('output-text'),
    run: document.getElementById('btn-run'),
    clear: document.getElementById('btn-clear'),
    copy: document.getElementById('btn-copy'),
  };

  function normalizeShift(raw) {
    const n = Number(raw);
    if (!Number.isFinite(n)) return 0;
    // Wrap into [-25, 25] to align with UI range and alphabet size 26
    let s = ((n % 26) + 26) % 26; // now in [0,25]
    if (s > 25) s = 25; // safety, though not needed
    return s;
  }

  function shiftChar(char, shift) {
    const code = char.charCodeAt(0);
    // Uppercase A-Z
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 + shift + 26) % 26) + 65);
    }
    // Lowercase a-z
    if (code >= 97 && code <= 122) {
      return String.fromCharCode(((code - 97 + shift + 26) % 26) + 97);
    }
    return char; // leave other chars unchanged
  }

  function caesarCipher(text, shift) {
    let out = '';
    for (let i = 0; i < text.length; i += 1) {
      out += shiftChar(text[i], shift);
    }
    return out;
  }

  function runCipher() {
    const rawShift = parseInt(el.shift.value, 10);
    const s = normalizeShift(rawShift);
    const input = el.input.value || '';
    const shift = state.mode === 'encrypt' ? s : -s;
    el.output.value = caesarCipher(input, shift);
  }

  function setMode(mode) {
    if (mode !== 'encrypt' && mode !== 'decrypt') return;
    state.mode = mode;
    el.modeEncrypt.classList.toggle('is-active', mode === 'encrypt');
    el.modeDecrypt.classList.toggle('is-active', mode === 'decrypt');
    runCipher();
  }

  function randomShift() {
    const s = Math.floor(Math.random() * 25) + 1; // 1..25
    el.shift.value = String(s);
    runCipher();
  }

  function clearAll() {
    el.input.value = '';
    el.output.value = '';
    el.input.focus();
  }

  async function copyOutput() {
    const text = el.output.value || '';
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      const prev = el.copy.textContent;
      el.copy.textContent = 'Copied!';
      setTimeout(() => { el.copy.textContent = prev; }, 1200);
    } catch (_) {
      // no-op
    }
  }

  // Wire up events
  el.modeEncrypt.addEventListener('click', () => setMode('encrypt'));
  el.modeDecrypt.addEventListener('click', () => setMode('decrypt'));
  el.random.addEventListener('click', randomShift);
  el.run.addEventListener('click', runCipher);
  el.clear.addEventListener('click', clearAll);
  el.copy.addEventListener('click', copyOutput);
  el.input.addEventListener('input', runCipher);
  el.shift.addEventListener('input', runCipher);

  // Initial run for defaults
  runCipher();
})();


