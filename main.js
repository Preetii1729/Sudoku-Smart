var arr = [[], [], [], [], [], [], [], [], []];

for (var i = 0; i < 9; i++) {
	for (var j = 0; j < 9; j++) {
		arr[i][j] = document.getElementById(i * 9 + j);

	}
}

var value = [[], [], [], [], [], [], [], [], []];

var getPuzzle = document.querySelector("#getPuzzle");
var solve = document.querySelector("#solve");

function fill(val) {
    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            if(val[i][j] !=0 ){
                arr[i][j].innerHTML = val[i][j]; 
            } 
            else{
                arr[i][j].innerHTML = " ";
            }
        }
    }
}

getPuzzle.addEventListener("click", async ()=> {
    console.log("Hellooo1");
    let response = await fetch ("https://sudoku-api.vercel.app/api/dosuku?query={newboard(limit:1){grids{value}}}");
    let data = await response.json();
    value = data.newboard.grids[0].value;
    console.log(data.newboard.grids[0].value);
    fill(value);
});



// API: https://sudoku-api.vercel.app/api/dosuku