import { memo } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Tile } from ".";
import { useWord } from "../hooks";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const Tray = memo(() => {
  const { letters, sortLetters } = useWord((state) => state);
  const onDragEnd = ({ source, destination }) => {
    sortLetters(source.index, destination.index);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable direction="horizontal" droppableId="letter-tray">
        {(provided) => (
          <List ref={provided.innerRef} {...provided.droppableProps}>
            {letters.map((letter, index) => (
              <Tile letter={letter} index={index} key={letter.id} />
            ))}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </DragDropContext>
  );
});
