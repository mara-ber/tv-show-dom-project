//You can edit ALL of the code here

let allShows;
let allEpisodes;
let searchBox;


function setup() {
  allShows = getAllShows().sort(compare);
  createShowList(allShows);
  makePageForShows(allShows);

  allEpisodes = getAllEpisodes();
  //makePageForEpisodes(allEpisodes);


  searchBox = document.querySelector("#searchInput");
  searchBox.value = "";
  searchBox.addEventListener("keyup", searchEpisodes);

  createEpisodeList(allEpisodes);

  let selectBox = document.getElementById("selectInput");
  selectBox.addEventListener("click", selectEp);
}

function displaySE(num1, num2) {
  let s = "0";
  let e = "0";
  if (num1 > 9 && num2 > 9) {
    s = "";
    e = "";
  }
  if (num1 > 9 && num2 <= 9) {
    s = "";
  }
  if (num1 <= 9 && num2 > 9) {
    e = "";
  }
  return `S${s}${num1}E${e}${num2}`;
}

function makePageForEpisodes(episodeList) {
  //debugger;
  const rootElem = document.getElementById("root");
  rootElem.textContent = "";

  episodeList.forEach((episode) => {
    //div for the episode
    let divEp = document.createElement("div");
    divEp.classList.add("episode");
    divEp.id = episode.id;
    rootElem.appendChild(divEp);

    //div for the episode's img
    let divImg = document.createElement("div");
    divEp.appendChild(divImg);
    divImg.classList.add("pic");
    let img = document.createElement("img");
    img.src = episode.image.medium;
    divImg.appendChild(img);

    //div for content of the episode: a name(h2), 
    //a number of the episode and season(h3), and description(p)
    let divCont = document.createElement("div");
    divEp.appendChild(divCont);
    let name = document.createElement("h2");
    name.innerText = episode.name;
    divCont.appendChild(name);
    let h3 = document.createElement("h3");
    h3.innerHTML = displaySE(episode.season, episode.number);
    divCont.appendChild(h3);
    let p = document.createElement("p");
    p.innerHTML = episode.summary;
    divCont.appendChild(p);


    // the link for the episode
    let a = document.createElement("a");
    let link = document.createTextNode("watch the episode on TVMaze.com");
    a.appendChild(link);
    a.href = episode.url;
    divCont.appendChild(a);
  });
}

//search on the page
function searchEpisodes() {
  let filteredEpisodes = allEpisodes.filter((episode) =>
    episodeMatches(episode, searchBox.value)
  );
  let p = document.querySelector("#display");
  p.innerText = `${filteredEpisodes.length}/${allEpisodes.length} episodes`;

  makePageForEpisodes(filteredEpisodes);
}

function episodeMatches(ep, searchWord) {
  return (
    ep.name.toLowerCase().includes(searchWord.toLowerCase()) ||
    ep.summary.toLowerCase().includes(searchWord.toLowerCase())
  );
}

// // list of shows in select fiels
// function createShowList(shows) {
//   let select = document.getElementById("selectShow");
//   let option = document.createElement("option");
//   option.innerText = "all shows";
//   select.appendChild(option);
//   //let showsNames = shows.map() 
//   shows.forEach((show) => {
//     let option = document.createElement("option");
//     option.innerHTML = show.name;
//     select.appendChild(option);
//   });
// }

//episodes list for select input
function createEpisodeList(episodes) {
  let select = document.getElementById("selectInput");
  let option = document.createElement("option");
  option.innerText = "all episodes";
  select.appendChild(option);
  episodes.forEach((episode) => {
    let option = document.createElement("option");
    option.innerHTML = `${displaySE(episode.season, episode.number)} - ${
      episode.name
      }`;
    select.appendChild(option);
  });
}

function episodeSelected(ep, chosenEp) {
  let epCode = `${displaySE(ep.season, ep.number)} - ${ep.name}`;
  return epCode === chosenEp;
}

function selectEp() {
  let selectedEp = document.getElementById("selectInput").value;
  console.log(selectedEp);
  if (selectedEp === "all episodes") {
    makePageForEpisodes(allEpisodes);
  } else {
    let filteredEpisode = allEpisodes.filter((episode) =>
      episodeSelected(episode, selectedEp)
    );
    // const filteredEpisodeDiv = document.getElementById(filteredEpisode[0].id);
    // filteredEpisodeDiv.scrollIntoView()

    makePageForEpisodes(filteredEpisode);
  };
}

window.onload = setup;



