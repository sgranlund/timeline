import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
export const GameBoardView = ({
	onDragEnd,
	newData,
	getItemStyle,
	getListStyle,
}) => {
	return (
		<div className="bigDiv">
			<DragDropContext onDragEnd={onDragEnd}>
				<div className="columnEnclose">
					{newData.columnOrder.map((columnId) => {
						const column = newData.columns[columnId];
						const events = column.eventIds.map(
							(eventId) => newData.events[eventId]
						);

						return (
							<div
								className={String(column.id)}
								key={column.id}
								column={column}
								events={events}
							>
								<h3 className="columntitle">{column.title} </h3>
								<Droppable droppableId={column.id} direction="horizontal">
									{(provided, snapshot) => (
										<div
											className="events"
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
