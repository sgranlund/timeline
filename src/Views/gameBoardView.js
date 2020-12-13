import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import { getItemStyle, getListStyle } from "../Theme/boardStyle";
import rules from "../Assets/rules.svg";

export const GameBoardView = ({
	onDragEnd,
	newData,
	nameNr1,
	nameNr2,
	turn,
	userTurn,
	playerTurn,
	pushLockin,
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
												pushLockin(turn);
											}}
										>
											LOCK IN
										</button>

										{playerTurn(row.id, turn) === "row3" && (
											<div className="turnDisp">
												<p className="turn">{nameNr1}'s Turn</p>
												<div className="backDrop">
													<p className="showTurn">{nameNr1}'s Turn</p>
												</div>
											</div>
										)}
										{playerTurn(row.id, turn) === "row1" && (
											<div className="turnDisp">
												<p className="turn">{nameNr2}'s Turn</p>
												<div className="backDrop">
													<p className="showTurn">{nameNr2}'s Turn</p>
												</div>
											</div>
										)}
										{row.id === "row2" && (
											<Link to="/rules">
												<img
													alt="rules"
													className="gameRulesIMG"
													src={rules}
												></img>

												<p className="gameRulesP">How to play</p>
											</Link>
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
										>
											{console.log(userTurn)}
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
													>
														{(provided, snapshot) => (
															<div
																className="eachElement"
																{...provided.draggableProps}
																{...provided.dragHandleProps}
																ref={provided.innerRef}
																style={getItemStyle(
																	row.id === "row2",
																	userTurn === row.id,
																	snapshot.isDragging,
																	provided.draggableProps.style
																)}
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
			<div className="rulesButtondiv"></div>
		</div>
	);
};
