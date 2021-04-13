// Opens a new window to display the current song information.
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('launcher').addEventListener('click', () => {
      window.open(browser.extension.getURL("popup.html"), "PIGPLAYER_WINDOW", "width=600, height=75,toolbar=no, menubar=no");
  });
});