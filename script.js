//You can edit ALL of the code here


let searchBox;
let allEpisodes;

function setup() {
  allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);

  searchBox = document.querySelector("#searchInput");
  searchBox.value = "";
  searchBox.addEventListener("keyup", searchEpisodes);

  createEpisodeList(allEpisodes);

  let selectBox = document.getElementById("selectInput");
  selectBox.addEventListener("click", selectEp);
}

window.onload = setup;
