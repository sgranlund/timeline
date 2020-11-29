import React from "react";
//import styled from 'styled-components'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export const GameBoardView2 = ({ onDragEnd, newData }) => {
	return (
		<div>
			<DragDropContext onDragEnd={onDragEnd}>
				<div>
					{newData.columnOrder.map((columnId) => {
						const column = newData.columns[columnId];
						const events = column.eventIds.map(
							(eventId) => newData.events[eventId]
						);

						return (
							<div
								className="columns"
								key={column.id}
								column={column}
								events={events}
							>
								<h3 className="columntitle">{column.title}</h3>
								<Droppable droppableId={column.id}>
									{(provided, snapshot) => (
										<div
											className="events"
											ref={provided.innerRef}
											{...provided.droppableProps}
											style={{
												background: snapshot.isDraggingOver
													? "lightblue"
													: "white",
											}}

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
																style={{
																	backgroundColor: snapshot.isDragging
																		? "#263B4A"
																		: "#456C86",
																	color: "white",
																	...provided.draggableProps.style,
																}}
																//isDragging={snapshot.isDragging}
																//isDragDisabled={isDragDisabled}
															>
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
