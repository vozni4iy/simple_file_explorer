import React, { useEffect, useState } from 'react';
import { parseData } from './utils/parseData';
import DocumentView from './components/view/DocumentView';
import Spinner from './components/elements/Spinner';
import FolderHierarchy from './components/view/FolderHierarchy';
import './App.css';
import { Entity } from './model/types';

const App: React.FC = () => {
  const [data, setData] = useState<Entity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await parseData();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="app-wrapper">
      <div className="hierarchy-wrapper">
        <FolderHierarchy entities={data} />
      </div>
      <DocumentView />
    </div>
  );
};

export default App;
