import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Dimensions
} from 'react-native';
import { WebBrowser } from 'expo';
import MainTabNavigator from '../navigation/MainTabNavigator';
import { Buskers } from '../dummydata';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class PerformerProfile extends React.Component {
    static navigationOptions = {
  };

      render(){
          return (
            <View style={styles.container}>
              
              <ProfileHeader />
              <PayButton />
              <FollowButton />

            </View>
          );
      }
  }

class ProfileHeader extends React.Component {
      render(){
          return (
            <View style={styles.header}>
              <View style={styles.profilepicWrap}>
                <Image style={styles.profilepic} source={require('../img/beyoncepic.jpeg')} />
              </View>
              <Text style={styles.name}>Beyoncé</Text>
              <Text style={styles.handle}> @beyoncé </Text>
              <Text style={styles.descriptor}> Singer / Entertainer </Text>
              <Text style={styles.bio}>Beyoncé is an icon of the 21st century. Pay her.</Text>

            </View>
          );
      }
  }


  class PayButton extends React.Component {
    render(){
      return (
        <TouchableOpacity style={[styles.button, styles.buttonGreen]} >
          <Text style={styles.supportButtonLabel}>$ SUPPORT $</Text>
        </TouchableOpacity>
      );
    }
  }



class FollowButton extends React.Component {
  render(){
    return (
      <TouchableOpacity style={[styles.button, styles.buttonBlue]} >
        <Text style={styles.followButtonLabel}>FOLLOW</Text>
      </TouchableOpacity>
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
      backgroundColor: '#FEA872',
    },
    container: {
      flex: 1,
      backgroundColor: '#FEA872',
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
      borderRadius: 150,
      borderColor: '#FED9A7',
      borderWidth: 4
    },
    name: {
      fontSize: 32,
      color: '#c74b16',
      fontWeight: 'bold',
      fontFamily: 'Cochin',
    },
    handle: {
      fontSize: 14,
      color: '#313C41',
      fontFamily: 'Cochin',
    },
    descriptor: {
      fontSize: 20,
      color: '#e4e4e4',
      fontWeight: '300',
      fontStyle: 'italic',
      fontFamily: 'Cochin'
    },
    bio: {
      fontSize: 18,
      color: '#313C41',
      fontWeight: '300',
      fontFamily: 'Cochin'
    },
    button: {
      alignSelf: 'center',
      paddingTop: 10,
      paddingBottom: 10,
      justifyContent: 'center',
      width: width * .7,
      margin: 4,
    },
    buttonBlue: {
      backgroundColor: '#0a2e5c',
    },
    supportButtonLabel: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
    },
    followButtonLabel: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
    },
    buttonGreen: {
      backgroundColor: '#3e5c0a'
    }

  });
