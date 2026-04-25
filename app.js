// 1. DOM SELECTION: Grab elements we need to work with
const gridSizeInput = document.getElementById("gridSize");
const generateBtn = document.getElementById("generateBtn");
const randomizeBtn = document.getElementById("randomizeBtn");
const clearBtn = document.getElementById("clearBtn");
const grid = document.getElementById("grid");
const stats = document.getElementById("stats");

function randomColor() {
    const colors = ['#e74c3c', '#edab99', '#af159d', '#ff7cb3', '#340348', '#1a1dbc'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// 2. LOOP #1: Use a FOR loop to create the grid
function generateGrid() {
    const count = parseInt(gridSizeInput.value);
    if (isNaN(count) || count < 1) return;

    // DOM MANIPULATION: Clear existing grid
    grid.innerHTML = '';

    // LOOP through and create each square 
    for (let i = 0; i < count; i++) {
        // DOM MANIPULATION: create element
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.backgroundColor = randomColor();

        // store index as data attribute for later
        square.dataset.index = i;

        // DOM MANIPULATION: Add event listener to each square
        square.addEventListener('click', () => {
            // change color when clicked 
            square.style.backgroundColor = randomColor();
            updateStats(); // update stats after each click 
        });

        // DOM MANIPULATION: Add to page
        grid.appendChild(square);
    }
    updateStats();
}

// 3. LOOP #2: use forEach to randomize all existing squares
function randomizeAll() {
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.style.backgroundColor = randomColor();
    });
    updateStats();
}

// 4. DOM MANIPULATION: clear everything
function clearGrid() {
    grid.innerHTML = ''; // Removes all child nodes at once 
    updateStats();
}

// 5. LOOP #3: Use a for...of loop to count red squares
function updateStats() {
    const squares = document.querySelectorAll('.square');
    let redCount = 0;

    // LOOP through all squares to check color
    for (const square of squares) {
        const bg = square.style.backgroundColor;
        // rgb(233, 189, 229) is #3c53e7 - 
        if (bg === 'rgb(151, 231, 60)') { 
            redCount++;
        }
    }

    // DOM MANIPULATION: Update text content
    stats.textContent = `Squares: ${squares.length} | Red squares: ${redCount}`;
}

// 6. DOM MANIPULATION: wire up buttons with event listeners 
generateBtn.addEventListener("click", generateGrid);
randomizeBtn.addEventListener("click", randomizeAll);
clearBtn.addEventListener("click", clearGrid);

// Generate initial grid on load
generateGrid();