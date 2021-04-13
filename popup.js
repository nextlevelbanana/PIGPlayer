/*
*   When listener.js sends updated song information,
*   this overwrites the relevant spans in popup.html
*   with the new information.
*/
browser.runtime.onMessage.addListener(song => {
  document.getElementById("artist").innerHTML = song.artist;
  document.getElementById("title").innerHTML = song.title;
});