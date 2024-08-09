import React from 'react';
import { Entity } from '../../model/types';
import IconFactory from '../factory/IconFactory';
import './EntityShortUI.css';

type EntityShortUIProps = {
  entity: Entity;
};

const EntityShortUI: React.FC<EntityShortUIProps> = ({ entity }) => {
  return (
    <div className="entity-short-ui">
      <IconFactory type={entity.kind} />
      <span>{entity.name}</span>
    </div>
  );
};

export default EntityShortUI;
