// take text from the input field -> var for input.innerText ?
// case insensitive.. -> toLowerCase ?
// and compare it with names of episodes -> include() ?
// show only episodes which contain search input ->

//let episodesList = getAllEpisodes();

//let searchBox = document.querySelector("#searchInput");
console.log(searchBox.value);
let filteredEpisodes = episodesList.filter(
  (episode) =>
    episode.name.toLowerCase().includes(searchBox.value.toLowerCase()) ||
    episode.summary.toLowerCase().includes(searchBox.value.toLowerCase())
);
console.log(filteredEpisodes);



// searchBar.addEventListener("keyup", searchEpi);

// function searchEpi() {

//   episodesList.forEach(
//     (episode) =>
//       function () {
//         let img = document.querySelector(".pic");
//         if (
//           episode.name.toLowerCase().includes(searchBar.value.toLowerCase()) ||
//           episode.summary.toLowerCase().includes(searchBar.value.toLowerCase())
//         ) {
//           img.classList.add("show");
//         } else {
//           img.classList.add("hide");
//         }
//         counter++;
//       }
//   );
// }
