//You can edit ALL of the code here
// let searchBox;
// let allEpisodes;


// function setup() {
//   allEpisodes = getAllEpisodes();
//   makePageForEpisodes(allEpisodes);
// }

// function makePageForEpisodes(episodeList) {
//   const rootElem = document.getElementById("root");

//   rootElem.textContent = "";
// }

let searchBox;
let allEpisodes;

function setup() {
  allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);

  searchBox = document.querySelector("#searchInput");
  searchBox.addEventListener("keyup", searchEpisodes);
}


window.onload = setup;
