import React from 'react';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser, Location, Permissions, MapView } from 'expo';
import { PayButton } from '../components/PayButton'
import Modal from 'react-native-modalbox';


const dummyData = [{name: 'John Smith', act: 'guitar', latitude: 37.779947, longitude: -122.403006,},
                   {name: 'Person X', act: 'painting', latitude: 37.777441, longitude: -122.409919,},
                   {name: 'H. T.', act: 'violin', latitude: 37.783968, longitude: -122.414228,}]

export default class MapScreen extends React.Component {
    constructor() {
        super();
        this.state = {
          isOpen: false,
          currentUser: {}
        };
    };

    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'FIND A PERFORMER',
        headerStyle: {
            backgroundColor: '#5e7879',
            shadowOpacity: 0
            },
        headerTitleStyle: {
            color: '#fedaa7',
            fontSize: 30,
            fontWeight: 'bold',
            alignSelf: 'center',
            },
        headerRight: <PayButton />
  })

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
              justifyContent: 'center',
              height: 300,
              alignContent: 'space-around'
          }} isOpen={this.state.isOpen} onClosed={() => this.setState({isOpen: false})} position={"center"}>
                  <Text style={{fontWeight: 'bold'}}>{this.state.currentUser.name}</Text>
                  <View style={{justifyContent: 'space-around', alignContent: 'space-around'}}>
                      <Button title="See full profile" />
                      <Button title="Support User" />
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
