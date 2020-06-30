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
  //rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  episodeList.forEach((episode) => {
    let row = table.insertRow();

    let cell1 = row.insertCell(0);
    let img = document.createElement("img");
    img.src = episode.image.medium;
    cell1.appendChild(img);

    let cell2 = row.insertCell(1);
    displayNums(episode.season, episode.number);
    cell2.innerHTML = episode.name + " -" + episodeCode + episode.summary;

    cell3 = row.insertCell(2);
    let a = document.createElement("a");
    let link = document.createTextNode("watch here");
    a.appendChild(link);
    a.title = "watch here";
    a.href = episode.url;
    cell3.appendChild(a);
  });
}

window.onload = setup;
