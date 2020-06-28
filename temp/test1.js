const rootElem = document.getElementById("root");
const table = document.createElement("table");
rootElem.appendChild(table);
let row1 = table.insertRow(0);




function setup() {
    const allEpisodes = getAllEpisodes();
    makePageForEpisodes(allEpisodes);
  }
  
  let counter = 0;
  
  function makePageForEpisodes(episodeList) {
    //rootElem.textContent = `Got ${episodeList.length} episode(s)`;
    console.log(episodeList.length);
    row1.innerText = episodeList[0].name
    episodeList.forEach((episode) => {
        let row = table.insertRow();
        let cell1 = row.insertCell(0);
        let img = document.createElement("img");
        img.src = episode.image.medium;
        cell1.appendChild(img);
        let cell2= row.insertCell(1);
        let h3 = document.createElement("h3");
        h3.innerText = episode.name;
        cell2.appendChild(h3);
        let p = document.createElement("p");
        p.innerHTML = episode.summary;
        cell2.appendChild(p);
        //counter++;
    })
    // episodeList.forEach((episode) => {
    //   let line = document.createElement("h3");
    //   line.innerText = episode.name;
    //   rootElem.appendChild(line);
    //   let img = document.createElement("img");
    //   img.src = episode.image.medium;
    //   rootElem.appendChild(img);
    // });
  
  }
  
  //window.onload = setup;