import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';

export default class NearbyPerformers extends React.Component {
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
