let currentPlayer = 'X'; // X is the starting player.
let playerXSelections = [];
let playerOSelections = [];

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

//check for a winner:
//  write a function named `checkForWin` and accepts two arguments: `winningCombination` and `playerSelections`
//     for every combination in `winningCombination`
//         create a `matches` counter variable, which starts at 0
//         for every number in the current combination
//             if the player's selections array contains the current number
//                 increment `matches` by 1
//             if `matches` is **equal** to 3
//                 return `true`, because we found a win!
//     we got through all combinations without returning `true`, so return `false`, because no win was found

function checkForWin (winningCombination, playerSelections){

}

// Get all .grid-cell elements from the DOM and store in cellElementArray (see Resources links below):

const cellElementArray = document.querySelectorAll('.grid-cell');

// Loop over each element in our cellElementArray:
//         v the index     v loop over the length of array         v increment to the next afterwards
for (let elementIndex = 0; elementIndex < cellElementArray.length; elementIndex += 1) {
    
    // Set the cell element at cellElementArray[elementIndex] to the currentCell variable:
    const currentCellElement = cellElementArray[elementIndex]
    //                           ^                 ^
    //                looping through array & assigning as our current cell element
    
    // Add an event listener to the currentCellElement: v adds event listener to ALL CELLS at once
    currentCellElement.addEventListener('click', function (event) {
        // event.target tells us which element the user clicked (see Resources links below):
        const clickedCellElement = event.target;
        // Log the ID of the cell which was just clicked:
        console.log("You clicked on cell number: " + clickedCellElement.id)
    });
}

//check for a winner:
//  write a function named `checkForWin` and accepts two arguments: `winningCombination` and `playerSelections`
//     for every combination in `winningCombination`
//         create a `matches` counter variable, which starts at 0
//         for every number in the current combination
//             if the player's selections array contains the current number
//                 increment `matches` by 1
//             if `matches` is **equal** to 3
//                 return `true`, because we found a win!
//     we got through all combinations without returning `true`, so return `false`, because no win was found

