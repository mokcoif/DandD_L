(() => {
	//variables always come first
	//set up the puzzle pieces and boards
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	let piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector(".puzzle-board"),
		puzzleSelectors = document.querySelectorAll("#buttomHolder img");

	// functions go in the middle
	function creatPuzzlePIeces(pictureIndex){
		// generate puzzle pieces for the left hand side
		pieces.forEach(piece, index) => {
			let newPuzzlePiece = '<img id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="thumbnail">';

			piecesBoard.innerHTML += newPuzzlePiece;
		});
	}

	function resetPuzzlePieces(){
		// empty the thumbnail container
		// pieces
	}

	// event handing down here
	pizzleSelectors.forEach(puzzle => puzzle.addEventListner("click", resetPuzzlePieces));



	