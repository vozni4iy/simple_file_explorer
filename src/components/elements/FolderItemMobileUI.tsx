import React from 'react';
import { Entity } from '../../model/types';
import EntityShortUI from './EntityShortUI';
import { formatDate } from '../../utils/formatDate';
import { formatKind } from '../../utils/formatKind';
import './FolderItemMobileUI.css';

type FolderItemMobileUIProps = {
  entity: Entity;
};

const FolderItemMobileUI: React.FC<FolderItemMobileUIProps> = ({ entity }) => {
  return (
    <div className="folder-item-mobile-ui">
      <EntityShortUI entity={entity} />
      <div className="entity-details">
        <div>{formatKind(entity.kind)}</div>
        <div>{entity.path}</div>
        <div>{entity.size} Kb</div>
        <div>{formatDate(new Date(entity.created))}</div>
        <div>{formatDate(new Date(entity.modified))}</div>
      </div>
    </div>
  );
};

export default FolderItemMobileUI;
