import React from 'react';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Dimensions
} from 'react-native';
import { WebBrowser, Location, Permissions, MapView } from 'expo';
import { PayButton } from '../components/PayButton'
import Modal from 'react-native-modalbox';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;


const dummyData = [{name: 'John Smith', act: 'guitar', latitude: 37.779947, longitude: -122.403006, img: require('../img/moon.jpg')},
                   {name: 'Person X', act: 'painting', latitude: 37.777441, longitude: -122.409919, img: require('../img/moon.jpg')},
                   {name: 'H. T.', act: 'violin', latitude: 37.783968, longitude: -122.414228, img: require('../img/moon.jpg')}]

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
              {dummyData.map((person, id) => (
                  <MapView.Marker key={id}
                    coordinate={{
                        latitude: person.latitude,
                        longitude: person.longitude,
                    }}>
                    <MapView.Callout onPress={() => this.userModal(person)}>
                      <Text style={{fontWeight: 'bold', fontSize: 20}}>{person.name}</Text>
                      <Text style={{fontStyle: 'italic'}}>{person.act}</Text>
                    </MapView.Callout>
                  </MapView.Marker>))}
              </MapView>
              <Modal style={{
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'space-around',
              height: height * .6,
              width: width * .8
          }} isOpen={this.state.isOpen} onClosed={() => this.setState({isOpen: false})} position={"center"}>
                  <Text style={{fontWeight: 'bold'}}>{this.state.currentUser.name}</Text>
                  <Image style={{height: height * .2, width: width * .6}} source={this.state.currentUser.img}/>
                  <View style={{justifyContent: 'space-around', alignContent: 'space-around'}}>
                      <Button title="See full profile" onPress={() => this.props.navigation.navigate('Profile1')}/>
                  </View>
                  <Button onPress={() => this.setState({isOpen: false})} title="X">X</Button>
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
