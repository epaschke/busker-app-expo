import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, Button } from 'react-native';
// import LoginScreen from './screens/LoginScreen';
import { StackNavigator } from 'react-navigation';
// import ProfileHeader from './screens/ProfileHeader';


class PerformerProfile extends React.Component {
    static navigationOptions = {
    title: 'PerformerProfile'
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
    static navigationOptions = {
    title: ProfileHeader
  };
      render(){
          return (

  <Image style={styles.headerBackground} source={require('./img/moon.jpg')} >
    <View style={styles.header}>
      <View style={styles.profilepicWrap}>
        <Image style={styles.profilepic} source={require('./img/moon.jpg')}> </Image>
      </View>
      <Text style={styles.name}>Beyoncè</Text>
      <Text style={style.pos}> Singer / Entertainer </Text>
    </View>
  </Image>

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
      color: '#A9AB94',
      fontWeight: '300',
      fontStyle: 'italic'
    },

  });


  export default StackNavigator({
   PerformerProfile: {
     screen: PerformerProfile,
   },
    ProfileHeader: {
      screen: ProfileHeader,
    },
}, {initialRouteName: 'PerformerProfile'});
