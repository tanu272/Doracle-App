import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from '../screens/HHome'
import Requirement from '../screens/HReq'
import Update from '../screens/HUpdate'
import Updateold from '../screens/HUpdateOld'
import Logout from '../screens/HLogout'


const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
    Req: { screen : Requirement},
    Update: {screen: Update},
    Updateold: {screen: Updateold},
    Logout: {screen: Logout}
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