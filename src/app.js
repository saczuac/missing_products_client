import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import registerScreens from './screens';

// screen related book keeping
registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'mp.Login', // unique ID registered with Navigation.registerScreen
    title: 'Sign in', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
  drawer: {
      left: {
          screen: 'mp.Types.Drawer'
      }
  },
  passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
  animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});
