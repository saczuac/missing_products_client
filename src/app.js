import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import registerScreens from './screens';

// screen related book keeping
registerScreens();

const tabs = [
{
    label: 'Logout',
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

Navigation.startTabBasedApp({
   tabs,
   tabsStyle: {
        tabBarBackgroundColor: '#50B849',
        navBarButtonColor: '#ffffff',
        tabBarButtonColor: '#ffffff',
        navBarTextColor: '#ffffff',
        tabBarSelectedButtonColor: '#59595B',
        navigationBarColor: '#50B849',
        navBarBackgroundColor: '#50B849',
        statusBarColor: '#59595B',
        tabFontFamily: 'DIN Next Rounded LT W01 Regular',
    },
    appStyle: {
        tabBarBackgroundColor: '#50B849',
        navBarButtonColor: '#ffffff',
        tabBarButtonColor: '#ffffff',
        navBarTextColor: '#ffffff',
        tabBarSelectedButtonColor: '#59595B',
        navigationBarColor: '#50B849',
        navBarBackgroundColor: '#50B849',
        statusBarColor: '#59595B',
        tabFontFamily: 'DIN Next Rounded LT W01 Regular',
    },
    drawer: {
        left: {
            screen: 'mp.Types.Drawer'
    }
}
});

