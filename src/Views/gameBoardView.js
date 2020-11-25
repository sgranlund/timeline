import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


function handleOnDragEnd(result) {
    console.log(result)
}

export const GameBoardView = ({}) => (
    <div>
        <div>
            <button>Save game</button>
        </div>
        <div>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="characters">
                {(provided) => (
        <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
            {finalSpaceCharacters.map(({id, name}, index) => {
        return (
            <Draggable key={id} draggableId={id} index={index}>
            {(provided) => (
        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        <p>
          { name }
        </p>
      </li>
       )}
       </Draggable>
    );
  })}
  {provided.placeholder}
</ul>)}
</Droppable>
</DragDropContext>
        </div>
    </div>
)