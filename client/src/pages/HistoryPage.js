import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import { Loader } from '../components/Loader';
import { ItemsHistory } from '../components/ItemsHistory';
import { getItems } from '../services/httpService';
import { paths } from '../enum';

export const HistoryPage = ({ token }) => {
  const [ items, setItems ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const fetchItems = useCallback(async () => {
    const { data } = await getItems(paths.GetUserItems, token);

    data.map(
      (item) => (item.date = moment(new Date(item.date)).format('DD-MM-YYYY'))
    );

    data.forEach(function (item) {
      if (items[item.date] === undefined) {
        items[item.date] = [];
      }

      items[item.date].push(item);
    });

    setLoading(false);
    setItems(items);
  }, [ items, token ]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  if (loading) {
    return <Loader />;
  }

  return <>{!loading && <ItemsHistory items={items} token={token} />}</>;
};
