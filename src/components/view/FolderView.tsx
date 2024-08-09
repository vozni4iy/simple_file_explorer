import React from 'react';
import FolderDesktopView from './FolderDesktopView';
import FolderMobileView from './FolderMobileView';
import { Entity } from '../../model/types';

type FolderViewProps = {
    entities: Entity[];
  };

  const FolderView: React.FC<FolderViewProps> = ({ entities }) => (
    <>
     <FolderDesktopView entities={entities}/>
     <FolderMobileView entities={entities} />
    </>
  )

export default FolderView;