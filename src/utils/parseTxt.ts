import { Entity } from '../model/types';
import { isTxtFile } from '../model/guards';

export const parseTxt = async (entity: Entity): Promise<string> => {
  if (!isTxtFile(entity)) {
    throw new Error('Entity is not a TxtFile');
  }

  const response = await fetch(entity.content);
  if (!response.ok) {
    throw new Error('Failed to fetch the file content');
  }
  const text = await response.text();
  return text;
};
