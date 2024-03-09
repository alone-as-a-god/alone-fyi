const PIXEL_SIZE = 100;

const wrapper = document.getElementById("tiles");
let columns = Math.floor(window.innerWidth / PIXEL_SIZE);
let rows = Math.floor(window.innerHeight / PIXEL_SIZE);

const colors = ["#212529", "#d62828"]
let toggled = true;

const onTileClick = index => {
    toggled = !toggled;
    document.body.classList.toggle("toggled");


    anime({
        targets: ".tile",
        backgroundColor: toggled ? colors[0] : colors[1],
        delay: anime.stagger(50, {
            grid: [columns, rows],
            from: index
        }),
    })
}


const createTile= (index) => {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.onclick = e => onTileClick(index);
    return tile;
}

const createTiles = (quantity) => {
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
    })
}

createTiles(columns * rows);

const createGrid = () => {
    wrapper.innerHTML = '';
    let columns = Math.floor(window.innerWidth / PIXEL_SIZE);
    let rows = Math.floor(window.innerHeight / PIXEL_SIZE);

    createTiles(columns * rows);

    wrapper.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    wrapper.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
}

createGrid();

window.onresize = () => {
    createGrid();
}