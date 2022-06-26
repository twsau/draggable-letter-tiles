import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Letter = styled.li`
  align-items: center;
  background-color: tan;
  display: flex;
  font-size: 2.5rem;
  height: 3rem;
  justify-content: center;
  margin: 0.5rem;
  padding: 1rem;
  width: 3rem;
`;

export const Tile = ({ letter, index }) => (
  <Draggable className="tile" draggableId={letter.id} index={index}>
    {(provided) => (
      <Letter
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        {letter.value}
      </Letter>
    )}
  </Draggable>
);
