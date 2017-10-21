import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
      header: null,
    };

    render(){
        return (
          <View style={styles.container}>
            <Text style={styles.textBig}>BEAT</Text>
            {/* make this an icon */}
            <TouchableOpacity onPress={ () => {this.press()} } style={[styles.button, styles.buttonGreen]}>
              <Text style={styles.buttonLabel}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonBlue]} onPress={ () => {this.register()} }>
              <Text style={styles.buttonLabel}>Register</Text>
            </TouchableOpacity>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
  margin: 15,
  height: 40,
  borderColor: '#7a42f4',
  borderWidth: 1
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
  textBig: {
    fontSize: 36,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5
  },
  buttonRed: {
    backgroundColor: '#FF585B',
  },
  buttonBlue: {
    backgroundColor: '#0074D9',
  },
  buttonGreen: {
    backgroundColor: '#2ECC40'
  },
  buttonLabel: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white'
  }
 });
