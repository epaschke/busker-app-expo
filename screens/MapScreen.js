import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser, Location, Permissions, MapView } from 'expo';

const dummyData = [{name: 'John Smith', act: 'guitar', latitude: 37.779947, longitude: -122.403006,},
                   {name: 'Person X', act: 'painting', latitude: 37.777441, longitude: -122.409919,},
                   {name: 'H. T.', act: 'violin', latitude: 37.783968, longitude: -122.414228,}]

export default class MapScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'FIND A PERFORMER',
        headerStyle: {
            backgroundColor: '#5e7879',
            shadowOpacity: 0
            },
        headerTitleStyle: {
            color: '#fedaa7',
            fontSize: 30,
            fontWeight: 'bold',
            alignSelf: 'center'
            },
  };

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
                    <MapView.Callout>
                      <Text style={{fontWeight: 'bold', fontSize: 20}}>{person.name}</Text>
                      <Text style={{fontStyle: 'italic'}}>{person.act}</Text>
                    </MapView.Callout>
                  </MapView.Marker>))}
              </MapView>
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
