import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import PAuthNavigation from './PAuthNavigation'
import HAuthNavigation from './HAuthNavigation'
import AppNavigation from './AppNavigation'
import PatNavigation from './PatientNav'

const SwitchNavigator = createSwitchNavigator(
  {
    PAuth: PAuthNavigation,
    HAuth: HAuthNavigation,
    App: AppNavigation,
    Patient: PatNavigation
  },
  {
    initialRouteName: 'App'
  }
)

const AppContainer = createAppContainer(SwitchNavigator)

export default AppContainer