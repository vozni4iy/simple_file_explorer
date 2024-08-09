import { Entity } from '../model/types';

export const parseData = async (): Promise<Entity[]> => {
  const response = await fetch('/src/data/mock.json');
  if (!response.ok) {
    throw new Error('Failed to fetch mock data');
  }
  const data: Entity[] = await response.json();
  return data;
};
