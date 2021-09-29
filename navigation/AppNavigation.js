import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home'
import HLoginScreen from '../screens/HLogin'
import PLoginScreen from '../screens/PLogin'

const AppNavigation = createStackNavigator(
  {
    Home: { screen: Home },
    HLoginScreen: {screen: HLoginScreen},
    PLoginScreen: {screen :PLoginScreen;},
  },
  {
    initialRouteName: 'Home',    
  }
)

export default AppNavigation
