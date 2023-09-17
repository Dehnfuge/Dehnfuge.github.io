const suffix = "höhle"
const defaultPrefix = "_2_1"
const tileMapping = Array(256).fill(suffix+defaultPrefix+'.png');
let currentCenterTileIndex = 0;

function toggleTile(td) {
    if (td.textContent === '0') {
        td.textContent = '1';
        td.classList.remove('dirt');
        td.classList.add('grass');
    } else {
        td.textContent = '0';
        td.classList.remove('grass');
        td.classList.add('dirt');
    }
    updateCenterTile();
}

function updateCenterTile() {
    setCurrentCenterTileIndex();
    const centerImage = document.getElementById('centerImage');
    centerImage.src = `./img/${tileMapping[currentCenterTileIndex]}`;
}

function setCurrentCenterTileIndex() {
    const grid = document.querySelectorAll('#tileGrid td');
    let binaryString = '';
    const surroundingIndices = [0, 1, 2, 3, 5, 6, 7, 8];

    surroundingIndices.forEach(index => {
        binaryString += grid[index].innerText;
    });

    currentCenterTileIndex = parseInt(binaryString, 2);
}

const table = document.getElementById('imageGrid');
for (let y = 0; y < 16; y++) {
    const row = table.insertRow(y);
    for (let x = 0; x < 16; x++) {
        const cell = row.insertCell(x);
        const img = document.createElement('img');
        
        img.src = `./img/${suffix}_${y}_${x}.png`;
        img.alt = "";//`${suffix} Tile (${y}, ${x})`;
        img.width = 50;  
        img.height = 50; 
        
        img.addEventListener('click', () => {
            tileMapping[currentCenterTileIndex] = `${suffix}_${y}_${x}.png`;
            updateCenterTile();
        });

        cell.appendChild(img);
    }
}

function downloadTileMapping() {
    const data = tileMapping.join('\n');
    const blob = new Blob([data], {type: 'text/plain'});
    const url = window.URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'tileMapping.txt';
    
    document.body.appendChild(a);
    a.click();
    
    window.URL.revokeObjectURL(url);
}


// Initial setup: Set all surrounding tiles to 0 and update the center tile image
document.querySelectorAll('#tileGrid td:not(#centerTile)').forEach(td => td.innerText = '0');
updateCenterTile();
document.getElementById('fileInput').addEventListener('change', loadTileMapping);

function loadTileMapping() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(event) {
            const content = event.target.result;
            const lines = content.split('\n');

            // Die Zeilen aus der Datei werden in das tileMapping Array geladen.
            for (let i = 0; i < lines.length && i < tileMapping.length; i++) {
                tileMapping[i] = lines[i];
            }

            // Nachdem die Datei geladen wurde, aktualisieren Sie das centerTile.
            updateCenterTile();
        };

        reader.readAsText(file);
    } else {
        alert('Bitte wählen Sie eine Datei aus.');
    }
}

function listDefaultCombinations() {
    const defaultTile = suffix+defaultPrefix+'.png';
    const defaultCombinations = [];

    for (let i = 0; i < tileMapping.length; i++) {
        if (tileMapping[i] === defaultPrefix) {
            defaultCombinations.push(i.toString(2).padStart(8, '0')); 
        }
    }

    const listElement = document.getElementById('defaultCombinationList');
    listElement.innerHTML = ''; // Löschen Sie den bisherigen Inhalt

    if (defaultCombinations.length === 0) {
        listElement.textContent = 'Es gibt keine Kombinationen, die auf den Standardwert verweisen.';
    } else {
        listElement.textContent = 'Kombinationen, die auf den Standardwert verweisen:';
        const ul = document.createElement('ul');
        defaultCombinations.forEach(combination => {
            const li = document.createElement('li');
            li.textContent = combination;
            ul.appendChild(li);
        });
        listElement.appendChild(ul);
    }
}

function setRandomDefaultCenterTile() {
    const defaultTile = suffix+defaultPrefix+'.png';
    const defaultIndices = [];

    for (let i = 0; i < tileMapping.length; i++) {
        if (tileMapping[i] === defaultTile) {
            defaultIndices.push(i);
        }
    }

    if (defaultIndices.length === 0) {
        console.log('Es gibt keine Kombinationen, die auf den Standardwert verweisen.');
        return;
    }

    // Einen zufälligen Index auswählen
    const randomIndex = defaultIndices[Math.floor(Math.random() * defaultIndices.length)];
    const binaryRepresentation = randomIndex.toString(2).padStart(8, '0');

    // Das Grid entsprechend dem binären Wert aktualisieren
    const cells = document.querySelectorAll('#tileGrid td:not(#centerTile)');
    cells.forEach((cell, index) => {
        cell.textContent = binaryRepresentation[index];
        if (binaryRepresentation[index] === '0') {
            cell.classList.add('dirt');
            cell.classList.remove('grass');
        } else {
            cell.classList.add('grass');
            cell.classList.remove('dirt');
        }
    });

    // Das centerTile aktualisieren
    updateCenterTile();
}