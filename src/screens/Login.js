import Login from 'react-native-simple-login'
import React, { Component } from 'react';
import auth from '../helpers/auth'
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

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

  onLogin(email, password) {
      const self = this;
    
      auth.login(self.state.username, self.state.password, (loggedIn) => {
          if (loggedIn) {
            // const { navigate } = this.props.navigation;
            // navigate('Home', { name: username })
          } 
      })

      window.setTimeout(() => {
          if (auth.getError() != null ) {
             console.log(auth.getError());
             auth.clearError();
          }
      }, 1000);
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
