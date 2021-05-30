import { createStackNavigator } from 'react-navigation-stack'
import HLogin from '../screens/HLogin'
import HSignup from '../screens/HSignup'

const AuthNavigation = createStackNavigator(
  {
    HLogin: { screen: HLogin },
    HSignup: { screen: HSignup }
  },
  {
    initialRouteName: 'HLogin',
  }
)

export default AuthNavigation