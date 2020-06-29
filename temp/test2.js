const rootElem = document.getElementById("root");
const table = document.createElement("table");
rootElem.appendChild(table);
let row1 = table.insertRow(0);

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

let episodeCode;
function displayNums(num1, num2) {
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
  episodeCode = `S${s}${num1}E${e}${num2}`;
}

function makePageForEpisodes(episodeList) {
  episodeList.forEach((episode) => {
    let divEp = document.createElement("div");
    divEp.classList.add("episode");
    rootElem.appendChild(divEp);
    let img = document.createElement("img");
    img.src = episode.image.medium;
    divEp.appendChild(img);
    let name = document.createElement("h3");
    name.innerText = episode.name;
    divEp.appendChild(name);
    let p = document.createElement("p");
    p.innerHTML = episode.summary;
    divEp.appendChild(p);
    displayNums(episode.season, episode.number);
    let h4 = document.createElement("h4");
    h4.innerHTML = episodeCode;
    name.appendChild(h4);
    let a = document.createElement("a");
    let link = document.createTextNode("watch here");
    a.appendChild(link);
    a.title = "watch here";
    a.href = episode.url;
    divEp.appendChild(a);
  });
}

window.onload = setup;
