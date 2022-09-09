function getTileSide(x) {
    let width = document.querySelector('.tile-container').clientWidth;
    let tileSide = width/x;
    console.log(tileSide);
    return(tileSide);
}

function fillTileContainer(x) {
    const tileContainer = document.querySelector('.tile-container');
    /* no fragment way
    for (let i = 0; i < tileAmount; i++) {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        console.log(getTileSide(x));
        tile.style.height = `${getTileSide(x)}px`;
        tile.style.width  = `${getTileSide(x)}px`;
        tileContainer.appendChild(tile);
    }
    */
    /*let tile = document.createElement("div");
    tile.classList.add("tile");
    tile.style.height = `${getTileSide(x)}px`;
    tile.style.width  = `${getTileSide(x)}px`;
    tile.addEventListener('mouseover', e =>
        e.target.classList.add('tile-colored')
    )*/
    // Had to move this fragment inside the loop so that each tile has an event listener
    // apparently fragment.appendChild(tile.cloneNode(true)) wouldnt copy event listeners
    const fragment = new DocumentFragment();
    let tileAmount = x*x;
    for (let i = 0; i < tileAmount; i++) {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.style.height = `${getTileSide(x)}px`;
        tile.style.width  = `${getTileSide(x)}px`;
        tile.addEventListener('mouseover', e =>
        e.target.classList.add('tile-colored'))
        fragment.appendChild(tile);
    }
    tileContainer.appendChild(fragment);
}

function randomRGB() {
    const r = Math.floor(Math.random() * (255));
    const g = Math.floor(Math.random() * (255));
    const b = Math.floor(Math.random() * (255));
    return(`rgb(${r},${g},${b})`);
}

function rainbowFillTileContainer(x) {
    const tileContainer = document.querySelector('.tile-container');
    const fragment = new DocumentFragment();
    let tileAmount = x*x;
    for (let i = 0; i < tileAmount; i++) {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.style.height = `${getTileSide(x)}px`;
        tile.style.width  = `${getTileSide(x)}px`;
        tile.addEventListener('mouseover', e =>
        e.target.style.backgroundColor = randomRGB())
        fragment.appendChild(tile);
    }
    tileContainer.appendChild(fragment);
}

function pencilFillTileContainer(x) {
    const tileContainer = document.querySelector('.tile-container');
    const fragment = new DocumentFragment();
    let tileAmount = x*x;
    for (let i = 0; i < tileAmount; i++) {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.style.height = `${getTileSide(x)}px`;
        tile.style.width  = `${getTileSide(x)}px`;
        tile.addEventListener('mouseover', function() {
            let shade = tile.className;
            if (shade === "tile") {
                tile.classList.remove("tile");
                tile.classList.add("tile0");
            } else if (shade.length === 5 && shade[4] != 9){ // if we exceed 9 we run out of classes
                tile.classList.remove(shade);
                tile.classList.add(`tile${Number(shade[4]) + 1}`);
            }
        })
        fragment.appendChild(tile);
    }
    tileContainer.appendChild(fragment);
}

const resetBtn = document.querySelector('.reset-btn');
const rainbowBtn = document.querySelector('.rainbow-btn');
const pencilBtn = document.querySelector('.pencil-btn');


resetBtn.addEventListener('click', function() {
    let size = prompt("Enter desired number of tiles (max. 100)");
    const tileContainer = document.querySelector('.tile-container');
    tileContainer.textContent = '';
    size > 100 ? size = 100 : {};
    fillTileContainer(size);
})

rainbowBtn.addEventListener('click', function() {
    let size = prompt("Enter desired number of tiles (max. 100)");
    const tileContainer = document.querySelector('.tile-container');
    tileContainer.textContent = '';
    size > 100 ? size = 100 : {};
    rainbowFillTileContainer(size);
})

pencilBtn.addEventListener('click', function() {
    let size = prompt("Enter desired number of tiles (max. 100)");
    const tileContainer = document.querySelector('.tile-container');
    tileContainer.textContent = '';
    size > 100 ? size = 100 : {};
    pencilFillTileContainer(size);
})

fillTileContainer(16);