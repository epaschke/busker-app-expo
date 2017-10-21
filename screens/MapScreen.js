import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Dimensions
} from 'react-native';
import { Button } from 'react-native-elements';
import { WebBrowser, Location, Permissions, MapView } from 'expo';
import { PayButton } from '../components/PayButton'
import Modal from 'react-native-modalbox';
import { Buskers } from '../dummydata';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;


// const dummyData = [{name: 'John Smith', act: 'guitar', latitude: 37.779947, longitude: -122.403006, img: require('../img/moon.jpg')},
//                    {name: 'Person X', act: 'painting', latitude: 37.777441, longitude: -122.409919, img: require('../img/moon.jpg')},
//                    {name: 'H. T.', act: 'violin', latitude: 37.783968, longitude: -122.414228, img: require('../img/moon.jpg')}]

export default class MapScreen extends React.Component {
    constructor() {
        super();
        this.state = {
          isOpen: false,
          currentUser: {}
        };
    };

    static navigationOptions = {
        header: null
    };


   userModal(person) {
       this.setState({
           currentUser: person,
           isOpen: true
       })
   }

   renderProfile(){
       this.setState({
           isOpen: false
       })
       this.props.navigation.navigate('Profile1', {user: this.state.currentUser});
   }

    render(){
        return (
            <View style={{
                flex: 1
              }}>
              <MapView style={{flex: 7}} region={{
                  latitude: 37.7749,
                  longitude: -122.4194,
                  latitudeDelta: 0.05,
                  longitudeDelta: 0.05
              }}>
              {Buskers.map((person, id) => {
                  if (person.active)
                  return (
                    <MapView.Marker key={id}
                    coordinate={{
                        latitude: person.active.latitude,
                        longitude: person.active.longitude,
                    }}>
                    <MapView.Callout onPress={() => this.userModal(person)} style={{justifyContent: 'center', alignItems: 'center', padding: 5}}>
                      <Image style={{height: 50, width: 50}} source={{uri: person.photo}}/>
                      <Text style={{fontWeight: 'bold', fontSize: 20}}>{person.name}</Text>
                      <Text style={{fontStyle: 'italic'}}>{person.act}</Text>
                    </MapView.Callout>
                </MapView.Marker>)})}
              </MapView>
              <Modal style={{
              backgroundColor: '#fff',
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'space-around',
              height: height * .6,
              width: width * .8
          }} isOpen={this.state.isOpen} onClosed={() => this.setState({isOpen: false})} position={"center"}>
                  <Text style={{fontWeight: 'bold', fontSize: 25}}>{this.state.currentUser.name}</Text>
                  <Text>{this.state.currentUser.act}</Text>
                  <Image style={{height: height * .2, width: width * .4}} source={{uri: this.state.currentUser.photo}}/>
                  <View style={{justifyContent: 'space-around', alignContent: 'space-around'}}>
                      <Button large raised title="See full profile" backgroundColor="#aaac96" borderRadius={10} onPress={() => this.renderProfile()}/>
                  </View>
                  <Button onPress={() => this.setState({isOpen: false})} backgroundColor="#aaac96" title="X" />
              </Modal>
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
});
