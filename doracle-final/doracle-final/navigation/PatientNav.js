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
    drawerWidth: 300,
    drawerType: 'front',
    drawerBackgroundColor: '#ffd5ab',
    contentOptions: {
      activeTintColor: '#003f5c',
      itemStyle: { marginTop : 50, paddingTop: 5, paddingBottom: 5,},
      alignContent: 'center',
    }
  }
)

export default Drawer