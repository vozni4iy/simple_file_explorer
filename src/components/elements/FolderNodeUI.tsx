import React from 'react';
import { Folder } from '../../model/types';
import EntityShortUI from './EntityShortUI';
import { useEntityStore } from '../../store';
import './FolderNodeUI.css';
import IconFactory from '../factory/IconFactory';
import useLongPress from '../../hooks/useLongPress';

type FolderNodeUIProps = {
  folder: Folder;
  open: boolean;
  onClick: () => void;
};

const FolderNodeUI: React.FC<FolderNodeUIProps> = ({ folder, open, onClick }) => {
  const { chosenEntity, setChosenEntity } = useEntityStore();

  const handleDoubleClick = () => {
    setChosenEntity(folder);
  };

  const handleLongPress = () => {
    setChosenEntity(folder);
  };

  const longPressProps = useLongPress({ onLongPress: handleLongPress });

  return (
    <div
      className={`folder-node-ui ${folder.id === chosenEntity?.id ? 'selected' : ''}`}
      onDoubleClick={handleDoubleClick}
      onClick={onClick}
      {...longPressProps}
    >
      <IconFactory type={open ? 'arrow-down' : 'arrow-right'} />
      <EntityShortUI entity={folder} />
    </div>
  );
};

const MemoizedFolderNodeUI = React.memo(FolderNodeUI);
MemoizedFolderNodeUI.displayName = 'FolderNodeUI';

export default MemoizedFolderNodeUI;
