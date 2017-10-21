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

export class ViewBuskersHorizontal extends React.Component {
    render (){
        return (
              <View style={{justifyContent: 'center'}}>
                <Image style={styles.image}
                source={{uri: this.state.busker.photo}} />
                <Text style={{paddingTop: 7, paddingLeft: 34, fontSize: 12}}>{this.state.busker.handle}</Text>
                <Text style={{paddingLeft: 15, fontSize: 12}}>{this.state.busker.act}</Text>
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
