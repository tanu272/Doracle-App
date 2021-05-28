import { createStackNavigator } from 'react-navigation-stack'
import PLogin from '../screens/PLogin'
import PSignup from '../screens/PSignup'

const AuthNavigation = createStackNavigator(
  {
    PLogin: { screen: PLogin },
    PSignup: { screen: PSignup },
  },
  {
    initialRouteName: 'PLogin',
  }
)

export default AuthNavigation;