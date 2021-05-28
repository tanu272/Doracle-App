
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from '../screens/PHome';
import MedicalRecords from '../screens/PMedicalRecords'
import LabReports from '../screens/PLabReports'
import Req from '../screens/PRequirements'
import Logout from '../screens/PLogout'



const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
    MedicalRecords: { screen: MedicalRecords },
    LabReports: {screen : LabReports},
    Req: { screen: Req},
    Logout: { screen: Logout}
  },
  {
    initialRouteName: 'Home',
  }
)

export default Drawer