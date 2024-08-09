import { Entity, Folder, GenericFile, PngFile, TxtFile } from "./types";

export const isFolder = (entity: Entity): entity is Folder => {
    return entity.kind === "folder" && entity.children !== null;
  };
  
  export const isFile = (entity: Entity): entity is GenericFile => {
    return entity.children === null && entity.content !== null;
  };
  
  export const isPngFile = (entity: Entity): entity is PngFile => {
    return isFile(entity) && entity.kind === "png";
  };
  
  export const isTxtFile = (entity: Entity): entity is TxtFile => {
    return isFile(entity) && entity.kind === "txt";
  };