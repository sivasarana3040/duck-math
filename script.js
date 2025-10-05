const input = document.querySelector('#searchInput') || document.querySelector('input');
const games = document.querySelectorAll('#games img');

// Show MOTD on load and wire up close / accessibility controls
document.addEventListener('DOMContentLoaded', () => {
  const motd = document.getElementById('motd');
  if (motd) {
    // Show modal
    motd.style.display = 'flex';
    motd.setAttribute('aria-hidden', 'false');
    // Focus management
const firstFocusable = motd.querySelector('.motd-close') || motd.querySelector('button, [href], input, select, textarea, [tabindex]');
if (firstFocusable) firstFocusable.focus();

// Close button
const close = motd.querySelector('.motd-close');
if (close) {
  close.addEventListener('click', () => closeMotd(motd));
}

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && motd.getAttribute('aria-hidden') === 'false') {
    closeMotd(motd);
  }
});

// Click outside to close
motd.addEventListener('click', (e) => {
  if (e.target === motd) closeMotd(motd);
});
 }
});

function closeMotd(motd) {
  motd.style.display = 'none';
  motd.setAttribute('aria-hidden', 'true');
  // return focus to search input for accessibility
  const search = document.querySelector('#searchInput') || document.querySelector('input');
  if (search) search.focus();
}

// Search filtering
if (input) {
  input.addEventListener('input', () => {
    const searchTerm = input.value.trim().toLowerCase();
    games.forEach(game => {
      const alt = game.alt || '';
      game.style.display = alt.toLowerCase().includes(searchTerm) ? 'block' : 'none';
    });
  });
} else {
  console.warn('Search input not found');
}
