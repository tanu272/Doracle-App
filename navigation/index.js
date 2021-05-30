import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import PAuthNavigation from './PAuthNavigation'
import HAuthNavigation from './HAuthNavigation'
import AppNavigation from './AppNavigation'
import PatNavigation from './PatientNav'
import HosNavigation from './HospitalNav'

const SwitchNavigator = createSwitchNavigator(
  {
    PAuth: PAuthNavigation,
    HAuth: HAuthNavigation,
    App: AppNavigation,
    Patient: PatNavigation,
    Hospital: HosNavigation
  },
  {
    initialRouteName: 'App'
  }
)

const AppContainer = createAppContainer(SwitchNavigator)

export default AppContainer