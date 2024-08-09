export type Entity = {
    id: string;
    name: string;
    kind: string;
    path: string;
    created: Date;
    modified: Date;
    size: number;
    content: string | null;
    children: Entity[] | null;
};

export type Folder = Entity & {
    kind: "folder";
    children: Entity[];
    content: null;
    open: boolean;
    chosen: boolean;
};

export type GenericFile = Entity & {
    children: null;
    content: string;
    chosen: boolean;
};

export type PngFile = GenericFile & {
    kind: "png";
};

export type TxtFile = GenericFile & {
    kind: "txt";
};
  
  
  
  
  