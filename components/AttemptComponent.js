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
import MainTabNavigator from '../navigation/MainTabNavigator';
import { Buskers } from '../dummydata';

export default class AttemptComponent extends React.Component {
    static navigationOptions = {
  };

      render(){
          return (
            <View style={styles.container}>
              <ProfileHeader person={this.props.navigation.state.params.user}/>
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
                <Image style={styles.profilepic} source={{uri: this.props.person.photo}} />
              </View>
              <Text style={styles.name}>{this.props.person.name}</Text>
              <Text style={styles.pos}>{this.props.person.act}</Text>
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
      borderRadius: 150,
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
