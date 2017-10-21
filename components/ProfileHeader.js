import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class ProfileHeader extends React.Component {
    render(){
        return (

<Image style={styles.headerBackground} source={require('../img/beatLogo.png')} />
  <View style={styles.header}>
    <View style={styles.profilepicWrap}>
      <Image style={styles.profilepic} source={require('../img/beyoncepic.jpeg')} />
    </View>
    <Text style={styles.name}>Beyoncè</Text>
    <Text style={style.pos}> Singer / Entertainer </Text>
  </View>
</Image>

        );
    }
}

const styles = StyleSheet.create({
  headerBackground:{
    flex: 1,
    width: null,
    alignSelf: 'stretch'
  },
  header: {
    flex: 1,
    alignItms: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'blue'
  },
  profilepicWrap: {
    width: 180,
    height: 180,
    borderRadius: 100
    borderColor: 'red',
    borderWidth: 16,
  },
  profilepic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 4
  },
  name: {
    marginTop: 20,
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  }
  pos: {
    fontSize: 14,
    color: 'gray',
    fontWeight: '300',
    fontStyle: 'italic'
  }

});
