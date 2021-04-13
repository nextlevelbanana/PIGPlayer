/*
*   When listener.js sends updated song information,
*   this overwrites the relevant spans in popup.html
*   with the new information.
*/
browser.runtime.onMessage.addListener(song => {
  document.getElementById("artist").textContent = song.artist;
  document.getElementById("title").textContent = song.title;
});