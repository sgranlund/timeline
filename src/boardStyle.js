//---------------Styling start---------------//
const grid = 8;

export const getItemStyle = (showcard, turn, isDragging, draggableStyle) => ({
	// some basic styles to make the items look a bit nicer
	userSelect: "none",

	margin: `0 ${grid / 2}px 0 ${grid / 2}px`,
	//fontSize: "11px",
	fontFamily:
		"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
	// change background colour if dragging
	borderColor: isDragging ? "lightgreen" : "black",
	color: turn ? "#B8B8B8" : "black",
	backgroundColor: showcard && !isDragging ? "black" : "white",
	// styles we need to apply on draggables
	...draggableStyle,
});

export const getListStyle = (isDraggingOver) => ({
	//borderBottom: "10px solid black",

	display: "flex",
	padding: grid,
	overflow: "auto",
	height: "23.333%",
});
//---------------Styling end---------------//
