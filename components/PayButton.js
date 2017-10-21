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
import { Foundation } from '@expo/vector-icons';

export class PayButton extends React.Component {
    render (){
        return (
            <View>
            <TouchableOpacity style={{
                alignSelf: 'stretch',
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 2,
                paddingBottom: 2,
                marginRight: 10,
                borderRadius: 5,
                backgroundColor: '#262e37',
                flexDirection: 'row'}}>
                <Foundation
                    name="dollar-bill"
                    size={44}
                    color='#fedaa7'
                    style={{flex: 1}}/>
            </TouchableOpacity>
            </View>)
    }
}
