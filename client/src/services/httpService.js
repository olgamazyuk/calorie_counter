import axios from 'axios';
import { addCaloriesRate } from '../enum';

export const getItems = async (path, token) => {
  return await axios.get(path, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const authorize = async (path, form) => {
  return await axios.post(
    path,
    { ...form },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};

export const postProducts = async (path, token, selectedItem, quantity) => {
  return await axios.post(
    path,
    {
      name: selectedItem.name,
      type: selectedItem.type,
      calories: (selectedItem.calories * quantity) / addCaloriesRate.Products,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const postTraining = async (path, token, selectedItem, quantity) => {
  return await axios.post(
    path,
    {
      name: selectedItem.name,
      type: selectedItem.type,
      calories: (selectedItem.calories * quantity) / addCaloriesRate.Training,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const postUserData = async (path, userData, token) => {
  return await axios.post(
    path,
    { ...userData },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
