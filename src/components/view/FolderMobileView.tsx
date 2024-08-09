import React from 'react';
import { Entity } from '../../model/types';
import FolderItemMobileUI from '../elements/FolderItemMobileUI';
import './FolderMobileView.css';

type FolderMobileViewProps = {
  entities: Entity[];
};

const FolderMobileView: React.FC<FolderMobileViewProps> = ({ entities }) => {
  return (
    <div className="folder-mobile-view">
      {entities.map((entity, index) => (
        <div key={entity.id} className={`folder-item-wrapper ${index < entities.length - 1 ? 'with-border' : ''}`}>
          <FolderItemMobileUI entity={entity} />
        </div>
      ))}
    </div>
  );
};

export default FolderMobileView;
