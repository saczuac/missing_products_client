import { Navigation } from 'react-native-navigation';

import Types from './Types';
import Actions from './Actions';

import Login from './Login';

import Push from './types/Push';
import Drawer from './types/Drawer';
import LightBox from './types/LightBox';
import Notification from './types/Notification';
import Modal from './types/Modal';
import TopTabs from './types/TopTabs';
import TabOne from './types/tabs/TabOne';
import TabTwo from './types/tabs/TabTwo';


export default function () {
    Navigation.registerComponent('mp.Types', () => Types);
    Navigation.registerComponent('mp.Actions', () => Actions);
    
    Navigation.registerComponent('mp.Login', () => Login);

    Navigation.registerComponent('mp.Types.Push', () => Push);
    Navigation.registerComponent('mp.Types.Drawer', () => Drawer);
    Navigation.registerComponent('mp.Types.Screen', () => Drawer);
    Navigation.registerComponent('mp.Types.Modal', () => Modal);
    Navigation.registerComponent('mp.Types.LightBox', () => LightBox);
    Navigation.registerComponent('mp.Types.Notification', () => Notification);
    Navigation.registerComponent('mp.Types.TopTabs', () => TopTabs);
    Navigation.registerComponent('mp.Types.TopTabs.TabOne', () => TabOne);
    Navigation.registerComponent('mp.Types.TopTabs.TabTwo', () => TabTwo);

}
