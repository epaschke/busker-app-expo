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
import { WebBrowser } from 'expo';
import { PayButton } from '../components/PayButton';
import { ViewBuskersHorizontal } from '../components/PayButton';

export default class Home extends React.Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: 'transparent',
            },
        headerRight: <PayButton />
    };

    render(){
        return (
            <View style={styles.container}>
              <ScrollView>
                <Text style={styles.headingText}>Followed</Text>
                <ViewBuskersHorizontal />
                <Text style={styles.headingText}>Nearby</Text>
                <ViewBuskersHorizontal />
                <Text style={styles.headingText}>Featured</Text>
              </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#fff'
},
headingText: {
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
  marginBottom: 0,
  fontWeight: 'bold',
  fontSize: 20
},
image: {
  width: 150,
  height: 150,
  marginLeft: 15,
  marginTop: 20,
  borderRadius: 5
}
});
