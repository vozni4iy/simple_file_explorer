import React, { useEffect, useState } from 'react';
import { TxtFile } from '../../model/types';
import { parseTxt } from '../../utils/parseTxt';

type TxtViewProps = {
  file: TxtFile;
};

const TxtView: React.FC<TxtViewProps> = ({ file }) => {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    const fetchContent = async () => {
        try {
          const text = await parseTxt(file);
          setContent(text);
        } catch (error) {
          console.error('Error reading file content:', error);
        }
    };

    fetchContent();
  }, [file]);

  return (
    <div style={{ whiteSpace: 'pre-wrap', padding: '0 5px' }}>
      {content}
    </div>
  );
};

export default TxtView;
