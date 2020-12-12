import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import { increase1 } from "../actions";
import { increase2 } from "../actions";
import { Redirect } from "react-router-dom";
import { getItemStyle, getListStyle } from "../boardStyle";

export const GameBoardView = ({
	onDragEnd,
	newData,

	checkOrder,
	updateData,
	storeBoard,
	counter,
	currentUser,
	dispatchPoints,
	points,
	startYear,
	endYear,
	nameNr1,
	nameNr2,
	pointsPlay1,
	pointsPlay2,
	turn,
	updateTurn,
	userTurn,
	updateUserTurn,
}) => {
	return (
		<div className="bigDiv">
			<DragDropContext onDragEnd={onDragEnd}>
				<div className="rowEnclose">
					{newData.rowOrder.map((rowId) => {
						const row = newData.rows[rowId];
						const events = row.eventIds.map(
							(eventId) => newData.events[eventId]
						);

						return (
							<div
								className={String(row.id)}
								key={row.id}
								row={row}
								events={events}
							>
								<div className="headerBar">
									<div className="theButton">
										<button
											className="checkSortButton"
											onClick={() => {
												updateData(checkOrder(newData, "row1"));
												updateData(checkOrder(newData, "row3"));
												storeBoard(
													newData,
													counter,
													currentUser,
													startYear,
													endYear,
													nameNr1,
													nameNr2,
													pointsPlay1,
													pointsPlay2
												);
												points();
												updateTurn(turn + 1);
												//dispatchPoints(increase2(newData.rows.row3.eventIds.length));
												//console.log("length", newData.rows.row1.eventIds.length);
											}}
										>
											LOCK IN
										</button>
										{row.id == "row2" && (
											<div className="turnParent">
												{turn % 2 == 0 ? (
													<p className="turn">
														{updateUserTurn("row3")}
														{nameNr1} Turn
													</p>
												) : (
													<p className="turn">
														{updateUserTurn("row1")} {nameNr2} Turn
													</p>
												)}
											</div>
										)}
									</div>

									<div className="rowTitle"></div>
								</div>

								<Droppable droppableId={row.id} direction="horizontal">
									{(provided, snapshot) => (
										<div
											className={row.id}
											ref={provided.innerRef}
											{...provided.droppableProps}
											style={getListStyle(snapshot.isDraggingOver)}

											//isDraggingOver={snapshot.isDraggingOver}
										>
											<h2 className="background">
												<span>{row.title}</span>
											</h2>
											{events.map((event, index) => {
												return (
													<Draggable
														draggableId={event.id}
														key={event.id}
														event={event}
														index={index}
														//isDragDisabled={isDragDisabled}
													>
														{(provided, snapshot) => (
															<div
																className="eachElement"
																{...provided.draggableProps}
																{...provided.dragHandleProps}
																ref={provided.innerRef}
																style={getItemStyle(
																	userTurn === row.id,
																	snapshot.isDragging,
																	provided.draggableProps.style
																)}
																//isDragging={snapshot.isDragging}
																//isDragDisabled={isDragDisabled}
															>
																<h3 className="cardTitle">This year...</h3>
																{event.content}
															</div>
														)}
													</Draggable>
												);
											})}
											{provided.placeholder}
										</div>
									)}
								</Droppable>
							</div>
						);
					})}
				</div>
			</DragDropContext>
			<div className="rulesButtondiv">
				<Link to="/rules" className="backButton">
					How to play
				</Link>
			</div>
		</div>
	);
};
