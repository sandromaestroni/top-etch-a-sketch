function makeContainerSquare(x) {
    const tileContainer = document.querySelector('.tile-container');
    const gameConsole = document.querySelector('.game-console');
    let width = tileContainer.clientWidth;
    while (width % x != 0) {
        width--;
    }
    gameConsole.style.width = `${width}px`;
    tileContainer.style.height = `${width}px`;
    return(width);
}

function getTileSide(x) {
    let width = makeContainerSquare(x);
    let tileSide = width/x;
    console.log(tileSide);
    return(tileSide);
}

function fillTileContainer(x) {
    const tileContainer = document.querySelector('.tile-container');
    
    /* naive way
    for (let i = 0; i < tileAmount; i++) {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        console.log(getTileSide(x));
        tile.style.height = `${getTileSide(x)}px`;
        tile.style.width  = `${getTileSide(x)}px`;
        tileContainer.appendChild(tile);
    }
    */
    let tile = document.createElement("div");
    tile.classList.add("tile");
    tile.style.height = `${getTileSide(x)}px`;
    tile.style.width  = `${getTileSide(x)}px`;
    const fragment = new DocumentFragment();
    let tileAmount = x*x;
    for (let i = 0; i < tileAmount; i++) {
        fragment.appendChild(tile.cloneNode(true));
    }
    tileContainer.appendChild(fragment);
}

fillTileContainer(100);