//---------------Styling start---------------//
const grid = 12.5;

export const getItemStyle = (showcard, turn, isDragging, draggableStyle) => ({
	// some basic styles to make the items look a bit nicer
	userSelect: "none",

	fontSize: "11px",
	fontFamily:
		"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
	// change background colour if dragging
	borderColor: isDragging ? "lightgreen" : "black",
	//If not your turn change text color to  gray
	color: turn ? "#B8B8B8" : "black",
	//Make the only the middle car visible onDrag makes non active players
	//card backgroundcolor gray
	backgroundColor:
		showcard && !isDragging ? "black" : turn ? "gainsboro" : "white",
	minHeight: window.innerHeight / 5,

	// styles we need to apply on draggables

	...draggableStyle,
});

export const getListStyle = (isDraggingOver) => ({
	//borderBottom: "10px solid black",

	display: "flex",
	overflow: "auto",
	height: window.innerHeight / 3.9,
});
//---------------Styling end---------------//
