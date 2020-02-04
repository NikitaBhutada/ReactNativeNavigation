
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Dashboard from './src/screens/Dashboard';
import Login from './src/screens/Login';
import Profile from './src/screens/Profile';


const navigator = createStackNavigator(
  {
    Login : Login,
    Dashboard : Dashboard ,
    Profile : Profile
  },
  {

    initialRouteName : 'Login',
    defaultNavigationOptions : {
      title : 'App'
    }

  }
);

export default createAppContainer(navigator);

