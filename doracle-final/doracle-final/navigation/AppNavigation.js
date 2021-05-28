import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home'
import HLoginScreen from '../screens/HLogin'

const AppNavigation = createStackNavigator(
  {
    Home: { screen: Home },
    HLoginScreen: {screen: HLoginScreen}
  },
  {
    initialRouteName: 'Home',    
  }
)

export default AppNavigation
