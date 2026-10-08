const musicSpace = document.querySelector("#music-space");
const songLine = document.querySelector("#song-line");

const notes = ["♪", "♫", "♬", "♩"];

const songTitles = [
  "Is This It",
  "Someday",
  "Reptilia",
  "12:51",
  "You Only Live Once",
  "Juicebox",
  "Under Cover of Darkness",
  "Taken for a Fool",
  "One Way Trigger",
  "Call It Fate, Call It Karma",
  "Brooklyn Bridge to Chorus",
  "Ode to the Mets"
];

let clickNumber = 0;

function addMusicNote(event) {
  const note = document.createElement("span");
  note.textContent = notes[clickNumber % notes.length];
  note.classList.add("music-note");

  const spaceBounds = musicSpace.getBoundingClientRect();
  note.style.left = `${event.clientX - spaceBounds.left}px`;
  note.style.top = `${event.clientY - spaceBounds.top}px`;
  musicSpace.appendChild(note);

  songLine.textContent = songTitles[clickNumber % songTitles.length];
  clickNumber++;
}

musicSpace.addEventListener("click", addMusicNote);