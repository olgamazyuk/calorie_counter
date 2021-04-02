import React, { useState, useEffect } from 'react';
import { historyData, paths } from '../enum';
import { getItems } from '../services/httpService';

export const ItemsHistory = ({ items, token }) => {
  const [ intake, setIntake ] = useState(0);
  const [ sumCalories ] = useState([]);

  const onGetIntake = async () => {
    const { data } = await getItems(paths.UserData, token);

    setIntake(data);
  };

  Object.keys(items).map((date) => {
    let sum = 0;
    items[date].forEach((element) => {
      sum += Number(element.calories);
    });
    return (sumCalories[date] = sum);
  });

  useEffect(() => {
    onGetIntake();
  });

  if (!Object.keys(items)) {
    return <p className="center">{historyData.NoData}</p>;
  }

  return Object.keys(items).map((date) => {
    return (
      <div key={date}>
        <table className="mt-40 highlight">
          <caption>{date}</caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Calories</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {items[date].map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>{item.calories}</td>
                  <td>{item.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button className="btn mr-10 mt-5">{`Суточная норма: ${intake} калорий`}</button>
        <button className="btn mr-10 mt-5">{`Всего за день съедено: ${sumCalories[date]} калорий`}</button>
        <button className="btn mt-5">{`Осталось потратить: ${
          intake - Number(sumCalories[date])
        } калорий`}</button>
        <hr />
      </div>
    );
  });
};
