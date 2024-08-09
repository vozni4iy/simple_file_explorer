import React from 'react';
import { Entity } from '../../model/types';
import { isTxtFile, isPngFile, isFolder } from '../../model/guards';
import ImageView from './ImageView';
import TxtView from './TxtView';
import FolderView from './FolderView';

type EntityViewProps = {
  entity: Entity;
};

const SimpleErrorComponent: React.FC<{ message: string }> = ({ message }) => (
  <div>{message}</div>
);

const EntityView: React.FC<EntityViewProps> = ({ entity }) => {
  if (isFolder(entity)) {
    return <FolderView entities={entity.children}/>
  } else if (isTxtFile(entity)) {
    return <TxtView file={entity} />;
  } else if (isPngFile(entity)) {
    return <ImageView file={entity} />;
  } else {
    return <SimpleErrorComponent message="Unsupported file type" />;
  }
};

export default EntityView;
