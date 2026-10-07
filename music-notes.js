const musicSpace = document.querySelector("#music-space");

const notes = ["♪", "♫", "♬", "♩"];
let noteNumber = 0;

function addMusicNote(event) {
  const note = document.createElement("span");

  note.textContent = notes[noteNumber % notes.length];
  note.classList.add("music-note");

  const spaceBounds = musicSpace.getBoundingClientRect();
  note.style.left = `${event.clientX - spaceBounds.left}px`;
  note.style.top = `${event.clientY - spaceBounds.top}px`;

  musicSpace.appendChild(note);
  noteNumber++;
}

musicSpace.addEventListener("click", addMusicNote);