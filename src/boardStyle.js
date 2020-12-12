//---------------Styling start---------------//
const grid = 8;

export const getItemStyle = (turn, isDragging, draggableStyle) => ({
	// some basic styles to make the items look a bit nicer
	userSelect: "none",

	margin: `0 ${grid / 2}px 0 ${grid / 2}px`,
	//fontSize: "11px",
	fontFamily:
		"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
	// change background colour if dragging
	borderColor: isDragging ? "lightgreen" : "black",

	backgroundColor: turn ? "darkgray" : "white",
	color: turn ? "#696969" : "black",

	
	//backgroundColor: newCard ? "black" : "white",
	// styles we need to apply on draggables
	...draggableStyle,
});

export const noViewCard = (mouse, isDragging, draggableStyle) => ({
	userSelect: "none",

	margin: `0 ${grid / 2}px 0 ${grid / 2}px`,
	//fontSize: "11px",
	fontFamily:
		"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
	// change background colour if dragging
	borderColor: isDragging ? "lightgreen" : "black",

	backgroundColor: mouse ?  "white" : "black",
	//color: newCard ? "#696969" : "black",

	// styles we need to apply on draggables
	...draggableStyle,
});

export const getListStyle = (isDraggingOver) => ({
	//borderBottom: "10px solid black",

	borderColor: isDraggingOver ? "lightgreen" : "black",
	display: "flex",
	padding: grid,
	overflow: "auto",
	height: "23.333%",
});
//---------------Styling end---------------//
