import React from 'react';
import FileView from './EntityView';
import './DocumentView.css';
import { useEntityStore } from '../../store';

const DocumentView: React.FC = () => {
  const { chosenEntity, setChosenEntity } = useEntityStore();

  return (
    <div className={`document-view ${chosenEntity ? 'visible' : ''}`}>
      {chosenEntity && (
        <>
          <div className='document-view-mobile-header'>
            <span>{chosenEntity.name}</span>
            <button className="close-button" onClick={() => setChosenEntity(null)}>×</button>
          </div>
          <FileView entity={chosenEntity} />
        </>
      )}
    </div>
  );
};

export default DocumentView;
