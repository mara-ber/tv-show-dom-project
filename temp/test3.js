// list of shows in select fiels
function createShowList(shows) {
    let select = document.getElementById("selectShow");
    let option = document.createElement("option");
    option.innerText = "all shows";
    select.appendChild(option);
    //let showsNames = shows.map() 
    shows.forEach((show) => {
        let option = document.createElement("option");
        option.innerHTML = show.name;
        select.appendChild(option);
    });
}


function makePageForShows(showsList) {
    //debugger;
    const rootElem = document.getElementById("root");
    rootElem.textContent = "";

    showsList.forEach((show) => {
        //div for the episode
        let divShow = document.createElement("div");
        divShow.classList.add("episode");
        divShow.id = show.id;
        rootElem.appendChild(divShow);

        // //div for the episode's img
        if (show.image !== null) {
            let divShowImg = document.createElement("div");
            divShow.appendChild(divShowImg);
            divShowImg.classList.add("pic");
            let img = document.createElement("img");
            img.src = show.image.medium;
            divShowImg.appendChild(img);

        }

        //div for content of the show: a name(h2), 
        //a number of the episode and season(h3), and description(p)
        let divCont = document.createElement("div");
        divShow.appendChild(divCont);
        let name = document.createElement("h2");
        name.innerText = show.name;
        divCont.appendChild(name);
        // let h3 = document.createElement("h3");
        // h3.innerHTML = displaySE(episode.season, episode.number);
        // divCont.appendChild(h3);
        let p = document.createElement("p");
        p.innerHTML = show.summary;
        divCont.appendChild(p);
    })
}

function compare(a, b) {
    const showA = a.name.toUpperCase();
    const showB = b.name.toUpperCase();

    let comparison = 0;
    if (showA > showB) {
        comparison = 1;
    } else if (showA < showB) {
        comparison = -1;
    }
    return comparison;
}


