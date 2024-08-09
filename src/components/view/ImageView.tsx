import React, { useEffect, useState } from 'react';
import { PngFile } from '../../model/types';
import { parsePng } from '../../utils/parsePng';

type ImageViewProps = {
  file: PngFile;
};

const ImageView: React.FC<ImageViewProps> = ({ file }) => {
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    const fetchContent = async () => {
        try {
          const dataUrl = await parsePng(file);
          setImageSrc(dataUrl);
        } catch (error) {
          console.error('Error reading file content:', error);
        }
    };

    fetchContent();
  }, [file]);

  return <img src={imageSrc} alt={file.name} style={{ maxWidth: '100%', height: 'auto' }} />;
};

export default ImageView;
