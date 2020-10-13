import React, { useEffect, useState } from 'react';
import './App.module.css';
import AppLayout from 'components/Layout';
import { useFetch } from 'api';
import List from '../List';
import Select from '../Select';
import Loader from '../Loader';
import ErrorScreen from '../ErrorScreen';
import 'globals/variables.css';
import { IProperty } from '../Property/types';
import { Option } from './types';

function App() {
  const { status, fetchData, data } = useFetch('');
  const [properties, setProperties] = useState<IProperty[]>([]);
  const [activeOption, setActiveOption] = useState<Option>('all');

  useEffect(() => {
    setProperties(data);
  }, [data]);

  const filterProperties: IProperty[] = properties.filter(
    (i) => i.status === activeOption
  );

  const filterOptions: Option[] = Array.from(
    new Set(properties.map((item) => item.status))
  );

  return (
    <div>
      {status === 'LOADING' && <Loader />}
      {status === 'ERROR' && (
        <ErrorScreen
          message="Uh-oh it looks like some things haven’t loaded correctly"
          reload={fetchData}
        />
      )}
      {status === 'SUCCESS' && (
        <AppLayout
          header={
            <Select
              data-testid="filter-status"
              id="filter-status"
              value={activeOption}
              label="Filter Status"
              onChange={(e: React.FormEvent<HTMLSelectElement>) => {
                setActiveOption(e.currentTarget.value);
              }}
              options={['all', ...filterOptions]}
            />
          }
        >
          <List
            data-testid="property-list"
            items={activeOption === 'all' ? properties : filterProperties}
            colNumber={4}
          />
        </AppLayout>
      )}
    </div>
  );
}

export default App;
