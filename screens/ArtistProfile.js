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

export default class PerformerProfile extends React.Component {
    static navigationOptions = {
    header: null
  };

      render(){
          return (
            <View style={styles.container}>
              <ProfileHeader />
            </View>
          );
      }
  }

class ProfileHeader extends React.Component {
      render(){
          return (
            <View style={styles.header}>
            {/* <Image style={styles.headerBackground} source={require('../img/moon.jpg')} /> */}
              <View style={styles.profilepicWrap}>
                <Image style={styles.profilepic} source={require('../img/moon.jpg')} />
              </View>
              <Text style={styles.name}>Beyoncè</Text>
              <Text style={styles.pos}> Singer / Entertainer </Text>
            </View>
          );
      }
  }

  let styles = StyleSheet.create({
    headerBackground:{
      flex: 1,
      width: null,
      alignSelf: 'stretch'
    },
    header: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#A9AB94',
    },
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
    profilepicWrap: {
      width: 180,
      height: 180,
      borderRadius: 100,
      borderColor: '#313C41',
      borderWidth: 16,
    },
    profilepic: {
      flex: 1,
      width: null,
      alignSelf: 'stretch',
      borderRadius: 100,
      borderColor: '#FED9A7',
      borderWidth: 4
    },
    name: {
      marginTop: 20,
      fontSize: 16,
      color: '#F47056',
      fontWeight: 'bold'
    },
    pos: {
      fontSize: 14,
      color: 'black',
      fontWeight: '300',
      fontStyle: 'italic'
    },

  });
