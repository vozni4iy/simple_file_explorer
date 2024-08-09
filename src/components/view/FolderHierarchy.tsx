import React, { useState, useCallback } from 'react';
import { Entity } from '../../model/types';
import FileNodeUI from '../elements/FileNodeUI';
import FolderNodeUI from '../elements/FolderNodeUI';
import { isFile, isFolder } from '../../model/guards';
import './FolderHierarchy.css';

type FolderHierarchyProps = {
  entities: Entity[];
  level?: number;
};

const FolderHierarchy: React.FC<FolderHierarchyProps> = ({ entities }) => {
  const [openFolders, setOpenFolders] = useState<Set<string>>(new Set());

  const handleToggleFolder = useCallback((id: string) => () => {
    setOpenFolders(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }, []);

  return (
    <div className="folder-hierarchy">
      {entities.map(entity => {
        if (isFile(entity)) {
            return <FileNodeUI key={entity.id} file={entity} />;
        }
        if (isFolder(entity)) {
          const isOpen = openFolders.has(entity.id);
          return (
            <div key={entity.id}>
              <FolderNodeUI
                folder={entity}
                open={isOpen}
                onClick={handleToggleFolder(entity.id)}
              />
              {isOpen && <FolderHierarchy entities={entity.children} />}
            </div>
          );
        }
      })}
    </div>
  );
};

export default FolderHierarchy;
