import Login from 'react-native-simple-login'
import React from 'react';
import auth from '../helpers/auth'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';
import { Navigation } from 'react-native-navigation';


class LoginScreen extends React.Component {

  static navigationOptions = {
    title: 'Logout',
  };

  constructor(props) {
      super(props)

      this.state = {
        logged: false,
      }

      this.onLogin = this.onLogin.bind(this)
      this.onLogout = this.onLogout.bind(this)
  }

  componentDidMount() {
    const to = 'hidden';

    this.props.navigator.toggleTabs({
        to,
        animated: false,
    });
  }

  requireAuth(nextState, replace) {
      if (!auth.loggedIn()) {
        //  TODO: Handle required loggedIn and this loggedIn is false!
      }
  }

  toggleTabs() {
    const to = 'shown';

    this.setState({tabs: !this.state.tabs})

    this.props.navigator.toggleTabs({
        to,
        animated: true,
    });
  }

  switchToTab(n) {
      this.props.navigator.switchToTab({
          tabIndex: n,
      });
  }

  onLogin(email, password) {
    // TODO: Check on backend if ok -->
    this.toggleTabs()
    this.switchToTab(1)
    this.setState({logged: true})
  }

  onLogout() {
    //TODO: Handle logout in backend

    const to = 'hidden'

    this.props.navigator.toggleTabs({
        to,
        animated: true,
    });

    this.setState({logged: false})
  }
   
  onResetPassword(email) {
    console.log(email)
  }

  render() {

    return (
      <View style={styles.container}>

        {this.state.logged ? (

          <Button
            onPress={this.onLogout}
            title="Logout"
            color="#50B849"
          />

          ) : (
            <Login
              onLogin={this.onLogin}
              loginFormWrapperStyle= {styles.loginForm}
              onResetPassword={this.onResetPassword}
              loginFormSubmitButtonStyle = {styles.btnLogin}
            />
          )
        }

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
    backgroundColor: '#50B849',
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

export default LoginScreen;
