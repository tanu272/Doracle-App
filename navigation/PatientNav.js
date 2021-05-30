import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from '../screens/PHome';
import Update from '../screens/PUpdate'
import Req from '../screens/PRequirements'
import Logout from '../screens/PLogout'
import Status from '../screens/PStatus'
import UpdatePass from '../screens/PUpdatePass'


const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
    UpdateInfo: { screen: Update},
    UpdatePass: { screen : UpdatePass},
    Status: {screen : Status},
    Requirements: { screen: Req},
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