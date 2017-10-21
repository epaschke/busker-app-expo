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
import ProfileHeader from '../../screens/ProfileHeader'

export default class PerformerProfile extends React.Component {

    render(){
        return (
          <View style={styles.container}>

            <Header />
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  }
});

AppRegistry.registerComponent('ProfilePage', () => ProfilePage);
