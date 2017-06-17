import Login from 'react-native-simple-login'
import React, { Component } from 'react';
import auth from '../helpers/auth'
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Navigation } from 'react-native-navigation';


export default class missing_products extends Component {

  static navigationOptions = {
    title: 'Login',
  };

  // constructor(){
  //     super();
  //     this.state = {
  //       csrf_token: '',
  //     }
  // }

  requireAuth(nextState, replace) {
      if (!auth.loggedIn()) {
        //  TODO: Handle required loggedIn and this loggedIn is false!
      }
  }

  registerTabs() {
    const tabs = [
    {
        label: 'Login',
        screen: 'mp.Login',
        icon: require('../../img/admin.png'),
        title: 'Sign in',  
    }];

    tabs.push({
        label: 'Products',
        screen: 'mp.Types',
        icon: require('../../img/icons/shop.png'),
        title: 'Missing Products',
    });

    tabs.push({
        label: 'Management',
        screen: 'mp.Actions',
        icon: require('../../img/admin.png'),
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
  }

  onLogin(email, password) {
      const self = this;
      registerTabs();
    
      // auth.login(self.state.username, self.state.password, (loggedIn) => {
      //     if (loggedIn) {
      //       // const { navigate } = this.props.navigation;
      //       // navigate('Home', { name: username })
      //     } 
      // })

      // window.setTimeout(() => {
      //     if (auth.getError() != null ) {
      //        console.log(auth.getError());
      //        auth.clearError();
      //     }
      // }, 1000);
  }
   
  onResetPassword(email) {
    console.log(email)
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
            Missing Products {'\n'}
        </Text>
        <Login
          onLogin={this.onLogin}
          loginFormWrapperStyle= {styles.loginForm}
          onResetPassword={this.onResetPassword}
          loginFormSubmitButtonStyle = {styles.btnLogin}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  btnLogin: {
    backgroundColor: '#8BC34A',
  },
  loginForm: {
    marginLeft: 30,
    marginRight: 30
  },
  title: {
    textAlign: 'center',
    fontFamily: "DIN Next Rounded LT W01 Regular",
  }
});
