import React from 'react';
import { GenericFile } from '../../model/types';
import EntityShortUI from './EntityShortUI';
import { useEntityStore } from '../../store';
import './FileNodeUI.css';
import useLongPress from '../../hooks/useLongPress';

type FileNodeUIProps = {
  file: GenericFile;
};

const FileNodeUI: React.FC<FileNodeUIProps> = ({ file }) => {
  const { chosenEntity, setChosenEntity } = useEntityStore();

  const handleDoubleClick = () => {
    setChosenEntity(file);
  };

  const handleLongPress = () => {
    setChosenEntity(file);
  };

  const longPressProps = useLongPress({ onLongPress: handleLongPress });

  return (
    <div
      className={`file-node-ui ${file.id === chosenEntity?.id ? 'selected' : ''}`}
      onDoubleClick={handleDoubleClick}
      {...longPressProps}
    >
      <EntityShortUI entity={file} />
    </div>
  );
};

const MemoizedFileNodeUI = React.memo(FileNodeUI);
MemoizedFileNodeUI.displayName = 'FileNodeUI';

export default MemoizedFileNodeUI;
