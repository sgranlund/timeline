import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
export const GameBoardView = ({
	onDragEnd,
	newData,
	getItemStyle,
	getListStyle,
	checkOrder,
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
								<div className="rowtitle">
									<a
										className="backButton"
										onClick={() => {
											checkOrder(newData, "row1");
											checkOrder(newData, "row2");
										}}
									>
										Push me
									</a>
									<h3>{row.title} </h3>
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
		</div>
	);
};
