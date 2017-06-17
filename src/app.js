import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import registerScreens from './screens';

// screen related book keeping
registerScreens();


const tabs = [
{
    label: 'Login',
    screen: 'mp.Login',
    icon: require('../img/admin.png'),
    title: 'Sign in',  
}];

tabs.push({
    label: 'Products',
    screen: 'mp.Types',
    icon: require('../img/icons/shop.png'),
    title: 'Missing Products',
});

tabs.push({
    label: 'Management',
    screen: 'mp.Actions',
    icon: require('../img/admin.png'),
    title: 'Joel es feo!',
});


// this will start our app
Navigation.startTabBasedApp({
    tabs,
    tabsStyle: {
        tabBarBackgroundColor: '#003a66',
        navBarButtonColor: '#ffffff',
        tabBarButtonColor: '#ffffff',
        navBarTextColor: '#ffffff',
        tabBarSelectedButtonColor: '#ff505c',
        navigationBarColor: '#003a66',
        navBarBackgroundColor: '#003a66',
        statusBarColor: '#002b4c',
        tabFontFamily: 'DIN Next Rounded LT W01 Regular',
    },
    appStyle: {
        tabBarBackgroundColor: '#003a66',
        navBarButtonColor: '#ffffff',
        tabBarButtonColor: '#ffffff',
        navBarTextColor: '#ffffff',
        tabBarSelectedButtonColor: '#ff505c',
        navigationBarColor: '#003a66',
        navBarBackgroundColor: '#003a66',
        statusBarColor: '#002b4c',
        tabFontFamily: 'DIN Next Rounded LT W01 Regular',
    },
    drawer: {
        left: {
            screen: 'mp.Types.Drawer'
        }
    }
});
