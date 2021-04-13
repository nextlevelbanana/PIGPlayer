/* 
*   Watches the song information at the bottom of the Soundcloud page for changes.
*   (This is slightly janky, it'll break if Soundcloud changes their CSS class names.) 
*   When it sees a change, it sends the new artist and title to the popup.
*/

const targetNode = document.querySelector(".playbackSoundBadge");

console.log("PIGPlayer is listening! You've got great taste in music.")

const config = {childList: true};

// Callback will be executed on every song change
const callback = function(mutationsList, observer) {
   const title = document.querySelector(".playbackSoundBadge__title a").title;
   const artist = document.querySelector(".playbackSoundBadge__titleContextContainer a").title;

   try {
     browser.runtime.sendMessage({artist, title});  
   } catch (e) {
       console.log(e)
   }

};

const observer = new MutationObserver(callback);

observer.observe(targetNode, config);