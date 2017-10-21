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

export default class PickPaymentScreen extends React.Component {
    static navigationOptions = {
      header: null,
    };

    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>QR CODE</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>LOOK UP</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  button: {
      height: 125,
      width: 125,
      borderWidth: 1,
      borderRadius: 25,
      borderStyle: 'dashed',
      borderColor: '#5c7677',
      backgroundColor: '#fed9a6',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
  },
  buttonText: {
      color: '#5c7677',
      fontSize: 20,
      textAlign: 'center'
  }
});
