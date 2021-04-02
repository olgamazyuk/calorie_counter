import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useMessage } from '../hooks/message.hook';
import { useHttp } from '../hooks/http.hook';
import { paths, profileData } from '../enum';
import { postUserData, getItems } from '../services/httpService';
import {
  getLocalIntake,
  setLocalIntake,
} from '../services/localStorageService';

export const ProfilePage = ({ token }) => {
  const history = useHistory();
  const message = useMessage();
  const [ userData, setUserData ] = useState({
    gender: '',
    activity: '',
    age: '',
  });
  const [ intake, setIntake ] = useState(getLocalIntake() || 0);
  const { error, clearError } = useHttp();
  
  useEffect(() => {
    message(error);
    clearError();
  });

  const changeHandler = (event) => {
    setUserData({ ...userData, [ event.target.name ]: event.target.value });
  };

  const submitHandler = async () => {
    try {
      await postUserData(paths.UserData, userData, token);

      history.push(paths.AddCalories);
    } catch (e) {
      message(e.message);
    }
  };

  const onGetIntake = async () => {
    const { data } = await getItems(paths.UserData, token);

    setLocalIntake(data);
    setIntake(data);
  };

  return (
    <>
      <div className="grey lighten-4 profile-container">
        <h3 className="text-center">{profileData.Header}</h3>
        <form className="mb-40">
          <fieldset className="gender">
            <legend>{profileData.Gender}</legend>
            <label className="mr-10">
              <input
                className="with-gap"
                type="radio"
                name="gender"
                value={profileData.GenderMale}
                onChange={changeHandler}
              />
              <span>{profileData.GenderMale}</span>
            </label>
            <label>
              <input
                className="with-gap"
                type="radio"
                name="gender"
                value={profileData.GenderFemale}
                onChange={changeHandler}
              />
              <span>{profileData.GenderFemale}</span>
            </label>
          </fieldset>
          <fieldset className="activity">
            <legend>{profileData.Activity}</legend>
            <label className="mr-10">
              <input
                className="with-gap"
                type="radio"
                name="activity"
                value={profileData.ActivityLow}
                onChange={changeHandler}
              />
              <span>{profileData.ActivityLow}</span>
            </label>
            <label className="mr-10">
              <input
                className="with-gap"
                type="radio"
                name="activity"
                value={profileData.ActivityAverage}
                onChange={changeHandler}
              />
              <span>{profileData.ActivityAverage}</span>
            </label>
            <label>
              <input
                className="with-gap"
                type="radio"
                name="activity"
                value={profileData.ActivityHigh}
                onChange={changeHandler}
              />
              <span>{profileData.ActivityHigh}</span>
            </label>
          </fieldset>
          <fieldset className="age">
            <legend>{profileData.Age}</legend>
            <label className="mr-10">
              <input
                className="with-gap"
                type="radio"
                name="age"
                value={profileData.Age1}
                onChange={changeHandler}
              />
              <span>{profileData.Age1}</span>
            </label>
            <label className="mr-10">
              <input
                className="with-gap"
                type="radio"
                name="age"
                value={profileData.Age5}
                onChange={changeHandler}
              />
              <span>{profileData.Age5}</span>
            </label>
            <label className="mr-10">
              <input
                className="with-gap"
                type="radio"
                name="age"
                value={profileData.Age9}
                onChange={changeHandler}
              />
              <span>{profileData.Age9}</span>
            </label>
            <label className="mr-10">
              <input
                className="with-gap"
                type="radio"
                name="age"
                value={profileData.Age12}
                onChange={changeHandler}
              />
              <span>{profileData.Age12}</span>
            </label>
            <label className="mr-10">
              <input
                className="with-gap"
                type="radio"
                name="age"
                value={profileData.Age17}
                onChange={changeHandler}
              />
              <span>{profileData.Age17}</span>
            </label>
            <label className="mr-10">
              <input
                className="with-gap"
                type="radio"
                name="age"
                value={profileData.Age41}
                onChange={changeHandler}
              />
              <span>{profileData.Age41}</span>
            </label>
            <label>
              <input
                className="with-gap"
                type="radio"
                name="age"
                value={profileData.Age60}
                onChange={changeHandler}
              />
              <span>{profileData.Age60}</span>
            </label>
          </fieldset>
        </form>
        <button className="btn" type="submit" onClick={submitHandler}>
          {profileData.ButtonSubmit}
        </button>
        <button className="btn ml-10" type="button" onClick={onGetIntake}>
          {profileData.ButtonGetIntake}
        </button>
      </div>
      <div className="grey lighten-4 profile-container">
        <h4 className="text-center">{profileData.DailyIntake} {intake}</h4>
      </div>
    </>
  );
};
