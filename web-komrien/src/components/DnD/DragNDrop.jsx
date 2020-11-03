import React from 'react';
import './DragNDrop.styles.scss';

const animals = [
  '🐈',
  '🐶',
  '🐻',
  '🦜',
  '🐢',
  '🐴',
  '🐭',
  '🐹',
  '🐬',
  '🐮',
  '🐷',
  '🐒',
  '🐥',
  '🦄',
  '🦊',
  'a',
  'b',
  'c'
];

// Thing to Drag
const DraggableThing = (props) => {
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/dragstart_event
  const dragStart = (e) => {
    console.log('dragging ', e.target.id);

    // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer
    e.dataTransfer.setData('animal', e.target.id);
  };

  return (
    <div
      className='draggableThing'
      id={props.id}
      draggable='true'
      onDragStart={dragStart}
    />
  );
};

// Element that receives DroppableThings
const DroppableArea = (props) => {
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/drop_event
  const drop = (e) => {
    const thingBeingDragged = e.dataTransfer.getData('animal');
    e.target.appendChild(document.getElementById(thingBeingDragged));

    // Remove the highlight
    // because the onDragLeave won't fire after onDrop
    e.target.classList.remove('activeDropArea');
  };

  // https://developer.mozilla.org/en-US/docs/Web/API/Document/dragover_event
  const allowDrop = (e) => {
    // The default action of onDragOver
    // is to cancel the drop operation  -.-
    // so we need to prevent that
    e.preventDefault();
  };

  // https://developer.mozilla.org/en-US/docs/Web/API/Document/dragenter_event
  const dragEnter = (e) => {
    // Drag Enter is used to
    // highlight the drop area
    e.target.classList.add('activeDropArea');
  };

  // https://developer.mozilla.org/en-US/docs/Web/API/Document/dragleave_event
  const dragLeave = (e) => {
    // Drag Leave is used to
    // remove the highlight in the drop area
    e.target.classList.remove('activeDropArea');
  };

  return (
    <div
      className='droppableArea'
      id={props.id}
      onDrop={drop}
      onDragOver={allowDrop}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
    >
      <p>picked animals 🤲</p>
    </div>
  );
};

const DragNDrop = () => {
  return (
    <main>
      <div className='availableAnimals'>
        {animals.map((animal) => (
          <DraggableThing key={animal} id={animal} />
        ))}
      </div>
      <DroppableArea />
    </main>
  );
};

export default DragNDrop;
