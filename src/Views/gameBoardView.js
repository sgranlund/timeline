import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export const GameBoardView = ({ myCharacters, handleOnDragEnd, handleOnDragEnd2, myCards }) => {
  return (
    <div>
      <div>
        <button>Save game</button>
      </div>
      <div>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {myCharacters.map(({ id, name }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <p>{name}</p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
          </DragDropContext>
          <DragDropContext onDragEnd={handleOnDragEnd2}>
          <Droppable droppableId="cards">
            {(provided) => (
              <ul className="cards"
              {...provided.droppableProps}
              ref={provided.innerRef}
              >
                {myCards.map(({ id, name}, index) => {
                  return(
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        >
                          <p>{name}</p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};
