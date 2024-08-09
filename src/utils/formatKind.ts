import { entityKindDescriptions } from '../model/entityKindPropsMap';

export const formatKind = (kind: string): string => {
  return entityKindDescriptions[kind] || 'Unknown Type';
};
