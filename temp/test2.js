// let searchBox;
// let allEpisodes;
// //let rootElem;

// function setup() {
//   allEpisodes = getAllEpisodes();
//   makePageForEpisodes(allEpisodes);

//   searchBox = document.querySelector("#searchInput");
//   searchBox.addEventListener("keyup", searchEpisodes);
// }

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
  return `Season ${s}${num1} Episode ${e}${num2}`;
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = "";
  // let p = document.querySelector("#display");
  // console.log(p.value)
  // p.innerText = "";

  episodeList.forEach((episode) => {
    //div for the episode
    let divEp = document.createElement("div");
    divEp.classList.add("episode");
    rootElem.appendChild(divEp);

    //div for the episode's img
    let divImg = document.createElement("div");
    divEp.appendChild(divImg);
    divImg.classList.add("pic");
    let img = document.createElement("img");
    img.src = episode.image.medium;
    divImg.appendChild(img);

    //div for content of the episode: a name(h2), a number of the episode and season(h3), and description(p)
    let divCont = document.createElement("div");
    //divCont.classList.add("flexible")
    divEp.appendChild(divCont);
    let name = document.createElement("h2");
    name.innerText = episode.name;
    divCont.appendChild(name);
    let p = document.createElement("p");
    p.innerHTML = episode.summary;
    divCont.appendChild(p);
    let h3 = document.createElement("h3");
    h3.innerHTML = displaySE(episode.season, episode.number);
    name.appendChild(h3);

    // the link for the episode
    let a = document.createElement("a");
    let link = document.createTextNode("watch the episode on TVMaze.com");
    a.appendChild(link);
    a.href = episode.url;
    divCont.appendChild(a);
  });
}

function searchEpisodes() {
  console.log(searchBox.value);
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

window.onload = setup;
