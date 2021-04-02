import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { paths } from '../enum';

export const AddCaloriesList = ({ items, text, token, postItems }) => {
  const history = useHistory();
  const [ selectedItem, setSelectedItem ] = useState({name: "", type: 0, calories: 0});
  const [ quantity, setQuantity ] = useState(0);

  const onItemSelect = (event) => {
    setSelectedItem(items.find((item) => item.name === event.target.value));
  };

  const onQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    await postItems(paths.PostItem, token, selectedItem, quantity);

    history.push(paths.History);
  };

  return (
    <div className="col s6 p-100">
      <h3>{t(text.header)}</h3>
      <div className="row green-text">
        <label>{text.Title}</label>
        <select className="browser-default" onChange={onItemSelect}>
          {items.map((item) => (
            <option key={item._id} data-tokens={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="input-field row s6">
        <input
          id="productsQuantity"
          type="text"
          className="validate"
          onChange={onQuantityChange}
        />
        <label htmlFor="productsQuantity">{text.Quantity}</label>
      </div>
      <button className="btn" type="submit" onClick={submitHandler}>
        {text.Button}
      </button>
    </div>
  );
};
