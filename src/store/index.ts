import { create } from 'zustand';
import { Entity } from '../model/types';

interface EntityState {
  chosenEntity: Entity | null;
  setChosenEntity: (entity: Entity | null) => void;
}

export const useEntityStore = create<EntityState>(set => ({
  chosenEntity: null,
  setChosenEntity: (entity: Entity | null) => set({ chosenEntity: entity }),
}));
