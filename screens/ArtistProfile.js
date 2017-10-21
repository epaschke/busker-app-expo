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
import { Foundation } from '@expo/vector-icons';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class PerformerProfile extends React.Component {
    static navigationOptions = {
  };

      render(){
          return (
            <View style={styles.container}>

              <ProfileHeader person={this.props.navigation.state.params.user}/>
              <PayButton handleClick={() => this.props.navigation.navigate('PaymentScreen', {user: this.props.navigation.state.params.user})}/>
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
                <Image style={styles.profilepic} source={{uri: this.props.person.photo}} />
              </View>
              <Text style={styles.name}>{this.props.person.name}  <Foundation
                  name="record"
                  size={28}
                  style={{ marginBottom: -3 }}
                  color={this.props.person.active ? 'lightgreen': 'red'}/></Text>
              <Text style={styles.handle}>{this.props.person.handle}</Text>
              <Text style={styles.descriptor}>{this.props.person.act}</Text>
              <Text style={styles.bio}>{this.props.person.bio}</Text>
            </View>
          );
      }
  }


  class PayButton extends React.Component {
    render(){
      return (
        <TouchableOpacity style={[styles.button, styles.buttonGreen]} onPress={() => this.props.handleClick()} >
          <Text style={styles.supportButtonLabel}>$ SUPPORT $</Text>
        </TouchableOpacity>
      );
    }
  }



class FollowButton extends React.Component {
    constructor(){
        super()
            this.state = {
                following: false,
            }
    }
  render(){
    return (
      <TouchableOpacity style={[styles.button, styles.buttonBlue]} onPress={() => this.setState({ following: !this.state.following})}>
        <Text style={styles.followButtonLabel}>{this.state.following ? 'UNFOLLOW' : 'FOLLOW'}</Text>
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
      textAlign: 'center'
    //   fontFamily: 'Cochin',
    },
    handle: {
      fontSize: 14,
      color: '#313C41',
    //   fontFamily: 'Cochin',
    },
    descriptor: {
      fontSize: 20,
      color: '#e4e4e4',
      fontWeight: '300',
      fontStyle: 'italic',
    //   fontFamily: 'Cochin'
    },
    bio: {
      fontSize: 18,
      color: '#313C41',
      fontWeight: '300',
    //   fontFamily: 'Cochin'
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
