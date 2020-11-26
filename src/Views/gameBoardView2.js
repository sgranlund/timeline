import React from "react";
//import styled from 'styled-components'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export const GameBoardView2 = ({ onDragEnd, newData }) => {
	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div>
				{newData.columnOrder.map((columnId) => {
          const column = newData.columns[columnId];
					const events = column.eventIds.map(
						(eventId) => newData.events[eventId]
					);

					return (
						<div  className="columns" key={column.id} column={column} events={events} >
							<h3 className="columntitle">{column.title}</h3>
							<Droppable droppableId={column.id}>
								{(provided, snapshot) => (
									<div className="events"
										ref={provided.innerRef}
                    {...provided.droppableProps}
										//isDraggingOver={snapshot.isDraggingOver}
									>
										{events.map((event, index) => {
											return (
												<Draggable draggableId={event.id}
													key={event.id}
													event={event}
													index={index}
													//isDragDisabled={isDragDisabled}
												>
													{(provided) => (
														<div className="eachElement"
															{...provided.draggableProps}
															{...provided.dragHandleProps}
                              ref={provided.innerRef}
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
	);
};
