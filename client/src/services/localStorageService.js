const GET_LOCAL_INTAKE = localStorage.getItem('intake');
const SET_LOCAL_INTAKE = (intake) => localStorage.setItem('intake', intake);

export const getLocalIntake = () => {
  return GET_LOCAL_INTAKE;
};

export const setLocalIntake = (intake) => {
  SET_LOCAL_INTAKE(intake);
};
