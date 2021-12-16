import AsyncStorage from '@react-native-async-storage/async-storage';

const defaultState = {
  user: {},
  companys: [],
  jobs: [],
};
AsyncStorage.getItem('user').then(res => {
  if (res) {
    defaultState.user = JSON.parse(res);
  }
});
AsyncStorage.getItem('jobs').then(res => {
  if (res) {
    defaultState.jobs = JSON.parse(res);
  }
});
AsyncStorage.getItem('companys').then(res => {
  if (res) {
    defaultState.companys = JSON.parse(res);
  }
});
const Home = (state = defaultState, action) => {
  let val = action.data;

  switch (action.type) {
    case 'update_user':
      AsyncStorage.setItem('user', JSON.stringify(val));
      return {
        ...state,
        user: val,
      };
    case 'update_companys':
      return {
        ...state,
        companys: val,
      };
    case 'update_jobs':
      return {
        ...state,
        jobs: val,
      };
    default:
      break;
  }
  return state;
};

export default Home;
