import { Entity } from '../model/types';
import { isPngFile } from '../model/guards';

export const parsePng = async (entity: Entity): Promise<string> => {
  if (!isPngFile(entity)) {
    throw new Error('Entity is not a PngFile');
  }

  const response = await fetch(entity.content);
  if (!response.ok) {
    throw new Error('Failed to fetch the file content');
  }

  const blob = await response.blob();
  return URL.createObjectURL(blob);
};
