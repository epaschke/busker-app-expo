import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Dimensions
} from 'react-native';
import { Buskers } from '../dummydata';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class PickPaymentScreen extends React.Component {
    static navigationOptions = {
      header: null,
    };
    constructor(){
        super();
        this.state = {
            text: ''
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>SEARCH FOR A PERFORMER</Text>
                <TextInput style={styles.inputBox} onChangeText={(text) => this.setState({text})} value={this.state.text} />
                <View style={{height: height * .4, width: width * .8}}>
                    <ScrollView style={{borderWidth: 1, borderColor: 'lightgray'}}>
                        {Buskers.filter((busker) => {
                            console.log("name to text", busker.name, this.state.text, (busker.name).match(this.state.text))
                            return ((busker.name.toLowerCase()).match(this.state.text.toLowerCase()) || (busker.handle.toLowerCase()).match(this.state.text.toLowerCase()))
                        }).map((busker, id) => <TouchableOpacity style={{borderWidth: 1, borderColor: 'lightgray', padding: 5}}
                                                                 key={id + 'search'}
                                                                 onPress={() => this.props.navigation.navigate('Profile1', {user: busker})}>
                                                                 <Text>{busker.name} : {busker.handle}</Text>
                                               </TouchableOpacity>)}
                    </ScrollView>
                </View>
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
    flexDirection: 'column'
  },
  button: {
      height: 125,
      width: 125,
      borderWidth: 1,
      borderRadius: 25,
      borderStyle: 'dashed',
      borderColor: '#5c7677',
      backgroundColor: '#fed9a6',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
  },
  buttonText: {
      color: '#5c7677',
      fontSize: 20,
      textAlign: 'center'
  },
  inputBox: {
    width: 300,
    height: 50,
    backgroundColor: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
});
