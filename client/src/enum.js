export const paths = {
  Profile: '/profile',
  AddCalories: '/add',
  History: '/history',
  Auth: '/',
  Categories: 'http://localhost:5000/api/categories',
  Register: 'http://localhost:5000/api/auth/register',
  Login: 'http://localhost:5000/api/auth/login',
  UserData: 'http://localhost:5000/api/users',
  PostItem: 'http://localhost:5000/api/items/add',
  GetUserItems: 'http://localhost:5000/api/items',
};

export const profileData = {
  Header: 'Мой кабинет',
  Gender: 'Ваш пол:',
  GenderMale: 'Мужской',
  GenderFemale: 'Женский',
  Activity: 'Ваш уровень активности:',
  ActivityLow: 'Низкий',
  ActivityAverage: 'Средний',
  ActivityHigh: 'Высокий',
  Age: 'Ваш возраст:',
  Age1: '1 - 4',
  Age5: '5 - 8',
  Age9: '9 - 11',
  Age12: '12 - 16',
  Age17: '17 - 40',
  Age41: '41 - 59',
  Age60: '60 и более',
  ButtonSubmit: 'Отправить',
  ButtonGetIntake: 'Узнать норму калорий',
  DailyIntake: 'Ваша суточная норма калорий:',
};

export const genderFilterValues = ['Male', 'Female'];

export const activityFilterValues = ['Low', 'Average', 'High'];
export const ageFilterValues = [
  '1 - 4',
  '5 - 8',
  '9 - 11',
  '12 - 16',
  '17 - 40',
  '41 - 59',
  '60 and more',
];

export const productsData = {
  header: 'Food and drink',
  label: 'Select product',
  input: 'Amount in grams',
};

export const trainingData = {
  header: 'Training',
  label: 'Select type of training',
  input: 'Time in hours',
};

export const navbarData = {
  Header: 'Подсчет калорий',
  Profile: 'Кабинет пользователя',
  AddCalories: 'Внести калории',
  History: 'История',
  Logout: 'Выйти',
};

export const addCaloriesRate = {
  Products: 100,
  Training: 1,
};

Object.freeze(paths);
Object.freeze(profileData);
Object.freeze(historyData);
Object.freeze(authData);
Object.freeze(productsData);
Object.freeze(trainingData);
Object.freeze(navbarData);

