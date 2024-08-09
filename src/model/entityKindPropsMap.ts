import FolderIcon from '../assets/icons/folderIcon.svg';
import PngFileIcon from '../assets/icons/png-file.svg';
import TxtFileIcon from '../assets/icons/txt-file.svg';

const entityKindPropsMap = {
    folder: {
        icon: FolderIcon,
        description: "Folder",
    },
    txt: {
        icon: TxtFileIcon,
        description: "Text file",
    },
    png: {
        icon: PngFileIcon,
        description: "Image (PNG)",
    },
}

export const entityKindIcons = Object.keys(entityKindPropsMap).reduce((acc, cur) => {
    acc[cur] = entityKindPropsMap[cur as keyof typeof entityKindPropsMap].icon;
    return acc;
}, {} as Record<string, string>);

export const entityKindDescriptions = Object.keys(entityKindPropsMap).reduce((acc, cur) => {
    acc[cur] = entityKindPropsMap[cur as keyof typeof entityKindPropsMap].description;
    return acc;
}, {} as Record<string, string>);