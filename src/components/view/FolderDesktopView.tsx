import React from 'react';
import { Entity } from '../../model/types';
import EntityShortUI from '../elements/EntityShortUI';
import { formatDate } from '../../utils/formatDate';
import { formatKind } from '../../utils/formatKind';
import './FolderDesktopView.css';

type FolderDesktopViewProps = {
  entities: Entity[];
};

const FolderDesktopView: React.FC<FolderDesktopViewProps> = ({ entities }) => {
  return (
    <table className="folder-view">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Size</th>
          <th>Path</th>
          <th>Created</th>
          <th>Modified</th>
        </tr>
      </thead>
      <tbody>
        {entities.map(entity => (
          <tr key={entity.id}>
            <td><EntityShortUI entity={entity} /></td>
            <td>{formatKind(entity.kind)}</td>
            <td>{entity.size} Kb</td>
            <td>{entity.path}</td>
            <td>{formatDate(new Date(entity.created))}</td>
            <td>{formatDate(new Date(entity.modified))}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FolderDesktopView;
